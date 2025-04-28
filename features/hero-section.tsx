import { BuyTicketButton } from "@/blocks/ui/buy-ticket";
import Marquee from "@/blocks/ui/marquee";
import { Section } from "@/blocks/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { IMAGES } from "@/shared/const";
import { MomentIcon, NailIcon } from "@/shared/icons";

export const HeroSection = () => {
  return (
    <Section className="flex relative items-center justify-center flex-col pt-28 pb-16">
      <DecorativeImage
        src={IMAGES.ORANGES_URL}
        className="-left-14 -top-5 md:-left-6 md:-top-5 rotate-[30deg] size-[200px] z-0"
      />
      <DecorativeImage
        src={IMAGES.LEMONS_URL}
        className="-right-8 md:-right-2 -top-8 size-[180px]"
      />
      <div className="grid grid-cols-2 gap-2 mb-5 relative z-1">
        <Badge>27 липня</Badge>
        <Badge>Вроцлав</Badge>
      </div>
      <h1 className="flex flex-col gap-7 text-center items-center justify-center mb-8">
        <span className="uppercase text-[26px] text-blue-foreground font-semibold leading-[120%]">
          Головний nail-фестиваль Польщі
        </span>
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
      <Marquee
        texts={["БИТВА МАЙСТРІВ", "ГОЛОВНИЙ ПРИЗ 2000 zł"]}
        speed={150}
        direction="left"
        pauseOnHover={true}
        className="self-stretch mt-5 bg-white absolute left-0 right-0 top-0 font-medium"
      />
      <Marquee
        texts={["БИТВА МАЙСТРІВ", "ГОЛОВНИЙ ПРИЗ 2000 zł"]}
        speed={150}
        direction="right"
        pauseOnHover={true}
        className="self-stretch mt-5 bg-white absolute left-0 right-0 bottom-0 font-medium"
      />
      <div className="flex flex-col gap-2.5 self-center pt-5 max-w-96 items-center">
        <BuyTicketButton className="self-stretch" />
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="secondary"
            asChild
            className="text-blue-foreground flex items-center justify-center text-center"
            size="sm"
          >
            <a href="#battle-of-masters">Конкурс «Битва Майстрів»</a>
          </Button>
          <Button
            className="text-blue-foreground flex items-center justify-center text-center"
            variant="secondary"
            asChild
            size="sm"
          >
            <a href="#peoples-speaker">Народний Спікер</a>
          </Button>
        </div>
      </div>
    </Section>
  );
};
