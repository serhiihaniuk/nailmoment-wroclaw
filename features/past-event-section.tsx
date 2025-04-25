import React from "react";
import { IMAGES } from "@/shared/const";
import { cn } from "@/lib/utils";
import { ImageCarousel } from "@/blocks/ui/image-carousel";
import { SectionHeader } from "@/components/ui/section-header";
import { DecorativeImage } from "@/components/ui/decorative-image";

const PLACEHOLDER_IMG_URL =
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/placeholder-img-C7NSLnrtqDD9dUPfNxOqAZKQC3CEOT";

const carouselImages = [
  PLACEHOLDER_IMG_URL,
  PLACEHOLDER_IMG_URL,
  PLACEHOLDER_IMG_URL,
];

interface PastEventCarouselSectionProps {
  className?: string;
}

export const PastEventCarouselSection: React.FC<
  PastEventCarouselSectionProps
> = ({ className }) => {
  const title = "Як це було в жовтні 2024";
  const subtitle = "Баскетбольна арена";

  return (
    <section className={cn("px-4 relative", className)}>
      {/* Alternative: Use simple heading elements */}
      <SectionHeader title={title} />
      <h3 className="text-xl font-medium text-blue-foreground text-center mb-6">
        {subtitle}
      </h3>

      <ImageCarousel images={carouselImages} imageAlt="Past event photo" />
      <DecorativeImage
        src={IMAGES.BALL_URL}
        className="left-[-55px] bottom-0 size-[150px]"
      />
    </section>
  );
};
