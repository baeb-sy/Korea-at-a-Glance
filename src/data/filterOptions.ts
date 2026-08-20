import type { Region, Season, Theme } from "./destinationTypes";

export const regionOptions = [
  "seoul-capital",
  "gangwon",
  "chungcheong",
  "jeolla",
  "gyeongsang",
  "jeju",
] as const satisfies readonly Region[];

export const themeOptions = [
  "history-heritage",
  "nature-scenic",
  "culture-arts",
  "city-architecture",
  "coast-island",
  "family-leisure",
] as const satisfies readonly Theme[];

export const seasonOptions = [
  "spring",
  "summer",
  "autumn",
  "winter",
  "all-season",
] as const satisfies readonly Season[];
