import { useRef } from "react";
import { useLocale } from "../i18n/LocaleProvider";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export default function SearchBar({
  value,
  onChange,
  onClear,
}: SearchBarProps) {
  const { t } = useLocale();
  const inputRef = useRef<HTMLInputElement>(null);
  const clearSearch = () => {
    onClear();
    inputRef.current?.focus();
  };

  return (
    <div className={styles.searchBar} role="search">
      <label className="sr-only" htmlFor="destination-search">
        {t("searchLabel")}
      </label>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4" />
      </svg>
      <input
        className={styles.input}
        ref={inputRef}
        id="destination-search"
        name="destination-search"
        type="search"
        value={value}
        placeholder={t("searchPlaceholder")}
        autoComplete="off"
        aria-controls="destination-results"
        aria-describedby="search-results-count"
        onChange={(event) => onChange(event.target.value)}
      />
      {value ? (
        <button
          className={styles.clearButton}
          type="button"
          aria-label={t("clearSearch")}
          onClick={clearSearch}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="m7 7 10 10M17 7 7 17" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
