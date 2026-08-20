import type { Destination, Locale } from "../data/destinationTypes";
import { getLocalizedText, regionLabels } from "../i18n/messages";
import { normalizeText } from "./normalizeText";

export function searchDestinations(
  destinationList: readonly Destination[],
  query: string,
  locale: Locale,
): Destination[] {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [...destinationList];
  }

  return destinationList.filter((destination) => {
    const searchableValues = [
      getLocalizedText(destination.name, locale),
      destination.koreanName,
      getLocalizedText(regionLabels[destination.region], locale),
    ];

    return searchableValues.some((value) =>
      normalizeText(value).includes(normalizedQuery),
    );
  });
}
