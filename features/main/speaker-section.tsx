import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { SpeakerCard } from "@/components/patterns/speaker-card";
import { SectionHeader } from "@/components/ui/section-header";
import {
  HOME_SPEAKERS,
  HOME_SPEAKER_SECTION,
} from "@/shared/content/home/speakers";

type SpeakersSectionProps = {
  className?: string;
};

export function SpeakersSection({ className }: SpeakersSectionProps) {
  return (
    <Section density="compact" className={className}>
      <Stack gap="lg" className="items-center">
        <SectionHeader title={HOME_SPEAKER_SECTION.title} />
        <div className="flex w-full flex-col items-center gap-5 md:gap-6">
          {HOME_SPEAKERS.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              imageUrl={speaker.imageUrl}
              imageAlt={speaker.imageAlt}
              name={speaker.name}
              description={speaker.description}
            />
          ))}
        </div>
      </Stack>
    </Section>
  );
}
