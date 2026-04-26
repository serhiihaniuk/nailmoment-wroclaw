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
    description: "базовий квиток для участі",
    features: [
      { value: "сертифікат про участь (онлайн)", isVip: false },
      { value: "доступ до nail-маркету", isVip: false },
      { value: "усі виступи спікерів", isVip: false },
      { value: "нетворкінг з учасниками", isVip: false },
      { value: "доступ до закритого телеграм-каналу", isVip: false },
    ],
    note: "ідеально, якщо хочеш познайомитись із фестивалем",
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
    description: "ОПТИМАЛЬНИЙ ВИБІР 🔥",
    features: [
      { value: "презентації спікерів", isVip: false },
      { value: "подарунки від брендів", isVip: false },
      { value: "сертифікат про участь у заході", isVip: false },
      { value: "доступ до nail-маркету", isVip: false },
      { value: "усі виступи спікерів", isVip: false },
      { value: "нетворкінг з учасниками", isVip: false },
      { value: "доступ до закритого телеграм-каналу", isVip: false },
    ],
    note: "максимум користі за свою ціну",
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
    description: "ПРЕМІУМ ДОСВІД ✨\n(обмежена кількість місць)",
    features: [
      { value: "бізнес-ланч", isVip: true, icon: "🔥" },
      { value: "місця у перших рядах", isVip: true, icon: "🔥" },
      {
        value: "розширені подарунки від брендів та організаторів",
        isVip: true,
        icon: "🔥",
      },
      { value: "сертифікат про участь", isVip: false },
      { value: "презентації спікерів", isVip: false },
      { value: "доступ до nail-маркету", isVip: false },
      { value: "усі виступи спікерів", isVip: false },
      { value: "нетворкінг з учасниками", isVip: false },
      { value: "доступ до закритого телеграм-каналу", isVip: false },
    ],
    note: "максимум комфорту + максимум цінності",
    price: "949",
    buttonText: "Придбати квиток",
    href: "/#ticket-section",
  },
];
