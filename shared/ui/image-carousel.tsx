"use client";

import React from "react";
import NextImage from "next/image";

import { cn, mergeUi } from "@/shared/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import { useImageViewer } from "@/shared/ui/image-viewer";

interface ImageCarouselProps {
  images: string[];
  imageAlt?: string;
  className?: string;
  uiId?: string;
  fullscreen?: boolean;
  frameClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const genericBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScwJScgeTI9JzEwMCUnPjxzdG9wIG9mZnNldD0nMCUnIHN0b3AtY29sb3I9JyNmMGYwZjAnLz48c3RvcCBvZmZzZXQ9JzEwMCUnIHN0b3AtY29sb3I9JyNkOWQ5ZDknLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9J2InPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9JzgnIGhlaWdodD0nNScgZmlsbD0ndXJsKCNnKScgZmlsdGVyPSd1cmwoI2IpJy8+PC9zdmc+";

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  imageAlt = "Past event",
  className,
  uiId,
  fullscreen = true,
  frameClassName,
  imageWidth = 900,
  imageHeight = Math.round(imageWidth * (9 / 16)),
}) => {
  const { openViewer } = useImageViewer();
  const galleryImages = images.map((imageUrl, index) => ({
    src: imageUrl,
    alt: `${imageAlt} ${index + 1}`,
    width: imageWidth,
    height: imageHeight,
  }));

  return (
    <div
      data-ui={mergeUi(uiId ?? "image-carousel")}
      className={cn("relative mx-auto w-full max-w-xl", className)}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 bg-transparent">
          {images.map((imageUrl, index) => (
            <CarouselItem
              key={index}
              data-ui={mergeUi(uiId, `slide-${index + 1}`)}
              className="bg-transparent pl-4"
            >
              <div
                className={cn(
                  "relative aspect-video w-full overflow-hidden rounded-lg",
                  frameClassName,
                )}
              >
                <NextImage
                  src={imageUrl}
                  alt={`${imageAlt} ${index + 1}`}
                  width={imageWidth}
                  height={imageHeight}
                  placeholder="blur"
                  blurDataURL={genericBlurDataURL}
                  className="absolute inset-0 object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 900px"
                />

                {fullscreen ? (
                  <button
                    type="button"
                    data-ui={mergeUi(uiId, `slide-${index + 1}-trigger`)}
                    className="absolute inset-0 z-10 cursor-zoom-in rounded-[inherit] bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                    aria-label={`Open image: ${imageAlt} ${index + 1}`}
                    onClick={() =>
                      openViewer({
                        images: galleryImages,
                        initialIndex: index,
                        sourceUiId: mergeUi(uiId ?? "image-carousel"),
                      })
                    }
                  />
                ) : null}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="relative mt-4 flex items-center justify-center gap-3">
          <CarouselPrevious className="static translate-x-0 translate-y-0 border-white border-2 bg-transparent" />
          <CarouselNext className="static translate-x-0 translate-y-0 border-white border-2 bg-transparent" />
        </div>
      </Carousel>
    </div>
  );
};
