"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/shared/lib/utils";

type DecorativeLoadedImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function DecorativeLoadedImage({
  alt = "",
  className,
  onLoad,
  style,
  ...props
}: DecorativeLoadedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;

    if (!loaded && image?.complete) {
      const frameId = window.requestAnimationFrame(() => {
        setLoaded(true);
      });

      return () => window.cancelAnimationFrame(frameId);
    }
  }, [loaded]);

  return (
    <img
      ref={imageRef}
      className={cn(
        "transition-[opacity,scale] duration-500 ease-out motion-reduce:transition-none",
        className
      )}
      alt={alt}
      style={{
        ...style,
        opacity: loaded ? style?.opacity : 0,
        scale: loaded ? "1" : "0.985",
      }}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
      {...props}
    />
  );
}
