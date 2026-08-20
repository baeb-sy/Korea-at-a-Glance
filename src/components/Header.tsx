import { useLocale } from "../i18n/LocaleProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Header.module.css";

export default function Header() {
  const { t } = useLocale();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.wordmark} href="#main-content">
          Korea at a Glance
        </a>

        <nav
          className={styles.navigation}
          aria-label={t("primaryNavigationLabel")}
        >
          <a className={styles.exploreLink} href="#places">
            {t("explore")}
          </a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
