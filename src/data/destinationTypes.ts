export type Locale = "en" | "es";

export type LocalizedText = Record<Locale, string>;

export type Region =
  | "seoul-capital"
  | "gangwon"
  | "chungcheong"
  | "jeolla"
  | "gyeongsang"
  | "jeju";

export type Theme =
  | "history-heritage"
  | "nature-scenic"
  | "culture-arts"
  | "city-architecture"
  | "coast-island"
  | "family-leisure";

export type Season =
  | "spring"
  | "summer"
  | "autumn"
  | "winter"
  | "all-season";

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface DestinationImage {
  src: string;
  alt: LocalizedText;
  credit?: string;
  sourceUrl?: string;
  license?: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: LocalizedText;
  koreanName: string;
  summary: LocalizedText;
  description: LocalizedText;
  /** Replaced with a verified Korean road-name address before release. */
  koreanAddress: string | null;
  region: Region;
  themes: Theme[];
  seasons: Season[];
  /** Replaced with verified coordinates before map-related features are built. */
  coordinates: Coordinates | null;
  images: DestinationImage[];
  operatingInfo: LocalizedText | null;
  visitTips: LocalizedText[];
  /** Must be a verified HTTPS URL before it is shown to users. */
  externalMapUrl: string | null;
  officialInfoUrl?: string;
  /** ISO 8601 date after the destination information is reviewed. */
  lastVerifiedAt: string | null;
  nearestTransit?: LocalizedText;
}
