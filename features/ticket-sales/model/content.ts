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
      {
        icon: "🥇",
        text: "1 місце — грошова нагорода 2000 zł, кубок переможця «Битви Майстрів», від партнера конкурсу XNail та подарунки від партнерів фестивалю",
      },
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
      { value: "нетворкінг з учасниками", isVip: false },
      { value: "доступ до закритого телеграм-каналу", isVip: false },
    ],
    price: "399",
    buttonText: "Придбати квиток",
    href: "/#ticket-section",
  },
  {
    id: "maxi",
    variant: "maxi",
    imageUrl: IMAGES.TICKET_STANDARD_DECOR,
    imageAlt: "Maxi ticket decoration",
    title: "Maxi",
    features: [
      { value: "подарунки від брендів", isVip: false },
      { value: "сертифікат про участь у заході", isVip: false },
      { value: "доступ до nail-маркету", isVip: false },
      { value: "усі виступи спікерів", isVip: false },
      { value: "нетворкінг з учасниками", isVip: false },
      { value: "доступ до закритого телеграм-каналу", isVip: false },
    ],
    price: "590",
    buttonText: "Придбати квиток",
    href: "/#ticket-section",
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
      { value: "нетворкінг з учасниками", isVip: false },
      { value: "доступ до закритого телеграм-каналу", isVip: false },
    ],
    price: "949",
    buttonText: "Придбати квиток",
    href: "/#ticket-section",
  },
];
