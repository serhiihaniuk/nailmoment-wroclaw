import { MediaCard, MediaCardImage } from "@/shared/ui/media-card";
import { Section } from "@/shared/ui/layout/section";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyText } from "@/shared/ui/typography";
import { WARSAW_ANNOUNCEMENT_CONTENT } from "../model/content";

export function WarsawAnnouncementSection() {
  return (
    <Section uiId="warsaw-section" density="compact">
      <SectionHeader
        uiId="warsaw-title"
        title={WARSAW_ANNOUNCEMENT_CONTENT.title}
      />
      <TypographyText
        uiId="warsaw-text"
        size="lead"
        align="center"
        className="mx-auto mt-4"
      >
        {WARSAW_ANNOUNCEMENT_CONTENT.description}
      </TypographyText>
      <MediaCard
        uiId="warsaw"
        surface="transparent"
        className="mx-auto mt-5 w-full max-w-4xl"
      >
        <MediaCardImage
          uiId="warsaw"
          url={WARSAW_ANNOUNCEMENT_CONTENT.imageUrl}
          alt={WARSAW_ANNOUNCEMENT_CONTENT.imageAlt}
          width={900}
          className="aspect-[4/5]"
        />
      </MediaCard>
    </Section>
  );
}
