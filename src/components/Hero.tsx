import { useLocale } from "../i18n/LocaleProvider";
import SearchBar from "./SearchBar";
import styles from "./Hero.module.css";

interface HeroProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onClearSearch: () => void;
}

export default function Hero({
  searchQuery,
  onSearchQueryChange,
  onClearSearch,
}: HeroProps) {
  const { t } = useLocale();

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{t("heroEyebrow")}</p>
          <h1 id="hero-heading">{t("heroHeadline")}</h1>
          <p className={styles.description}>{t("heroDescription")}</p>
          <div className={styles.searchArea}>
            <SearchBar
              value={searchQuery}
              onChange={onSearchQueryChange}
              onClear={onClearSearch}
            />
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.visualMain} />
          <div className={styles.visualAccentTop} />
          <div className={styles.visualAccentBottom} />
        </div>
      </div>
    </section>
  );
}
