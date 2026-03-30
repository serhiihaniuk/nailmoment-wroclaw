import { BattleAtmosphereSection } from "@/features/battle-atmosphere/ui/battle-atmosphere-section";
import { BattleIntroCard } from "@/features/battle-info/ui/battle-intro-card";
import { BattleStep1Card } from "@/features/battle-info/ui/battle-step-1-card";
import { BattleStep2Card } from "@/features/battle-info/ui/battle-step-2-card";
import { BattleStep3Card } from "@/features/battle-info/ui/battle-step-3-card";
import { BattleStep4Card } from "@/features/battle-info/ui/battle-step-4-card";
import { BattleStep5Card } from "@/features/battle-info/ui/battle-step-5-card";
import { BattleStep6Card } from "@/features/battle-info/ui/battle-step-6-card";
import type { BattlePrizeGroup } from "@/features/battle-info/ui/battle-prize-list";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyText } from "@/shared/ui/typography";

const BATTLE_PRIZE_GROUPS: BattlePrizeGroup[] = [
  {
    icon: "🥇",
    title: "1 місце",
    lines: [
      "Грошову нагороду — 2000 zł",
      "Кубок переможця «Битви Майстрів»",
      "Цінні подарунки від головного спонсора",
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
            className="text-brand-brown"
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
      </Stack>
    </Section>
  );
}
