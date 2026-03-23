import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mergeUi(...parts: Array<string | number | null | undefined | false>) {
  const value = parts
    .filter(Boolean)
    .flatMap((part) => String(part).split(" "))
    .map((part) =>
      part
        .trim()
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase()
    )
    .filter(Boolean)
    .join("-");

  return value || undefined;
}
