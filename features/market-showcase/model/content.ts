import { IMAGES } from "@/shared/config/const";

export const MARKET_SHOWCASE_CONTENT = {
  title: "Nail-МАРКЕТ від Nail Moment. Твій ідеальний день для шопінгу!",
  cards: [
    {
      url: IMAGES.MARKET_1,
      caption:
        "Найкращі nail-бренди в одному місці. Гелі, лаки, бази, дизайни та аксесуари — усе, що потрібно майстру.",
    },
    {
      url: IMAGES.MARKET_2,
      caption:
        "Акції, від яких хочеться скупити все, та безпрограшні лотереї.",
    },
  ],
  boxopad: {
    url: IMAGES.BOXOPAD,
    title: "«БОКСОПАД»",
    description:
      "розіграші боксів з продукцією від провідних брендів",
  },
  whyAttendTitle: "Чому не можна пропустити",
  whyAttendItems: [
    {
      url: IMAGES.WHY_ATTEND_1,
      caption: "Супервигода, яку не знайдеш в онлайні",
    },
    {
      url: IMAGES.WHY_ATTEND_2,
      caption: "Живе спілкування, нові знайомства та натхнення",
    },
    {
      url: IMAGES.WHY_ATTEND_3,
      caption: "Подарунки та емоції, які залишаться з тобою надовго",
    },
  ],
} as const;
