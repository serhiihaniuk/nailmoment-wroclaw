import { Section } from "@/blocks/ui/section";
import { Button } from "@/components/ui/button";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { IMAGES, INFO_URL } from "@/shared/const";
import { MomentIcon, NailIcon } from "@/shared/icons";
import { StepBack, CheckCircle, Star, Mic } from "lucide-react"; // Added more icons
import { Badge } from "@/components/ui/badge"; // Import Badge
import { Link } from "@/blocks/ui/link";

// Helper component for list items with icons
const ListItemWithIcon: React.FC<{
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ icon, children }) => (
  <li className="flex items-start gap-3">
    <span className="text-accent-pink mt-1">{icon}</span>
    <span>{children}</span>
  </li>
);

export const PeoplesSpeakerSection = () => {
  return (
    <>
      <Section className="flex flex-col relative items-center justify-start pt-22">
        <DecorativeImage
          src={IMAGES.ORANGES_URL}
          className="-left-14 -top-5 md:-left-6 md:-top-5 rotate-[30deg] size-[180px] sm:size-[200px] z-0"
        />
        <DecorativeImage
          src={IMAGES.LEMONS_URL}
          className="-right-8 md:-right-2 -top-8 size-[160px] sm:size-[180px]"
        />
        <div className="grid grid-cols-2 gap-2 mb-5 relative z-[1]">
          <Badge>27 липня</Badge>
          <Badge>Вроцлав</Badge>
        </div>
        <span className="flex w-[358px] h-[117px] gap-3.5 flex-col items-center justify-center">
          <NailIcon />
          <span className="relative block">
            <MomentIcon />
            <img
              src={IMAGES.LEMON_URL}
              alt="O"
              className="absolute left-[67px] top-[-12px] size-[62px] object-cover inline-block"
            />
          </span>
        </span>
      </Section>

      <Section>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-foreground text-center mb-4 leading-tight">
          «Народний спікер»
        </h1>
        <p className="text-xl sm:text-2xl text-accent-pink text-center mb-8 font-semibold">
          — стань зіркою головної сцени Nail Moment!
        </p>

        <div className="space-y-8 text-blue-foreground/95 text-base sm:text-lg leading-relaxed">
          <p className="text-center text-lg sm:text-xl">
            Перший в Україні та Польщі конкурс, де саме{" "}
            <span className="font-bold text-accent-pink">ти</span> можеш стати
            спікером фестивалю, навіть якщо тебе ще ніхто не знає!
          </p>
          <p className="text-center font-semibold text-xl sm:text-2xl text-blue-foreground">
            Ми шукаємо нові голоси, нові ідеї, нових героїв спільноти.
            <br />
            <span className="text-accent-pink">Це можеш бути ТИ!</span>
          </p>

          <div className="mt-10 pt-6 border-t border-white/20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-foreground text-center mb-6">
              Народний Спікер - це:
            </h2>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <ListItemWithIcon icon={<Mic size={24} />}>
                Унікальна можливість для кожного майстра манікюру проявити себе.
              </ListItemWithIcon>
              <ListItemWithIcon icon={<Star size={24} />}>
                Твоя тема, твій стиль, твоя енергія — і ти на сцені поруч із
                зірками нейл-індустрії!
              </ListItemWithIcon>
              <ListItemWithIcon icon={<CheckCircle size={24} />}>
                Виступати на одній сцені з мастодонтами nail-індустрії такими як
                — Анастасія Котенко та Юлія Зварич.
              </ListItemWithIcon>
            </ul>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-foreground text-center mb-6">
              Чому варто прийняти участь?
            </h2>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <ListItemWithIcon icon={<CheckCircle size={24} />}>
                <span className="font-semibold">Жодних обмежень:</span>{" "}
                неважливо, скільки в тебе підписників або який у тебе Instagram.
              </ListItemWithIcon>
              <ListItemWithIcon icon={<CheckCircle size={24} />}>
                <span className="font-semibold">Головне — твоя ідея:</span>{" "}
                актуальна, корисна, свіжа тема для виступу.
              </ListItemWithIcon>
              <ListItemWithIcon icon={<CheckCircle size={24} />}>
                <span className="font-semibold">Виступ на головній сцені:</span>{" "}
                30 хвилин слави — майстер-клас або спіч перед усією аудиторією.
              </ListItemWithIcon>
              <ListItemWithIcon icon={<CheckCircle size={24} />}>
                Твоя фотографія на банері фестивалю.
              </ListItemWithIcon>
              <ListItemWithIcon icon={<CheckCircle size={24} />}>
                Визнання від усієї спільноти майстрів Польщі та Європи.
              </ListItemWithIcon>
              <ListItemWithIcon icon={<Star size={24} />}>
                Шанс, який буває раз у житті!
              </ListItemWithIcon>
            </ul>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-foreground text-center mb-6">
              Як взяти участь?
            </h2>
            <ol className="space-y-4 max-w-2xl mx-auto list-decimal list-inside  marker:font-bold">
              <li>
                <span className="font-semibold">
                  Запиши відео до 2 хвилин, де:
                </span>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>коротко розкажи про себе;</li>
                  <li>презентуй тему, з якою хочеш виступити;</li>
                  <li>поясни, чому ця тема важлива;</li>
                  <li>розкажи, чому саме тебе мають обрати.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Змонтуй відео</span> так, щоб
                воно було енергійним та зрозумілим.
              </li>
              <li>
                <span className="font-semibold">Надішли його в Telegram</span>{" "}
                фестивалю Nail Moment{" "}
                <span className="font-bold text-accent-pink">до 15 червня</span>{" "}
                <Link href={INFO_URL.TELEGRAM} target="_blank" icon>
                  (посилання на Telegram)
                </Link>
                .
              </li>
            </ol>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-foreground text-center mb-6">
              Як обирається переможець?
            </h2>
            <ul className="space-y-3 max-w-2xl mx-auto list-disc list-inside">
              <li>10-15 найкращих роликів попадуть на народне голосування.</li>
              <li>
                Дедлайн подачі презентацій —{" "}
                <span className="font-bold">15 червня</span>.
              </li>
              <li>
                З <span className="font-bold">20-25 червня</span> стартує
                народне голосування серед майстрів у чат-боті.
              </li>
              <li>
                <span className="font-bold">27 червня</span> оголошення
                переможця.
              </li>
              <li>
                Хто набере найбільше голосів — той і стає “Народним спікером”.
              </li>
            </ul>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20 bg-accent-pink/10 p-6 rounded-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-accent-pink text-center mb-6">
              Що отримує переможець?{" "}
              <Star className="inline mb-1 text-accent-pink" />
            </h2>
            <ul className="space-y-3 max-w-2xl mx-auto text-blue-foreground">
              <ListItemWithIcon
                icon={<Mic size={24} className="text-accent-pink" />}
              >
                Виступ <span className="font-bold">27 липня</span> на головній
                сцені фестивалю Nail Moment у Вроцлаві.
              </ListItemWithIcon>
              <ListItemWithIcon
                icon={<CheckCircle size={24} className="text-accent-pink" />}
              >
                <span className="font-bold">30 хвилин</span> для майстер-класу
                або виступу на обрану тему.
              </ListItemWithIcon>
              <ListItemWithIcon
                icon={<CheckCircle size={24} className="text-accent-pink" />}
              >
                Фотографія на банері фестивалю.
              </ListItemWithIcon>
              <ListItemWithIcon
                icon={<CheckCircle size={24} className="text-accent-pink" />}
              >
                Визнання, аудиторія, нові можливості.
              </ListItemWithIcon>
              <ListItemWithIcon
                icon={<CheckCircle size={24} className="text-accent-pink" />}
              >
                Реклама тебе у соцмережах фестивалю.
              </ListItemWithIcon>
              <ListItemWithIcon
                icon={<CheckCircle size={24} className="text-accent-pink" />}
              >
                Безкоштовний вхід на весь фестиваль.
              </ListItemWithIcon>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl sm:text-2xl font-semibold mb-2">
              Не пропусти цей шанс!
            </p>
            <p className="text-lg sm:text-xl mb-4">
              Такого ще ніколи не було — вперше сцена обирає не зірок, а
              майстрів із народу.
            </p>
            <p className="text-lg sm:text-xl font-medium">
              Запиши відео, покажи себе, поділись своєю темою — і стань новою
              зіркою Nail Moment!
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-destructive mt-6">
              Дедлайн — 15 червня!
            </p>
            <Button variant="secondary" className="mt-10" asChild>
              <Link href={INFO_URL.TELEGRAM}>Вислати в Telegram</Link>
            </Button>
          </div>
        </div>

        <Button
          className="text-blue-foreground w-full max-w-xs mx-auto mt-22 flex gap-2 items-center"
          asChild
        >
          <Link href="/">
            <StepBack />
            Повернутися на головну сторінку
          </Link>
        </Button>
      </Section>
    </>
  );
};
