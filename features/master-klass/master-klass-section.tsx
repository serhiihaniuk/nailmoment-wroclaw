import { Section } from "@/blocks/ui/section";
import { Badge } from "@/components/ui/badge";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { SectionHeader } from "@/components/ui/section-header";
import { IMAGES } from "@/shared/const";
import { MomentIcon, NailIcon } from "@/shared/icons";

export const MasterKlassSection = () => {
  return (
    <Section className="flex grow relative items-center justify-start flex-col pt-8 pb-16">
      <DecorativeImage
        src={IMAGES.ORANGES_URL}
        className="-left-18 -top-24 md:-left-6 md:-top-5 rotate-[30deg] size-[200px] z-0"
      />
      <DecorativeImage
        src={IMAGES.LEMONS_URL}
        className="-right-12 md:-right-2 -top-22 size-[180px]"
      />
      <div className="grid grid-cols-2 gap-2 mb-5 relative z-1">
        <Badge>27 липня</Badge>
        <Badge>Вроцлав</Badge>
      </div>

      <h1 className="flex flex-col select-none gap-3.5 text-center items-center justify-center mb-4">
        <span className="flex w-[179px] h-[58px] gap-1.75 flex-col items-center justify-center">
          <NailIcon />
          <span className="relative block">
            <MomentIcon size={23} />
            <img
              src={IMAGES.LEMON_URL}
              alt="O"
              className="absolute left-[37px] top-[-6px] size-[33px] object-cover inline-block"
            />
          </span>
        </span>
      </h1>

      <div className="text-center gap-6 max-w-md items-center pt-4  text-blue-foreground flex flex-col justify-center">
        <SectionHeader className="font-black text-5xl" title="МАЛИЙ ЗАЛ" />
        <div className="font-black text-2xl overflow-hidden bg-blue-foreground text-white p-4 rounded-xl relative">
          <DecorativeImage
            src={IMAGES.ORANGES_URL}
            className="size-[99px] left-0 -top-10 z-0"
          />
          <DecorativeImage
            src={IMAGES.PASSION_URL}
            className="size-[99px] -right-5 -bottom-10 z-0"
          />
          <span className="relative z-10 text-shadow-md">
            МАЙСТЕР-КЛАСИ ВІД ТОПОВИХ ІНСТРУКТОРІВ ТА БРЕНД-ЕКСПЕРТІВ
          </span>
        </div>
        <p className="gradient-orange py-2 text-xl text-shadow-md px-4 rounded-xl text-white">
          Перед великим фестивалем —<br />{" "}
          <span className="font-bold text-3xl">ВЕЛИКА ПРОКАЧКА!</span>
        </p>
        <p>
          Зустрічайте <span className="font-bold">“Малий зал”</span> — окрему
          зону фестивалю Nail Moment, де вас чекає 4 години живих майстер-класів
          від блогерів, інструкторів та представників провідних брендів
          індустрії нігтьового сервісу.
        </p>
      </div>
    </Section>
  );
};
