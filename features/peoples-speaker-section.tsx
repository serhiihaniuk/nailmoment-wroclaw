import { Section } from "@/blocks/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { IMAGES } from "@/shared/const";
import { MomentIcon, NailIcon } from "@/shared/icons";
import { StepBack } from "lucide-react";
import Link from "next/link";

export const PeoplesSpeakerSection = () => {
  return (
    <Section className="flex flex-col relative items-center justify-center pt-28 pb-16 grow">
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
          Народний Спікер
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
      <div className="capitalize text-center flex items-center justify-center py-10 text-blue-foreground text-5xl font-black">
        скоро розповімо 😉
      </div>
      <Button className="text-blue-foreground flex gap-2 items-center" asChild>
        <Link href="/">
          <StepBack />
          Повернутися на головну сторінку
        </Link>
      </Button>
    </Section>
  );
};
