import React from "react";
import { cn } from "@/lib/utils";
import { TicketCard, type TicketInfo } from "@/blocks/ui/ticket-card";
import { SectionHeader } from "@/components/ui/section-header";
import { IMAGES } from "@/shared/const";
import { Section } from "@/blocks/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ticketData: TicketInfo[] = [
  {
    id: "standard",
    variant: "standard",
    imageUrl: IMAGES.TICKET_STANDARD_DECOR,
    imageAlt: "Standard ticket decoration",
    title: "Standard",
    features: [
      { value: "доступ до nail-маркету", isVip: false },
      { value: "усі виступи спікерів", isVip: false },
      { value: "доступ до Малої Зали з МК", isVip: false },
      { value: "нетворкінг з учасниками", isVip: false },
      { value: "доступ до закритого телеграм - каналу", isVip: false },
      { value: "afterparty на терасі", isVip: false },
    ],
    price: "499",
    newPrice: "399",
    buttonText: "Перейти до оплати",
    href: "https://buy.stripe.com/8wM14agqd4Bkc9O9B0",
  },
  {
    id: "vip",
    variant: "vip",
    imageUrl: IMAGES.TICKET_VIP_DECOR,
    imageAlt: "VIP ticket decoration",
    title: "VIP",
    features: [
      { value: "місця у перших рядах", isVip: true },
      { value: "подарунки від брендів", isVip: true },
      { value: "сертифікат про участь у заході", isVip: true },
      { value: "доступ до nail-маркету", isVip: false },
      { value: "усі виступи спікерів", isVip: false },
      { value: "доступ до Малої Зали з МК", isVip: false },
      { value: "нетворкінг з учасниками", isVip: false },
      { value: "доступ до закритого телеграм - каналу", isVip: false },
      { value: "afterparty на терасі", isVip: false },
    ],
    price: "899",
    newPrice: "729",
    buttonText: "Перейти до оплати",
    href: "https://buy.stripe.com/aEUeV0c9X3xg6Pu14t",
  },
];

interface TicketSectionProps {
  className?: string;
}

export const TicketSection: React.FC<TicketSectionProps> = ({ className }) => {
  return (
    <Section id="ticket-section" className={cn("scroll-mt-9", className)}>
      <SectionHeader title="Квитки на фестиваль" className="mb-6" />

      {/* Battle participant ticket card */}
      <div className="max-w-96 mx-auto mb-8 bg-yellow-foreground rounded-xl p-5 text-white">
        <img
          src={IMAGES.TICKET_BATTLE_DECOR}
          alt="Battle ticket"
          className="w-full rounded-xl mb-4 object-cover"
        />
        <div className="text-center space-y-2">
          <p className="text-base">Участь у конкурсі</p>
          <h3 className="text-2xl font-bold">Битва Майстрів</h3>
          <p className="text-base">у рамках фестивалю Nail Moment</p>
        </div>
        <div className="space-y-2 mt-4">
          <div className="bg-white/20 rounded-md px-3 py-2 text-sm">
            🏆Можливість виграти головний приз — 2000 zł
          </div>
          <div className="bg-white/20 rounded-md px-3 py-2 text-sm">
            🎁 Цінні подарунки від Головного спонсора конкурсу та партнерів фестивалю
          </div>
          <div className="bg-white/20 rounded-md px-3 py-2 text-sm">
            🥈🥉 Призи для 2 та 3 місця — сертифікати переможців та подарункові набори
          </div>
          <div className="bg-white/20 rounded-md px-3 py-2 text-sm">
            🎁 Подарунковий пакет для фіналістів конкурсу від партнерів фестивалю
          </div>
          <div className="bg-white/20 rounded-md px-3 py-2 text-sm">
            📜 Сертифікат фіналіста або переможця конкурсу
          </div>
        </div>
        <p className="text-xs mt-3 opacity-70">
          * Список подарунків буде доповнюватися після підтвердження партнерів.
          {"\n"}** Минулого року загальна вартість подарунків для переможця перевищила 5000 zł
        </p>
        <div className="flex flex-col gap-2 mt-4">
          <Button className="bg-blue-background text-yellow-foreground w-full" asChild>
            <a href="#battle-of-masters">
              Придбати квиток учасника Битви Майстрів
            </a>
          </Button>
          <Button variant="secondary" className="border-white text-white w-full" asChild>
            <Link href="/battle">Дізнатися подробиці</Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center">
        {ticketData.map((ticket) => (
          <TicketCard
            key={ticket.id}
            variant={ticket.variant}
            imageUrl={ticket.imageUrl}
            imageAlt={ticket.imageAlt}
            features={ticket.features}
            price={ticket.newPrice}
            buttonText={ticket.buttonText}
            href={ticket.href}
            soldOut={false}
          />
        ))}
      </div>
    </Section>
  );
};
