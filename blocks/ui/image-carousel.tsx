import React from "react";
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
  images: string[];
  imageAlt?: string;
  className?: string;
}

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
              <div className="relative overflow-hidden aspect-video rounded-lg overflow-hidden">
                <img
                  src={imageUrl}
                  alt={`${imageAlt} ${index + 1}`}
                  // Absolute positioning to fill the container, object-cover handles the rest
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
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
