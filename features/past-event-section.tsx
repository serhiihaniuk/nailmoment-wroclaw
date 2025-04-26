import React from "react";
import { cn } from "@/lib/utils";
import { ImageCarousel } from "@/blocks/ui/image-carousel";
import { SectionHeader } from "@/components/ui/section-header";
import { Section } from "@/blocks/ui/section";

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
    <Section className={cn("relative", className)}>
      {/* Alternative: Use simple heading elements */}
      <SectionHeader title={title} />
      <h3 className="text-xl font-medium text-blue-foreground text-center mb-6">
        {subtitle}
      </h3>

      <ImageCarousel images={carouselImages} imageAlt="Past event photo" />
    </Section>
  );
};
