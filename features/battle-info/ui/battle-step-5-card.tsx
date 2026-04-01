import Link from "next/link";

import { BattleFinalWarningCallout } from "@/features/battle-info/ui/battle-final-warning-callout";
import { BattleStepCard } from "@/features/battle-info/ui/battle-step-card";
import { Button } from "@/shared/ui/button";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

export function BattleStep5Card() {
  return (
    <BattleStepCard stepNumber={5} title="Фінальний тур">
      <TypographyText
        as="p"
        uiId="battle-step-5-intro"
        align="left"
        size="body"
        tone="accent"
      >
        Якщо ти став фіналістом, приїжджай на фінал конкурсу «Битва
        Майстрів» у Варшаві.
      </TypographyText>

      <BattleFinalWarningCallout uiId="battle-step-5-callout" />

      <div data-ui="battle-step-5-final-resources" className="space-y-3">
        <TypographyTitle
          as="h4"
          uiId="battle-step-5-resources-title"
          order="order4"
          align="left"
          tone="accent"
          className="normal-case"
        >
          Що ти отримаєш на фіналі
        </TypographyTitle>
        <TypographyText
          as="p"
          uiId="battle-step-5-resources-label"
          align="left"
          size="body"
          tone="accent"
        >
          Тобі нададуть:
        </TypographyText>
        <TypographyText
          as="p"
          uiId="battle-step-5-resources-list"
          align="left"
          size="body"
          tone="accent"
          className="whitespace-pre-line"
        >
          {"• одну руку моделі для роботи\n• стіл\n• 2 стільці"}
        </TypographyText>
      </div>

      <div data-ui="battle-step-5-time" className="space-y-3">
        <TypographyTitle
          as="h4"
          uiId="battle-step-5-time-title"
          order="order4"
          align="left"
          tone="accent"
          className="normal-case"
        >
          Час для створення роботи
        </TypographyTitle>
        <TypographyText
          as="p"
          uiId="battle-step-5-time-label"
          align="left"
          size="body"
          tone="accent"
        >
          У фіналі тобі буде надано:
        </TypographyText>
        <TypographyText
          as="p"
          uiId="battle-step-5-time-list"
          align="left"
          size="body"
          tone="accent"
          className="whitespace-pre-line"
        >
          {"• 3 години для створення повного перевтілення однієї руки моделі за власним баченням\nПісля завершення роботи:\n• 30 хвилин на фото та відеозйомку роботи\n• 30 хвилин на підготовку фото- та відеопрезентації для фінального голосування"}
        </TypographyText>
      </div>

      <div data-ui="battle-step-5-finalists-note" className="space-y-3">
        <TypographyTitle
          as="h4"
          uiId="battle-step-5-finalists-title"
          order="order4"
          align="left"
          tone="accent"
          className="normal-case"
        >
          Важливо для фіналістів
        </TypographyTitle>
        <TypographyText
          as="p"
          uiId="battle-step-5-finalists-copy"
          align="left"
          size="body"
          tone="accent"
          className="whitespace-pre-line"
        >
          {"Якщо ти потрапив у фінал, обов’язково ознайомся з правилами участі у фінальному турі.\n\nУ правилах описано:\n• що дозволено використовувати під час фіналу\n• які матеріали можна приносити\n• що заборонено під час створення роботи"}
        </TypographyText>
      </div>

      <Button
        uiId="battle-step-5-action"
        variant="secondary"
        size="sm"
        asChild
        className="w-full border-2 border-brand-brown font-black hover:bg-brand-brown/5 sm:ml-auto sm:w-auto"
      >
        <Link href="/battle/regulamin#final-rules">
          Ознайомитись з правилами фіналу
        </Link>
      </Button>
    </BattleStepCard>
  );
}
