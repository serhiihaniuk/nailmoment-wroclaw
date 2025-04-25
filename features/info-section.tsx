import { Image } from "@/components/ui/image";
import { ListItem } from "@/components/ui/list-item";
import { cn } from "@/lib/utils";
import { AccentCard } from "@/blocks/ui/accent-card";
import { ImageCard } from "@/blocks/ui/image-card";
import { Button } from "@/components/ui/button";
import { ImageCaption } from "@/blocks/ui/image-caption";
import { SectionHeader } from "@/components/ui/section-header";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { IMAGES } from "@/shared/const";

const bulletPoints = [
  "збираємо топів nail-індустрії в одному місці. Ніякої води, тільки АКТУАЛЬНІ ТЕМИ ТА МК!",
  "обʼєднуємо майстрів манікюру та педикюру з усієї Європи",
  "запалюємо нові зірки серед майстрів",
  "даємо доступ до ТОПових знань, інновацій та можливостей для зростання",
];

const bulletPoints2 = [
  "Ми підтримуємо нейл-майстрів, допомагаємо їм будувати успішний бізнес",
  "Ми створюємо середовище, де кожен може навчатися, надихатися та знайомитися з однодумцями",
  "Ми розвиваємо індустрію нігтьового сервісу в польщі та виводимо її на новий рівень",
];

const PLACEHOLDER_IMG_URL =
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/placeholder-img-C7NSLnrtqDD9dUPfNxOqAZKQC3CEOT";

const HEADINGS = {
  FESTIVAL_INTRO:
    "Фестиваль де новачки можуть навчитися, професіонали РОЗВИВАТИСЯ ТА БУДУВАТИ КАР’ЄРУ",
  NAIL_MOMENT_MOTTO: "NAIL MOMENT– це місце сили, знань та можливостей!",
  MARKET_TITLE: "Nail-МАРКЕТ від Nail Moment Твій ідеальний день для шопінгу!",
  WHY_ATTEND_TITLE: "Чому не можна пропустити",
};

const ACCENT_CARD_WROCLAW = {
  TITLE_PART1: "Ми їдемо ",
  TITLE_PART2: "до Вроцлава",
  DESCRIPTION1:
    "Друге сердце Польщі та місто куди ви нас запрошували мільйони разів 🫶 і МИ ВИРІШИЛИ ЗНЯТИ ЦІЛИЙ ОСТРІВ, приїхати та розірвати фестивалем Nail Moment",
  DESCRIPTION2:
    "А саме Concordia Design Wrocław на острові Słodowej у самому центрі міста Вроцлав біля Старого міста",
  IMAGE_URL: PLACEHOLDER_IMG_URL,
};

const MARKET_CARDS_DATA = [
  {
    url: PLACEHOLDER_IMG_URL,
    caption:
      "Найкращі nail-бренди в одному місці. Гелі, лаки, бази, дизайни та аксесуари — все що потрібно майстру!",
    className: "",
    buttonText: null,
  },
  {
    url: PLACEHOLDER_IMG_URL,
    caption: "Акції, від яких хочеться скупити все! Та безпрограшні лотереї!",
    className: "",
    buttonText: null,
  },
  {
    url: PLACEHOLDER_IMG_URL,
    caption:
      "Мала зала для майстер-класів від ТОПових блогерів та інструкторів з 9:00 до 14:00",
    className: "gradient-orange text-white",
    buttonText: "ПРОГРАМА МАЙСТЕР-КЛАСІВ",
  },
];

const WHY_ATTEND_CAPTIONS_DATA = [
  {
    url: PLACEHOLDER_IMG_URL,
    caption: "Супервигода, яку не знайдеш в онлайні",
  },
  {
    url: PLACEHOLDER_IMG_URL,
    caption: "Живе спілкування, нові знайомствата натхнення",
  },
  {
    url: PLACEHOLDER_IMG_URL,
    caption: "Подарунки та емоції, які залишаться з тобою надовго",
  },
];

// --- Component Implementation ---

export const InfoSection = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-col px-4">
        <SectionHeader title={HEADINGS.FESTIVAL_INTRO} className="mb-4" />

        <div className="text-blue-foreground text-left self-stretch">
          Тільки ми:
        </div>
        <ul className="flex relative flex-col gap-1.5">
          {bulletPoints.map((text, i) => (
            <ListItem
              className={cn("bg-white w-[90%]", {
                "w-[95%]": i === 0 || i === 3,
                "w-[85%]": i === 1,
                "w-[80%]": i === 2,
              })}
              key={i}
              text={text}
            />
          ))}
          <DecorativeImage
            src={IMAGES.LIME_URL}
            className="right-0 translate-1/2 bottom-1/2 size-[180px]"
          />
        </ul>

        <SectionHeader
          title={HEADINGS.NAIL_MOMENT_MOTTO}
          className="mt-16 mb-4"
        />

        <ul className="flex flex-col gap-5 py-2.5 bg-white rounded-lg mb-2.5">
          {bulletPoints2.map((text, i) => (
            <ListItem className="py-0" key={i} text={text} />
          ))}
        </ul>

        <Image
          url={PLACEHOLDER_IMG_URL}
          className="w-full"
          alt="image" // Consider making this more descriptive
        />
      </section>

      {/* Section 2: Accent Card (Wroclaw) */}
      <AccentCard
        title={
          <span className="font-semibold text-2xl flex flex-col">
            <span>{ACCENT_CARD_WROCLAW.TITLE_PART1}</span>
            <span>{ACCENT_CARD_WROCLAW.TITLE_PART2}</span>
          </span>
        }
        imageUrl={IMAGES.LEMON_URL}
      >
        <>
          <p>{ACCENT_CARD_WROCLAW.DESCRIPTION1}</p>
          <Image
            url={ACCENT_CARD_WROCLAW.IMAGE_URL}
            className="w-full"
            alt="Concordia Design Wrocław location" // More specific alt text
          />
          <p>{ACCENT_CARD_WROCLAW.DESCRIPTION2}</p>
        </>
      </AccentCard>

      {/* Section 3: Market */}
      <section className="px-4">
        <SectionHeader title={HEADINGS.MARKET_TITLE} className="mt-16 mb-4" />

        <div className="flex flex-col gap-2.5">
          {MARKET_CARDS_DATA.map((card, index) => (
            <ImageCard
              key={index}
              url={card.url}
              caption={card.caption}
              className={card.className || ""}
            >
              {card.buttonText && (
                <Button className="text-yellow-foreground">
                  {card.buttonText}
                </Button>
              )}
            </ImageCard>
          ))}
        </div>

        {/* Section 4: Why Attend */}
        <SectionHeader
          title={HEADINGS.WHY_ATTEND_TITLE}
          className="mt-16 mb-4"
        />

        <div className="flex flex-col gap-6">
          {WHY_ATTEND_CAPTIONS_DATA.map((item, index) => (
            <ImageCaption key={index} url={item.url} caption={item.caption} />
          ))}
        </div>
      </section>
    </>
  );
};
