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

function getAnchor(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return null;
  }

  return target.closest<HTMLAnchorElement>("a[href]");
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

function getCurrentAttributionParams() {
  const currentUrl = new URL(window.location.href);

  return extractAttributionParams(currentUrl.searchParams);
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

      if (!link || !rawHref || rawHref.startsWith("#")) {
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

      if (nextHref !== rawHref) {
        link.setAttribute("href", nextHref);
      }
    }

    persistCurrentUrl();
    window.addEventListener("popstate", persistCurrentUrl);
    document.addEventListener("click", handleLinkClick, { capture: true });

    return () => {
      window.removeEventListener("popstate", persistCurrentUrl);
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, [hasMarketingConsent]);

  return children;
}
