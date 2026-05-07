import React from "react";
import { HOME_FOOTER_CONTENT } from "@/features/footer-info/model/content";
import { CookieSettingsButton } from "@/features/footer-info/ui/cookie-settings-button";
import { COMPANY_INFO, INFO_URL } from "@/shared/config/const";
import { cn } from "@/shared/lib/utils";
import { DecoratedOliveCard } from "@/shared/ui/decorated-olive-card";
import { IconLink as Link } from "@/shared/ui/icon-link";
import { Section } from "@/shared/ui/layout/section";
import { TypographyTitle } from "@/shared/ui/typography";

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
      <DecoratedOliveCard
        data-ui="footer-shell"
        uiId="footer-shell"
        leafLayout="footer"
        className="min-h-96 rounded-2xl text-center"
        contentClassName="mx-auto flex w-full max-w-sm flex-col items-center gap-5 px-4 pb-8 pt-8 md:px-8"
      >
        <div data-ui="footer-content" className="contents">
          <div data-ui="footer-company" className="flex flex-col items-center gap-4">
            <TypographyTitle
              as="h3"
              uiId="footer-company-title"
              order="order3"
              tone="inverse"
              className="leading-tight"
            >
              ДАНІ КОМПАНІЇ
            </TypographyTitle>
            <div
              data-ui="footer-company-text"
              className="space-y-0.5 text-sm font-medium leading-relaxed tracking-tight text-text-inverse"
            >
              <p data-ui="footer-company-name">{COMPANY_INFO.NAME}</p>
              <p data-ui="footer-company-nip">NIP: {COMPANY_INFO.NIP}</p>
              <p data-ui="footer-company-regon">REGON: {COMPANY_INFO.REGON}</p>
            </div>
          </div>

          <div data-ui="footer-contact" className="flex flex-col items-center gap-4">
            <TypographyTitle
              as="h3"
              uiId="footer-contact-title"
              order="order3"
              tone="inverse"
              className="leading-tight"
            >
              КОНТАКТНА ТОЧКА
            </TypographyTitle>
            <Link
              uiId="footer-contact-email"
              href={`mailto:${INFO_URL.EMAIL}`}
              className="text-sm font-medium leading-relaxed tracking-tight text-text-inverse no-underline"
            >
              {INFO_URL.EMAIL}
            </Link>
          </div>

          <div data-ui="footer-support" className="flex flex-col items-center gap-4">
            <TypographyTitle
              as="h3"
              uiId="footer-support-title"
              order="order3"
              tone="inverse"
              className="leading-tight"
            >
              ВІДДІЛ ТУРБОТИ
            </TypographyTitle>
            <p
              data-ui="footer-support-text"
              className="whitespace-pre-line text-sm font-medium leading-relaxed tracking-tight text-text-inverse"
            >
              {HOME_FOOTER_CONTENT.supportCopy}
            </p>
            <div data-ui="footer-support-socials" className="flex justify-center gap-2.5 pt-2">
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
            <p data-ui="footer-cookie-settings-row">
              <CookieSettingsButton />
            </p>
            <p data-ui="footer-copyright">{HOME_FOOTER_CONTENT.copyright}</p>
          </div>
        </div>
      </DecoratedOliveCard>
    </Section>
  );
};
