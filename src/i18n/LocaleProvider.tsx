import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import type { Locale } from "../data/destinationTypes";
import { getMessage, type UiMessageKey } from "./messages";
import { getInitialLocale, savePreferredLocale } from "./localeStorage";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: UiMessageKey) => string;
}

interface LocaleProviderProps extends PropsWithChildren {
  initialLocale?: Locale;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

interface DocumentLanguageRoot {
  lang: string;
}

export function updateDocumentLanguage(
  locale: Locale,
  root: DocumentLanguageRoot | null =
    typeof document === "undefined" ? null : document.documentElement,
): void {
  if (root) {
    root.lang = locale;
  }
}

export function LocaleProvider({
  children,
  initialLocale,
}: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(
    () => initialLocale ?? getInitialLocale(),
  );

  useEffect(() => {
    updateDocumentLanguage(locale);
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    savePreferredLocale(nextLocale);
  }, []);

  const t = useCallback(
    (key: UiMessageKey) => getMessage(locale, key),
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}
