import Link from "next/link";
import { SpeakerCard } from "@/entities/speaker/ui/speaker-card";
import { FooterInfoSection } from "@/features/footer-info/ui/footer-info-section";
import { PEOPLE_SPEAKER_CONTENT } from "@/features/people-speaker-hero/model/content";
import { NailMomentLogo } from "@/shared/assets/icons";
import { IMAGES } from "@/shared/config/const";
import { BackLink } from "@/shared/ui/back-link";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { DecoratedOliveCard } from "@/shared/ui/decorated-olive-card";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

function BulletList({
  uiId,
  items,
  tone = "default",
}: {
  uiId: string;
  items: string[];
  tone?: "default" | "inverse";
}) {
  return (
    <Stack uiId={uiId} gap="xs" className="w-full">
      {items.map((item, index) => (
        <div
          key={item}
          data-ui={`${uiId}-item-${index + 1}`}
          className="px-1 py-2"
        >
          <TypographyText
            as="p"
            uiId={`${uiId}-item-${index + 1}-text`}
            align="left"
            size="body"
            tone={tone}
            className={
              tone === "inverse"
                ? "text-text-inverse"
                : "text-brand-olive"
            }
          >
            <span className="font-black">{index + 1}.</span> {item}
          </TypographyText>
        </div>
      ))}
    </Stack>
  );
}

export const PeoplesSpeakerSection = () => (
  <>
    <Section
      uiId="people-speaker-hero-section"
      density="compact"
      innerClassName="max-w-none"
      className="px-0 pt-0 md:px-0 md:pt-0 xl:px-0"
    >
      <div
        data-ui="people-speaker-hero-shell"
        className="relative isolate overflow-hidden rounded-[2rem] bg-surface-page px-4 pb-8 pt-10 md:px-8 md:pb-10 md:pt-14"
      >
        <img
          data-ui="people-speaker-hero-background"
          src={IMAGES.DECORATIVE_BG_1}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
        />
        <DecorativeImage
          uiId="people-speaker-hero-leaf-right"
          src={IMAGES.DECORATIVE_LEAF_1}
          className="-right-8 -top-16 z-[1] h-[19rem] w-[15rem]"
        />
        <DecorativeImage
          uiId="people-speaker-hero-leaf-left"
          src={IMAGES.DECORATIVE_LEAF_4}
          className="-left-8 top-2 z-[1] h-44 w-40"
        />

        <Stack
          uiId="people-speaker-hero-content"
          gap="lg"
          className="relative z-[2] items-center text-center"
        >
          <div data-ui="people-speaker-badges" className="grid grid-cols-2 gap-2">
            <Badge uiId="people-speaker-date" className="min-w-[9rem] border-0 bg-surface-card/90">
              7 червня
            </Badge>
            <Badge uiId="people-speaker-city" className="min-w-[9rem] border-0 bg-surface-card/90">
              Варшава
            </Badge>
          </div>

          <Link href="/" aria-label="На головну">
            <NailMomentLogo data-ui="people-speaker-logo" className="w-full max-w-sm" />
          </Link>

          <SectionHeader
            uiId="people-speaker-header"
            as="h1"
            title={PEOPLE_SPEAKER_CONTENT.title}
            description={PEOPLE_SPEAKER_CONTENT.description}
            order="order1"
            tone="default"
            descriptionClassName="max-w-3xl text-base md:text-lg md:leading-8"
          />

          <DecoratedOliveCard
            uiId="people-speaker-hero-card"
            leafLayout="compact"
            className="w-full max-w-4xl rounded-[2rem] bg-brand-olive text-text-inverse"
            contentClassName="flex flex-col items-center gap-5 px-6 py-8 text-center md:px-10 md:py-10"
          >
            <div data-ui="people-speaker-hero-card-content" className="contents">
              <img
                data-ui="people-speaker-hero-image"
                src={PEOPLE_SPEAKER_CONTENT.heroImage}
                alt={PEOPLE_SPEAKER_CONTENT.heroImageAlt}
                className="mx-auto h-auto w-full max-w-[240px] object-contain"
              />
              <TypographyTitle
                as="h2"
                uiId="people-speaker-hero-lead"
                order="order4"
                tone="inverse"
                className="normal-case"
              >
                {PEOPLE_SPEAKER_CONTENT.heroLead}
              </TypographyTitle>
              <div
                data-ui="people-speaker-hero-actions"
                className="flex w-full max-w-2xl flex-col gap-3"
              >
                <Button
                  uiId="people-speaker-primary-cta"
                  variant="secondary"
                  size="sm"
                  asChild
                  className="w-full border-white bg-transparent text-text-inverse hover:bg-white/8"
                >
                  <Link
                    href={PEOPLE_SPEAKER_CONTENT.primaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {PEOPLE_SPEAKER_CONTENT.primaryCta.label}
                  </Link>
                </Button>
                <Button
                  uiId="people-speaker-secondary-cta"
                  variant="secondary"
                  size="sm"
                  asChild
                  className="w-full border-white bg-transparent text-text-inverse hover:bg-white/8"
                >
                  <Link
                    href={PEOPLE_SPEAKER_CONTENT.secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {PEOPLE_SPEAKER_CONTENT.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </div>
          </DecoratedOliveCard>
        </Stack>
      </div>
    </Section>

    <Section uiId="people-speaker-content-section" density="compact">
      <Stack uiId="people-speaker-content" gap="xl" className="mx-auto w-full max-w-4xl">
        <DecoratedOliveCard
          uiId="people-speaker-about-card"
          leafLayout="default"
          className="rounded-[2rem]"
          contentClassName="flex flex-col gap-5 px-6 py-8 md:px-8 md:py-8"
        >
          <div data-ui="people-speaker-about-card-content" className="contents">
            <SectionHeader
              uiId="people-speaker-about-header"
              align="left"
              title={PEOPLE_SPEAKER_CONTENT.aboutTitle}
              tone="inverse"
            />
            <Stack uiId="people-speaker-about-list" gap="sm">
              {PEOPLE_SPEAKER_CONTENT.aboutItems.map((item, index) => (
                <TypographyText
                  key={item}
                  as="p"
                  uiId={`people-speaker-about-item-${index + 1}`}
                  align="left"
                  size="body"
                  tone="inverse"
                  className="rounded-2xl bg-white/10 px-4 py-4 text-text-inverse"
                >
                  <span className="font-black">{index + 1}.</span> {item}
                </TypographyText>
              ))}
            </Stack>
          </div>
        </DecoratedOliveCard>

        <div
          data-ui="people-speaker-main-grid"
          className="grid grid-cols-1 gap-6"
        >
          <Card
            uiId="people-speaker-benefits-card"
            surface="subtle"
            spacing="none"
            className="rounded-[2rem]"
          >
            <CardContent
              uiId="people-speaker-benefits-card"
              className="flex h-full flex-col gap-5 px-6 py-8 md:px-8 md:py-8"
            >
              <SectionHeader
                uiId="people-speaker-benefits-header"
                align="left"
                title={PEOPLE_SPEAKER_CONTENT.benefitsTitle}
                tone="default"
              />
              <TypographyText
                uiId="people-speaker-benefits-description"
                align="left"
                size="body"
                tone="default"
              >
                {PEOPLE_SPEAKER_CONTENT.benefitsDescription}
              </TypographyText>
              <BulletList uiId="people-speaker-benefits-list" items={PEOPLE_SPEAKER_CONTENT.benefits} />
            </CardContent>
          </Card>

          <Card
            uiId="people-speaker-apply-card"
            surface="subtle"
            spacing="none"
            className="rounded-[2rem]"
          >
            <CardContent
              uiId="people-speaker-apply-card"
              className="flex h-full flex-col gap-5 px-6 py-8 md:px-8 md:py-8"
            >
              <SectionHeader
                uiId="people-speaker-apply-header"
                align="left"
                title={PEOPLE_SPEAKER_CONTENT.applyTitle}
                tone="default"
              />
              <TypographyText
                uiId="people-speaker-apply-description"
                align="left"
                size="body"
                tone="default"
              >
                {PEOPLE_SPEAKER_CONTENT.applyDescription}
              </TypographyText>
              <BulletList uiId="people-speaker-apply-list" items={PEOPLE_SPEAKER_CONTENT.applySteps} />
            </CardContent>
          </Card>
        </div>

        <div
          data-ui="people-speaker-secondary-grid"
          className="grid grid-cols-1 gap-6"
        >
          <Card
            uiId="people-speaker-selection-card"
            surface="subtle"
            spacing="none"
            className="rounded-[2rem]"
          >
            <CardContent
              uiId="people-speaker-selection-card"
              className="flex h-full flex-col gap-5 px-6 py-8 md:px-8 md:py-8"
            >
              <SectionHeader
                uiId="people-speaker-selection-header"
                align="left"
                title={PEOPLE_SPEAKER_CONTENT.selectionTitle}
                tone="default"
              />
              <TypographyText
                uiId="people-speaker-selection-description"
                align="left"
                size="body"
                tone="default"
              >
                {PEOPLE_SPEAKER_CONTENT.selectionDescription}
              </TypographyText>
              <BulletList
                uiId="people-speaker-selection-list"
                items={PEOPLE_SPEAKER_CONTENT.selectionSteps}
              />
            </CardContent>
          </Card>

          <DecoratedOliveCard
            uiId="people-speaker-prize-card"
            leafLayout="default"
            className="rounded-[2rem] bg-brand-olive text-text-inverse"
            contentClassName="flex h-full flex-col gap-5 px-6 py-8 md:px-8 md:py-8"
          >
            <div data-ui="people-speaker-prize-card-content" className="contents">
              <SectionHeader
                uiId="people-speaker-prize-header"
                align="left"
                title={PEOPLE_SPEAKER_CONTENT.prizeTitle}
                tone="inverse"
              />
              <TypographyText
                uiId="people-speaker-prize-description"
                align="left"
                size="body"
                tone="inverse"
                className="text-text-inverse"
              >
                {PEOPLE_SPEAKER_CONTENT.prizeDescription}
              </TypographyText>
              <Stack uiId="people-speaker-prize-list" gap="sm">
                <BulletList
                  uiId="people-speaker-prize-list-items"
                  items={PEOPLE_SPEAKER_CONTENT.prizes}
                  tone="inverse"
                />
              </Stack>
            </div>
          </DecoratedOliveCard>
        </div>

        <Stack uiId="people-speaker-winner-block" gap="default" className="w-full">
          <SectionHeader
            uiId="people-speaker-winner-header"
            align="left"
            title={PEOPLE_SPEAKER_CONTENT.winnerTitle}
            tone="default"
          />
          <SpeakerCard
            uiId="people-speaker-winner"
            imageUrl={PEOPLE_SPEAKER_CONTENT.winnerImage}
            imageAlt={PEOPLE_SPEAKER_CONTENT.winnerImageAlt}
            name={PEOPLE_SPEAKER_CONTENT.winnerName}
            description={<p>{PEOPLE_SPEAKER_CONTENT.winnerDescription}</p>}
          />
        </Stack>

        <div data-ui="people-speaker-back" className="flex justify-center">
          <BackLink uiId="people-speaker-back-link" href="/">
            Повернутися на головну
          </BackLink>
        </div>
      </Stack>
    </Section>

    <FooterInfoSection />
  </>
);
