import React from "react";
import { cn, mergeUi } from "@/shared/lib/utils";
import { DecorativeLoadedImage } from "@/shared/ui/decorative-loaded-image";

interface DecorativeImageProps {
  src: string;
  alt?: string;
  className?: string;
  uiId?: string;
}

export const DecorativeImage: React.FC<DecorativeImageProps> = ({
  src,
  alt = "",
  className,
  uiId,
}) => {
  return (
    <div
      data-ui={mergeUi(uiId ?? "decorative-image")}
      className={cn("pointer-events-none absolute", className)}
      aria-hidden={alt === ""}
    >
      <DecorativeLoadedImage
        data-ui={mergeUi(uiId, "image")}
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
};
