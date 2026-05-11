const ATTRIBUTION_STORAGE_VERSION = 1;
export const ATTRIBUTION_STORAGE_KEY = "nailmoment_attribution_v1";

const ATTRIBUTION_TTL_MS = 90 * 24 * 60 * 60 * 1000;
const MAX_ATTRIBUTION_VALUE_LENGTH = 500;

const TRACKED_CLICK_ID_PARAMS = new Set([
  "fbclid",
  "gclid",
  "gbraid",
  "msclkid",
  "ttclid",
  "wbraid",
]);

export type AttributionParams = Record<string, string>;

export type StoredAttribution = {
  version: typeof ATTRIBUTION_STORAGE_VERSION;
  capturedAt: string;
  lastSeenAt: string;
  landingPath: string;
  referrer?: string;
  params: AttributionParams;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isAttributionParam(name: string) {
  const normalizedName = name.toLowerCase();

  return (
    normalizedName.startsWith("utm_") ||
    TRACKED_CLICK_ID_PARAMS.has(normalizedName)
  );
}

function hasValidParams(value: unknown): value is AttributionParams {
  return (
    isRecord(value) &&
    Object.keys(value).length > 0 &&
    Object.entries(value).every(
      ([key, paramValue]) =>
        isAttributionParam(key) && typeof paramValue === "string" && paramValue.length > 0
    )
  );
}

function isStoredAttribution(value: unknown): value is StoredAttribution {
  return (
    isRecord(value) &&
    value.version === ATTRIBUTION_STORAGE_VERSION &&
    typeof value.capturedAt === "string" &&
    typeof value.lastSeenAt === "string" &&
    typeof value.landingPath === "string" &&
    (value.referrer === undefined || typeof value.referrer === "string") &&
    hasValidParams(value.params)
  );
}

function hasExplicitScheme(rawHref: string) {
  return /^[a-z][a-z\d+\-.]*:/i.test(rawHref);
}

function formatDecoratedHref(rawHref: string, url: URL) {
  if (hasExplicitScheme(rawHref) || rawHref.startsWith("//")) {
    return url.toString();
  }

  if (rawHref.startsWith("?")) {
    return `${url.search}${url.hash}`;
  }

  return `${url.pathname}${url.search}${url.hash}`;
}

export function extractAttributionParams(searchParams: URLSearchParams) {
  const params: AttributionParams = {};

  searchParams.forEach((value, key) => {
    const normalizedKey = key.toLowerCase();
    const normalizedValue = value.trim();

    if (!isAttributionParam(normalizedKey) || normalizedValue.length === 0) {
      return;
    }

    params[normalizedKey] = normalizedValue.slice(0, MAX_ATTRIBUTION_VALUE_LENGTH);
  });

  return params;
}

export function hasAttributionParams(params: AttributionParams) {
  return Object.keys(params).length > 0;
}

export function readStoredAttribution(
  storage: Storage,
  now = new Date()
): StoredAttribution | null {
  const rawAttribution = storage.getItem(ATTRIBUTION_STORAGE_KEY);

  if (!rawAttribution) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(rawAttribution);

    if (!isStoredAttribution(parsed)) {
      storage.removeItem(ATTRIBUTION_STORAGE_KEY);
      return null;
    }

    const lastSeenMs = new Date(parsed.lastSeenAt).getTime();

    if (!Number.isFinite(lastSeenMs) || now.getTime() - lastSeenMs > ATTRIBUTION_TTL_MS) {
      storage.removeItem(ATTRIBUTION_STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch {
    storage.removeItem(ATTRIBUTION_STORAGE_KEY);
    return null;
  }
}

export function writeStoredAttribution(
  storage: Storage,
  params: AttributionParams,
  context: {
    landingPath: string;
    referrer?: string;
  },
  now = new Date()
) {
  if (!hasAttributionParams(params)) {
    return;
  }

  const storedAttribution: StoredAttribution = {
    version: ATTRIBUTION_STORAGE_VERSION,
    capturedAt: now.toISOString(),
    lastSeenAt: now.toISOString(),
    landingPath: context.landingPath,
    params,
    ...(context.referrer ? { referrer: context.referrer } : {}),
  };

  storage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(storedAttribution));
}

export function appendAttributionParamsToUrl(
  rawHref: string,
  params: AttributionParams,
  baseHref: string
) {
  if (!hasAttributionParams(params)) {
    return rawHref;
  }

  const nextUrl = new URL(rawHref, baseHref);

  if (nextUrl.protocol !== "http:" && nextUrl.protocol !== "https:") {
    return rawHref;
  }

  let changed = false;

  Object.entries(params).forEach(([key, value]) => {
    if (!nextUrl.searchParams.has(key)) {
      nextUrl.searchParams.set(key, value);
      changed = true;
    }
  });

  return changed ? formatDecoratedHref(rawHref, nextUrl) : rawHref;
}
