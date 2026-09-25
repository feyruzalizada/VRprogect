"use client";

import { useState } from "react";

import ServiceVideo from "./ServiceVideo";
import styles from "./Services.module.css";
import { serviceFilters, services, type ServicePoint } from "@/content/services";

function Point({ point }: { point: ServicePoint }) {
  if (typeof point === "string") return <li>{point}</li>;

  return (
    <li>
      <strong className={styles.pointLabel}>{point.label}:</strong> {point.text}
    </li>
  );
}

export default function Services({ id = "kalkulyator" }: { id?: string }) {
  const [active, setActive] = useState(serviceFilters[0].id);

  const filter = serviceFilters.find((item) => item.id === active) ?? serviceFilters[0];
  const items = filter.slugs.length
    ? services.items.filter((item) => filter.slugs.includes(item.slug))
    : services.items;

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

        <div className={styles.filters} role="group" aria-label={services.filterLabel}>
          <span className={styles.filterLabel}>{services.filterLabel}</span>

          <div className={styles.filterRow}>
            {serviceFilters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.filter} ${item.id === active ? styles.filterOn : ""}`}
                aria-pressed={item.id === active}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.panel}>
          {items.map((item) => (
            <article key={item.slug} className={styles.card}>
              <div className={styles.media}>
                {item.video ? <ServiceVideo src={item.video} poster={item.poster} /> : null}
              </div>

              <div className={styles.body}>
                {item.badge ? <span className={styles.badge}>{item.badge}</span> : null}

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.cardRule} aria-hidden />
                <p className={styles.cardText}>{item.description}</p>

                <details className={styles.more}>
                  <summary className={styles.moreToggle}>
                    <span className={styles.moreOpen}>{services.moreLabel}</span>
                    <span className={styles.moreClose}>{services.lessLabel}</span>
                  </summary>

                  <ul className={styles.points}>
                    {item.points.map((point) => (
                      <Point key={typeof point === "string" ? point : point.label} point={point} />
                    ))}
                  </ul>

                  {item.note ? <p className={styles.note}>{item.note}</p> : null}
                </details>

                <button type="button" className={styles.cta}>
                  {item.cta}
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>{services.disclaimer}</p>
      </div>
    </section>
  );
}
