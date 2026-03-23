import React from "react";
import { cn, mergeUi } from "@/shared/lib/utils";

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
      <img
        data-ui={mergeUi(uiId, "image")}
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-contain"
      />
    </div>
  );
};
