import type {
  Destination,
  Region,
  Season,
  Theme,
} from "../data/destinationTypes";

export interface DestinationFilters {
  regions: Region[];
  themes: Theme[];
  seasons: Season[];
}

export const emptyDestinationFilters: DestinationFilters = {
  regions: [],
  themes: [],
  seasons: [],
};

export function toggleFilterValue<T extends string>(
  values: readonly T[],
  value: T,
): T[] {
  return values.includes(value)
    ? values.filter((currentValue) => currentValue !== value)
    : [...values, value];
}

export function hasActiveFilters(filters: DestinationFilters): boolean {
  return (
    filters.regions.length > 0 ||
    filters.themes.length > 0 ||
    filters.seasons.length > 0
  );
}

export function filterDestinations(
  destinationList: readonly Destination[],
  filters: DestinationFilters,
): Destination[] {
  return destinationList.filter((destination) => {
    const matchesRegion =
      filters.regions.length === 0 ||
      filters.regions.includes(destination.region);
    const matchesTheme =
      filters.themes.length === 0 ||
      filters.themes.some((theme) => destination.themes.includes(theme));
    const matchesSeason =
      filters.seasons.length === 0 ||
      filters.seasons.some((season) => destination.seasons.includes(season));

    return matchesRegion && matchesTheme && matchesSeason;
  });
}
