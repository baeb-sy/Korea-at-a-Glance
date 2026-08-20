import type { Destination } from "../data/destinationTypes";
import { useLocale } from "../i18n/LocaleProvider";
import DestinationCard from "./DestinationCard";
import styles from "./DestinationGrid.module.css";

interface DestinationGridProps {
  destinations: readonly Destination[];
}

export default function DestinationGrid({
  destinations,
}: DestinationGridProps) {
  const { t } = useLocale();

  return (
    <section aria-label={t("destinationsLabel")}>
      <ul className={styles.grid}>
        {destinations.map((destination) => (
          <li key={destination.id} className={styles.item}>
            <DestinationCard destination={destination} />
          </li>
        ))}
      </ul>
    </section>
  );
}
