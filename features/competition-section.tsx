import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";

// --- Constants for Competition Sections (Data only, no classes) ---

const COMPETITION_DATA = {
  BATTLE_OF_MASTERS: {
    IMAGE_URL:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/img-finger-WdpnLoNKOMaSCSWqLTsxyzt6qn1dTL",
    IMAGE_ALT: "Finger pointing up - Battle of Masters Competition",
    TITLE: "Супер-конкурс БИТВА МАЙСТРІВ",
    SUBTITLE: "Покажи свої вміння та забери 2000 zł",
    DESCRIPTION:
      "Не типовий конкурс в якому найважливіше ваша якість роботи, творчість та фантазія",
    RULES: [
      "❌ без жорстких часових обмежень",
      "✅ 3 години на повний манікюр з дизайном на ваш вибір (на одній руці)",
    ],
    BUTTON_TEXT: "Перейти до БИТВА МАЙСТРІВ",
  },
  PEOPLES_SPEAKER: {
    IMAGE_URL:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/img-mike-6WDwCjoptpYcBJ072JUZw5elZN7Ias",
    IMAGE_ALT: "Microphone - People's Speaker Competition",
    TITLE: "Прийми участь у конкурсі Народний спікер",
    DESCRIPTION:
      "Якщо ти гориш своєю справою та хочеш запалати інших, виступи зі спічем або МК на головній сцені фестивалю Nail Moment",
    BUTTON_TEXT: "Перейти до Народний спікер",
  },
};

// --- Component Implementation ---

export const CompetitionSection = () => {
  const { BATTLE_OF_MASTERS, PEOPLES_SPEAKER } = COMPETITION_DATA;

  return (
    <section className="px-4 flex flex-col gap-2.5 max-w-96 mx-auto">
      <div id="battle-of-masters" className="relative scroll-mt-7">
        <div
          className={cn(
            "z-10 relative px-6 pb-6 rounded-xl flex flex-col text-center",
            "text-white"
          )}
        >
          <img
            className="w-[101px] h-[176px] self-center"
            src={BATTLE_OF_MASTERS.IMAGE_URL}
            alt={BATTLE_OF_MASTERS.IMAGE_ALT}
          />
          <SectionHeader
            title={BATTLE_OF_MASTERS.TITLE}
            className="text-2xl text-white font-bold leading-[150%]"
          />
          <div className="space-y-2.5 mt-1">
            <p className="text-lg">{BATTLE_OF_MASTERS.SUBTITLE}</p>
            <p className="text-md">{BATTLE_OF_MASTERS.DESCRIPTION}</p>
          </div>
          <div className="text-lg space-y-2.5 py-2.5">
            {BATTLE_OF_MASTERS.RULES.map((rule, index) => (
              <div
                key={index}
                className="px-4 py-3 flex justify-center items-center bg-white/30 rounded-md"
              >
                {rule}
              </div>
            ))}
          </div>
          <Button className="text-accent-pink uppercase">
            {BATTLE_OF_MASTERS.BUTTON_TEXT}
          </Button>
        </div>
        <div className="gradient-pink absolute bottom-0 left-0 right-0 h-[80%] z-1 rounded-xl" />
      </div>
      <div id="peoples-speaker" className="relative scroll-mt-7">
        <div
          className={cn(
            "z-10 space-y-2.5 relative px-6 pb-6 rounded-xl flex flex-col text-center",
            "text-yellow-foreground"
          )}
        >
          <img
            className="size-[286px] self-center"
            src={PEOPLES_SPEAKER.IMAGE_URL}
            alt={PEOPLES_SPEAKER.IMAGE_ALT}
          />
          <SectionHeader
            title={PEOPLES_SPEAKER.TITLE}
            className="text-2xl text-yellow-foreground font-bold leading-[150%]"
          />
          <p>{PEOPLES_SPEAKER.DESCRIPTION}</p>
          <Button className="uppercase">{PEOPLES_SPEAKER.BUTTON_TEXT}</Button>
        </div>
        <div className="gradient-green absolute bottom-0 left-0 right-0 h-[80%] z-1 rounded-xl" />
        {/* Hardcoded gradient classes */}
      </div>
    </section>
  );
};
