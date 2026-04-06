import { BattlePrizeList, type BattlePrizeGroup } from "@/features/battle-info/ui/battle-prize-list";
import { BattleStepCard } from "@/features/battle-info/ui/battle-step-card";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

type BattleStep6CardProps = {
  groups: BattlePrizeGroup[];
};

export function BattleStep6Card({ groups }: BattleStep6CardProps) {
  return (
    <BattleStepCard stepNumber={6} title="Забери головний приз 2000 зл та кубок переможця">
      <TypographyText
        as="p"
        uiId="battle-step-6-text"
        align="left"
        size="body"
        tone="default"
        className="whitespace-pre-line"
      >
          {"Результати конкурсу будуть оголошені 7 червня на сцені фестивалю Nail Moment у Варшаві.\n\nСаме там стане відомо, хто стане переможцем «Битви Майстрів»."}
      </TypographyText>

      <TypographyTitle
        as="p"
        uiId="battle-step-6-heading"
        order="order4"
        tone="accent"
        align="left"
        className="normal-case"
      >
        Переможці отримують
      </TypographyTitle>

      <BattlePrizeList
        uiId="battle-step-6-prizes"
        groups={groups}
        note="✨ Список подарунків буде доповнюватися після підтвердження партнерів."
      />
    </BattleStepCard>
  );
}
