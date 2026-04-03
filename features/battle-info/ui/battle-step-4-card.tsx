import Link from "next/link";
import { BattleStepCard } from "@/features/battle-info/ui/battle-step-card";
import { ArticleCallout } from "@/shared/ui/article";
import { Button } from "@/shared/ui/button";
import { INFO_URL } from "@/shared/config/const";
import { TypographyText } from "@/shared/ui/typography";

export function BattleStep4Card() {
  return (
    <BattleStepCard stepNumber={4} title="Візьми участь у відбірковому турі">
      <TypographyText
        as="p"
        uiId="battle-step-4-text-1"
        align="left"
        size="body"
        tone="default"
      >
        Обери свою номінацію та надішли 1–3 фотографії своєї ОДНІЄЇ роботи.
      </TypographyText>

      <ArticleCallout uiId="battle-step-4-callout" tone="danger">
        <TypographyText
          as="p"
          uiId="battle-step-4-callout-text"
          align="left"
          size="body"
          tone="default"
          className="whitespace-pre-line font-black text-red-900"
        >
          {"Останній день прийому робіт:\n10 травня"}
        </TypographyText>
      </ArticleCallout>

      <TypographyText
        as="p"
        uiId="battle-step-4-text-2"
        align="left"
        size="body"
        tone="default"
      >
        Усі роботи, які відповідають умовам конкурсу, будуть опубліковані для публічного
        голосування у телеграм-боті (посилання надамо в день першого голосування)
      </TypographyText>

      <TypographyText
        as="p"
        uiId="battle-step-4-text-3"
        align="left"
        size="body"
        tone="default"
      >
        За результатами голосування 3 (три) роботи з кожної номінації, які отримають найбільшу
        кількість голосів — пройдуть у фінальний тур конкурсу.
      </TypographyText>

      <Button
        uiId="battle-step-4-action"
        variant="secondary"
        size="sm"
        asChild
        className="w-full border-2 border-brand-brown font-black hover:bg-brand-brown/5 sm:ml-auto sm:w-auto"
      >
        <Link href={INFO_URL.TELEGRAM} target="_blank" rel="noopener noreferrer">
          Вислати свою роботу
        </Link>
      </Button>
    </BattleStepCard>
  );
}
