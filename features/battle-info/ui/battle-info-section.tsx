import { BATTLE_ATMOSPHERE_CONTENT } from "@/features/battle-atmosphere/model/content";
import { BattleAtmosphereSection } from "@/features/battle-atmosphere/ui/battle-atmosphere-section";
import { CriteriaSection } from "@/features/battle-criteria/ui/criteria-section";
import { BattleIntroCard } from "@/features/battle-info/ui/battle-intro-card";
import { BattleStep1Card } from "@/features/battle-info/ui/battle-step-1-card";
import { BattleStep2Card } from "@/features/battle-info/ui/battle-step-2-card";
import { BattleStep3Card } from "@/features/battle-info/ui/battle-step-3-card";
import { BattleStep4Card } from "@/features/battle-info/ui/battle-step-4-card";
import { BattleStep5Card } from "@/features/battle-info/ui/battle-step-5-card";
import { BattleStep6Card } from "@/features/battle-info/ui/battle-step-6-card";
import type { BattlePrizeGroup } from "@/features/battle-info/ui/battle-prize-list";
import { ImageCarousel } from "@/shared/ui/image-carousel";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

const BATTLE_PRIZE_GROUPS: BattlePrizeGroup[] = [
  {
    icon: "🥇",
    title: "1 місце",
    lines: [
      "Грошову нагороду — 2000 zł",
      "Кубок переможця «Битви Майстрів»",
      "Від партнера конкурсу XNail",
      "Подарунки від партнерів фестивалю",
    ],
  },
  {
    icon: "🥈 🥉",
    title: "2 та 3 місце",
    lines: [
      "Сертифікати переможців",
      "Подарункові набори від партнерів конкурсу",
    ],
  },
  {
    icon: "🎁",
    title: "Фіналісти конкурсу",
    lines: [
      "Подарунки від партнерів фестивалю",
      "Сертифікат фіналіста",
    ],
  },
];

export function BattleInfoSection() {
  return (
    <Section uiId="battle-info-section" density="compact">
      <Stack uiId="battle-info-content" gap="xl" className="items-center">
        <BattleIntroCard groups={BATTLE_PRIZE_GROUPS} />

        <BattleAtmosphereSection />

        <Stack uiId="battle-steps-title" gap="sm" className="items-center text-center">
          <SectionHeader uiId="battle-steps-heading" title="Етапи участі" tone="accent" />
          <TypographyText
            uiId="battle-steps-description"
            size="body"
            tone="default"
          >
            Увесь шлях від ознайомлення з умовами до фіналу конкурсу.
          </TypographyText>
        </Stack>

        <Stack uiId="battle-steps" gap="lg" className="mx-auto w-full max-w-4xl">
          <BattleStep1Card />
          <BattleStep2Card />
          <BattleStep3Card />
          <BattleStep4Card />
          <BattleStep5Card />
          <BattleStep6Card groups={BATTLE_PRIZE_GROUPS} />
        </Stack>

        <Stack uiId="battle-cup-slider" gap="lg" className="w-full max-w-4xl items-center">
          <TypographyTitle
            as="h2"
            uiId="battle-cup-slider-title"
            order="order3"
            tone="accent"
            className="max-w-[24ch] text-center normal-case"
          >
            {BATTLE_ATMOSPHERE_CONTENT.cupTitle}
          </TypographyTitle>

          <ImageCarousel
            images={BATTLE_ATMOSPHERE_CONTENT.cupImages}
            imageAlt="Можливо, цього року саме ти піднімеш кубок переможця"
            className="max-w-4xl"
            frameClassName="aspect-[3/4]"
            imageWidth={1200}
            imageHeight={1600}
          />
        </Stack>

        <CriteriaSection />
      </Stack>
    </Section>
  );
}
