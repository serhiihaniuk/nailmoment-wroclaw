"use client";

import { useEffect, useRef } from "react";

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

function readTrackingValue(params: URLSearchParams, key: string) {
  const value = params.get(key)?.trim();
  return value ? value : null;
}

export function SuccessAttributionReporter() {
  const sentPayloadKey = useRef<string | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const sessionId = readTrackingValue(url.searchParams, "session_id");

    if (!sessionId) return;

    const utm = Object.fromEntries(
      UTM_KEYS.map((key) => [key, readTrackingValue(url.searchParams, key)])
    );
    const payload = {
      landingPage: window.location.href,
      referrer: document.referrer || null,
      sessionId,
      utm,
    };
    const payloadKey = JSON.stringify(payload);

    if (sentPayloadKey.current === payloadKey) return;
    sentPayloadKey.current = payloadKey;

    void fetch(ATTRIBUTION_ENDPOINT, {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      keepalive: true,
      method: "POST",
    }).catch(() => {
      sentPayloadKey.current = null;
    });
  }, []);

  return null;
}
