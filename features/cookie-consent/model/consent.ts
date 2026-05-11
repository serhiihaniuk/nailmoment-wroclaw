export {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_VERSION,
  createCookieConsentDecision,
  getCookieConsentServerSnapshot,
  getCookieConsentSnapshot,
  hasMarketingCookieConsent,
  parseStoredCookieConsent,
  subscribeCookieConsent,
  writeCookieConsentDecision,
  type CookieConsentDecision,
} from "@/shared/lib/marketing-consent";
