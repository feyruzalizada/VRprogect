import Counters from "./Counters";
import styles from "./PercentBand.module.css";
import { countersHeading } from "@/content/services";

export default function PercentBand() {
  return (
    <section id="ugurlar" className={styles.section} aria-label={countersHeading}>
      <h2 className={styles.heading}>{countersHeading}</h2>
      <Counters />
    </section>
  );
}
