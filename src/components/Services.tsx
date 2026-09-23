import ServiceVideo from "./ServiceVideo";
import styles from "./Services.module.css";
import { services, VISIBLE_POINTS } from "@/content/services";

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

        <div className={styles.panel}>
          {services.items.map((item) => {
            const shown = item.points.slice(0, VISIBLE_POINTS);
            const rest = item.points.slice(VISIBLE_POINTS);

            return (
              <article key={item.title} className={styles.card}>
                <div className={styles.media}>
                  {item.video ? <ServiceVideo src={item.video} poster={item.poster} /> : null}
                </div>

                <div className={styles.body}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <span className={styles.cardRule} aria-hidden />

                  <ul className={styles.points}>
                    {shown.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  {rest.length > 0 ? (
                    <details className={styles.more}>
                      <summary className={styles.moreToggle}>
                        <span className={styles.moreOpen}>{services.moreLabel}</span>
                        <span className={styles.moreClose}>{services.lessLabel}</span>
                      </summary>

                      <ul className={`${styles.points} ${styles.pointsRest}`}>
                        {rest.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </details>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <p className={styles.disclaimer}>{services.disclaimer}</p>
      </div>
    </section>
  );
}
