"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import {
  getCookieConsentServerSnapshot,
  getCookieConsentSnapshot,
  hasMarketingCookieConsent,
  subscribeCookieConsent,
} from "@/shared/lib/marketing-consent";

const ATTRIBUTION_ENDPOINT =
  process.env.NEXT_PUBLIC_DASHBOARD_ATTRIBUTION_URL ??
  "https://dashboard.nailmoment.pl/api/stripe/checkout-attribution";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];

type CheckoutAttributionPayload = {
  landingPage: string;
  referrer: string | null;
  sessionId: string;
  utm: Record<UtmKey, string | null>;
};

function readTrackingValue(params: URLSearchParams, key: string) {
  const value = params.get(key)?.trim();
  return value ? value : null;
}

function buildAttributionPayload(): CheckoutAttributionPayload | null {
  const url = new URL(window.location.href);
  const sessionId = readTrackingValue(url.searchParams, "session_id");

  if (!sessionId) return null;

  const utm = UTM_KEYS.reduce<Record<UtmKey, string | null>>(
    (params, key) => ({
      ...params,
      [key]: readTrackingValue(url.searchParams, key),
    }),
    {
      utm_campaign: null,
      utm_content: null,
      utm_medium: null,
      utm_source: null,
      utm_term: null,
    }
  );

  return {
    landingPage: window.location.href,
    referrer: document.referrer || null,
    sessionId,
    utm,
  };
}

async function sendAttributionPayload(payload: CheckoutAttributionPayload) {
  const body = JSON.stringify(payload);

  if (navigator.sendBeacon?.(ATTRIBUTION_ENDPOINT, body)) {
    return;
  }

  const response = await fetch(ATTRIBUTION_ENDPOINT, {
    body,
    headers: {
      "Content-Type": "application/json",
    },
    keepalive: true,
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to report checkout attribution");
  }
}

export function SuccessAttributionReporter() {
  const cookieConsent = useSyncExternalStore(
    subscribeCookieConsent,
    getCookieConsentSnapshot,
    getCookieConsentServerSnapshot
  );
  const hasMarketingConsent = hasMarketingCookieConsent(cookieConsent);
  const pendingPayloadRef = useRef<{
    payload: CheckoutAttributionPayload;
    payloadKey: string;
  } | null>(null);
  const sentPayloadKey = useRef<string | null>(null);

  useEffect(() => {
    const payload = buildAttributionPayload();

    if (!payload) return;

    const payloadKey = JSON.stringify(payload);

    if (sentPayloadKey.current === payloadKey) return;

    if (!hasMarketingConsent) {
      pendingPayloadRef.current = { payload, payloadKey };
      return;
    }

    const pendingPayload =
      pendingPayloadRef.current?.payloadKey === payloadKey
        ? pendingPayloadRef.current
        : { payload, payloadKey };

    pendingPayloadRef.current = null;
    sentPayloadKey.current = pendingPayload.payloadKey;

    void sendAttributionPayload(pendingPayload.payload).catch(() => {
      pendingPayloadRef.current = pendingPayload;
      sentPayloadKey.current = null;
    });
  }, [hasMarketingConsent]);

  return null;
}
