import type {
  Locale,
  LocalizedText,
  Region,
  Season,
  Theme,
} from "../data/destinationTypes";

export interface UiMessages {
  skipToContent: string;
  primaryNavigationLabel: string;
  explore: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroDescription: string;
  placesEyebrow: string;
  placesHeading: string;
  searchLabel: string;
  searchPlaceholder: string;
  clearSearch: string;
  placeCountOne: string;
  placeCountOther: string;
  noPlacesTitle: string;
  noPlacesDescription: string;
  destinationsLabel: string;
  regionFilterLabel: string;
  themeFilterLabel: string;
  seasonFilterLabel: string;
  resetFilters: string;
  photoComingSoon: string;
  languageSwitcherLabel: string;
  languageEnglish: string;
  languageSpanish: string;
}

export const messages = {
  en: {
    skipToContent: "Skip to main content",
    primaryNavigationLabel: "Primary navigation",
    explore: "Explore",
    heroEyebrow: "Your guide to Korea",
    heroHeadline: "Discover Korea, one place at a time.",
    heroDescription:
      "Find places worth seeing, from iconic landmarks to hidden corners of Korea.",
    placesEyebrow: "Explore Korea",
    placesHeading: "Places to discover",
    searchLabel: "Search destinations",
    searchPlaceholder: "Where do you want to explore?",
    clearSearch: "Clear search",
    placeCountOne: "{count} place",
    placeCountOther: "{count} places",
    noPlacesTitle: "No places found.",
    noPlacesDescription: "Try changing your search or filters.",
    destinationsLabel: "Destinations",
    regionFilterLabel: "Region",
    themeFilterLabel: "Theme",
    seasonFilterLabel: "Season",
    resetFilters: "Reset filters",
    photoComingSoon: "Photo coming soon",
    languageSwitcherLabel: "Choose a language",
    languageEnglish: "English",
    languageSpanish: "Spanish",
  },
  es: {
    skipToContent: "Ir al contenido principal",
    primaryNavigationLabel: "Navegación principal",
    explore: "Explorar",
    heroEyebrow: "Tu guía de Corea",
    heroHeadline: "Descubre Corea, un lugar a la vez.",
    heroDescription:
      "Encuentra lugares que vale la pena conocer, desde sitios emblemáticos hasta rincones menos conocidos de Corea.",
    placesEyebrow: "Explora Corea",
    placesHeading: "Lugares por descubrir",
    searchLabel: "Buscar destinos",
    searchPlaceholder: "¿Qué lugar de Corea quieres explorar?",
    clearSearch: "Borrar búsqueda",
    placeCountOne: "{count} lugar",
    placeCountOther: "{count} lugares",
    noPlacesTitle: "No encontramos lugares.",
    noPlacesDescription: "Prueba a cambiar la búsqueda o los filtros.",
    destinationsLabel: "Destinos",
    regionFilterLabel: "Región",
    themeFilterLabel: "Tema",
    seasonFilterLabel: "Temporada",
    resetFilters: "Restablecer filtros",
    photoComingSoon: "Foto próximamente",
    languageSwitcherLabel: "Elige un idioma",
    languageEnglish: "Inglés",
    languageSpanish: "Español",
  },
} satisfies Record<Locale, UiMessages>;

export type UiMessageKey = keyof UiMessages;

export const regionLabels: Record<Region, LocalizedText> = {
  "seoul-capital": {
    en: "Seoul & Capital Area",
    es: "Seúl y alrededores",
  },
  gangwon: { en: "Gangwon", es: "Gangwon" },
  chungcheong: { en: "Central Korea", es: "Corea central" },
  jeolla: { en: "Jeolla & Southwest", es: "Jeolla y el suroeste" },
  gyeongsang: { en: "Busan & Southeast", es: "Busan y el sureste" },
  jeju: { en: "Jeju Island", es: "Isla de Jeju" },
};

export const themeLabels: Record<Theme, LocalizedText> = {
  "history-heritage": {
    en: "History & Heritage",
    es: "Historia y patrimonio",
  },
  "nature-scenic": {
    en: "Nature & Scenic",
    es: "Naturaleza y paisajes",
  },
  "culture-arts": { en: "Culture & Arts", es: "Cultura y arte" },
  "city-architecture": {
    en: "City & Architecture",
    es: "Ciudad y arquitectura",
  },
  "coast-island": { en: "Coast & Island", es: "Costa e islas" },
  "family-leisure": { en: "Family & Leisure", es: "Familia y ocio" },
};

export const seasonLabels: Record<Season, LocalizedText> = {
  spring: { en: "Spring", es: "Primavera" },
  summer: { en: "Summer", es: "Verano" },
  autumn: { en: "Autumn", es: "Otoño" },
  winter: { en: "Winter", es: "Invierno" },
  "all-season": { en: "All seasons", es: "Todo el año" },
};

export function getMessage(locale: Locale, key: UiMessageKey): string {
  const localizedMessage = messages[locale]?.[key];

  return localizedMessage?.trim() || messages.en[key];
}

export function getLocalizedText(
  text: LocalizedText,
  locale: Locale,
): string {
  const localizedValue = text[locale];

  return typeof localizedValue === "string" && localizedValue.trim()
    ? localizedValue
    : text.en;
}
