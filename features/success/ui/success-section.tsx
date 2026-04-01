import Link from "next/link";
import { FooterInfoSection } from "@/features/footer-info/ui/footer-info-section";
import { LocationSection } from "@/features/location/ui/location-section";
import { SUCCESS_CONTENT } from "@/features/success/model/content";
import { NailMomentLogo } from "@/shared/assets/icons";
import { IMAGES } from "@/shared/config/const";
import { BackLink } from "@/shared/ui/back-link";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { CelebrationConfetti } from "@/shared/ui/celebration-confetti";
import { CelebrationConfettiTrigger } from "@/shared/ui/celebration-confetti-trigger";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyText } from "@/shared/ui/typography";

export function SuccessSection() {
  return (
    <>
      <CelebrationConfetti />

      <Section
        uiId="success-hero-section"
        density="compact"
        innerClassName="max-w-none"
        className="px-0 pt-0 md:px-0 md:pt-0 xl:px-0"
      >
        <div
          data-ui="success-hero-shell"
          className="relative isolate overflow-hidden rounded-[2rem] bg-surface-page px-4 pb-8 pt-10 md:px-8 md:pb-10 md:pt-14"
        >
          <img
            data-ui="success-background"
            src={IMAGES.DECORATIVE_BG_1}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
          />
          <DecorativeImage
            uiId="success-leaf-right"
            src={IMAGES.DECORATIVE_LEAF_1}
            className="-right-8 -top-14 z-[1] h-[18rem] w-[14rem]"
          />
          <DecorativeImage
            uiId="success-leaf-left"
            src={IMAGES.DECORATIVE_LEAF_7}
            className="-left-8 top-2 z-[1] h-44 w-40"
          />

          <Stack uiId="success-hero-content" gap="lg" className="relative z-[2] items-center text-center">
            <div className="grid max-w-xs grid-cols-2 gap-2">
              <Badge uiId="success-date" className="min-w-[9rem] border-0 bg-surface-card/90">
                7 червня
              </Badge>
              <Badge uiId="success-city" className="min-w-[9rem] border-0 bg-surface-card/90">
                Варшава
              </Badge>
            </div>

            <Link href="/" aria-label="На головну">
              <NailMomentLogo data-ui="success-logo" className="w-full max-w-sm" />
            </Link>

            <SectionHeader
              uiId="success-header"
              as="h1"
              title={SUCCESS_CONTENT.title}
              description={SUCCESS_CONTENT.description}
              order="order1"
              tone="accent"
              descriptionClassName="max-w-3xl text-base md:text-lg md:leading-8"
            />
          </Stack>
        </div>
      </Section>

      <Section uiId="success-content-section" density="compact">
        <Stack uiId="success-content" gap="lg" className="mx-auto w-full max-w-4xl">
          <Card
            uiId="success-lead-card"
            surface="subtle"
            spacing="none"
            className="rounded-[2rem]"
          >
            <CardContent uiId="success-lead-card" className="px-6 py-8 text-center md:px-10 md:py-10">
              <Stack uiId="success-lead-texts" gap="default" className="items-center">
                {SUCCESS_CONTENT.lead.map((paragraph, index) => (
                  <TypographyText
                    key={index}
                    uiId={`success-lead-text-${index + 1}`}
                    size="lead"
                    tone="default"
                    className="max-w-3xl"
                  >
                    {paragraph}
                  </TypographyText>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Stack uiId="success-next-header" gap="sm" className="items-center text-center">
            <SectionHeader uiId="success-next-title" title={SUCCESS_CONTENT.nextTitle} tone="accent" />
            <TypographyText
              uiId="success-next-description"
              size="body"
              tone="default"
            >
              {SUCCESS_CONTENT.nextDescription}
            </TypographyText>
          </Stack>

          <Card
            uiId="success-next-card"
            surface="subtle"
            spacing="none"
            className="rounded-[2rem]"
          >
            <CardContent uiId="success-next-card" className="px-5 py-6 md:px-8 md:py-8">
              <Stack uiId="success-next-steps" gap="sm">
                {SUCCESS_CONTENT.nextSteps.map((step, index) => (
                  <div
                    key={index}
                    data-ui={`success-next-step-${index + 1}`}
                    className="rounded-2xl bg-surface-page px-4 py-4"
                  >
                    <TypographyText
                      as="p"
                      uiId={`success-next-step-${index + 1}-text`}
                      align="left"
                      size="body"
                      tone="default"
                    >
                      <span className="font-black">{index + 1}.</span> {step}
                    </TypographyText>
                  </div>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <div data-ui="success-confetti-trigger" className="flex justify-center">
            <CelebrationConfettiTrigger />
          </div>

          <LocationSection />

          <div data-ui="success-back" className="flex justify-center">
            <BackLink uiId="success-back-link" href="/">
              {SUCCESS_CONTENT.homeLabel}
            </BackLink>
          </div>
        </Stack>
      </Section>

      <FooterInfoSection />
    </>
  );
}
