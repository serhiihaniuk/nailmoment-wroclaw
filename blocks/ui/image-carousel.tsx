import React from "react";
import NextImage from "next/image"; // Import Next.js Image
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { IMAGES } from "@/shared/const";

interface ImageCarouselProps {
  images: string[]; // Array of image URLs
  imageAlt?: string;
  className?: string;
  /** Placeholder blurDataURLs corresponding to the images array. Required for blur effect on remote images. */
  blurDataURLs?: string[];
}

// Calculate height based on width 900 and 16:9 ratio
const imageWidth = 900;
const imageHeight = Math.round(imageWidth * (9 / 16)); // 506

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  imageAlt = "Past event",
  className,
}) => {
  return (
    <div className={cn("w-full relative max-w-xl mx-auto", className)}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="bg-transparent -ml-4">
          {images.map((imageUrl, index) => (
            <CarouselItem key={index} className="bg-transparent pl-4">
              {/* Wrapper div for rounded corners and overflow clipping */}
              <div className="overflow-hidden rounded-lg">
                <NextImage
                  src={imageUrl}
                  alt={`${imageAlt} ${index + 1}`}
                  width={imageWidth} // Explicit width
                  height={imageHeight} // Explicit height for 16:9 ratio
                  placeholder="blur" // Use blur placeholder
                  // Ensure image scales correctly within its container
                  // 'w-full' makes it take the container width, 'h-auto' maintains aspect ratio
                  className="w-full h-auto object-cover"
                  // Optimize loading strategy if needed (e.g., priority for the first image)
                  priority={index === 0}
                  // Define sizes for better resource loading based on layout
                  // Example: Adjust based on your max-w-xl and responsive layout
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 900px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Controls and Decorative Image remain the same */}
        <div className="flex relative justify-center items-center gap-3 mt-4">
          <CarouselPrevious className="static bg-transparent border-white border-2 translate-x-0 translate-y-0" />
          <CarouselNext className="static bg-transparent border-white border-2 translate-x-0 translate-y-0" />
        </div>
        <DecorativeImage
          src={IMAGES.BALL_URL}
          className="left-[-55px] bottom-0 size-[150px]"
        />
      </Carousel>
    </div>
  );
};
