import React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: string[];
  imageAlt?: string;
  className?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  imageAlt = "Carousel image",
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
        <CarouselContent className="bg-transparent">
          {images.map((imageUrl, index) => (
            <CarouselItem key={index} className="bg-transparent">
              <div className="p-1">
                <img
                  src={imageUrl}
                  alt={`${imageAlt} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex relative justify-center items-center gap-3 mt-4">
          <CarouselPrevious className="static bg-transparent border-white border-2  translate-x-0 translate-y-0" />
          <CarouselNext className="static bg-transparent border-white border-2 translate-x-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};
