"use client";

import { Suspense } from "react";
import { FooterInfoSection } from "@/features/footer-info/ui/footer-info-section";
import { LocationSection } from "@/features/location/ui/location-section";
import { MomentIcon, NailIcon } from "@/shared/assets/icons";
import { BackLink } from "@/shared/ui/back-link";
import { Badge } from "@/shared/ui/badge";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { Section } from "@/shared/ui/layout/section";
import { TypographyTitle } from "@/shared/ui/typography";
import { IMAGES } from "@/shared/config/const";
import { BattleCTA } from "@/widgets/battle-cta";

export default function SuccessPayment() {
  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-4xl grow flex-col gap-5 overflow-hidden bg-blue-background shadow-2xl">
      <Section className="relative flex flex-col items-center justify-start pt-22">
        <DecorativeImage
          src={IMAGES.ORANGES_URL}
          className="-left-14 -top-10 size-[200px] rotate-[30deg] z-0 md:-left-6 md:-top-5"
        />
        <DecorativeImage
          src={IMAGES.LEMONS_URL}
          className="-right-8 -top-12 size-[180px] md:-right-2"
        />
        <span className="mb-5 flex h-[117px] w-[358px] flex-col items-center justify-center gap-3.5">
          <NailIcon />
          <span className="relative block">
            <MomentIcon />
            <img
              src={IMAGES.LEMON_URL}
              alt="O"
              className="absolute left-[67px] top-[-12px] inline-block size-[62px] object-cover"
            />
          </span>
        </span>
        <div className="relative z-1 mx-auto mb-5 grid max-w-xs grid-cols-2 gap-2">
          <Badge className="border-0 bg-card-background">7 червня</Badge>
          <Badge className="border-0 bg-card-background">Варшава</Badge>
        </div>
      </Section>

      <Section className="grow px-6 md:px-10 lg:px-16">
        <TypographyTitle
          as="h1"
          order="order2"
          tone="default"
          className="mb-2 border-b border-white/30 pb-2 normal-case text-center text-blue-foreground"
        >
          Оплата успішна!
        </TypographyTitle>

        <div className="mx-auto max-w-md space-y-5 text-center text-lg font-medium leading-relaxed text-blue-foreground">
          <p>
            Дякуємо за покупку квитка на фестиваль NailMoment!
            <br />
            Ми вже в передчутті зустрічі з вами на нашій неймовірній тусовці!
          </p>
          <p>
            Ваш квиток із QR-кодом надіслано на вашу електронну пошту — не забудьте перевірити
            вхідні листи, а також папку “Спам”, якщо що!
          </p>
        </div>
      </Section>

      <Suspense>
        <BattleCTA />
      </Suspense>

      <LocationSection />
      <div className="my-6 flex justify-center">
        <BackLink href="/">Повернутися на головну</BackLink>
      </div>
      <FooterInfoSection />
    </main>
  );
}
