import { MomentIcon, NailIcon } from "@/shared/assets/icons";
import { IMAGES } from "@/shared/config/const";
import { Badge } from "@/shared/ui/badge";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { Section } from "@/shared/ui/layout/section";
import { SectionHeader } from "@/shared/ui/section-header";

export const MasterKlassSection = () => {
  return (
    <Section className="relative flex grow flex-col items-center justify-start pt-8 pb-16">
      <DecorativeImage
        src={IMAGES.ORANGES_URL}
        className="-left-18 -top-24 size-[200px] rotate-[30deg] z-0 md:-left-6 md:-top-5"
      />
      <DecorativeImage
        src={IMAGES.LEMONS_URL}
        className="-right-12 -top-22 size-[180px] md:-right-2"
      />
      <div className="relative z-1 mb-5 grid grid-cols-2 gap-2">
        <Badge className="border-0 bg-card-background">7 червня</Badge>
        <Badge className="border-0 bg-card-background">Варшава</Badge>
      </div>

      <h1 className="mb-4 flex flex-col items-center justify-center gap-3.5 text-center select-none">
        <span className="flex h-[58px] w-[179px] flex-col items-center justify-center gap-1.75">
          <NailIcon />
          <span className="relative block">
            <MomentIcon size={23} />
            <img
              src={IMAGES.LEMON_URL}
              alt="O"
              className="absolute left-[37px] top-[-6px] inline-block size-[33px] object-cover"
            />
          </span>
        </span>
      </h1>

      <div className="flex max-w-md flex-col items-center justify-center gap-6 pt-4 text-center text-blue-foreground">
        <SectionHeader title="МАЛИЙ ЗАЛ" order="order1" />
        <div className="relative overflow-hidden rounded-xl bg-blue-foreground p-4 text-2xl font-black text-white">
          <DecorativeImage src={IMAGES.ORANGES_URL} className="left-0 -top-10 size-[99px] z-0" />
          <DecorativeImage
            src={IMAGES.PASSION_URL}
            className="-right-5 -bottom-10 size-[99px] z-0"
          />
          <span className="relative z-10 text-shadow-md">
            МАЙСТЕР-КЛАСИ ВІД ТОПОВИХ ІНСТРУКТОРІВ ТА БРЕНД-ЕКСПЕРТІВ
          </span>
        </div>
        <p className="gradient-orange rounded-xl px-4 py-2 text-xl text-white text-shadow-md">
          Перед великим фестивалем —
          <br /> <span className="text-3xl font-bold">ВЕЛИКА ПРОКАЧКА!</span>
        </p>
        <p>
          Зустрічайте <span className="font-bold">“Малий зал”</span> — окрему зону фестивалю Nail
          Moment, де вас чекає 4 години живих майстер-класів від блогерів, інструкторів та
          представників провідних брендів індустрії нігтьового сервісу.
        </p>
      </div>
    </Section>
  );
};
