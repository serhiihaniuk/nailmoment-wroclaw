"use client";

import { ReactNode, useEffect, useSyncExternalStore } from "react";
import {
  getCookieConsentServerSnapshot,
  getCookieConsentSnapshot,
  hasMarketingCookieConsent,
  subscribeCookieConsent,
} from "@/shared/lib/marketing-consent";
import {
  appendAttributionParamsToUrl,
  extractAttributionParams,
  hasAttributionParams,
  readStoredAttribution,
  writeStoredAttribution,
  type AttributionParams,
} from "@/features/utm-tracking/model/attribution";

type UtmTrackingProviderProps = {
  children: ReactNode;
};

const CHECKOUT_ATTRIBUTION_START_ENDPOINT =
  process.env.NEXT_PUBLIC_DASHBOARD_ATTRIBUTION_START_URL ??
  "https://dashboard.nailmoment.pl/api/stripe/checkout-attribution/start";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];
type UtmPayload = Record<UtmKey, string | null>;

function getAnchor(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return null;
  }

  return target.closest<HTMLAnchorElement>("a[href]");
}

function shouldHandleLinkActivation(event: MouseEvent) {
  if (event.type === "auxclick") {
    return event.button === 1;
  }

  return event.button === 0;
}

function getLandingPath(url: URL) {
  return `${url.pathname}${url.search}${url.hash}`;
}

function safeReadStoredParams() {
  try {
    return readStoredAttribution(window.localStorage)?.params ?? {};
  } catch {
    return {};
  }
}

function safeWriteStoredParams(params: AttributionParams, url: URL) {
  try {
    writeStoredAttribution(window.localStorage, params, {
      landingPath: getLandingPath(url),
      referrer: document.referrer || undefined,
    });
  } catch {
    // Some private/restricted browsers block localStorage; link propagation still works.
  }
}

function shouldDecorateLink(link: HTMLAnchorElement, url: URL) {
  if (link.dataset.utmPersist === "false") {
    return false;
  }

  if (url.origin === window.location.origin) {
    return true;
  }

  return link.hasAttribute("data-meta-checkout");
}

function shouldCreateCheckoutAttribution(link: HTMLAnchorElement) {
  return link.dataset.metaCheckout === "festival-ticket";
}

function getCurrentAttributionParams() {
  const currentUrl = new URL(window.location.href);

  return extractAttributionParams(currentUrl.searchParams);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getUtmPayload(params: AttributionParams): UtmPayload {
  return UTM_KEYS.reduce<UtmPayload>(
    (payload, key) => ({
      ...payload,
      [key]: params[key] ?? null,
    }),
    {
      utm_campaign: null,
      utm_content: null,
      utm_medium: null,
      utm_source: null,
      utm_term: null,
    }
  );
}

function hasUtmPayloadValues(utm: UtmPayload) {
  return Object.values(utm).some(
    (value) => typeof value === "string" && value.length > 0
  );
}

async function createCheckoutClientReferenceId(params: AttributionParams) {
  const utm = getUtmPayload(params);

  if (!hasUtmPayloadValues(utm)) {
    return null;
  }

  const response = await fetch(CHECKOUT_ATTRIBUTION_START_ENDPOINT, {
    body: JSON.stringify({
      landingPage: window.location.href,
      referrer: document.referrer || null,
      utm,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Checkout attribution reference request failed");
  }

  const json: unknown = await response.json();

  if (!isRecord(json) || typeof json.clientReferenceId !== "string") {
    throw new Error("Checkout attribution reference response was invalid");
  }

  if (!json.clientReferenceId.startsWith("attr_")) {
    throw new Error("Checkout attribution reference had an unexpected format");
  }

  return json.clientReferenceId;
}

function openCheckoutWindow(link: HTMLAnchorElement) {
  if (link.target !== "_blank") {
    return null;
  }

  const checkoutWindow = window.open("about:blank", "_blank");
  if (checkoutWindow) {
    checkoutWindow.opener = null;
  }

  return checkoutWindow;
}

function redirectToCheckout(
  link: HTMLAnchorElement,
  href: string,
  checkoutWindow: Window | null
) {
  if (checkoutWindow && !checkoutWindow.closed) {
    checkoutWindow.location.replace(href);
    return;
  }

  if (link.target === "_blank") {
    const openedWindow = window.open(href, "_blank", "noopener,noreferrer");

    if (openedWindow) {
      return;
    }
  }

  window.location.assign(href);
}

async function redirectWithCheckoutAttribution({
  decoratedHref,
  link,
  params,
}: {
  decoratedHref: string;
  link: HTMLAnchorElement;
  params: AttributionParams;
}) {
  const checkoutWindow = openCheckoutWindow(link);

  try {
    const clientReferenceId = await createCheckoutClientReferenceId(params);
    const href = clientReferenceId
      ? appendAttributionParamsToUrl(
          decoratedHref,
          { client_reference_id: clientReferenceId },
          window.location.href
        )
      : decoratedHref;

    redirectToCheckout(link, href, checkoutWindow);
  } catch {
    redirectToCheckout(link, decoratedHref, checkoutWindow);
  }
}

export function UtmTrackingProvider({ children }: UtmTrackingProviderProps) {
  const cookieConsent = useSyncExternalStore(
    subscribeCookieConsent,
    getCookieConsentSnapshot,
    getCookieConsentServerSnapshot
  );
  const hasMarketingConsent = hasMarketingCookieConsent(cookieConsent);

  useEffect(() => {
    if (!hasMarketingConsent) return;

    function persistCurrentUrl() {
      const currentUrl = new URL(window.location.href);
      const params = extractAttributionParams(currentUrl.searchParams);

      if (hasAttributionParams(params)) {
        safeWriteStoredParams(params, currentUrl);
      }
    }

    function getParamsForLink(url: URL) {
      const linkParams = extractAttributionParams(url.searchParams);

      if (hasAttributionParams(linkParams)) {
        safeWriteStoredParams(linkParams, url);
        return linkParams;
      }

      const currentParams = getCurrentAttributionParams();

      if (hasAttributionParams(currentParams)) {
        return currentParams;
      }

      return safeReadStoredParams();
    }

    function handleLinkClick(event: MouseEvent) {
      const link = getAnchor(event.target);
      const rawHref = link?.getAttribute("href");

      if (
        !link ||
        !rawHref ||
        rawHref.startsWith("#") ||
        !shouldHandleLinkActivation(event)
      ) {
        return;
      }

      let targetUrl: URL;

      try {
        targetUrl = new URL(rawHref, window.location.href);
      } catch {
        return;
      }

      if (!shouldDecorateLink(link, targetUrl)) {
        return;
      }

      const params = getParamsForLink(targetUrl);

      if (!hasAttributionParams(params)) {
        return;
      }

      const nextHref = appendAttributionParamsToUrl(
        rawHref,
        params,
        window.location.href
      );

      if (
        link.hasAttribute("data-meta-checkout") &&
        shouldCreateCheckoutAttribution(link)
      ) {
        event.preventDefault();
        void redirectWithCheckoutAttribution({
          decoratedHref: nextHref,
          link,
          params,
        });
        return;
      }

      if (nextHref !== rawHref) {
        link.setAttribute("href", nextHref);
      }
    }

    persistCurrentUrl();
    window.addEventListener("popstate", persistCurrentUrl);
    document.addEventListener("click", handleLinkClick, { capture: true });
    document.addEventListener("auxclick", handleLinkClick, { capture: true });

    return () => {
      window.removeEventListener("popstate", persistCurrentUrl);
      document.removeEventListener("click", handleLinkClick, { capture: true });
      document.removeEventListener("auxclick", handleLinkClick, { capture: true });
    };
  }, [hasMarketingConsent]);

  return children;
}
