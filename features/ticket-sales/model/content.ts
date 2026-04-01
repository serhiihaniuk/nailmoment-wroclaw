import { IMAGES } from "@/shared/config/const";
import { type TicketInfo } from "@/entities/ticket/model/types";

export const HOME_TICKET_SECTION = {
  title: "Квитки на фестиваль",
  battleCard: {
    imageUrl: IMAGES.TICKET_BATTLE_DECOR,
    imageAlt: "Battle ticket",
    eyebrow: "Участь у конкурсі",
    title: "Битва Майстрів",
    description: "у рамках фестивалю Nail Moment",
    highlights: [
      { icon: "🥇", text: "1 місце — грошова нагорода 2000 zł, кубок переможця «Битви Майстрів», цінні подарунки від головного спонсора та партнерів фестивалю" },
      {
        icon: "🥈 🥉",
        text: "2 та 3 місця — сертифікати переможців і подарункові набори від партнерів конкурсу",
      },
      {
        icon: "🎁",
        text: "Фіналісти конкурсу — подарунки від партнерів фестивалю та сертифікат фіналіста",
      },
    ],
    notes: [
      "✨ Список подарунків буде доповнюватися після підтвердження партнерів.",
    ],
  },
};

export const HOME_TICKETS: TicketInfo[] = [
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
      { value: "доступ до закритого телеграм-каналу", isVip: false },
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
      { value: "доступ до закритого телеграм-каналу", isVip: false },
      { value: "afterparty на терасі", isVip: false },
    ],
    price: "899",
    newPrice: "729",
    buttonText: "Перейти до оплати",
    href: "https://buy.stripe.com/aEUeV0c9X3xg6Pu14t",
  },
];
