import ServiceIcon from "./ServiceIcons";
import styles from "./Services.module.css";
import { services } from "@/content/services";

export default function Services({ id = "kalkulyator" }: { id?: string }) {
  return (
    <section id={id} className={styles.section}>
      <span className={`${styles.line} ${styles.lineLeft}`} aria-hidden />
      <span className={`${styles.line} ${styles.lineRight}`} aria-hidden />

      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>{services.eyebrow}</span>
          <h2 className={styles.title}>{services.heading}</h2>
          <span className={styles.rule} aria-hidden />

          <p className={styles.tagline}>{services.taglineTop}</p>
          <p className={styles.intro}>{services.intro}</p>
        </div>

        <div className={styles.grid}>
          {services.items.map((item) => (
            <div key={item.title} className={styles.card}>
              <ServiceIcon name={item.icon} />

              <h5 className={styles.cardTitle}>{item.title}</h5>

              <p className={styles.cardText}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
