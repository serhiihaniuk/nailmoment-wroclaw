"use client";

import { Link } from "@/blocks/ui/link";
import { Section } from "@/blocks/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { FooterInfoSection } from "@/features/footer-info-section";
import { LocationSection } from "@/features/location-section";
import { IMAGES } from "@/shared/const";
import { MomentIcon, NailIcon } from "@/shared/icons";
import { StepBack } from "lucide-react";

const TELEGRAM_SUBMISSION_USERNAME = "nail_moment_pl";
const INSTAGRAM_LINK = "https://www.instagram.com/nail_moment_pl";

export default function SuccessBattlePayment() {
  return (
    <main className="w-full max-w-4xl shadow-2xl overflow-hidden mx-auto bg-blue-background grow min-h-[100dvh] flex flex-col gap-5">
      {/* Hero - Can be kept similar for branding consistency */}
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

      <Section className="grow">
        <h1 className="text-3xl md:text-4xl font-semibold text-blue-foreground text-center mb-2 pb-2 border-b border-white/30">
          Ви успішно зареєструвалися на <br />
          Битву Майстрів!
        </h1>

        <div className="space-y-5 text-blue-foreground font-medium text-lg leading-relaxed text-center max-w-lg mx-auto">
          <p>
            Дякуємо за покупку квитка учасника конкурсу &quot;Битва
            Майстрів&quot;!
            <br />
            Ми з нетерпінням чекаємо на вашу неймовірну роботу!
          </p>
          <p>
            Детальні інструкції та підтвердження з номером вашого квитка також
            надіслано на вашу електронну пошту. Будь ласка, перевірте вхідні
            листи (та папку “Спам”).
          </p>
        </div>
      </Section>

      {/* "Що робити далі" Section */}
      <Section className="">
        <h2 className="text-2xl font-semibold text-blue-foreground text-center mb-3">
          Що робити далі:
        </h2>
        <div className="max-w-xl mx-auto  p-6 ">
          <ol className="list-decimal list-inside space-y-4 text-blue-foreground/90 text-base md:text-lg leading-relaxed">
            <li>Виберіть категорію, на яку будете надсилати свою роботу.</li>
            <li>
              Підготуйте якісну роботу згідно з обраною номінацією. Зробіть 1-3
              дуже гарні фотографії вашої роботи.
            </li>
            <li>
              Вкажіть вашу номінацію, прикріпіть 1-3 фотографії вашої роботи та
              надішліть нам у Telegram:{" "}
              <Link
                href={`https://t.me/${TELEGRAM_SUBMISSION_USERNAME}`}
                target="_blank"
                icon
              >
                @{TELEGRAM_SUBMISSION_USERNAME}
              </Link>
              .
            </li>
            <li>
              Поки чекаєте на результати, ви можете придбати ще один квиток
              учасника та взяти участь у наступній номінації! ☺️
            </li>
          </ol>
        </div>
      </Section>

      <Section className="text-center py-10">
        <h3 className="text-2xl"> Хочу ще один квиток учасника! </h3>
        <Link
          href={INSTAGRAM_LINK}
          target="_blank"
          icon
          className="text-accent-pink text-xl"
        >
          Написати в Instagram
        </Link>
      </Section>

      {/* Location, footer and navigation - Kept for context and consistency */}
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
