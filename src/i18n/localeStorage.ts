import type { Locale } from "../data/destinationTypes";

export const LOCALE_STORAGE_KEY = "korea-at-a-glance.preferred-locale";

interface LocaleStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "es";
}

function getBrowserStorage(): LocaleStorage | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function getBrowserLanguages(): readonly string[] {
  if (typeof navigator === "undefined") {
    return [];
  }

  if (navigator.languages.length > 0) {
    return navigator.languages;
  }

  return navigator.language ? [navigator.language] : [];
}

export function readPreferredLocale(
  storage: LocaleStorage | null = getBrowserStorage(),
): Locale | null {
  if (!storage) {
    return null;
  }

  try {
    const storedValue = storage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(storedValue) ? storedValue : null;
  } catch {
    return null;
  }
}

export function savePreferredLocale(
  locale: Locale,
  storage: LocaleStorage | null = getBrowserStorage(),
): boolean {
  if (!storage) {
    return false;
  }

  try {
    storage.setItem(LOCALE_STORAGE_KEY, locale);
    return true;
  } catch {
    return false;
  }
}

export function detectBrowserLocale(
  languages: readonly string[] = getBrowserLanguages(),
): Locale {
  for (const language of languages) {
    const normalizedLanguage = language.toLowerCase();

    if (normalizedLanguage === "es" || normalizedLanguage.startsWith("es-")) {
      return "es";
    }

    if (normalizedLanguage === "en" || normalizedLanguage.startsWith("en-")) {
      return "en";
    }
  }

  return "en";
}

export function resolveInitialLocale(
  storedLocale: unknown,
  browserLanguages: readonly string[],
): Locale {
  return isLocale(storedLocale)
    ? storedLocale
    : detectBrowserLocale(browserLanguages);
}

export function getInitialLocale(): Locale {
  return resolveInitialLocale(readPreferredLocale(), getBrowserLanguages());
}
