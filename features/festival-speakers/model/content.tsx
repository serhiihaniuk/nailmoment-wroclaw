import { type SpeakerProfile } from "@/entities/speaker/model/types";
import { shadowImageUrl } from "@/shared/config/const";

export const HOME_SPEAKER_SECTION = {
  title: "Спікери фестивалю",
};

export const HOME_SPEAKERS: SpeakerProfile[] = [
  {
    id: 1,
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/ragoza-bMjMeE9tpzi9EsVP6NOrFLgeGynAAd.jpg",
    imageAlt: "Ангеліна Рагоза",
    name: "Ангеліна Рагоза",
    description: (
      <>
        <p>
          «ЕКСПРЕС-НАРОЩУВАННЯ: техніка, яку всі шукають. Дизайн, який хочуть
          клієнти»
        </p>
      </>
    ),
  },
  {
    id: 2,
    imageUrl: shadowImageUrl,
    imageAlt: "Галина Орябінська",
    name: "Галина Орябінська",
    description: (
      <>
        <p>«Кар&apos;єра майстра: неочевидна ціна росту»</p>
      </>
    ),
  },
  {
    id: 3,
    imageUrl: shadowImageUrl,
    imageAlt: "Дарья Shark",
    name: "Дарья Shark",
    description: (
      <>
        <p>Від холодного клієнта до фаната вашого бренду</p>
      </>
    ),
  },
  {
    id: 4,
    imageUrl: shadowImageUrl,
    imageAlt: "Олеся Кушнірук",
    name: "Олеся Кушнірук",
    description: (
      <>
        <p>
          «З якими станами майстер може працювати сам, а коли вже потрібен
          подолог. Якщо працюємо, то як!?»
        </p>
      </>
    ),
  },
  {
    id: 5,
    imageUrl: shadowImageUrl,
    imageAlt: "Народний спікер 2026",
    name: "TBD",
    description: (
      <>
        <p>Народний спікер 2026</p>
      </>
    ),
  },
  {
    id: 6,
    imageUrl: shadowImageUrl,
    imageAlt: "Judi",
    name: "Judi",
    description: (
      <>
        <p>
          «Майстер-клас: техніка відновлення/реставрації квадрату та апаратний
          манікюр»
        </p>
      </>
    ),
  },
  {
    id: 7,
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/zvarych-1U0jIkTijnXkHE2qVUdMy2lIj2X34w.jpg",
    imageAlt: "Юлия Зварич",
    name: "Юлия Зварич",
    description: (
      <>
        <p>«Токсичні відносини з роботою» або «Міряємося-пісями»</p>
      </>
    ),
  },
];
