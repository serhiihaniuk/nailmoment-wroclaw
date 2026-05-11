export const COOKIE_CONSENT_STORAGE_KEY = "nailmoment_cookie_consent_v1";
export const COOKIE_CONSENT_VERSION = 1;

const COOKIE_CONSENT_CHANGED_EVENT = "nailmoment:cookie-consent-changed";

export type CookieConsentDecision = {
  version: typeof COOKIE_CONSENT_VERSION;
  marketing: boolean;
  decidedAt: string;
};

let cachedRawConsent: string | null | undefined;
let cachedConsentSnapshot: CookieConsentDecision | null | undefined;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function createCookieConsentDecision(
  marketing: boolean,
  now = new Date()
): CookieConsentDecision {
  return {
    version: COOKIE_CONSENT_VERSION,
    marketing,
    decidedAt: now.toISOString(),
  };
}

export function parseStoredCookieConsent(value: string | null): CookieConsentDecision | null {
  if (!value) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(value);

    if (
      !isRecord(parsed) ||
      parsed.version !== COOKIE_CONSENT_VERSION ||
      typeof parsed.marketing !== "boolean" ||
      typeof parsed.decidedAt !== "string"
    ) {
      return null;
    }

    return {
      version: COOKIE_CONSENT_VERSION,
      marketing: parsed.marketing,
      decidedAt: parsed.decidedAt,
    };
  } catch {
    return null;
  }
}

export function hasMarketingCookieConsent(
  decision: CookieConsentDecision | null | undefined
) {
  return decision?.marketing === true;
}

export function getCookieConsentSnapshot() {
  if (typeof window === "undefined") {
    return undefined;
  }

  const rawConsent = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

  if (rawConsent === cachedRawConsent) {
    return cachedConsentSnapshot;
  }

  cachedRawConsent = rawConsent;
  cachedConsentSnapshot = parseStoredCookieConsent(rawConsent);

  return cachedConsentSnapshot;
}

export function getCookieConsentServerSnapshot() {
  return undefined;
}

export function subscribeCookieConsent(callback: () => void) {
  window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function writeCookieConsentDecision(decision: CookieConsentDecision) {
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(decision));
  cachedRawConsent = undefined;
  window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGED_EVENT));
}
