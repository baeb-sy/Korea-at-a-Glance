import { useState } from "react";
import type { Destination } from "../data/destinationTypes";
import {
  getLocalizedText,
  regionLabels,
  seasonLabels,
  themeLabels,
} from "../i18n/messages";
import { useLocale } from "../i18n/LocaleProvider";
import styles from "./DestinationCard.module.css";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  const { locale, t } = useLocale();
  const [imageFailed, setImageFailed] = useState(false);
  const image = destination.images[0];
  const isDevelopmentPlaceholder = image?.src.includes("/placeholders/");
  const shouldShowImage = Boolean(
    image && !isDevelopmentPlaceholder && !imageFailed,
  );
  const primaryTheme = destination.themes[0];
  const metadata = [
    getLocalizedText(regionLabels[destination.region], locale),
    primaryTheme
      ? getLocalizedText(themeLabels[primaryTheme], locale)
      : null,
  ]
    .filter(Boolean)
    .join(" · ");
  const seasons = destination.seasons
    .map((season) => getLocalizedText(seasonLabels[season], locale))
    .join(" · ");

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {shouldShowImage && image ? (
          <img
            className={styles.image}
            src={image.src}
            alt={getLocalizedText(image.alt, locale)}
            width="800"
            height="1000"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <span className={styles.placeholderSun} />
            <span className={styles.placeholderLabel}>
              {t("photoComingSoon")}
            </span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <p className={styles.metadata}>{metadata}</p>
        <h3 className={styles.name}>
          {getLocalizedText(destination.name, locale)}
        </h3>
        <p className={styles.koreanName} lang="ko">
          {destination.koreanName}
        </p>
        <p className={styles.summary}>
          {getLocalizedText(destination.summary, locale)}
        </p>
        <p className={styles.seasons}>{seasons}</p>
      </div>
    </article>
  );
}
