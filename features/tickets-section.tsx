import React from "react";
import { cn } from "@/lib/utils";
import { TicketCard, type TicketInfo } from "@/blocks/ui/ticket-card";
import { SectionHeader } from "@/components/ui/section-header";
import { IMAGES } from "@/shared/const";

const ticketData: Omit<TicketInfo, "vipFeatures">[] = [
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
    buttonText: "ПЕРЕЙТИ ДО ОПЛАТИ",
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
    buttonText: "ПЕРЕЙТИ ДО ОПЛАТИ",
  },
  {
    id: "vip",
    variant: "vip",
    imageUrl: IMAGES.PASSION_URL,
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
    price: "890",
    buttonText: "ПЕРЕЙТИ ДО ОПЛАТИ",
  },
];

interface TicketSectionProps {
  className?: string;
}

export const TicketSection: React.FC<TicketSectionProps> = ({ className }) => {
  return (
    <section id="ticket-section" className={cn("px-4 scroll-mt-9", className)}>
      <SectionHeader title="Квитки на фестиваль" className="mb-6" />
      <div className="relative rounded-xl mb-5 uppercase text-lg font-semibold flex items-center justify-center pr-20 pl-4 text-white bg-accent-pink bottom-0 left-0 right-0 h-16">
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
