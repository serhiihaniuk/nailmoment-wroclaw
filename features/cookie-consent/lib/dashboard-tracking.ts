import { COOKIE_CONSENT_TRACKING_ENDPOINT } from "@/shared/config/analytics";
import { COOKIE_CONSENT_VERSION } from "@/features/cookie-consent/model/consent";

export type CookieConsentTrackingAction =
  | "accept_all"
  | "reject_all"
  | "save_settings";

export type CookieConsentTrackingSurface = "banner" | "settings";

type CookieConsentTrackingPayload = {
  action: CookieConsentTrackingAction;
  consentVersion: typeof COOKIE_CONSENT_VERSION;
  marketing: boolean;
  surface: CookieConsentTrackingSurface;
};

export function trackCookieConsentDecision(
  payload: Omit<CookieConsentTrackingPayload, "consentVersion">
) {
  if (typeof window === "undefined") {
    return;
  }

  const body: CookieConsentTrackingPayload = {
    ...payload,
    consentVersion: COOKIE_CONSENT_VERSION,
  };

  void fetch(COOKIE_CONSENT_TRACKING_ENDPOINT, {
    body: JSON.stringify(body),
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    keepalive: true,
    method: "POST",
    mode: "cors",
  }).catch(() => undefined);
}
