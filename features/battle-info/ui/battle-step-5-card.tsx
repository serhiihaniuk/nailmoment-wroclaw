import Link from "next/link";
import { BattleStepCard } from "@/features/battle-info/ui/battle-step-card";
import { ArticleCallout } from "@/shared/ui/article";
import { Button } from "@/shared/ui/button";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

export function BattleStep5Card() {
  return (
    <BattleStepCard stepNumber={5} title="Фінальний тур">
      <TypographyText
        as="p"
        uiId="battle-step-5-text"
        align="left"
        size="body"
        tone="default"
        className="text-brand-brown"
      >
        Якщо ти став фіналістом, приїжджай на фінал конкурсу «Битва Майстрів» у Варшаві.
      </TypographyText>

      <ArticleCallout
        uiId="battle-step-5-callout"
        className="whitespace-pre-line border-yellow-200 bg-yellow-50"
      >
        <TypographyText
          as="p"
          uiId="battle-step-5-callout-text"
          align="left"
          size="body"
          tone="default"
          className="whitespace-pre-line font-semibold text-brand-brown"
        >
          {"⚠️ УВАГА! Фінальний тур проходить за день до фестивалю Nail Moment.\n\n• 6 липня — фінал конкурсу «Битва Майстрів»\n• 7 липня — фестиваль Nail Moment"}
        </TypographyText>
      </ArticleCallout>

      <div data-ui="battle-step-5-section-1" className="flex flex-col gap-2">
        <TypographyTitle
          as="p"
          uiId="battle-step-5-section-1-title"
          order="order4"
          tone="accent"
          align="left"
          className="normal-case"
        >
          Що ти отримаєш на фіналі
        </TypographyTitle>
        <TypographyText
          as="p"
          uiId="battle-step-5-section-1-text"
          align="left"
          size="body"
          tone="default"
          className="whitespace-pre-line text-brand-brown"
        >
          {"Тобі нададуть:\n• одну руку моделі для роботи\n• стіл\n• 2 стільці"}
        </TypographyText>
      </div>

      <div data-ui="battle-step-5-section-2" className="flex flex-col gap-2">
        <TypographyTitle
          as="p"
          uiId="battle-step-5-section-2-title"
          order="order4"
          tone="accent"
          align="left"
          className="normal-case"
        >
          Час для створення роботи
        </TypographyTitle>
        <TypographyText
          as="p"
          uiId="battle-step-5-section-2-text"
          align="left"
          size="body"
          tone="default"
          className="whitespace-pre-line text-brand-brown"
        >
          {"У фіналі тобі буде надано:\n• 3 години для створення повного перевтілення однієї руки моделі за власним баченням\nПісля завершення роботи:\n• 30 хвилин на фото та відеозйомку роботи\n• 30 хвилин на підготовку фото- та відеопрезентації для фінального голосування"}
        </TypographyText>
      </div>

      <div data-ui="battle-step-5-section-3" className="flex flex-col gap-2">
        <TypographyTitle
          as="p"
          uiId="battle-step-5-section-3-title"
          order="order4"
          tone="accent"
          align="left"
          className="normal-case font-black"
        >
          Важливо для фіналістів
        </TypographyTitle>
        <TypographyText
          as="p"
          uiId="battle-step-5-section-3-text"
          align="left"
          size="body"
          tone="default"
          className="whitespace-pre-line text-brand-brown"
        >
          {"Якщо ти потрапив у фінал, обов’язково ознайомся з правилами участі у фінальному турі.\n\nУ правилах описано:\n• що дозволено використовувати під час фіналу\n• які матеріали можна приносити\n• що заборонено під час створення роботи"}
        </TypographyText>
      </div>

      <Button
        uiId="battle-step-5-action"
        variant="secondary"
        size="sm"
        asChild
        className="w-full border-2 border-brand-brown font-black text-brand-brown hover:bg-brand-brown/5 sm:ml-auto sm:w-auto"
      >
        <Link href="/battle/regulamin#final-rules">Ознайомитись з правилами фіналу</Link>
      </Button>
    </BattleStepCard>
  );
}
