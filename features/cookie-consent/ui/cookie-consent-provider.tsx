"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cookie } from "lucide-react";
import {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  createCookieConsentDecision,
  getCookieConsentServerSnapshot,
  getCookieConsentSnapshot,
  subscribeCookieConsent,
  writeCookieConsentDecision,
} from "@/features/cookie-consent/model/consent";
import {
  grantMetaPixelConsent,
  revokeMetaPixelConsent,
  trackMetaPixelInitiateCheckout,
  trackMetaPixelPageView,
} from "@/features/cookie-consent/lib/meta-pixel";
import {
  trackCookieConsentDecision,
  type CookieConsentTrackingAction,
  type CookieConsentTrackingSurface,
} from "@/features/cookie-consent/lib/dashboard-tracking";
import { COOKIE_SETTINGS_EVENT } from "@/shared/config/browser-events";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

type ConsentView = "banner" | "settings";
type ConsentLanguage = "pl" | "uk";

type CookieConsentProviderProps = {
  children: ReactNode;
};

const COOKIE_COPY = {
  pl: {
    languageLabel: "Język",
    title: "Cookies i prywatność",
    description:
      "Używamy plików niezbędnych do działania strony. Za zgodą uruchamiamy Meta Pixel do pomiaru reklam i kliknięć zakupu.",
    policyLink: "Polityka prywatności",
    reject: "Odrzuć",
    settings: "Ustawienia",
    acceptAll: "Akceptuję wszystkie",
    settingsTitle: "Ustawienia cookies",
    settingsDescription:
      "Możesz zmienić zgodę na marketingowe technologie śledzące.",
    necessaryTitle: "Niezbędne",
    necessaryDescription: "Wymagane do działania strony.",
    necessaryStatus: "zawsze",
    marketingTitle: "Marketing",
    marketingDescription:
      "Meta Pixel do pomiaru reklam, remarketingu i kliknięć zakupu.",
    save: "Zapisz wybór",
  },
  uk: {
    languageLabel: "Мова",
    title: "Cookies та приватність",
    description:
      "Ми використовуємо необхідні cookies для роботи сайту. Meta Pixel запускаємо лише після вашої згоди для вимірювання реклами та кліків покупки.",
    policyLink: "Політика приватності",
    reject: "Відхилити",
    settings: "Налаштування",
    acceptAll: "Прийняти всі",
    settingsTitle: "Налаштування cookies",
    settingsDescription:
      "Ви можете змінити згоду на маркетингові технології відстеження.",
    necessaryTitle: "Необхідні",
    necessaryDescription: "Потрібні для роботи сайту.",
    necessaryStatus: "завжди",
    marketingTitle: "Маркетинг",
    marketingDescription:
      "Meta Pixel для вимірювання реклами, ремаркетингу та кліків покупки.",
    save: "Зберегти вибір",
  },
} as const;

function getCheckoutLink(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return null;
  }

  return target.closest<HTMLAnchorElement>("a[data-meta-checkout]");
}

function getCheckoutMeta(link: HTMLAnchorElement) {
  return {
    contentCategory: link.dataset.metaCheckoutCategory || "ticket_checkout",
    contentName:
      link.dataset.metaCheckoutName ||
      link.textContent?.replace(/\s+/g, " ").trim() ||
      "Ticket checkout",
  };
}

function LanguageSwitch({
  language,
  onChange,
}: {
  language: ConsentLanguage;
  onChange: (language: ConsentLanguage) => void;
}) {
  return (
    <div
      aria-label={COOKIE_COPY[language].languageLabel}
      data-ui="cookie-consent-language-switch"
      className="inline-flex w-fit self-start rounded-full border border-brand-olive/15 bg-white/70 p-1"
    >
      {(["pl", "uk"] as const).map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={language === option}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-black uppercase transition",
            language === option
              ? "bg-brand-olive text-white"
              : "text-brand-olive hover:bg-brand-olive/10"
          )}
          onClick={() => onChange(option)}
        >
          {option === "pl" ? "PL" : "UA"}
        </button>
      ))}
    </div>
  );
}

function CookieConsentTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-olive/10 text-brand-olive"
      >
        <Cookie className="size-5" strokeWidth={2.4} />
      </span>
      <h2 className="font-montserrat text-lg font-black uppercase text-brand-brown">
        {children}
      </h2>
    </div>
  );
}

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const pathname = usePathname();
  const decision = useSyncExternalStore(
    subscribeCookieConsent,
    getCookieConsentSnapshot,
    getCookieConsentServerSnapshot
  );
  const [view, setView] = useState<ConsentView>("banner");
  const [language, setLanguage] = useState<ConsentLanguage>("pl");
  const [marketingDraft, setMarketingDraft] = useState(false);
  const lastTrackedPageRef = useRef<string | null>(null);
  const copy = COOKIE_COPY[language];

  const saveDecision = useCallback(
    (
      marketing: boolean,
      action: CookieConsentTrackingAction,
      surface: CookieConsentTrackingSurface
    ) => {
      const nextDecision = createCookieConsentDecision(marketing);

      writeCookieConsentDecision(nextDecision);
      trackCookieConsentDecision({ action, marketing, surface });
      setMarketingDraft(marketing);
      setView("banner");
    },
    []
  );

  useEffect(() => {
    function openSettings() {
      setMarketingDraft(decision?.marketing ?? false);
      setView("settings");
    }

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, [decision?.marketing]);

  useEffect(() => {
    if (!decision) {
      return;
    }

    if (decision.marketing) {
      grantMetaPixelConsent();
      return;
    }

    revokeMetaPixelConsent();
  }, [decision]);

  useEffect(() => {
    if (!decision?.marketing) {
      return;
    }

    const pageKey = `${decision.decidedAt}:${pathname ?? "/"}`;

    if (lastTrackedPageRef.current === pageKey) {
      return;
    }

    trackMetaPixelPageView();
    lastTrackedPageRef.current = pageKey;
  }, [decision?.decidedAt, decision?.marketing, pathname]);

  useEffect(() => {
    if (!decision?.marketing) {
      return;
    }

    function handleCheckoutClick(event: MouseEvent) {
      const link = getCheckoutLink(event.target);

      if (!link) {
        return;
      }

      trackMetaPixelInitiateCheckout(getCheckoutMeta(link));
    }

    document.addEventListener("click", handleCheckoutClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleCheckoutClick, { capture: true });
    };
  }, [decision?.marketing]);

  const shouldShowPanel = decision === null || view === "settings";

  useEffect(() => {
    if (!shouldShowPanel) {
      return;
    }

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const { body, documentElement } = document;
    const previousDocumentOverflow = documentElement.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;

    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      documentElement.style.overflow = previousDocumentOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
      window.scrollTo(scrollX, scrollY);
    };
  }, [shouldShowPanel]);

  return (
    <>
      {children}

      {decision !== undefined && shouldShowPanel ? (
        <div
          data-ui="cookie-consent-overlay"
          className="fixed inset-0 z-50 flex items-end overflow-y-auto overscroll-contain px-3 pb-3 pt-3 sm:px-5 sm:pb-5 sm:pt-5"
        >
          <section
            aria-label={copy.title}
            data-ui="cookie-consent-panel"
            className="mx-auto w-full max-w-4xl rounded-xl border border-brand-olive/15 bg-[#fffdf4] p-4 text-brand-olive shadow-[0_22px_60px_rgba(57,85,0,0.18)] sm:p-5"
          >
            {view === "settings" ? (
              <div data-ui="cookie-consent-settings" className="grid gap-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1.5">
                    <CookieConsentTitle>{copy.settingsTitle}</CookieConsentTitle>
                    <p className="text-sm font-medium leading-6 text-brand-olive/80">
                      {copy.settingsDescription}
                    </p>
                  </div>
                  <LanguageSwitch language={language} onChange={setLanguage} />
                </div>

                <div className="grid gap-3">
                  <div className="rounded-lg border border-brand-olive/10 bg-white/70 p-3">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-montserrat text-sm font-black uppercase text-brand-brown">
                          {copy.necessaryTitle}
                        </p>
                        <p className="text-sm font-medium leading-5 text-brand-olive/75">
                          {copy.necessaryDescription}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-brand-olive/10 px-3 py-1 text-xs font-bold uppercase">
                        {copy.necessaryStatus}
                      </span>
                    </div>
                  </div>

                  <label className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-brand-olive/10 bg-white/70 p-3">
                    <span>
                      <span className="block font-montserrat text-sm font-black uppercase text-brand-brown">
                        {copy.marketingTitle}
                      </span>
                      <span className="block text-sm font-medium leading-5 text-brand-olive/75">
                        {copy.marketingDescription}
                      </span>
                    </span>
                    <input
                      checked={marketingDraft}
                      className="size-5 accent-brand-olive"
                      onChange={(event) => setMarketingDraft(event.target.checked)}
                      type="checkbox"
                    />
                  </label>
                </div>

                <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="button"
                    variant="accent"
                    className="min-h-12 sm:order-2 sm:self-end"
                    onClick={() => saveDecision(true, "accept_all", "settings")}
                  >
                    {copy.acceptAll}
                  </Button>
                  <div className="flex w-full flex-col gap-2 sm:order-1 sm:w-auto sm:flex-row sm:items-center sm:justify-start">
                    <Button
                      type="button"
                      variant="secondary"
                      className="min-h-12"
                      onClick={() =>
                        saveDecision(marketingDraft, "save_settings", "settings")
                      }
                    >
                      {copy.save}
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      className="min-h-12"
                      onClick={() => saveDecision(false, "reject_all", "settings")}
                    >
                      {copy.reject}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                data-ui="cookie-consent-banner"
                className="grid gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <CookieConsentTitle>{copy.title}</CookieConsentTitle>
                    <LanguageSwitch language={language} onChange={setLanguage} />
                  </div>
                  <p className="max-w-3xl text-sm font-medium leading-6 text-brand-olive/80">
                    {copy.description}
                  </p>
                  <Link
                    href="/polityka"
                    className="inline-flex text-sm font-bold text-brand-brown underline underline-offset-4"
                  >
                    {copy.policyLink}
                  </Link>
                </div>

                <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="button"
                    variant="accent"
                    className="min-h-12 sm:order-2 sm:self-end"
                    onClick={() => saveDecision(true, "accept_all", "banner")}
                  >
                    {copy.acceptAll}
                  </Button>
                  <div className="flex w-full flex-col gap-2 sm:order-1 sm:w-auto sm:flex-row sm:items-center sm:justify-start">
                    <Button
                      type="button"
                      variant="secondary"
                      className="min-h-12"
                      onClick={() => {
                        setMarketingDraft(decision?.marketing ?? false);
                        setView("settings");
                      }}
                    >
                      {copy.settings}
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      className="min-h-12"
                      onClick={() => saveDecision(false, "reject_all", "banner")}
                    >
                      {copy.reject}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      ) : null}
    </>
  );
}
