import { IMAGES } from "@/shared/const";

export const HOME_COMPETITION_CONTENT = {
  battle: {
    id: "battle-of-masters",
    imageUrl: IMAGES.BATTLE_PHOTO,
    imageAlt: "Battle of Masters Competition",
    title: "Супер-конкурс БИТВА МАЙСТРІВ",
    description: "2000 зл + СУПЕР ПРИЗ від спонсору конкурсу",
    href: "/battle",
    buttonText: "Перейти до БИТВА МАЙСТРІВ",
    surface: "accent" as const,
  },
  peoplesSpeaker: {
    id: "peoples-speaker",
    imageUrl: IMAGES.PEOPLES_SPEAKER_PHOTO,
    imageAlt: "People's Speaker Competition",
    title: "Прийми участь у конкурсі Народний спікер",
    description:
      "Якщо ти гориш своєю справою та хочеш запалати інших, виступи зі спічем або МК на головній сцені фестивалю Nail Moment.",
    href: "/speaker",
    buttonText: "Перейти до Народний спікер",
    surface: "default" as const,
  },
};
