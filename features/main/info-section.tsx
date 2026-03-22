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
import { Section } from "@/blocks/ui/section";
import Link from "next/link";

const bulletPoints = [
  "збираємо топів nail-індустрії в одному місці. Ніякої води, тільки АКТУАЛЬНІ ТЕМИ ТА МК!",
  "обʼєднуємо майстрів манікюру та педикюру з усієї Європи",
  "запалюємо нові зірки серед майстрів",
  "даємо доступ до ТОПових знань, інновацій та можливостей для зростання",
];

const bulletPoints2 = [
  "Ми підтримуємо нейл-майстрів, допомагаємо їм будувати успішний бізнес",
  "Ми створюємо середовище, де кожен може навчатися, надихатися та знайомитися з однодумцями",
  "Ми розвиваємо індустрію нігтьового сервісу в Польщі та виводимо її на новий рівень",
];

const HEADINGS = {
  FESTIVAL_INTRO:
    "Фестиваль де новачки можуть навчитися, професіонали РОЗВИВАТИСЯ ТА БУДУВАТИ КАР’ЄРУ",
  NAIL_MOMENT_MOTTO: "NAIL MOMENT– це місце сили, знань та можливостей!",
  MARKET_TITLE: "Nail-МАРКЕТ від Nail Moment Твій ідеальний день для шопінгу!",
  WHY_ATTEND_TITLE: "Чому не можна пропустити",
};

const ACCENT_CARD_WARSAW = {
  TITLE_PART1: "Ми повертаємось ",
  TITLE_PART2: "до Варшави",
  DESCRIPTION1:
    "Ви казали, що це найзручніше місто для фестивалю. Ми чуємо та прислоховуємося до наших людей \u{1F49B}",
  IMAGE_URL: IMAGES.WARSAW_PHOTO,
};

const MARKET_CARDS_DATA = [
  {
    url: IMAGES.MARKET_1,
    caption:
      "Найкращі nail-бренди в одному місці\n\nГелі, лаки, бази, дизайни та аксесуари — все що потрібно майстру!",
    className: "",
    buttonText: null,
  },
  {
    url: IMAGES.MARKET_2,
    caption: "Акції, від яких хочеться скупити все! Та безпрограшні лотереї!",
    className: "",
    buttonText: null,
  },
];

const WHY_ATTEND_CAPTIONS_DATA = [
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
];

// --- Component Implementation ---

export const InfoSection = () => {
  return (
    <>
      <Section className="flex items-center justify-center flex-col">
        <SectionHeader title={HEADINGS.FESTIVAL_INTRO} className="mb-4" />

        <div className="text-blue-foreground text-left self-stretch">
          Тільки ми:
        </div>
        <ul className="flex relative flex-col gap-1.5 self-stretch">
          {bulletPoints.map((text, i) => (
            <ListItem
              className={cn("bg-blue-background w-[90%]", {
                "w-[95%]": i === 0 || i === 3,
                "w-[85%]": i === 1,
                "w-[80%]": i === 2,
              })}
              key={i}
              text={text}
            />
          ))}
          <DecorativeImage
            src={IMAGES.DECORATIVE_LEAF_5}
            className="right-0 translate-1/2 bottom-1/2 size-[180px] slide-in-view"
          />{" "}
          <DecorativeImage
            src={IMAGES.DECORATIVE_LEAF_5}
            className="right-0 translate-1/2 bottom-1/2 size-[180px]"
          />
        </ul>

        <SectionHeader
          title={HEADINGS.NAIL_MOMENT_MOTTO}
          className="mt-16 mb-4 md:mt-36"
        />
        <ul className="flex flex-col gap-5 py-2.5 bg-white rounded-lg mb-2.5 self-stretch">
          {bulletPoints2.map((text, i) => (
            <ListItem className="py-0" key={i} text={text} />
          ))}
        </ul>

        <Image
          url={IMAGES.HERO_MAIN}
          width={900}
          className="w-full"
          alt="image"
        />
      </Section>

      {/* Section 2: Accent Card (Warsaw) */}
      <AccentCard
        title={
          <span className="font-semibold text-2xl flex flex-col">
            <span>{ACCENT_CARD_WARSAW.TITLE_PART1}</span>
            <span>{ACCENT_CARD_WARSAW.TITLE_PART2}</span>
          </span>
        }
        imageUrl={IMAGES.HERO_LOGO_1}
      >
        <>
          <p>{ACCENT_CARD_WARSAW.DESCRIPTION1}</p>
          <Image
            url={ACCENT_CARD_WARSAW.IMAGE_URL}
            className="w-full"
            width={900}
            alt="Warsaw location"
          />
        </>
      </AccentCard>

      {/* Section 3: Market */}
      <Section>
        <SectionHeader title={HEADINGS.MARKET_TITLE} className="mt-16 mb-4" />

        <div className="flex flex-col gap-2.5">
          {MARKET_CARDS_DATA.map((card, index) => (
            <ImageCard
              key={index}
              url={card.url}
              caption={card.caption}
              className={card.className || ""}
            />
          ))}

          {/* БОКСОПАД section */}
          <ImageCard
            url={IMAGES.BOXOPAD}
            caption=""
            className=""
          >
            <h3 className="text-2xl font-bold text-blue-foreground text-center">&quot;БОКСОПАД&quot;</h3>
            <p className="text-blue-foreground text-center">розіграші боксів з продукцією від провідних брендів</p>
          </ImageCard>
        </div>

        {/* Section 4: Why Attend */}
        <SectionHeader
          title={HEADINGS.WHY_ATTEND_TITLE}
          className="mt-16 mb-4 text-yellow-foreground uppercase text-3xl"
        />

        <div className="flex flex-col gap-6">
          {WHY_ATTEND_CAPTIONS_DATA.map((item, index) => (
            <ImageCaption key={index} url={item.url} caption={item.caption} />
          ))}
        </div>
      </Section>
    </>
  );
};
