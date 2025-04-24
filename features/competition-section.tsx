import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Assuming you use cn

// --- Constants for Competition Sections ---

const COMPETITION_DATA = {
  BATTLE_OF_MASTERS: {
    IMAGE_URL:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/img-finger-WdpnLoNKOMaSCSWqLTsxyzt6qn1dTL",
    IMAGE_ALT: "Finger pointing up - Battle of Masters Competition",
    IMAGE_CLASSES: "w-[101px] h-[176px] self-center",
    TITLE_L1: "Супер-конкурс",
    TITLE_L2: "БИТВА МАЙСТРІВ",
    SUBTITLE: "Покажи свої вміння та забери 2000 zł",
    DESCRIPTION:
      "Не типовий конкурс в якому найважливіше ваша якість роботи, творчість та фантазія",
    RULES: [
      "❌ без жорстких часових обмежень",
      "✅ 3 години на повний манікюр з дизайном на ваш вибір (на одній руці)",
    ],
    RULE_ITEM_CLASSES:
      "px-4 py-3 flex justify-center items-center bg-white/30 rounded-md",
    BUTTON_TEXT: "Перейти до БИТВА МАЙСТРІВ",
    BUTTON_CLASSES: "text-accent-pink uppercase",
    GRADIENT_CLASSES:
      "gradient-pink absolute bottom-0 left-0 right-0 h-[80%] z-1 rounded-xl",
    TEXT_COLOR_CLASSES: "text-white",
  },
  PEOPLES_SPEAKER: {
    IMAGE_URL:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/img-mike-6WDwCjoptpYcBJ072JUZw5elZN7Ias",
    IMAGE_ALT: "Microphone - People's Speaker Competition",
    IMAGE_CLASSES: "size-[286px] self-center",
    TITLE_L1: "Прийми участь у конкурсі",
    TITLE_L2: "Народний спікер",
    DESCRIPTION:
      "Якщо ти гориш своєю справою та хочеш запалати інших, виступи зі спічем або МК на головній сцені фестивалю Nail Moment",
    BUTTON_TEXT: "Перейти до Народний спікер",
    BUTTON_CLASSES: "uppercase",
    GRADIENT_CLASSES:
      "gradient-green absolute bottom-0 left-0 right-0 h-[80%] z-1 rounded-xl",
    TEXT_COLOR_CLASSES: "text-yellow-foreground",
  },
};

// --- Component Implementation ---

export const CompetitionSection = () => {
  // Destructure for cleaner access inside the component
  const { BATTLE_OF_MASTERS, PEOPLES_SPEAKER } = COMPETITION_DATA;

  return (
    <section className="px-4">
      {/* Battle of Masters Section */}
      <div className="relative mb-4">
        {" "}
        {/* Added mb-4 for spacing */}
        <div
          className={cn(
            "z-10 relative p-6 rounded-xl flex flex-col text-center",
            BATTLE_OF_MASTERS.TEXT_COLOR_CLASSES
          )}
        >
          <img
            className={BATTLE_OF_MASTERS.IMAGE_CLASSES}
            src={BATTLE_OF_MASTERS.IMAGE_URL}
            alt={BATTLE_OF_MASTERS.IMAGE_ALT}
          />
          <h3 className="text-2xl font-bold leading-[150%]">
            {BATTLE_OF_MASTERS.TITLE_L1} <br />
            {BATTLE_OF_MASTERS.TITLE_L2}
          </h3>
          <div className="space-y-2.5 mt-1">
            <p className="text-lg">{BATTLE_OF_MASTERS.SUBTITLE}</p>
            <p className="text-md">{BATTLE_OF_MASTERS.DESCRIPTION}</p>
          </div>
          <div className="text-lg space-y-2.5 py-2.5">
            {BATTLE_OF_MASTERS.RULES.map((rule, index) => (
              <div key={index} className={BATTLE_OF_MASTERS.RULE_ITEM_CLASSES}>
                {rule}
              </div>
            ))}
          </div>
          <Button className={BATTLE_OF_MASTERS.BUTTON_CLASSES}>
            {BATTLE_OF_MASTERS.BUTTON_TEXT}
          </Button>
        </div>
        <div className={BATTLE_OF_MASTERS.GRADIENT_CLASSES} />
      </div>

      {/* People's Speaker Section */}
      <div className="relative">
        <div
          className={cn(
            "z-10 space-y-2.5 relative p-6 rounded-xl flex flex-col text-center",
            PEOPLES_SPEAKER.TEXT_COLOR_CLASSES
          )}
        >
          <img
            className={PEOPLES_SPEAKER.IMAGE_CLASSES}
            src={PEOPLES_SPEAKER.IMAGE_URL}
            alt={PEOPLES_SPEAKER.IMAGE_ALT}
          />
          <h3 className="text-2xl font-bold leading-[150%]">
            {PEOPLES_SPEAKER.TITLE_L1} <br />
            {PEOPLES_SPEAKER.TITLE_L2}
          </h3>
          <p>{PEOPLES_SPEAKER.DESCRIPTION}</p>
          <Button className={PEOPLES_SPEAKER.BUTTON_CLASSES}>
            {PEOPLES_SPEAKER.BUTTON_TEXT}
          </Button>
        </div>
        <div className={PEOPLES_SPEAKER.GRADIENT_CLASSES} />
      </div>
    </section>
  );
};
