import React from "react";
import { cn } from "@/lib/utils";

interface DecorativeImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export const DecorativeImage: React.FC<DecorativeImageProps> = ({
  src,
  alt = "",
  className,
}) => {
  return (
    <div
      className={cn("pointer-events-none absolute", className)}
      aria-hidden={alt === ""}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
};
