import { BuyBattleTicketButton } from "@/entities/ticket/ui/buy-battle-ticket-button";
import { BattleStepCard } from "@/features/battle-info/ui/battle-step-card";
import { IconLink } from "@/shared/ui/icon-link";
import { TypographyText } from "@/shared/ui/typography";

export function BattleStep3Card() {
  return (
    <BattleStepCard stepNumber={3} title="Придбай квиток учасника">
      <TypographyText
        as="p"
        uiId="battle-step-3-text"
        align="left"
        size="body"
        tone="default"
        className="whitespace-pre-line text-brand-brown"
      >
        {"Щоб взяти участь у «Битві Майстрів», потрібно придбати квиток на обрану номінацію.\n\n📌 1 номінація = 1 квиток\n\nЯкщо ти хочеш брати участь у кількох номінаціях, потрібно придбати окремий квиток на кожну номінацію.\n\n✨ При участі у кількох номінаціях діє знижка для учасників.\n\nНаприклад:\n\n• 1 номінація — 199 zł\n• 2 номінації — 159 zł\n• 3 номінації — 119 zł\n• 4 номінації — 99 zł\n• 5 номінацій — 79 zł"}
      </TypographyText>

      <IconLink
        href="https://www.instagram.com/nail_moment_pl?igsh=YWZpY2JjOTFueXc5"
        uiId="battle-step-3-link"
        icon
        className="italic text-brand-brown decoration-brand-brown/40"
      >
        Додаткові номінації можна купити через дірект в Instagram.
      </IconLink>

      <BuyBattleTicketButton className="ml-auto w-auto self-end">
        Взяти участь у конкурсі
      </BuyBattleTicketButton>
    </BattleStepCard>
  );
}
