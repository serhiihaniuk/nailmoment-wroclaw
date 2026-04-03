import { Button } from "@/shared/ui/button";
import { ArticleCallout } from "@/shared/ui/article";
import { TypographyText } from "@/shared/ui/typography";
import { BattleStepCard } from "@/features/battle-info/ui/battle-step-card";
import Link from "next/link";

export function BattleStep2Card() {
  return (
    <BattleStepCard
      stepNumber={2}
      title="Придбай квиток на фестиваль Nail Moment (Standard, Maxi або VIP)"
    >
      <TypographyText
        as="p"
        uiId="battle-step-2-text"
        align="left"
        size="body"
        tone="default"
        className="whitespace-pre-line"
      >
        {
          "Щоб взяти участь у конкурсі «Битва Майстрів», необхідно бути учасником фестивалю Nail Moment.\n\nДля цього потрібно придбати квиток на фестиваль:\n\n• Standard\n• Maxi\n• VIP"
        }
      </TypographyText>

      <ArticleCallout
        uiId="battle-step-2-callout"
        tone="danger"
      >
        <TypographyText
          as="p"
          uiId="battle-step-2-callout-text"
          align="left"
          size="body"
          tone="default"
          className="font-black text-red-900"
        >
          ❗️Без квитка на фестиваль участь у конкурсі неможлива.
        </TypographyText>
      </ArticleCallout>

      <Button
        uiId="battle-step-2-action"
        variant="secondary"
        size="sm"
        asChild
        className="w-full border-2 border-brand-brown font-black hover:bg-brand-brown/5 sm:ml-auto sm:w-auto"
      >
        <Link href="/#ticket-section">Придбати квиток</Link>
      </Button>
    </BattleStepCard>
  );
}
