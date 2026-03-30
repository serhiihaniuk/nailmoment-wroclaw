import { BuyBattleTicketButton } from "@/entities/ticket/ui/buy-battle-ticket-button";
import { BattlePrizeList, type BattlePrizeGroup } from "@/features/battle-info/ui/battle-prize-list";
import { Card, CardContent } from "@/shared/ui/card";
import { IMAGES } from "@/shared/config/const";
import { Image } from "@/shared/ui/image";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

type BattleIntroCardProps = {
  groups: BattlePrizeGroup[];
};

export function BattleIntroCard({ groups }: BattleIntroCardProps) {
  return (
    <Card
      uiId="battle-intro"
      spacing="none"
      className="w-full max-w-4xl rounded-[2rem] border-transparent bg-brand-brown text-text-inverse"
    >
      <CardContent
        uiId="battle-intro"
        className="flex flex-col items-center gap-4 px-6 py-8 text-center md:px-10 md:py-10"
      >
        <TypographyTitle
          as="h2"
          uiId="battle-intro-title"
          order="order2"
          tone="inverse"
          className="max-w-[18ch] normal-case text-text-inverse"
        >
          Битва Майстрів — конкурс, де може перемогти саме твоя робота
        </TypographyTitle>

        <TypographyText
          uiId="battle-intro-text-1"
          size="lead"
          tone="inverse"
          className="max-w-3xl text-text-inverse"
        >
          «Битва Майстрів» — це конкурс для майстрів манікюру, де головне не титули та не
          популярність.
        </TypographyText>

        <Image
          uiId="battle-intro"
          url={IMAGES.BATTLE_INTRO_PHOTO}
          alt="Битва Майстрів"
          className="w-full rounded-[1.4rem]"
          sizes="(max-width: 768px) 100vw, 896px"
        />

        <TypographyTitle
          as="p"
          uiId="battle-intro-highlight"
          order="order3"
          tone="inverse"
          className="max-w-3xl normal-case text-text-inverse"
        >
          Головне — твій дизайн, твоя креативність та твоя майстерність.
        </TypographyTitle>

        <TypographyText
          uiId="battle-intro-text-2"
          size="lead"
          tone="inverse"
          className="max-w-3xl text-text-inverse"
        >
          Роботи оцінюють самі майстри nail-індустрії, тому перемагає не ім&apos;я, а робота, яка
          дійсно вражає.
        </TypographyText>

        <TypographyTitle
          as="p"
          uiId="battle-intro-prizes-heading"
          order="order4"
          tone="inverse"
          className="mt-2 normal-case text-text-inverse"
        >
          🏆 Переможці отримують
        </TypographyTitle>

        <BattlePrizeList
          uiId="battle-intro-prizes"
          tone="inverse"
          groups={groups}
          note="✨ Список подарунків буде доповнюватися після підтвердження партнерів."
        />

        <TypographyTitle
          as="p"
          uiId="battle-intro-promise"
          order="order3"
          tone="inverse"
          className="mt-2 max-w-3xl normal-case text-text-inverse"
        >
          Можливо, цього року переможе саме твоя робота
        </TypographyTitle>

        <BuyBattleTicketButton className="w-full">Взяти участь у конкурсі</BuyBattleTicketButton>
      </CardContent>
    </Card>
  );
}
