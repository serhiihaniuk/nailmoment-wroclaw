"use client";

import NextImage from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/shared/ui/carousel";
import { Button } from "@/shared/ui/button";
import { mergeUi } from "@/shared/lib/utils";

export type ViewableImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ImageViewerPayload = {
  images: ViewableImage[];
  initialIndex: number;
  sourceUiId?: string;
};

type ImageViewerContextValue = {
  openViewer: (payload: ImageViewerPayload) => void;
  closeViewer: () => void;
};

const ImageViewerContext = createContext<ImageViewerContextValue | null>(null);

export function useImageViewer() {
  const context = useContext(ImageViewerContext);

  if (!context) {
    throw new Error(
      "useImageViewer must be used within an ImageViewerProvider",
    );
  }

  return context;
}

export function ImageViewerProvider({ children }: { children: ReactNode }) {
  const [payload, setPayload] = useState<ImageViewerPayload | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const closeViewer = useCallback(() => {
    setPayload(null);

    requestAnimationFrame(() => {
      lastActiveElementRef.current?.focus({ preventScroll: true });
    });
  }, []);

  const openViewer = useCallback((nextPayload: ImageViewerPayload) => {
    const activeElement = document.activeElement;
    lastActiveElementRef.current =
      activeElement instanceof HTMLElement ? activeElement : null;
    setPayload(nextPayload);
  }, []);

  useEffect(() => {
    if (!payload) {
      return;
    }

    window.dispatchEvent(new Event("image-viewer:open"));
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousHtmlOverscrollBehavior =
      document.documentElement.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";

    return () => {
      window.dispatchEvent(new Event("image-viewer:close"));
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.overscrollBehavior =
        previousHtmlOverscrollBehavior;
    };
  }, [payload]);

  return (
    <ImageViewerContext.Provider value={{ openViewer, closeViewer }}>
      {children}
      {payload ? (
        <FullscreenImageViewer payload={payload} onClose={closeViewer} />
      ) : null}
    </ImageViewerContext.Provider>
  );
}

type FullscreenImageViewerProps = {
  payload: ImageViewerPayload;
  onClose: () => void;
};

function FullscreenImageViewer({
  payload,
  onClose,
}: FullscreenImageViewerProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        carouselApi?.scrollPrev();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        carouselApi?.scrollNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [carouselApi, onClose]);

  return (
    <div
      data-ui={mergeUi(payload.sourceUiId, "fullscreen-viewer")}
      className="fixed inset-0 z-[200] h-dvh overscroll-none bg-black/90 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image viewer"
      onClick={onClose}
    >
      <Button
        uiId={mergeUi(payload.sourceUiId, "fullscreen-close")}
        type="button"
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-10 border-white/40 bg-black/30 text-white hover:bg-black/50 md:right-6 md:top-6"
        onClick={onClose}
      >
        <X className="size-6 text-current" />
        <span className="sr-only">Close fullscreen image viewer</span>
      </Button>

      <div
        data-ui={mergeUi(payload.sourceUiId, "fullscreen-content")}
        className="grid h-full w-full place-items-center"
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className="w-full max-w-7xl"
        >
          <Carousel
            opts={{
              align: "start",
              loop: payload.images.length > 1,
              startIndex: payload.initialIndex,
            }}
            setApi={setCarouselApi}
            className="w-full"
          >
            <CarouselContent className="-ml-0">
              {payload.images.map((image, index) => (
                <CarouselItem key={`${image.src}-${index}`} className="pl-0">
                  <div className="flex h-[calc(100dvh-8rem)] items-center justify-center">
                    <NextImage
                      src={image.src}
                      alt={image.alt}
                      width={image.width ?? 1600}
                      height={image.height ?? 1200}
                      sizes="100vw"
                      priority={index === payload.initialIndex}
                      className="max-h-full w-auto max-w-full rounded-2xl object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {payload.images.length > 1 ? (
              <>
                <CarouselPrevious className="left-2 z-10 border-white/40 bg-black/30 text-white hover:bg-black/50 md:left-6" />
                <CarouselNext className="right-2 z-10 border-white/40 bg-black/30 text-white hover:bg-black/50 md:right-6" />
              </>
            ) : null}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
