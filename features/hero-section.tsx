import { BuyTicketButton } from "@/blocks/ui/buy-ticket";
import Marquee from "@/blocks/ui/marquee";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { IMAGES } from "@/shared/const";
import { LemonIcon, OrangeIcon } from "@/shared/icons";

export const HeroSection = () => {
  return (
    <section className="flex relative items-center justify-center flex-col pt-28 pb-16 px-4">
      <DecorativeImage
        src={IMAGES.ORANGES_URL}
        className="left-0 -top-5 rotate-[30deg] size-[200px] z-0"
      />
      <DecorativeImage
        src={IMAGES.LEMONS_URL}
        className="right-0 -top-8 size-[180px]"
      />
      <div className="grid grid-cols-2 gap-2 mb-5 relative z-1">
        <Badge>20 липня</Badge>
        <Badge>Вроцлав</Badge>
      </div>
      <h1 className="flex flex-col gap-7 text-center items-center justify-center mb-8">
        <span className="uppercase text-[26px] text-blue-foreground font-semibold leading-[120%]">
          Головний nail-фестиваль Польщі
        </span>
        <span className="text-[56px] font-druk flex gap-3.5 flex-col items-center justify-center text-white font-extrabold leading-12">
          <span className="bg-accent-orange rounded-[10px] pt-2 px-2 pb-5 block">
            NAIL
          </span>
          <span className="grid grid-cols-6 w-[360px] h-[40px] justify-center justify-items-center">
            <span>M</span>
            <span className="relative size-full">
              <img
                src={IMAGES.LEMON_URL}
                alt="O"
                className="absolute bottom-0 left-1 right-0 top-0 object-cover inline-block"
              />
            </span>
            <span className="col-span-4">MENT</span>
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
      <BuyTicketButton className="self-stretch mt-5" />
      <div className="grid grid-cols-2 gap-2 pt-2.5">
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
    </section>
  );
};
