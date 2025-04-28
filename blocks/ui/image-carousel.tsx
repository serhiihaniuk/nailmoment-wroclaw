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
  blurDataURLs?: string[];
}

const imageWidth = 900;
const imageHeight = Math.round(imageWidth * (9 / 16)); // 506

const genericBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScwJScgeTI9JzEwMCUnPjxzdG9wIG9mZnNldD0nMCUnIHN0b3AtY29sb3I9JyNmMGYwZjAnLz48c3RvcCBvZmZzZXQ9JzEwMCUnIHN0b3AtY29sb3I9JyNkOWQ5ZDknLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9J2InPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9JzgnIGhlaWdodD0nNScgZmlsbD0ndXJsKCNnKScgZmlsdGVyPSd1cmwoI2IpJy8+PC9zdmc+";

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
            <CarouselItem key={index} className="bg-transparent pl-4 w-">
              {/* Wrapper div for rounded corners and overflow clipping */}
              <div className="overflow-hidden rounded-lg w-full aspect-video relative">
                <NextImage
                  src={imageUrl}
                  alt={`${imageAlt} ${index + 1}`}
                  width={imageWidth}
                  height={imageHeight}
                  placeholder="blur"
                  blurDataURL={genericBlurDataURL}
                  className="inset-0 absolute object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 900px"
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
