import { useLocale } from "../i18n/LocaleProvider";
import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  hasSearchQuery: boolean;
  hasActiveFilters: boolean;
  onClearSearch: () => void;
  onResetFilters: () => void;
}

export default function EmptyState({
  hasSearchQuery,
  hasActiveFilters,
  onClearSearch,
  onResetFilters,
}: EmptyStateProps) {
  const { t } = useLocale();

  return (
    <div className={styles.emptyState}>
      <h3>{t("noPlacesTitle")}</h3>
      <p>{t("noPlacesDescription")}</p>
      {hasSearchQuery || hasActiveFilters ? (
        <div className={styles.actions}>
          {hasSearchQuery ? (
            <button type="button" onClick={onClearSearch}>
              {t("clearSearch")}
            </button>
          ) : null}
          {hasActiveFilters ? (
            <button type="button" onClick={onResetFilters}>
              {t("resetFilters")}
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
