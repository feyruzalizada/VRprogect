"use client";

import { useEffect, useRef, useState } from "react";

import ContactChoice from "./ContactChoice";
import ServiceVideo from "./ServiceVideo";
import { scrollToElement } from "./navScroll";
import styles from "./Services.module.css";
import type { ServicePoint, ServicesData } from "@/lib/services";

function Point({ point }: { point: ServicePoint }) {
  if (!point.label) return <li>{point.text}</li>;

  return (
    <li>
      <strong className={styles.pointLabel}>{point.label}:</strong> {point.text}
    </li>
  );
}

function revealCard(pending: { current: string | null }) {
  const card = pending.current && document.getElementById(`xidmet-${pending.current}`);
  pending.current = null;
  if (!card) return;
  const more = card.querySelector("details");
  if (more) more.open = true;
  scrollToElement(card);
}

export default function Services({ id = "kalkulyator", data }: { id?: string; data: ServicesData }) {
  const { section, items: all, filters } = data;
  const [active, setActive] = useState(filters[0]?.id);

  const filter = filters.find((item) => item.id === active) ?? filters[0];
  const items = !filter || filter.all ? all : all.filter((item) => filter.ids.includes(item.id));
  const pending = useRef<string | null>(null);

  // the header search asks for a card; a filter that hides it gives way to one that shows it
  useEffect(() => {
    function onShow(event: Event) {
      const wanted = (event as CustomEvent<string>).detail;
      pending.current = wanted;
      const current = filters.find((f) => f.id === active);
      const next = filters.find((f) => f.all) ?? filters.find((f) => f.ids.includes(wanted));
      if (current && !current.all && !current.ids.includes(wanted) && next) setActive(next.id);
      else requestAnimationFrame(() => revealCard(pending));
    }
    window.addEventListener("vr:show-service", onShow);
    return () => window.removeEventListener("vr:show-service", onShow);
  }, [filters, active]);

  // after a filter switch the card exists only once the new list has rendered
  useEffect(() => {
    if (pending.current) revealCard(pending);
  }, [active]);


  return (
    <section id={id} className={styles.section}>
      <span className={`${styles.line} ${styles.lineLeft}`} aria-hidden />
      <span className={`${styles.line} ${styles.lineRight}`} aria-hidden />

      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>{section.eyebrow}</span>
          <h2 className={styles.title}>{section.heading}</h2>
          <span className={styles.rule} aria-hidden />

          <p className={styles.tagline}>{section.tagline}</p>
          <p className={styles.intro}>{section.intro}</p>
        </div>

        {filter ? (
          <div className={styles.filters} role="group" aria-label={section.filterLabel ?? undefined}>
            <span className={styles.filterLabel}>{section.filterLabel}</span>

            <div className={styles.filterRow}>
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.filter} ${item.id === filter.id ? styles.filterOn : ""}`}
                  aria-pressed={item.id === filter.id}
                  onClick={() => setActive(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {items.length === 0 ? <p className={styles.empty}>{filter?.empty}</p> : null}

        <div className={styles.panel} hidden={items.length === 0}>
          {items.map((item) => (
            <article key={item.id} id={`xidmet-${item.id}`} className={styles.card}>
              <div className={styles.media}>
                {item.video ? <ServiceVideo src={item.video} poster={item.poster} /> : null}
              </div>

              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.cardRule} aria-hidden />
                <p className={styles.cardText}>{item.description}</p>

                <details className={styles.more}>
                  <summary className={styles.moreToggle}>
                    <span className={styles.moreOpen}>{section.moreLabel}</span>
                    <span className={styles.moreClose}>{section.lessLabel}</span>
                  </summary>

                  <ul className={styles.points}>
                    {item.points.map((point, i) => (
                      <Point key={i} point={point} />
                    ))}
                  </ul>

                  {item.note ? <p className={styles.note}>{item.note}</p> : null}
                </details>

                <ContactChoice label={item.cta} service={item.title} />
              </div>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>{section.disclaimer}</p>
      </div>
    </section>
  );
}
