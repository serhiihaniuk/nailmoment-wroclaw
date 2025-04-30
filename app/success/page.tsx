import { Section } from "@/blocks/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { FooterInfoSection } from "@/features/footer-info-section";
import { LocationSection } from "@/features/location-section";
import { IMAGES } from "@/shared/const";
import { MomentIcon, NailIcon } from "@/shared/icons";
import { StepBack } from "lucide-react";
import Link from "next/link"; // Import Link for buttons

// Consider renaming the file to reflect its purpose, e.g., success-payment.tsx
export default function SuccessPayment() {
  return (
    <main className="w-full max-w-4xl shadow-2xl overflow-hidden mx-auto bg-blue-background grow min-h-[100dvh] flex flex-col gap-12">
      {/* Header Section with Logo and Decorative Images */}
      <Section className="flex flex-col relative items-center justify-start pt-16 pb-10">
        <DecorativeImage
          src={IMAGES.ORANGES_URL}
          className="-left-14 -top-5 md:-left-6 md:-top-5 rotate-[30deg] size-[200px] z-0"
        />
        <DecorativeImage
          src={IMAGES.LEMONS_URL}
          className="-right-8 md:-right-2 -top-8 size-[180px]"
        />
        {/* Optional: Keep a back button if needed, maybe link to user's account or events page */}
        <Link
          href="/" // Or maybe link to a user dashboard or event list?
          className="absolute top-4 left-4 text-sm text-blue-foreground/80 hover:text-white transition-colors z-10"
          aria-label="Повернутися назад" // Updated accessibility label
        >
          ← Назад {/* Updated text */}
        </Link>
        {/* Logo */}
        <span className="flex w-[358px] h-[117px] gap-3.5 flex-col items-center justify-center mb-10">
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
      </Section>

      <Section className="px-6 md:px-10 lg:px-16 pb-16 grow">
        {/* Updated Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-blue-foreground text-center mb-8 pb-4 border-b border-white/30">
          Оплата успішна! {/* Changed Heading */}
        </h1>
        <div className="grid grid-cols-2 gap-2 mb-5 relative z-1 max-w-sm mx-auto">
          <Badge>27 липня</Badge>
          <Badge>Вроцлав</Badge>
        </div>

        {/* Updated Content */}
        <div className="space-y-5 text-blue-foreground/90 text-base leading-relaxed text-center max-w-md mx-auto">
          {" "}
          {/* Added text-center for better presentation */}
          <p>
            Дякуємо за покупку квитка на фестиваль NailMoment!
            <br /> {/* Added line break for better flow */}
            Ми вже в передчутті зустрічі з вами на нашій неймовірній тусовці!
          </p>
          <p>
            Ваш квиток із QR-кодом надіслано на вашу електронну пошту — не
            забудьте перевірити вхідні листи (а також папку “Спам”, якщо що)!
          </p>
        </div>

        {/* Button to go back to homepage */}
      </Section>
      <LocationSection />
      <Button
        className="text-blue-foreground w-full max-w-80 mx-auto mt-10 flex gap-2 items-center"
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
