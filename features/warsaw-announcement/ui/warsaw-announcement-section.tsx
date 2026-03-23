import { MediaCard, MediaCardImage } from "@/shared/ui/media-card";
import { Section } from "@/shared/ui/layout/section";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyText } from "@/shared/ui/typography";
import { WARSAW_ANNOUNCEMENT_CONTENT } from "../model/content";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { IMAGES } from "@/shared/config/const";

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
        className="relative mx-auto mt-5 w-full max-w-4xl"
      >
        <DecorativeImage
          uiId="festival-info-leaf"
          src={IMAGES.DECORATIVE_LEAF_7}
          className="-right-6 rotate-y-180 bottom-1/2 translate-y-1/2 size-[200px] z-50"
        />
        <MediaCardImage
          uiId="warsaw"
          url={WARSAW_ANNOUNCEMENT_CONTENT.imageUrl}
          alt={WARSAW_ANNOUNCEMENT_CONTENT.imageAlt}
          elevated
          width={900}
          className="aspect-[4/5]"
        />
        <DecorativeImage
          uiId="festival-info-leaf"
          src={IMAGES.DECORATIVE_LEAF_6}
          className="-left-6 rotate-y-180 top-0 size-[200px] z-50"
        />
      </MediaCard>
    </Section>
  );
}
