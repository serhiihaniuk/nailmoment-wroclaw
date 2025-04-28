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

export const Image: React.FC<ImageProps> = ({
  url,
  className, // This className applies to the wrapper div
  alt = "",
  priority,
  sizes,
  width,
  height,
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
        width={width}
        height={height}
        fill // Makes the image expand to fill the relative parent
        objectFit="cover" // Equivalent to Tailwind's object-cover
        priority={priority}
        sizes={sizes} // Pass the sizes prop for optimization
        {...rest} // Spread remaining props (like onClick, style, etc.) onto NextImage
        // No specific className needed on NextImage itself for this layout
      />
    </div>
  );
};
