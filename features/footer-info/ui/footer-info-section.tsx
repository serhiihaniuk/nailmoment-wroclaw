import React from "react";
import { cn } from "@/shared/lib/utils";
import { IconLink as Link } from "@/shared/ui/icon-link";
import { INFO_URL, COMPANY_INFO, IMAGES } from "@/shared/config/const";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { Section } from "@/shared/ui/layout/section";
import { HOME_FOOTER_CONTENT } from "@/features/footer-info/model/content";

interface FooterInfoSectionProps {
  className?: string;
}

export const FooterInfoSection: React.FC<FooterInfoSectionProps> = ({
  className,
}) => {
  return (
    <Section
      uiId="footer-section"
      container="full"
      density="compact"
      className={cn("px-0 pb-0 pt-4 md:pt-6", className)}
      innerClassName="max-w-none"
    >
      <section
        data-ui="footer-shell"
        className="relative isolate min-h-96 overflow-hidden rounded-t-2xl md:rounded-2xl bg-blue-foreground px-4 pb-8 pt-8 text-center md:px-8"
      >
        <img
          data-ui="footer-background"
          src={IMAGES.DECORATIVE_BG_1}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-5"
        />
        <DecorativeImage
          uiId="footer-leaf-left"
          src={IMAGES.DECORATIVE_LEAF_7}
          className="-left-5 top-10 h-40 w-52 z-0"
        />
        <DecorativeImage
          uiId="footer-leaf-right"
          src={IMAGES.DECORATIVE_LEAF_1}
          className="-right-12 top-64 h-60 w-44 z-0"
        />

        <div
          data-ui="footer-content"
          className="relative z-[1] mx-auto flex w-full max-w-sm flex-col items-center gap-5"
        >
          <div
            data-ui="footer-company"
            className="flex flex-col items-center gap-4"
          >
            <h3
              data-ui="footer-company-title"
              className="text-2xl font-semibold uppercase leading-tight tracking-tight text-text-inverse"
            >
              ДАНІ КОМПАНІЇ
            </h3>
            <div
              data-ui="footer-company-text"
              className="space-y-0.5 text-sm font-medium leading-relaxed tracking-tight text-text-inverse"
            >
              <p data-ui="footer-company-name">{COMPANY_INFO.NAME}</p>
              <p data-ui="footer-company-nip">NIP: {COMPANY_INFO.NIP}</p>
              <p data-ui="footer-company-regon">REGON: {COMPANY_INFO.REGON}</p>
            </div>
          </div>

          <div
            data-ui="footer-contact"
            className="flex flex-col items-center gap-4"
          >
            <h3
              data-ui="footer-contact-title"
              className="text-2xl font-semibold uppercase leading-tight tracking-tight text-text-inverse"
            >
              КОНТАКТНА ТОЧКА
            </h3>
            <Link
              uiId="footer-contact-email"
              href={`mailto:${INFO_URL.EMAIL}`}
              className="text-sm font-medium leading-relaxed tracking-tight text-text-inverse no-underline"
            >
              {INFO_URL.EMAIL}
            </Link>
          </div>

          <div
            data-ui="footer-support"
            className="flex flex-col items-center gap-4"
          >
            <h3
              data-ui="footer-support-title"
              className="text-2xl font-semibold uppercase leading-tight tracking-tight text-text-inverse"
            >
              ВІДДІЛ ТУРБОТИ
            </h3>
            <p
              data-ui="footer-support-text"
              className="whitespace-pre-line text-sm font-medium leading-relaxed tracking-tight text-text-inverse"
            >
              {HOME_FOOTER_CONTENT.supportCopy}
            </p>
            <div
              data-ui="footer-support-socials"
              className="flex justify-center gap-2.5 pt-2"
            >
              <Link
                uiId="footer-support-instagram"
                href={INFO_URL.INSTAGRAM}
                target="_blank"
                aria-label="Instagram"
                className="no-underline"
              >
                <img
                  data-ui="footer-support-instagram-icon"
                  src="/images/2026/instagram-icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-8"
                />
              </Link>
              <Link
                uiId="footer-support-telegram"
                href={INFO_URL.TELEGRAM}
                target="_blank"
                aria-label="Telegram"
                className="no-underline"
              >
                <img
                  data-ui="footer-support-telegram-icon"
                  src="/images/2026/telegram-icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-8"
                />
              </Link>
            </div>
          </div>

          <div
            data-ui="footer-meta"
            className="mt-2.5 space-y-1 text-sm font-medium leading-relaxed tracking-tight text-text-inverse"
          >
            <p data-ui="footer-privacy">
              <Link
                uiId="footer-privacy-link"
                target="_self"
                href={HOME_FOOTER_CONTENT.privacyPolicyUrl}
                className="text-text-inverse no-underline"
              >
                Polityka prywatnosci
              </Link>
            </p>
            <p data-ui="footer-copyright">{HOME_FOOTER_CONTENT.copyright}</p>
          </div>
        </div>
      </section>
    </Section>
  );
};
