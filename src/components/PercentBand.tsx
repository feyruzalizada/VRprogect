import Counters from "./Counters";
import styles from "./PercentBand.module.css";

export default function PercentBand() {
  return (
    <section
      id="faiz-gostericileri"
      className={styles.section}
      aria-label="Faiz göstəricilərimiz"
    >
      <Counters />
    </section>
  );
}
