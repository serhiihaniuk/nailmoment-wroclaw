import { BuyTicketButton } from "@/blocks/ui/buy-ticket";
import Marquee from "@/blocks/ui/marquee";
import { Section } from "@/blocks/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { IMAGES } from "@/shared/const";

export const HeroSection = () => {
  return (
    <Section className="flex relative items-center justify-center flex-col pt-12 pb-16">
      {/* Background decorative pattern */}
      <DecorativeImage
        src={IMAGES.DECORATIVE_BG_1}
        className="left-0 top-[50px] w-full h-[486px] z-0 opacity-15"
      />
      {/* Top-right decorative leaf */}
      <DecorativeImage
        src={IMAGES.DECORATIVE_LEAF_1}
        className="-right-6 -top-[66px] w-[255px] h-[338px] z-[2]"
      />
      {/* Top-left decorative leaf */}
      <DecorativeImage
        src={IMAGES.DECORATIVE_LEAF_4}
        className="-left-10 -top-2 w-[180px] h-[200px] z-[2]"
      />

      {/* Top marquee */}
      <Marquee
        texts={["БИТВА МАЙСТРІВ", "ГОЛОВНИЙ ПРИЗ 2000 zł", "НАРОДНИЙ СПІКЕР", "ПОДІЯ РОКУ"]}
        speed={150}
        direction="left"
        pauseOnHover={true}
        textColorClass="text-blue-foreground"
        className="self-stretch bg-card-background absolute left-0 right-0 top-0 font-medium z-[3]"
      />

      {/* Badges */}
      <div className="grid grid-cols-2 gap-2.5 mb-5 relative z-[1] mt-6">
        <Badge className="bg-card-background border-0 rounded-full px-[50px] py-2.5">Варшава</Badge>
        <Badge className="bg-card-background border-0 rounded-full px-[50px] py-2.5">7 червня</Badge>
      </div>

      {/* Title */}
      <h1 className="flex flex-col gap-4 text-center items-center justify-center mb-6 relative z-[1]">
        <span className="uppercase text-[26px] text-blue-foreground font-semibold leading-[120%] tracking-tight">
          Головний nail-фестиваль Польщі
        </span>

        {/* Logo: "Nail" box + "Moment" text */}
        <span className="flex flex-col items-center gap-1">
          <span className="bg-yellow-foreground text-blue-background rounded-[10px] px-8 py-2 text-[28px] font-black tracking-tight">
            Nail
          </span>
          <span className="text-yellow-foreground text-[52px] font-black tracking-tight leading-none">
            Moment
          </span>
        </span>
      </h1>

      {/* CTA buttons */}
      <div className="flex flex-col gap-2.5 self-stretch px-4 relative z-[1]">
        <BuyTicketButton className="self-stretch" />
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="secondary"
            asChild
            className="text-blue-foreground flex items-center justify-center text-center border-blue-foreground/20"
            size="sm"
          >
            <a href="#battle-of-masters">Конкурс «Битва Майстрів»</a>
          </Button>
          <Button
            className="text-blue-foreground flex items-center justify-center text-center border-blue-foreground/20"
            variant="secondary"
            asChild
            size="sm"
          >
            <a href="#peoples-speaker">Народний Спікер</a>
          </Button>
        </div>
      </div>

      {/* Bottom marquee - brown text */}
      <Marquee
        texts={["БИТВА МАЙСТРІВ", "ГОЛОВНИЙ ПРИЗ 2000 zł", "НАРОДНИЙ СПІКЕР", "ПОДІЯ РОКУ"]}
        speed={150}
        direction="right"
        pauseOnHover={true}
        textColorClass="text-yellow-foreground"
        className="self-stretch bg-card-background absolute left-0 right-0 bottom-0 font-medium z-[3]"
      />
    </Section>
  );
};
