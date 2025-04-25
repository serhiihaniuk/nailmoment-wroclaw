import React from "react";
import { cn } from "@/lib/utils";
import { ImageCarousel } from "@/blocks/ui/image-carousel";
import { SectionHeader } from "@/components/ui/section-header";

// --- Placeholder Data ---
const PLACEHOLDER_IMG_URL =
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/placeholder-img-C7NSLnrtqDD9dUPfNxOqAZKQC3CEOT";

const carouselImages = [
  PLACEHOLDER_IMG_URL,
  PLACEHOLDER_IMG_URL, // Add more placeholder URLs if needed
  PLACEHOLDER_IMG_URL,
];

const BALL =
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/assets/basketball-yPhqlLu1sW68ldaWk1tXwaIDAG1CAQ";

// --- Component Definition ---
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
      <div className="pointer-events-none absolute left-[-55px] bottom-0 size-[150px]">
        <img src={BALL} alt="icon" className="absolute inset-0 object-cover" />
      </div>
    </section>
  );
};
