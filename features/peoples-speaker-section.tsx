import { Section } from "@/blocks/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/blocks/ui/link";
import { IMAGES, INFO_URL } from "@/shared/const";
import { NailIcon, MomentIcon } from "@/shared/icons";
import { Mic, Star, CheckCircle, StepBack } from "lucide-react";
import { cn } from "@/lib/utils";
import { ListItem } from "@/components/ui/list-item";
import { AccentCard } from "@/blocks/ui/accent-card";

// -----------------------------------------------------------------------------
// Helper data
// -----------------------------------------------------------------------------

const EVENT_BADGES = [{ label: "27 липня" }, { label: "Вроцлав" }];

const WHAT_IS_ITEMS = [
  {
    icon: <Mic size={24} />,
    text: "Унікальна можливість для кожного майстра манікюру проявити себе.",
  },
  {
    icon: <Star size={24} />,
    text: "Твоя тема, твій стиль, твоя енергія — і ти на сцені поруч із зірками нейл-індустрії!",
  },
  {
    icon: <CheckCircle size={24} />,
    text: "Виступати на одній сцені з мастодонтами nail‑індустрії такими як — Анастасія Котенко та Юлія Зварич.",
  },
];

const WHY_JOIN_ITEMS = [
  {
    text: (
      <>
        <span className="font-semibold">Жодних обмежень:</span> неважливо,
        скільки в тебе підписників або який у тебе Instagram.
      </>
    ),
  },
  {
    text: (
      <>
        <span className="font-semibold">Головне — твоя ідея:</span> актуальна,
        корисна, свіжа тема для виступу.
      </>
    ),
  },
  {
    text: (
      <>
        <span className="font-semibold">Виступ на головній сцені:</span> 30
        хвилин слави — майстер‑клас або спіч перед усією аудиторією.
      </>
    ),
  },
  { text: "Твоя фотографія на банері фестивалю." },
  { text: "Визнання від усієї спільноти майстрів Польщі та Європи." },
  {
    text: (
      <>
        Шанс, який буває раз у житті! <Star size={20} className="inline" />
      </>
    ),
  },
];

const PRIZE_ITEMS = [
  {
    icon: <Mic size={24} className="text-accent-pink" />,
    text: (
      <>
        Виступ <span className="font-bold">27 липня</span> на головній сцені
        фестивалю Nail Moment у Вроцлаві.
      </>
    ),
  },
  {
    icon: <CheckCircle size={24} className="text-accent-pink" />,
    text: (
      <>
        <span className="font-bold">30 хвилин</span> для майстер‑класу або
        виступу на обрану тему.
      </>
    ),
  },
  {
    icon: <CheckCircle size={24} className="text-accent-pink" />,
    text: "Фотографія на банері фестивалю.",
  },
  {
    icon: <CheckCircle size={24} className="text-accent-pink" />,
    text: "Визнання, аудиторія, нові можливості.",
  },
  {
    icon: <CheckCircle size={24} className="text-accent-pink" />,
    text: "Реклама тебе у соцмережах фестивалю.",
  },
  {
    icon: <CheckCircle size={24} className="text-accent-pink" />,
    text: "Безкоштовний вхід на весь фестиваль.",
  },
];

// -----------------------------------------------------------------------------
// Re‑usable components
// -----------------------------------------------------------------------------

type BulletProps = {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const Bullet: React.FC<BulletProps> = ({ icon, children, className }) => (
  <li className={cn("flex items-start gap-3", className)}>
    {icon && <span className="text-accent-pink mt-1">{icon}</span>}
    <span>{children}</span>
  </li>
);

// -----------------------------------------------------------------------------
// Main component
// -----------------------------------------------------------------------------

export const PeoplesSpeakerSection = () => (
  <>
    {/* Hero */}
    <Section className="flex mb-2 flex-col items-center relative pt-20">
      {/* Decorative fruits */}
      <DecorativeImage
        src={IMAGES.ORANGES_URL}
        className="-left-14 -top-5 md:-left-6 md:-top-5 rotate-[30deg] size-[180px] sm:size-[200px] z-0"
      />
      <DecorativeImage
        src={IMAGES.LEMONS_URL}
        className="-right-8 md:-right-2 -top-8 size-[160px] sm:size-[180px]"
      />

      {/* Date & City badges */}
      <div className="grid grid-cols-2 gap-2 mb-5 relative z-[1]">
        {EVENT_BADGES.map(({ label }) => (
          <Badge key={label}>{label}</Badge>
        ))}
      </div>
      <span className="flex scale-[0.5] w-[358px] h-[117px] flex-col items-center justify-center gap-3.5">
        <NailIcon />
        <span className="relative block">
          <MomentIcon />
          <img
            src={IMAGES.LEMON_URL}
            alt="O"
            className="absolute left-[67px] -top-3 size-[62px] object-cover inline-block"
          />
        </span>
      </span>
    </Section>

    {/* Intro */}
    <Section className="space-y-5">
      <SectionHeader title="«Народний спікер»" className="mb-2 text-5xl" />
      <p className="gradient-orange py-2 text-xl text-shadow-md px-4 rounded-xl text-white max-w-md mx-auto text-center">
        <span className="font-bold text-3xl">
          стань зіркою головної сцени Nail Moment!
        </span>
      </p>
      <div className="space-y-6 text-blue-foreground/95 text-base sm:text-lg leading-relaxed">
        <p className="text-center text-lg sm:text-xl">
          Перший в Україні та Польщі конкурс, де саме{" "}
          <span className="font-bold text-accent-pink">ти</span> можеш стати
          спікером фестивалю, навіть якщо тебе ще ніхто не знає!
        </p>

        <p className="font-black text-2xl overflow-hidden bg-blue-foreground text-white p-4 rounded-xl relative max-w-md uppercase mx-auto text-center">
          <DecorativeImage
            src={IMAGES.ORANGES_URL}
            className="size-[99px] left-0 -top-10 z-0"
          />
          <DecorativeImage
            src={IMAGES.PASSION_URL}
            className="size-[99px] -right-5 -bottom-10 z-0"
          />
          <span className="relative z-10 text-shadow-md">
            Ми шукаємо нові голоси, нові ідеї, нових героїв спільноти.
          </span>
        </p>
        <p className="bg-blue-foreground py-2 text-xl text-shadow-md px-4 rounded-xl text-white max-w-md mx-auto text-center">
          <span className="font-bold text-3xl">Це можеш бути ТИ!</span>
        </p>
      </div>
    </Section>

    <AccentCard className="relative" title="Народний Спікер - це:">
      <DecorativeImage
        src={IMAGES.LEMON_URL}
        className="-right-12 -top-12 size-[120px]"
      />
      <ul className="space-y-3 w-full pt-5 mx-auto">
        {WHAT_IS_ITEMS.map(({ text }, i) => (
          <ListItem
            key={i}
            text={text}
            className="[&_p]:text-white font-semibold text-lg"
            iconClassName="text-white"
          />
        ))}
      </ul>
    </AccentCard>
    <Section>
      {/* 2. Why join */}
      <SectionHeader
        title="Чому варто приєднатися?"
        className="mt-14 mb-6 text-blue-foreground"
      />
      <ul className="space-y-3 max-w-2xl mx-auto">
        {WHY_JOIN_ITEMS.map(({ text }, i) => (
          <Bullet key={i} icon={<CheckCircle size={24} />}>
            {text}
          </Bullet>
        ))}
      </ul>

      <SectionHeader
        title="Як взяти участь?"
        className="mt-14 mb-6 text-blue-foreground"
      />
      <ol className="space-y-4 text-blue-foreground max-w-md mx-auto list-decimal bg-white p-6 rounded-xl list-inside marker:font-bold text-lg">
        <li>
          <span className="font-semibold">Запиши відео до 2 хвилин, де:</span>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <ListItem text="коротко розкажи про себе;" />
            <ListItem text="презентуй тему, з якою хочеш виступити;" />
            <ListItem text="поясни, чому ця тема важлива;" />
            <ListItem text="розкажи, чому саме тебе мають обрати." />
          </ul>
        </li>
        <li>
          <span className="font-semibold">Змонтуй відео</span> так, щоб воно
          було енергійним та зрозумілим.
        </li>
        <li>
          <span className="font-semibold">Надішли його в Telegram</span>{" "}
          фестивалю Nail Moment{" "}
          <span className="font-bold text-accent-pink">до 15 червня</span>
          <Link href={INFO_URL.TELEGRAM} target="_blank" icon className="ml-1">
            (посилання)
          </Link>
          .
        </li>
      </ol>

      <SectionHeader
        title="Як обирається переможець?"
        className="mt-14 mb-6 text-blue-foreground"
      />

      <ul className="flex relative flex-col gap-1.5 p-6 self-stretch max-w-md mx-auto bg-white rounded-lg mb-2.5 self-stretch">
        <ListItem text="10‑15 найкращих роликів попадуть на народне голосування." />
        <ListItem text="Дедлайн подачі презентацій — 15 червня." />
        <ListItem text="З 20‑25 червня стартує народне голосування серед майстрів у чат‑боті." />
        <ListItem text="27 червня оголошення переможця." />
        <ListItem text="Хто набере найбільше голосів — той і стає “Народним спікером”." />
      </ul>

      {/* 5. Prize */}
      <div className="mt-14 pt-6">
        <SectionHeader
          title="Що отримує переможець?"
          className="mb-6 text-accent-pink"
        />
        <ul className="space-y-3 p-6 relative rounded-xl max-w-md text-lg mx-auto text-blue-foreground">
          {PRIZE_ITEMS.map(({ text }, i) => (
            <ListItem
              key={i}
              text={text}
              iconClassName="text-white"
              className={cn("[&_p]:text-white bg-accent-pink rounded-md", {
                "w-[95%]": i === 0 || i === 3,
                "w-[85%]": i === 1,
                "w-[80%]": i === 2,
              })}
            />
          ))}
          <DecorativeImage
            src={IMAGES.PASSION_URL}
            className="right-0 translate-1/2 top-[5%] size-[180px]"
          />
        </ul>
      </div>

      {/* Call to action */}
      <div className="mt-16 bg-blue-foreground/10 p-6 rounded-xl text-center">
        <p className="text-xl sm:text-2xl font-semibold mb-2">
          Не пропусти цей шанс!
        </p>
        <p className="text-lg sm:text-xl mb-4">
          Такого ще ніколи не було — вперше сцена обирає не зірок, а майстрів із
          народу.
        </p>
        <p className="text-lg sm:text-xl font-medium">
          Запиши відео, покажи себе, поділись своєю темою — і стань новою зіркою
          Nail Moment!
        </p>
        <p className="text-2xl sm:text-3xl font-bold text-destructive mt-6">
          Дедлайн — 15 червня!
        </p>
        <Button variant="secondary" className="mt-10" asChild>
          <Link href={INFO_URL.TELEGRAM}>Вислати в Telegram</Link>
        </Button>
      </div>

      {/* Back home button */}
      <Button
        className="text-blue-foreground w-full max-w-xs mx-auto mt-20 flex gap-2 items-center"
        asChild
      >
        <Link href="/" target="_self">
          <StepBack />
          Повернутися на головну сторінку
        </Link>
      </Button>
    </Section>
  </>
);
