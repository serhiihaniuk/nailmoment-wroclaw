import Link from "next/link";
import { FooterInfoSection } from "@/features/footer-info/ui/footer-info-section";
import { LocationSection } from "@/features/location/ui/location-section";
import { BATTLE_SUCCESS_CONTENT } from "@/features/battle-success/model/content";
import { NailMomentLogo } from "@/shared/assets/icons";
import { IMAGES } from "@/shared/config/const";
import { BackLink } from "@/shared/ui/back-link";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { CelebrationConfetti } from "@/shared/ui/celebration-confetti";
import { CelebrationConfettiTrigger } from "@/shared/ui/celebration-confetti-trigger";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { IconLink } from "@/shared/ui/icon-link";
import { Cluster } from "@/shared/ui/layout/cluster";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

export function BattleSuccessSection() {
  return (
    <>
      <CelebrationConfetti />

      <Section
        uiId="battle-success-hero-section"
        density="compact"
        innerClassName="max-w-none"
        className="px-0 pt-0 md:px-0 md:pt-0 xl:px-0"
      >
        <div
          data-ui="battle-success-hero-shell"
          className="relative isolate overflow-hidden rounded-[2rem] bg-surface-page px-4 pb-8 pt-10 md:px-8 md:pb-10 md:pt-14"
        >
          <img
            data-ui="battle-success-background"
            src={IMAGES.DECORATIVE_BG_1}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
          />
          <DecorativeImage
            uiId="battle-success-leaf-right"
            src={IMAGES.DECORATIVE_LEAF_1}
            className="-right-8 -top-14 z-[1] h-[18rem] w-[14rem]"
          />
          <DecorativeImage
            uiId="battle-success-leaf-left"
            src={IMAGES.DECORATIVE_LEAF_4}
            className="-left-8 top-2 z-[1] h-44 w-40"
          />

          <Stack
            uiId="battle-success-hero-content"
            gap="lg"
            className="relative z-[2] items-center text-center"
          >
            <Cluster uiId="battle-success-badges" gap="sm" justify="center" className="w-full">
              <Badge uiId="battle-success-date" className="min-w-[9rem] border-0 bg-surface-card/90">
                7 червня
              </Badge>
              <Badge uiId="battle-success-city" className="min-w-[9rem] border-0 bg-surface-card/90">
                Варшава
              </Badge>
            </Cluster>

            <Link href="/" aria-label="На головну">
              <NailMomentLogo data-ui="battle-success-logo" className="w-full max-w-sm" />
            </Link>

            <SectionHeader
              uiId="battle-success-header"
              as="h1"
              title={BATTLE_SUCCESS_CONTENT.title}
              description={BATTLE_SUCCESS_CONTENT.description}
              order="order1"
              tone="accent"
              descriptionClassName="max-w-3xl text-base md:text-lg md:leading-8"
            />
          </Stack>
        </div>
      </Section>

      <Section uiId="battle-success-content-section" density="compact">
        <Stack uiId="battle-success-content" gap="lg" className="mx-auto w-full max-w-4xl">
          <Card
            uiId="battle-success-lead"
            surface="accent"
            spacing="none"
            className="rounded-[2rem] border-transparent bg-brand-brown text-text-inverse"
          >
            <CardContent
              uiId="battle-success-lead"
              className="flex flex-col items-center gap-5 px-6 py-8 text-center md:px-10 md:py-10"
            >
              <img
                data-ui="battle-success-lead-image"
                src={IMAGES.TICKET_BATTLE_DECOR}
                alt=""
                aria-hidden="true"
                className="mx-auto h-auto w-full max-w-[250px] object-contain"
              />
              {BATTLE_SUCCESS_CONTENT.lead.map((paragraph, index) => (
                <TypographyText
                  key={index}
                  uiId={`battle-success-lead-text-${index + 1}`}
                  size="lead"
                  tone="inverse"
                  className="max-w-3xl text-text-inverse"
                >
                  {paragraph}
                </TypographyText>
              ))}
            </CardContent>
          </Card>

          <Stack uiId="battle-success-steps-header" gap="sm" className="items-center text-center">
            <SectionHeader
              uiId="battle-success-steps-title"
              title={BATTLE_SUCCESS_CONTENT.stepsTitle}
              tone="accent"
            />
            <TypographyText
              uiId="battle-success-steps-description"
              size="body"
              tone="default"
            >
              {BATTLE_SUCCESS_CONTENT.stepsDescription}
            </TypographyText>
          </Stack>

          <Card
            uiId="battle-success-steps-card"
            surface="subtle"
            spacing="none"
            className="rounded-[2rem]"
          >
            <CardContent
              uiId="battle-success-steps-card"
              className="flex flex-col gap-5 px-5 py-6 md:px-8 md:py-8"
            >
              <Stack uiId="battle-success-steps-list" gap="sm">
                {BATTLE_SUCCESS_CONTENT.steps.map((step, index) => (
                  <div
                    key={index}
                    data-ui={`battle-success-step-${index + 1}`}
                    className="rounded-2xl bg-surface-page px-4 py-4"
                  >
                    <TypographyText
                      as="p"
                      uiId={`battle-success-step-${index + 1}-text`}
                      align="left"
                      size="body"
                      tone="default"
                    >
                      <span className="font-black">{index + 1}.</span> {step}
                    </TypographyText>
                  </div>
                ))}
              </Stack>

              <div
                data-ui="battle-success-actions"
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <Button
                  uiId="battle-success-rules"
                  variant="secondary"
                  size="sm"
                  asChild
                  className="w-full border-2 border-brand-brown font-black hover:bg-brand-brown/5"
                >
                  <Link href={BATTLE_SUCCESS_CONTENT.rulesHref}>
                    {BATTLE_SUCCESS_CONTENT.rulesLabel}
                  </Link>
                </Button>
                <Button
                  uiId="battle-success-telegram"
                  variant="secondary"
                  size="sm"
                  asChild
                  className="w-full border-2 border-brand-brown font-black hover:bg-brand-brown/5"
                >
                  <IconLink href={BATTLE_SUCCESS_CONTENT.telegramHref} target="_blank" icon={false}>
                    {BATTLE_SUCCESS_CONTENT.telegramLabel}
                  </IconLink>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div data-ui="battle-success-confetti-trigger" className="flex justify-center">
            <CelebrationConfettiTrigger uiId="battle-success-confetti-trigger-button" />
          </div>

          <LocationSection />

          <div data-ui="battle-success-back" className="flex justify-center">
            <BackLink uiId="battle-success-back-link" href="/">
              {BATTLE_SUCCESS_CONTENT.homeLabel}
            </BackLink>
          </div>
        </Stack>
      </Section>

      <FooterInfoSection />
    </>
  );
}
