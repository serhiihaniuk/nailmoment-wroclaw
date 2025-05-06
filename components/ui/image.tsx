import React from "react";
import NextImage from "next/image"; // Import the Next.js Image component
import { cn } from "@/lib/utils";

interface ImageProps {
  /** The source URL for the image */
  url: string;
  /** Alt text for the image (important for accessibility) */
  alt?: string;
  /** Optional additional CSS classes for the WRAPPER div */
  className?: string;
  width?: number;
  height?: number;
  /** Optional: Set image priority for LCP optimization */
  priority?: boolean;
  /**
   * Optional but RECOMMENDED when using fill: A string defining image sizes for different viewport widths.
   * Helps Next.js optimize image loading.
   * Example: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
   * See Next.js Image docs for details.
   */
  sizes?: string;
}

const genericBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScwJScgeTI9JzEwMCUnPjxzdG9wIG9mZnNldD0nMCUnIHN0b3AtY29sb3I9JyNmMGYwZjAnLz48c3RvcCBvZmZzZXQ9JzEwMCUnIHN0b3AtY29sb3I9JyNkOWQ5ZDknLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9J2InPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9JzgnIGhlaWdodD0nNScgZmlsbD0ndXJsKCNnKScgZmlsdGVyPSd1cmwoI2IpJy8+PC9zdmc+";

export const Image: React.FC<ImageProps> = ({
  url,
  className, // This className applies to the wrapper div
  alt = "",
  priority,
  sizes,
  width = 900,
  height = 507,
  ...rest // Pass any other compatible props to NextImage
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden aspect-video rounded-lg", // Wrapper maintains aspect ratio and relative positioning
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
        {...rest}
      />
    </div>
  );
};
