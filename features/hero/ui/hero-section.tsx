import { BuyTicketButton } from "@/entities/ticket/ui/buy-ticket-button";
import Marquee from "@/shared/ui/marquee";
import { Cluster } from "@/shared/ui/layout/cluster";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { mergeUi } from "@/shared/lib/utils";
import { IMAGES } from "@/shared/config/const";
import { HOME_HERO_CONTENT } from "@/features/hero/model/content";
import { NailMomentLogo } from "@/shared/assets/icons";

export function HeroSection() {
  return (
    <Section
      uiId="hero-section"
      density="hero"
      innerClassName="max-w-none"
      className="px-0 md:px-0 xl:px-0 pt-0 md:pt-0"
    >
      <div
        data-ui="hero-section-shell"
        className="relative isolate flex flex-col overflow-hidden bg-surface-muted/50 px-4 pt-10 pb-20 md:px-8 md:pt-14 h-[clamp(650px,100dvh,750px)]"
      >
        <img
          data-ui="hero-background"
          src={IMAGES.DECORATIVE_BG_1}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
        />
        <DecorativeImage
          uiId="hero-leaf-right"
          src={IMAGES.DECORATIVE_LEAF_1}
          className="-right-8 -top-16 h-[21rem] w-[16rem] z-[1]"
        />
        <DecorativeImage
          uiId="hero-leaf-left"
          src={IMAGES.DECORATIVE_LEAF_4}
          className="-left-8 top-1 h-48 w-44 z-[1]"
        />

        <Marquee
          texts={HOME_HERO_CONTENT.marquee}
          speed={150}
          direction="left"
          pauseOnHover
          textColorClass="text-text-primary"
          className="absolute inset-x-0 top-[25px] z-[3] self-stretch bg-surface-muted font-medium"
        />

        <div data-ui="hero-content" className="relative z-[2] flex flex-1 flex-col items-center pt-6 text-center">
          <Cluster uiId="hero-badges" gap="sm" justify="center" className="w-full">
            {HOME_HERO_CONTENT.badges.map((badge, index) => (
              <Badge
                key={badge}
                uiId={mergeUi("hero-badge", index + 1)}
                className="min-w-[9rem] border-0 bg-surface-card/90"
              >
                {badge}
              </Badge>
            ))}
          </Cluster>

          <div className="flex-1" />

          <h1 data-ui="hero-title-group" className="flex flex-col items-center gap-4 text-center">
            <span data-ui="hero-eyebrow" className="text-2xl font-semibold uppercase leading-tight tracking-tight text-text-primary">
              {HOME_HERO_CONTENT.eyebrow}
            </span>
            <NailMomentLogo data-ui="hero-logo" className="w-full max-w-sm" />
          </h1>

          <div className="flex-1" />

          <Stack uiId="hero-actions" gap="sm" className="w-full max-w-2xl">
            <BuyTicketButton uiId="hero-buy-ticket" className="w-full" />
            <div data-ui="hero-shortcuts" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HOME_HERO_CONTENT.shortcuts.map((shortcut, index) => (
                <Button
                  key={shortcut.href}
                  uiId={mergeUi("hero-shortcut", index + 1)}
                  variant="secondary"
                  size="sm"
                  asChild
                  className="w-full"
                >
                  <a href={shortcut.href}>{shortcut.label}</a>
                </Button>
              ))}
            </div>
          </Stack>
        </div>

        <Marquee
          texts={HOME_HERO_CONTENT.marquee}
          speed={150}
          direction="right"
          pauseOnHover
          textColorClass="text-brand-brown"
          className="absolute inset-x-0 bottom-[25px] z-[3] self-stretch bg-surface-muted font-medium"
        />
      </div>
    </Section>
  );
}
