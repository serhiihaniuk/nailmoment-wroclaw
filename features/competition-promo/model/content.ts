import { IMAGES } from "@/shared/config/const";

export const HOME_COMPETITION_CONTENT = {
  battle: {
    id: "battle-of-masters",
    imageUrl: IMAGES.BATTLE_INTRO_PHOTO,
    imageAlt: "Battle of Masters Competition",
    title: "Супер-конкурс БИТВА МАЙСТРІВ",
    description: "2000 зл + СУПЕР ПРИЗ від спонсора конкурсу",
    prizeTitle: "2000 зл + СУПЕР ПРИЗ",
    prizeSubtitle: "від спонсора конкурсу",
    href: "/battle",
    buttonText: "Перейти до «Битви Майстрів»",
    surface: "accent" as const,
  },
  peoplesSpeaker: {
    id: "peoples-speaker",
    imageUrl: IMAGES.PEOPLES_SPEAKER_TROPHY,
    imageAlt: "People's Speaker trophy",
    title: "ПРИЙМИ УЧАСТЬ У КОНКУРСІ НАРОДНИЙ СПІКЕР",
    description:
      "Якщо ти гориш своєю справою та хочеш запалити інших, виступи зі спічем або МК на головній сцені фестивалю Nail Moment",
    href: "/speaker",
    buttonText: "Перейти до «Народного спікера»",
    surface: "default" as const,
  },
};
