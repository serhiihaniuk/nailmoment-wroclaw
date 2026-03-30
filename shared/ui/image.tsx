"use client";

import React from "react";
import NextImage from "next/image";

import { cn, mergeUi } from "@/shared/lib/utils";
import { useImageViewer } from "@/shared/ui/image-viewer";

interface ImageProps {
  url: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  uiId?: string;
  fullscreen?: boolean;
}

const genericBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScwJScgeTI9JzEwMCUnPjxzdG9wIG9mZnNldD0nMCUnIHN0b3AtY29sb3I9JyNmMGYwZjAnLz48c3RvcCBvZmZzZXQ9JzEwMCUnIHN0b3AtY29sb3I9JyNkOWQ5ZDknLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9J2InPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9JzgnIGhlaWdodD0nNScgZmlsbD0ndXJsKCNnKScgZmlsdGVyPSd1cmwoI2IpJy8+PC9zdmc+";

export const Image: React.FC<ImageProps> = ({
  url,
  className,
  alt = "",
  priority,
  sizes,
  uiId,
  width = 900,
  height = 507,
  fullscreen = true,
  ...rest
}) => {
  const { openViewer } = useImageViewer();
  const isViewable = fullscreen && Boolean(url);

  return (
    <div
      data-ui={mergeUi(uiId ?? "image")}
      className={cn(
        "relative overflow-hidden aspect-video rounded-lg",
        className
      )}
    >
      <NextImage
        src={url}
        alt={alt}
        placeholder="blur"
        blurDataURL={genericBlurDataURL}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="h-full w-full object-cover object-center"
        {...rest}
      />

      {isViewable ? (
        <button
          type="button"
          data-ui={mergeUi(uiId, "trigger")}
          className="absolute inset-0 z-10 cursor-zoom-in rounded-[inherit] bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          aria-label={alt ? `Open image: ${alt}` : "Open image"}
          onClick={() =>
            openViewer({
              images: [{ src: url, alt, width, height }],
              initialIndex: 0,
              sourceUiId: mergeUi(uiId ?? "image"),
            })
          }
        />
      ) : null}
    </div>
  );
};
