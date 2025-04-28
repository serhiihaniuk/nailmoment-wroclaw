import React from "react";
import NextImage from "next/image"; // Import Next.js Image
import { cn } from "@/lib/utils"; // Assuming you have a cn utility

interface ProfileCardProps {
  imageUrl: string;
  imageAlt: string;
  name: string;
  description: React.ReactNode;
  className?: string;
  /** Optional placeholder blurDataURL for NextImage */
  blurDataURL?: string;
  /** Optional but recommended: sizes prop for NextImage optimization */
  sizes?: string;
}

// Using the generic placeholder as a fallback if specific ones aren't provided
const genericBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScwJScgeTI9JzEwMCUnPjxzdG9wIG9mZnNldD0nMCUnIHN0b3AtY29sb3I9JyNmMGYwZjAnLz48c3RvcCBvZmZzZXQ9JzEwMCUnIHN0b3AtY29sb3I9JyNkOWQ5ZDknLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9J2InPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9JzgnIGhlaWdodD0nNScgZmlsbD0ndXJsKCNnKScgZmlsdGVyPSd1cmwoI2IpJy8+PC9zdmc+";

// Define base dimensions based on the LARGEST Tailwind size used (md:w-48 -> 192px, md:h-80 -> 320px)
// These are used for aspect ratio calculation by Next.js
const imageBaseWidth = 192;
const imageBaseHeight = 320;

// Define sizes based on Tailwind classes (w-32 -> 128px, md:w-48 -> 192px)
// This tells the browser how wide the image actually renders
const defaultImageSizes = "(max-width: 767px) 128px, 192px";

export const SpeakerCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  imageAlt,
  name,
  description,
  className,
  blurDataURL = genericBlurDataURL, // Use generic blurDataURL as fallback
  sizes = defaultImageSizes, // Use calculated default sizes
}) => {
  return (
    <div
      className={cn(
        "flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 w-full max-w-2xl shadow-sm",
        className
      )}
    >
      <div className="flex-shrink-0 pt-1">
        <NextImage
          src={imageUrl}
          alt={imageAlt}
          width={imageBaseWidth} // Base width for aspect ratio calculation
          height={imageBaseHeight} // Base height for aspect ratio calculation
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes={sizes} // Pass sizes prop for optimization
          className="w-32 h-52 md:w-48 md:h-80 rounded-md object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center flex-grow">
        <h3 className="text-lg font-semibold text-blue-foreground mb-1">
          {name}
        </h3>
        <div className="text-sm text-blue-foreground/90 space-y-2">
          {description}
        </div>
      </div>
    </div>
  );
};
