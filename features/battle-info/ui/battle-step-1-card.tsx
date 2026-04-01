import { Button } from "@/shared/ui/button";
import { TypographyText } from "@/shared/ui/typography";
import { BattleStepCard } from "@/features/battle-info/ui/battle-step-card";
import Link from "next/link";

export function BattleStep1Card() {
  return (
    <BattleStepCard stepNumber={1} title="Ознайомся з умовами конкурсу">
      <TypographyText
        as="p"
        uiId="battle-step-1-text"
        align="left"
        size="body"
        tone="default"
        className="whitespace-pre-line"
      >
        {"Уважно прочитай повні умови участі у конкурсі.\nПодавши заявку, ти підтверджуєш, що ознайомився та погоджуєшся з усіма правилами конкурсу."}
      </TypographyText>

      <Button
        uiId="battle-step-1-action"
        variant="secondary"
        size="sm"
        asChild
        className="w-full border-2 border-brand-brown font-black hover:bg-brand-brown/5 sm:ml-auto sm:w-auto"
      >
        <Link href="/battle/regulamin">Прочитати умови</Link>
      </Button>
    </BattleStepCard>
  );
}
