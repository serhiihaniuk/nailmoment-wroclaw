import React from "react";
import { cn } from "@/lib/utils";
import { TicketCard, type TicketInfo } from "@/blocks/ui/ticket-card";
import { SectionHeader } from "@/components/ui/section-header";

const PLACEHOLDER_LIME_URL =
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/assets/lime-mtqShEwvjgePqjyG6xw9xmvV5TxpSp";
const PLACEHOLDER_LEMON_URL =
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/assets/orange-smu9PyPmvK9EvWuR6hGxSYZImsmDTs";
const PLACEHOLDER_PASSION_URL =
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/assets/passion-BFAzuchqdHn4ZGhp76WW5Yp6AqIVZe";

const ticketData: Omit<TicketInfo, "vipFeatures">[] = [
  // Use Omit as vipFeatures is handled internally now
  {
    id: "guest",
    variant: "guest",
    imageUrl: PLACEHOLDER_LIME_URL,
    imageAlt: "Lime slice illustration",
    title: "GUEST",
    features: [
      { value: "(вхід від 9:00 до 14:00)", isVip: false },
      { value: "доступ до nail-маркету", isVip: false },
      { value: "доступ до Малої Зали з МК", isVip: false },
      { value: "нетворкінг з учасниками", isVip: false },
      { value: "доступ до закритого телеграм - каналу", isVip: false },
    ],
    price: "50 Zł",
    buttonText: "ПЕРЕЙТИ ДО ОПЛАТИ",
  },
  {
    id: "standard",
    variant: "standard",
    imageUrl: PLACEHOLDER_LEMON_URL,
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
    price: "390 Zł",
    buttonText: "ПЕРЕЙТИ ДО ОПЛАТИ",
  },
  {
    id: "vip",
    variant: "vip",
    imageUrl: PLACEHOLDER_PASSION_URL,
    imageAlt: "Passion fruit slice illustration",
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
    price: "890 Zł",
    buttonText: "ПЕРЕЙТИ ДО ОПЛАТИ",
  },
];

interface TicketSectionProps {
  className?: string;
}

export const TicketSection: React.FC<TicketSectionProps> = ({ className }) => {
  return (
    <section className={cn("px-4 ", className)}>
      <SectionHeader title="Квитки на фестиваль" className="mb-6" />
      <div className="relative rounded-xl mb-5 uppercase text-lg font-semibold flex items-center justify-center pr-20 pl-4 text-white bg-accent-pink bottom-0 left-0 right-0 h-16">
        <div>Придбати квиток Участника Битви Майстрів</div>
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
            title={ticket.title}
            features={ticket.features} // Pass the updated features array
            price={ticket.price}
            buttonText={ticket.buttonText}
          />
        ))}
      </div>
    </section>
  );
};
