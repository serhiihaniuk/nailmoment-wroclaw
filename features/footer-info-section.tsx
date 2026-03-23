import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "@/blocks/ui/link";
import { INFO_URL, COMPANY_INFO, IMAGES } from "@/shared/const";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { Section } from "@/components/layout/section";
import { HOME_FOOTER_CONTENT } from "@/shared/content/home/footer";

interface FooterInfoSectionProps {
  className?: string;
}

export const FooterInfoSection: React.FC<FooterInfoSectionProps> = ({
  className,
}) => {
  return (
    <Section
      container="full"
      density="compact"
      className={cn("px-0 pb-0 pt-4 md:pt-6", className)}
      innerClassName="max-w-none"
    >
      <section className="relative isolate min-h-[440px] overflow-hidden rounded-t-[1.5rem] bg-blue-foreground px-4 pb-8 pt-8 text-center md:px-8">
        <img
          src={IMAGES.DECORATIVE_BG_1}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.04]"
        />
        <DecorativeImage
          src={IMAGES.DECORATIVE_LEAF_7}
          className="-left-5 top-[41px] h-[157px] w-[210px] z-0"
        />
        <DecorativeImage
          src={IMAGES.DECORATIVE_LEAF_1}
          className="-right-[46px] top-[258px] h-[240px] w-[181px] z-0"
        />

        <div className="relative z-[1] mx-auto flex w-full max-w-[360px] flex-col items-center">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-semibold uppercase leading-[120%] tracking-[-0.528px] text-[#FFF9EC]">
              ДАНІ КОМПАНІЇ
            </h3>
            <div className="space-y-0.5 text-sm font-medium leading-[150%] tracking-[-0.308px] text-[#FFF9EC]">
              <p>{COMPANY_INFO.NAME}</p>
              <p>NIP: {COMPANY_INFO.NIP}</p>
              <p>REGON: {COMPANY_INFO.REGON}</p>
            </div>
          </div>

          <div className="mt-[18px] flex flex-col items-center gap-4">
            <h3 className="text-2xl font-semibold uppercase leading-[120%] tracking-[-0.528px] text-[#FFF9EC]">
              КОНТАКТНА ТОЧКА
            </h3>
            <Link
              href={`mailto:${INFO_URL.EMAIL}`}
              className="text-sm font-medium leading-[150%] tracking-[-0.308px] text-[#FFF9EC] no-underline"
            >
              {INFO_URL.EMAIL}
            </Link>
          </div>

          <div className="mt-[18px] flex flex-col items-center gap-4">
            <h3 className="text-2xl font-semibold uppercase leading-[120%] tracking-[-0.528px] text-[#FFF9EC]">
              ВІДДІЛ ТУРБОТИ
            </h3>
            <p className="whitespace-pre-line text-sm font-medium leading-[150%] tracking-[-0.308px] text-[#FFF9EC]">
              {HOME_FOOTER_CONTENT.supportCopy}
            </p>
            <div className="flex justify-center gap-[10px] pt-[7px]">
              <Link
                href={INFO_URL.INSTAGRAM}
                target="_blank"
                aria-label="Instagram"
                className="no-underline"
              >
                <img
                  src="/images/2026/instagram-icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-8"
                />
              </Link>
              <Link
                href={INFO_URL.TELEGRAM}
                target="_blank"
                aria-label="Telegram"
                className="no-underline"
              >
                <img
                  src="/images/2026/telegram-icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-8"
                />
              </Link>
            </div>
          </div>

          <div className="mt-[10px] space-y-1 text-sm font-medium leading-[150%] tracking-[-0.308px] text-[#FFF9EC]">
            <p>
              <Link
                target="_self"
                href={HOME_FOOTER_CONTENT.privacyPolicyUrl}
                className="text-[#FFF9EC] no-underline"
              >
                Polityka prywatnosci
              </Link>
            </p>
            <p>{HOME_FOOTER_CONTENT.copyright}</p>
          </div>
        </div>
      </section>
    </Section>
  );
};
