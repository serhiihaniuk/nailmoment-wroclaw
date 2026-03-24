import Link from "next/link";
import { BuyBattleTicketButton } from "@/entities/ticket/ui/buy-battle-ticket-button";
import { HOME_COMPETITION_CONTENT } from "@/features/competition-promo/model/content";
import { CompetitionPrizeBanner } from "@/features/competition-promo/ui/competition-prize-banner";
import { NailMomentLogo } from "@/shared/assets/icons";
import { IMAGES } from "@/shared/config/const";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { Cluster } from "@/shared/ui/layout/cluster";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";

export function BattleSection() {
  return (
    <Section
      uiId="battle-hero-section"
      density="hero"
      innerClassName="max-w-none"
      className="px-0 pt-0 md:px-0 md:pt-0 xl:px-0"
    >
      <div
        data-ui="battle-hero-shell"
        className="relative isolate flex h-[clamp(650px,100dvh,750px)] flex-col overflow-hidden bg-surface-muted/50 px-4 pb-[15px] pt-10 md:px-8 md:pb-[15px] md:pt-14"
      >
        <img
          data-ui="battle-hero-background"
          src={IMAGES.DECORATIVE_BG_1}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
        />
        <DecorativeImage
          uiId="battle-hero-leaf-right"
          src={IMAGES.DECORATIVE_LEAF_1}
          className="-right-8 -top-16 z-[1] h-[21rem] w-[16rem]"
        />
        <DecorativeImage
          uiId="battle-hero-leaf-left"
          src={IMAGES.DECORATIVE_LEAF_4}
          className="-left-8 top-1 z-[1] h-48 w-44"
        />

        <div
          data-ui="battle-hero-content"
          className="relative z-[2] flex flex-1 flex-col items-center pt-6 text-center"
        >
          <Cluster uiId="battle-hero-badges" gap="sm" justify="center" className="w-full">
            <Badge uiId="battle-hero-date" className="min-w-[9rem] border-0 bg-surface-card/90">
              7 червня
            </Badge>
            <Badge uiId="battle-hero-city" className="min-w-[9rem] border-0 bg-surface-card/90">
              Варшава
            </Badge>
          </Cluster>

          <div className="flex-1" />

          <Stack uiId="battle-hero-copy" gap="sm" className="w-full max-w-3xl items-center">
            <NailMomentLogo data-ui="battle-hero-logo" className="w-full max-w-sm" />
            <SectionHeader
              uiId="battle-hero-title"
              as="h1"
              title="Битва Майстрів"
              description="Конкурс для майстрів манікюру у рамках фестивалю Nail Moment."
              size="display"
              tone="accent"
              descriptionClassName="text-base leading-7 md:text-xl md:leading-8"
            />
          </Stack>

          <div className="flex-1" />

          <Stack uiId="battle-hero-actions" gap="sm" className="w-full max-w-2xl">
            <CompetitionPrizeBanner
              uiId="battle-hero-prize"
              title={HOME_COMPETITION_CONTENT.battle.prizeTitle ?? ""}
              subtitle={HOME_COMPETITION_CONTENT.battle.prizeSubtitle ?? ""}
              className="px-0 py-0"
            />
            <BuyBattleTicketButton className="w-full" />
            <div data-ui="battle-hero-shortcuts" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Button uiId="battle-hero-rules" variant="secondary" size="sm" asChild className="w-full">
                <Link href="/battle/regulamin">Умови участі</Link>
              </Button>
              <Button
                uiId="battle-hero-festival"
                variant="secondary"
                size="sm"
                asChild
                className="w-full"
              >
                <Link href="/#ticket-section">Квитки на фестиваль</Link>
              </Button>
            </div>
          </Stack>
        </div>
      </div>
    </Section>
  );
}
