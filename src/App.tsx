import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DestinationGrid from "./components/DestinationGrid";
import EmptyState from "./components/EmptyState";
import FilterGroup from "./components/FilterGroup";
import { destinations } from "./data/destinations";
import {
  regionOptions,
  seasonOptions,
  themeOptions,
} from "./data/filterOptions";
import type { Region, Season, Theme } from "./data/destinationTypes";
import { useLocale } from "./i18n/LocaleProvider";
import {
  getLocalizedText,
  regionLabels,
  seasonLabels,
  themeLabels,
} from "./i18n/messages";
import {
  emptyDestinationFilters,
  filterDestinations,
  hasActiveFilters,
  toggleFilterValue,
  type DestinationFilters,
} from "./lib/filterDestinations";
import { searchDestinations } from "./lib/searchDestinations";

export default function App() {
  const { locale, t } = useLocale();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<DestinationFilters>(
    emptyDestinationFilters,
  );
  const searchResults = searchDestinations(
    destinations,
    searchQuery,
    locale,
  );
  const filteredDestinations = filterDestinations(searchResults, filters);
  const filtersAreActive = hasActiveFilters(filters);
  const resultCountKey =
    filteredDestinations.length === 1 ? "placeCountOne" : "placeCountOther";
  const resultCount = t(resultCountKey).replace(
    "{count}",
    String(filteredDestinations.length),
  );
  const clearSearch = () => setSearchQuery("");
  const resetFilters = () => setFilters(emptyDestinationFilters);
  const toggleRegion = (region: Region) =>
    setFilters((currentFilters) => ({
      ...currentFilters,
      regions: toggleFilterValue(currentFilters.regions, region),
    }));
  const toggleTheme = (theme: Theme) =>
    setFilters((currentFilters) => ({
      ...currentFilters,
      themes: toggleFilterValue(currentFilters.themes, theme),
    }));
  const toggleSeason = (season: Season) =>
    setFilters((currentFilters) => ({
      ...currentFilters,
      seasons: toggleFilterValue(currentFilters.seasons, season),
    }));

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t("skipToContent")}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          onClearSearch={clearSearch}
        />
        <section
          className="places-section"
          id="places"
          aria-labelledby="places-heading"
        >
          <div className="page-container">
            <div className="places-section__heading">
              <p className="places-section__eyebrow">{t("placesEyebrow")}</p>
              <h2 id="places-heading">{t("placesHeading")}</h2>
            </div>
            <div className="filters">
              <FilterGroup
                id="region-filters"
                label={t("regionFilterLabel")}
                options={regionOptions.map((region) => ({
                  value: region,
                  label: getLocalizedText(regionLabels[region], locale),
                }))}
                selectedValues={filters.regions}
                onToggle={toggleRegion}
              />
              <FilterGroup
                id="theme-filters"
                label={t("themeFilterLabel")}
                options={themeOptions.map((theme) => ({
                  value: theme,
                  label: getLocalizedText(themeLabels[theme], locale),
                }))}
                selectedValues={filters.themes}
                onToggle={toggleTheme}
              />
              <FilterGroup
                id="season-filters"
                label={t("seasonFilterLabel")}
                options={seasonOptions.map((season) => ({
                  value: season,
                  label: getLocalizedText(seasonLabels[season], locale),
                }))}
                selectedValues={filters.seasons}
                onToggle={toggleSeason}
              />
            </div>
            <div className="results-summary">
              <p
                className="places-section__count"
                id="search-results-count"
                aria-live="polite"
                aria-atomic="true"
              >
                {resultCount}
              </p>
              {filtersAreActive ? (
                <button type="button" onClick={resetFilters}>
                  {t("resetFilters")}
                </button>
              ) : null}
            </div>
            <div id="destination-results">
              {filteredDestinations.length > 0 ? (
                <DestinationGrid destinations={filteredDestinations} />
              ) : (
                <EmptyState
                  hasSearchQuery={Boolean(searchQuery.trim())}
                  hasActiveFilters={filtersAreActive}
                  onClearSearch={clearSearch}
                  onResetFilters={resetFilters}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
