import React from "react";
import { cn } from "@/lib/utils";
import { TicketCard, type TicketInfo } from "@/blocks/ui/ticket-card";
import { SectionHeader } from "@/components/ui/section-header";
import { IMAGES } from "@/shared/const";
import { Section } from "@/blocks/ui/section";

const priceIncreaseDate = "12.05";
const newGuestPrice = "60";
const newStandardPrice = "429";
const newVipPrice = "729";
const newMaxiPrice = "590";

const ticketData: TicketInfo[] = [
  {
    id: "guest",
    variant: "guest",
    imageUrl: IMAGES.LIME_URL,
    imageAlt: "Lime slice illustration",
    title: "GUEST",
    features: [
      { value: "(вхід від 9:00 до 14:00)", isVip: false },
      { value: "доступ до nail-маркету", isVip: false },
      { value: "доступ до Малої Зали з МК", isVip: false },
      { value: "нетворкінг з учасниками", isVip: false },
      { value: "доступ до закритого телеграм - каналу", isVip: false },
    ],
    price: "50",
    priceIncreaseDate: priceIncreaseDate,
    newPrice: newGuestPrice,
    buttonText: "ПЕРЕЙТИ ДО ОПЛАТИ",
    href: "https://buy.stripe.com/28o4gmgqdaZI7Ty3cD", //60
  },
  {
    id: "standard",
    variant: "standard",
    imageUrl: IMAGES.LEMON_URL,
    imageAlt: "Lemon/Orange slice illustration",
    title: "STANDARD",
    features: [
      { value: "доступ до nail-маркету", isVip: false },
      { value: "усі виступи спікерів", isVip: false },
      { value: "доступ до Малої Зали з МК", isVip: false },
      { value: "нетворкінг з учасниками", isVip: false },
      { value: "доступ до закритого телеграм - каналу", isVip: false },
      { value: "afterparty на терасі", isVip: false },
    ],
    price: "390",
    priceIncreaseDate: priceIncreaseDate,
    newPrice: newStandardPrice,
    buttonText: "ПЕРЕЙТИ ДО ОПЛАТИ",
    href: "https://buy.stripe.com/8wM14agqd4Bkc9O9B0", // 429
  },
  {
    id: "maxi",
    variant: "maxi",
    imageUrl: IMAGES.PINEAPPLE_URL, // Placeholder for your pineapple image
    imageAlt: "Pineapple slice illustration",
    title: "MAXI",
    features: [
      { value: "місце в центральній зоні (3-5 ряд)", isVip: false },
      { value: "доступ до всіх лекцій та майстер-класів", isVip: false },
      {
        value: "презентації спікерів (залишаться з тобою назавжди)",
        isVip: false,
      },
      { value: "доступ до закритого телеграм-каналу", isVip: false },
      { value: "нейл маркет", isVip: false },
      { value: "мерч від організаторів", isVip: false },
      { value: "живий сертифікат", isVip: false },
      { value: "afterparty", isVip: false },
      { value: "подарунки від партнерів", isVip: false },
    ],
    price: "590",
    priceIncreaseDate: priceIncreaseDate,
    newPrice: newMaxiPrice,
    soldOut: true,
    buttonText: "ПЕРЕЙТИ ДО ОПЛАТИ",
    href: "https://buy.stripe.com/4gM4gz9d50Rq7LG7TJc7u0u",
  },
  {
    id: "vip",
    variant: "vip",
    imageUrl: IMAGES.PASSION_URL,
    imageAlt: "Passion fruit slice illustration",
    title: "VIP",
    features: [
      { value: "презентації спікерів", isVip: true },
      { value: "мерч фестивалю", isVip: true },
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
    price: "699",
    soldOut: true,
    priceIncreaseDate: priceIncreaseDate,
    newPrice: newVipPrice,
    buttonText: "ПЕРЕЙТИ ДО ОПЛАТИ",
    href: "https://buy.stripe.com/aEUeV0c9X3xg6Pu14t", // 729
  },
];

interface TicketSectionProps {
  className?: string;
}

export const TicketSection: React.FC<TicketSectionProps> = ({ className }) => {
  const soldOutDate = new Date("2025-07-27T23:10:00");
  const isSoldOut = new Date() > soldOutDate;
  return (
    <Section id="ticket-section" className={cn("scroll-mt-9", className)}>
      <SectionHeader title="Квитки на фестиваль" className="mb-6" />
      <div className="relative max-w-96 mx-auto rounded-xl mb-5 uppercase text-lg font-semibold flex items-center justify-center pr-20 pl-4 text-white bg-accent-pink bottom-0 left-0 right-0 h-16">
        <div>
          <a href="#battle-of-masters">
            Придбати квиток Участника Битви Майстрів
          </a>
        </div>
        <div className="w-[42px] h-[74px] absolute right-[10px] bottom-[10px]">
          <img
            alt="icon"
            className="w-[42px] h-[74px]"
            src="https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/img-finger-WdpnLoNKOMaSCSWqLTsxyzt6qn1dTL"
          />
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
            soldOut={isSoldOut || ticket.soldOut}
          />
        ))}
      </div>
    </Section>
  );
};
