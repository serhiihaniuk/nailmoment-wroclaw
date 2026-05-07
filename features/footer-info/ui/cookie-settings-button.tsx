"use client";

import { COOKIE_SETTINGS_EVENT } from "@/shared/config/browser-events";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      data-ui="footer-cookie-settings"
      className="text-text-inverse underline-offset-4 hover:underline"
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
    >
      Ustawienia cookies
    </button>
  );
}
