import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SpeakerCard } from "@/entities/speaker/ui/speaker-card";
import { SectionHeader } from "@/shared/ui/section-header";
import { mergeUi } from "@/shared/lib/utils";
import {
  HOME_SPEAKERS,
  HOME_SPEAKER_SECTION,
} from "@/features/festival-speakers/model/content";

type SpeakersSectionProps = {
  className?: string;
};

export function SpeakersSection({ className }: SpeakersSectionProps) {
  return (
    <Section uiId="speakers-section" density="compact" className={className}>
      <Stack uiId="speakers-content" gap="lg" className="items-center">
        <SectionHeader uiId="speakers-title" title={HOME_SPEAKER_SECTION.title} />
        <div data-ui="speakers-list" className="flex w-full flex-col items-center gap-5 md:gap-6">
          {HOME_SPEAKERS.map((speaker, index) => (
            <SpeakerCard
              uiId={mergeUi("speaker", index + 1)}
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
