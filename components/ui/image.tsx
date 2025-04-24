import React from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  url: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  url,
  className,
  alt = "",
  ...rest
}) => (
  <div
    className={cn(
      "relative overflow-hidden aspect-video rounded-lg",
      className
    )}
  >
    <img
      src={url}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      {...rest}
    />
  </div>
);
