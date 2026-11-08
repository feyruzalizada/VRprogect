import Counters from "./Counters";
import styles from "./PercentBand.module.css";
import { countersHeading } from "@/content/services";

export default function PercentBand({
  heading = countersHeading,
  counters,
}: {
  heading?: string;
  counters?: { label: string; suffix?: string }[];
}) {
  return (
    <section id="ugurlar" className={styles.section} aria-label={heading}>
      <h2 className={styles.heading}>{heading}</h2>
      <Counters texts={counters} />
    </section>
  );
}
