import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { Section } from "@/blocks/ui/section";
import Link from "next/link";
import { IMAGES } from "@/shared/const";

// --- Constants for Competition Sections (Data only, no classes) ---

const COMPETITION_DATA = {
  BATTLE_OF_MASTERS: {
    IMAGE_URL: IMAGES.BATTLE_PHOTO,
    IMAGE_ALT: "Battle of Masters Competition",
    TITLE: "Супер-конкурс БИТВА МАЙСТРІВ",
    PRIZE: "2000 зл + СУПЕР ПРИЗ від спонсору конкурсу",
    BUTTON_TEXT: "Перейти до БИТВА МАЙСТРІВ",
  },
  PEOPLES_SPEAKER: {
    IMAGE_URL: IMAGES.PEOPLES_SPEAKER_PHOTO,
    IMAGE_ALT: "People's Speaker Competition",
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
    <Section className="flex flex-col items-center gap-2.5  mx-auto">
      <div id="battle-of-masters" className="relative scroll-mt-7 max-w-md w-full">
        <div
          className={cn(
            "z-10 relative p-5 rounded-xl flex flex-col text-center gap-2.5",
            "bg-yellow-foreground text-white"
          )}
        >
          <img
            className="w-full rounded-xl object-cover aspect-video"
            src={BATTLE_OF_MASTERS.IMAGE_URL}
            alt={BATTLE_OF_MASTERS.IMAGE_ALT}
          />
          <SectionHeader
            title={BATTLE_OF_MASTERS.TITLE}
            className="text-2xl text-white font-bold leading-[150%]"
          />
          <div className="bg-yellow-background/30 rounded-md px-4 py-3">
            <p className="font-semibold">{BATTLE_OF_MASTERS.PRIZE}</p>
          </div>
          <Button className="bg-blue-background text-yellow-foreground uppercase" asChild>
            <Link href="battle">{BATTLE_OF_MASTERS.BUTTON_TEXT}</Link>
          </Button>
        </div>
      </div>
      <div id="peoples-speaker" className="relative scroll-mt-7 max-w-md w-full">
        <div
          className={cn(
            "z-10 space-y-2.5 relative p-5 rounded-xl flex flex-col text-center",
            "bg-white text-blue-foreground"
          )}
        >
          <img
            className="w-full rounded-xl object-cover"
            src={PEOPLES_SPEAKER.IMAGE_URL}
            alt={PEOPLES_SPEAKER.IMAGE_ALT}
          />
          <SectionHeader
            title={PEOPLES_SPEAKER.TITLE}
            className="text-2xl text-blue-foreground font-bold leading-[150%]"
          />
          <p>{PEOPLES_SPEAKER.DESCRIPTION}</p>
          <Button className="bg-blue-foreground text-white uppercase" asChild>
            <Link href="speaker">{PEOPLES_SPEAKER.BUTTON_TEXT}</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};
