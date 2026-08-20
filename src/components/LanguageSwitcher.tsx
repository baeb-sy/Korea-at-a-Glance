import type { Locale } from "../data/destinationTypes";
import { useLocale } from "../i18n/LocaleProvider";
import type { UiMessageKey } from "../i18n/messages";
import styles from "./LanguageSwitcher.module.css";

const languageOptions: Array<{
  locale: Locale;
  shortLabel: string;
  accessibleLabel: UiMessageKey;
}> = [
  { locale: "en", shortLabel: "EN", accessibleLabel: "languageEnglish" },
  { locale: "es", shortLabel: "ES", accessibleLabel: "languageSpanish" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={styles.switcher}
      role="group"
      aria-label={t("languageSwitcherLabel")}
    >
      {languageOptions.map((option) => (
        <button
          key={option.locale}
          className={styles.option}
          type="button"
          lang={option.locale}
          aria-label={t(option.accessibleLabel)}
          aria-pressed={locale === option.locale}
          onClick={() => setLocale(option.locale)}
        >
          {option.shortLabel}
        </button>
      ))}
    </div>
  );
}
