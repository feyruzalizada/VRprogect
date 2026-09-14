"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CalculatorWizard from "./CalculatorWizard";
import styles from "./Services.module.css";
import { services, type ServiceCounter } from "@/content/services";

const COUNT_MS = 2000;

function Counter({ counter }: { counter: ServiceCounter }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / COUNT_MS, 1);
          setValue(Math.round(progress * counter.value));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [counter.value]);

  return (
    <div ref={ref} className={styles.counter}>
      <p className={styles.counterValue}>
        <span>[</span>
        {value}
        {counter.suffix ?? ""}
        <span>+]</span>
      </p>
      <h6 className={styles.counterLabel}>{counter.label}</h6>
    </div>
  );
}

export default function Services() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <span className={`${styles.line} ${styles.lineLeft}`} aria-hidden />
      <span className={`${styles.line} ${styles.lineRight}`} aria-hidden />

      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>{services.eyebrow}</span>
          <h2 className={styles.title}>{services.heading}</h2>
          <span className={styles.dots} aria-hidden />

          <p className={styles.tagline}>{services.taglineTop}</p>
          <p className={styles.intro}>{services.intro}</p>
          <p className={styles.tagline}>{services.taglineBottom}</p>
        </div>

        <div className={styles.grid}>
          {services.items.map((item) => (
            <button
              key={item.title}
              type="button"
              className={styles.card}
              onClick={() => setOpenCard(item.title)}
            >
              <Image
                src={item.icon}
                alt=""
                width={item.width}
                height={item.height}
                loading="lazy"
                className={styles.icon}
              />

              <h5 className={styles.cardTitle}>{item.title}</h5>

              <p className={styles.cardText}>{item.description}</p>

              <span className={styles.cardLink}>{services.linkLabel}</span>
            </button>
          ))}
        </div>

        <div className={styles.counters}>
          {services.counters.map((counter) => (
            <Counter key={counter.label} counter={counter} />
          ))}
        </div>
      </div>

      {openCard && (
        <CalculatorWizard title={openCard} onClose={() => setOpenCard(null)} />
      )}
    </section>
  );
}
