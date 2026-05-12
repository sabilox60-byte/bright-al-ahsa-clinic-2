/**
 * i18n — minimal locale helper. Pages route as /* (English) or /ar/*.
 * No external library; we derive locale from the URL pathname.
 */

export type Locale = "en" | "ar";

export const LOCALES: Locale[] = ["en", "ar"];
export const DEFAULT_LOCALE: Locale = "en";

/** Detect locale from URL pathname. */
export function localeFromPath(pathname: string): Locale {
  return pathname.startsWith("/ar") ? "ar" : "en";
}

/** Direction of a locale. */
export function dirFor(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** Strip the locale prefix from a pathname. /ar/services → /services */
export function stripLocale(pathname: string): string {
  if (pathname === "/ar") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3);
  return pathname;
}

/** Build the locale-prefixed URL for a given path. */
export function withLocale(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return clean;
  if (clean === "/") return "/ar";
  return `/ar${clean}`;
}

/** Pull a bilingual value safely. */
export function pick<T>(b: { en: T; ar: T }, locale: Locale): T {
  return b[locale];
}

/** Generate hreflang alternate links for `<head>`. */
export function hreflangAlternates(path: string, baseUrl: string) {
  return {
    "x-default": `${baseUrl}${path === "/ar" ? "/" : path.replace(/^\/ar/, "")}`,
    en: `${baseUrl}${path === "/ar" ? "/" : path.replace(/^\/ar/, "")}`,
    ar: `${baseUrl}${path.startsWith("/ar") ? path : `/ar${path === "/" ? "" : path}`}`,
  };
}
