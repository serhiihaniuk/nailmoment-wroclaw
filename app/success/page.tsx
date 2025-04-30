"use client";

import { Section } from "@/blocks/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { SectionHeader } from "@/components/ui/section-header";
import { FooterInfoSection } from "@/features/footer-info-section";
import { LocationSection } from "@/features/location-section";
import { IMAGES } from "@/shared/const";
import { MomentIcon, NailIcon } from "@/shared/icons";
import { StepBack } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const battleOfMastersLink = "/battle";

export default function SuccessPayment() {
  const searchParams = useSearchParams();
  const showBattle = searchParams?.get("showBattle") === "true";

  return (
    <main className="w-full max-w-4xl shadow-2xl overflow-hidden mx-auto bg-blue-background grow min-h-[100dvh] flex flex-col gap-5">
      {/* Hero */}
      <Section className="flex flex-col relative items-center justify-start pt-22">
        <DecorativeImage
          src={IMAGES.ORANGES_URL}
          className="-left-14 -top-10 md:-left-6 md:-top-5 rotate-[30deg] size-[200px] z-0"
        />
        <DecorativeImage
          src={IMAGES.LEMONS_URL}
          className="-right-8 md:-right-2 -top-12 size-[180px]"
        />
        <span className="flex w-[358px] h-[117px] gap-3.5 flex-col items-center justify-center mb-5">
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
        <div className="grid grid-cols-2 gap-2 mb-5 relative z-1 max-w-xs mx-auto">
          <Badge>27 липня</Badge>
          <Badge>Вроцлав</Badge>
        </div>
      </Section>

      {/* Purchase confirmation */}
      <Section className="px-6 md:px-10 lg:px-16 grow">
        <h1 className="text-3xl md:text-4xl font-semibold text-blue-foreground text-center mb-2 pb-2 border-b border-white/30">
          Оплата успішна!
        </h1>

        <div className="space-y-5 text-blue-foreground font-medium text-lg leading-relaxed text-center max-w-md mx-auto">
          <p>
            Дякуємо за покупку квитка на фестиваль NailMoment!
            <br />
            Ми вже в передчутті зустрічі з вами на нашій неймовірній тусовці!
          </p>
          <p>
            Ваш квиток із QR-кодом надіслано на вашу електронну пошту — не
            забудьте перевірити вхідні листи (а також папку “Спам”, якщо що)!
          </p>
        </div>
      </Section>

      {showBattle && (
        <Section className="text-center text-blue-foreground mt-5 space-y-4 bg-blue-foreground/10 py-4 flex flex-col items-center justify-center gap-1 mb-3">
          <SectionHeader title="🔥 Битва Майстрів!" className="p-0 m-0" />
          <p className="text-lg leading-relaxed max-w-sm mx-auto">
            Маєте хист до змагань? Після придбання цього квитка ви отримуєте
            ексклюзивну можливість взяти участь у конкурсі&nbsp;
            <strong>«Битва Майстрів»</strong>! Для участі необхідно додатково
            придбати окремий квиток конкурсанта.
          </p>

          <Button
            asChild
            className="text-yellow-foreground bg-yellow-background uppercase"
          >
            <Link href={battleOfMastersLink}>Дізнатися більше</Link>
          </Button>
        </Section>
      )}

      {/* Location, footer and navigation */}
      <LocationSection />
      <Button
        className="text-blue-foreground w-full max-w-80 mx-auto my-6 flex gap-2 items-center"
        asChild
      >
        <Link href="/">
          <StepBack />
          Повернутися на головну сторінку
        </Link>
      </Button>
      <FooterInfoSection />
    </main>
  );
}
