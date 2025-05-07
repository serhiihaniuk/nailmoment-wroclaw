import { Section } from "@/blocks/ui/section";
import { Badge } from "@/components/ui/badge";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { SectionHeader } from "@/components/ui/section-header";
import { IMAGES } from "@/shared/const";
import { MomentIcon, NailIcon } from "@/shared/icons";

export const MasterKlassSection = () => {
  return (
    <Section className="flex grow relative items-center justify-start flex-col pt-22 pb-16">
      <DecorativeImage
        src={IMAGES.ORANGES_URL}
        className="-left-18 -top-18 md:-left-6 md:-top-5 rotate-[30deg] size-[200px] z-0"
      />
      <DecorativeImage
        src={IMAGES.LEMONS_URL}
        className="-right-8 md:-right-2 -top-12 size-[180px]"
      />
      <div className="grid grid-cols-2 gap-2 mb-5 relative z-1">
        <Badge>27 липня</Badge>
        <Badge>Вроцлав</Badge>
      </div>
      <h1 className="flex flex-col select-none scale-50 gap-7 text-center items-center justify-center mb-8">
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
      </h1>
      <div className="text-center gap-6 max-w-md items-center  text-blue-foreground flex flex-col justify-center">
        <SectionHeader title="МАЛИЙ ЗАЛ — МАЙСТЕР-КЛАСИ ВІД ТОПОВИХ ІНСТРУКТОРІВ ТА БРЕНД-ЕКСПЕРТІВ" />
        <p className="text-lg gradient-orange py-2 px-4 rounded-xl text-white">
          Перед великим фестивалем —{" "}
          <span className="font-bold">ВЕЛИКА ПРОКАЧКА!</span>
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
