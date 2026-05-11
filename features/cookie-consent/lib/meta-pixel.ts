import {
  extractAttributionParams,
  hasAttributionParams,
  readStoredAttribution,
  type AttributionParams,
} from "@/features/utm-tracking/model/attribution";

const META_PIXEL_ID = "1253761369478754";
const META_PIXEL_SCRIPT_ID = "meta-pixel-script";

type MetaPixelParamValue = string | number | boolean | null | undefined;
type MetaPixelParams = Record<string, MetaPixelParamValue>;
type MetaPixelArgs = [command: string, ...args: Array<string | MetaPixelParams | undefined>];

type Fbq = ((...args: MetaPixelArgs) => void) & {
  callMethod?: (...args: MetaPixelArgs) => void;
  loaded?: boolean;
  push?: Fbq;
  queue: MetaPixelArgs[];
  version?: string;
};

declare global {
  interface Window {
    _fbq?: Fbq;
    fbq?: Fbq;
  }
}

let isMetaPixelInitialized = false;

function getBrowserAttributionParams(): AttributionParams {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const currentUrl = new URL(window.location.href);
    const currentParams = extractAttributionParams(currentUrl.searchParams);

    if (hasAttributionParams(currentParams)) {
      return currentParams;
    }

    return readStoredAttribution(window.localStorage)?.params ?? {};
  } catch {
    return {};
  }
}

function getMetaAttributionParams(): MetaPixelParams {
  const attributionParams = getBrowserAttributionParams();
  const metaParams: MetaPixelParams = {};

  Object.entries(attributionParams).forEach(([key, value]) => {
    if (key.startsWith("utm_")) {
      metaParams[key] = value;
    }
  });

  return metaParams;
}

function withAttributionParams(params: MetaPixelParams = {}): MetaPixelParams {
  return {
    ...getMetaAttributionParams(),
    ...params,
  };
}

function createFbq(): Fbq {
  const fbq = ((...args: MetaPixelArgs) => {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
      return;
    }

    fbq.queue.push(args);
  }) as Fbq;

  fbq.loaded = true;
  fbq.push = fbq;
  fbq.queue = [];
  fbq.version = "2.0";

  return fbq;
}

function ensureFbq() {
  if (typeof window === "undefined") {
    return undefined;
  }

  if (!window.fbq) {
    window.fbq = createFbq();
    window._fbq = window.fbq;
  }

  return window.fbq;
}

function ensureMetaPixelScript() {
  if (
    typeof document === "undefined" ||
    document.getElementById(META_PIXEL_SCRIPT_ID)
  ) {
    return;
  }

  const script = document.createElement("script");
  script.id = META_PIXEL_SCRIPT_ID;
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
}

function ensureMetaPixel() {
  const fbq = ensureFbq();

  if (!fbq) {
    return undefined;
  }

  ensureMetaPixelScript();

  if (!isMetaPixelInitialized) {
    fbq("init", META_PIXEL_ID);
    isMetaPixelInitialized = true;
  }

  return fbq;
}

export function grantMetaPixelConsent() {
  const fbq = ensureMetaPixel();
  fbq?.("consent", "grant");
}

export function revokeMetaPixelConsent() {
  if (typeof window === "undefined") {
    return;
  }

  window.fbq?.("consent", "revoke");
}

export function trackMetaPixelPageView() {
  const fbq = ensureMetaPixel();
  fbq?.("track", "PageView", withAttributionParams());
}

export function trackMetaPixelInitiateCheckout(params: {
  contentCategory: string;
  contentName: string;
}) {
  const fbq = ensureMetaPixel();

  fbq?.("track", "InitiateCheckout", {
    ...withAttributionParams(),
    content_category: params.contentCategory,
    content_name: params.contentName,
  });
}

export function trackMetaPixelPurchase() {
  const fbq = ensureMetaPixel();

  fbq?.("track", "Purchase", withAttributionParams());
}
