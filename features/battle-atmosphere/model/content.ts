import { IMAGES } from "@/shared/config/const";

export const BATTLE_ATMOSPHERE_CONTENT = {
  atmosphereTitle: "Атмосфера «Битви Майстрів» на фестивалі Nail Moment 2025",
  atmosphereDescription:
    "Реальні майстри, справжні емоції та боротьба за перемогу",
  atmosphereImages: [
    IMAGES.BATTLE_PHOTO,
    IMAGES.PAST_EVENT,
    IMAGES.MARKET_1,
    IMAGES.MARKET_2,
    IMAGES.WHY_ATTEND_1,
    IMAGES.WHY_ATTEND_2,
  ],
  winnersTitle: "Роботи переможців попереднього конкурсу",
  winners: [
    {
      place: "1 місце",
      imageUrl: IMAGES.BATTLE_INTRO_PHOTO,
      imageAlt: "1 місце — робота переможця",
    },
    {
      place: "2 місце",
      imageUrl: IMAGES.PEOPLES_SPEAKER_PHOTO,
      imageAlt: "2 місце — робота переможця",
    },
    {
      place: "3 місце",
      imageUrl: IMAGES.SPEAKER_PLACEHOLDER,
      imageAlt: "3 місце — робота переможця",
    },
  ],
};
