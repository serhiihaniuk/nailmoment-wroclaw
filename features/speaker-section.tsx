import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { SpeakerCard } from "@/blocks/ui/speaker-card";

// --- Data ---
const placeholderImageUrl =
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/prof-pic-crdR2O7LlP9IvP3mMWSSh7Cl9H4CjY";

// Sample speaker data (replace with your actual data source)
const speakers = [
  {
    id: 1,
    imageUrl: placeholderImageUrl,
    imageAlt: "Speaker 1",
    name: "Ангелина Рагоза 1",
    description: "опис опис опис опис\nопис опис", // Use \n for line breaks
  },
  {
    id: 2,
    imageUrl: placeholderImageUrl,
    imageAlt: "Speaker 2",
    name: "Ангелина Рагоза 2",
    description: "опис опис опис опис\nопис опис",
  },
  {
    id: 3,
    imageUrl: placeholderImageUrl,
    imageAlt: "Speaker 3",
    name: "Ангелина Рагоза 3",
    description: "опис опис опис опис\nопис опис",
  },
  {
    id: 4,
    imageUrl: placeholderImageUrl,
    imageAlt: "Speaker 4",
    name: "Ангелина Рагоза 4",
    description: "опис опис опис опис\nопис опис",
  },
  {
    id: 5,
    imageUrl: placeholderImageUrl,
    imageAlt: "Speaker 5",
    name: "Ангелина Рагоза 5",
    description: "опис опис опис опис\nопис опис",
  },
  {
    id: 6,
    imageUrl: placeholderImageUrl,
    imageAlt: "Speaker 6",
    name: "Ангелина Рагоза 6",
    description: "опис опис опис опис\nопис опис",
  },
  // Add more speakers as needed
];

// --- Component ---
interface SpeakersSectionProps {
  className?: string;
}

export const SpeakersSection: React.FC<SpeakersSectionProps> = ({
  className,
}) => {
  return (
    <section className={cn("px-4", className)}>
      <SectionHeader title="Спікери фестивалю" className="mb-6" />
      <div className="flex flex-col items-center gap-4">
        {" "}
        {speakers.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            imageUrl={speaker.imageUrl}
            imageAlt={speaker.imageAlt}
            name={speaker.name}
            description={speaker.description}
          />
        ))}
      </div>
    </section>
  );
};
