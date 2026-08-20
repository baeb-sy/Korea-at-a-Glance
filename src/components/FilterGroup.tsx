import styles from "./FilterGroup.module.css";

interface FilterOption<T extends string> {
  value: T;
  label: string;
}

interface FilterGroupProps<T extends string> {
  id: string;
  label: string;
  options: readonly FilterOption<T>[];
  selectedValues: readonly T[];
  onToggle: (value: T) => void;
}

export default function FilterGroup<T extends string>({
  id,
  label,
  options,
  selectedValues,
  onToggle,
}: FilterGroupProps<T>) {
  const labelId = `${id}-label`;

  return (
    <section className={styles.group} aria-labelledby={labelId}>
      <h3 id={labelId}>{label}</h3>
      <div className={styles.options} role="group" aria-labelledby={labelId}>
        {options.map((option) => {
          const isSelected = selectedValues.includes(option.value);

          return (
            <button
              key={option.value}
              className={styles.option}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onToggle(option.value)}
            >
              {isSelected ? (
                <svg
                  className={styles.checkIcon}
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="m3.25 8.25 3 3 6.5-6.5" />
                </svg>
              ) : null}
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
