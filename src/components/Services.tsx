"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
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
  // a plain hash link only jumps once, so move the page ourselves
  const scrollToTarget = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!services.ctaHref.startsWith("#")) return;
    const target = document.getElementById(services.ctaHref.slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

          <Link
            href={services.ctaHref}
            className={styles.cta}
            onClick={scrollToTarget}
          >
            {services.ctaLabel}
          </Link>
        </div>

        <div id="kalkulyatorlar" className={styles.grid}>
          {services.items.map((item) => (
            <article key={item.title} className={styles.card}>
              <Image
                src={item.icon}
                alt=""
                width={item.width}
                height={item.height}
                loading="lazy"
                className={styles.icon}
              />

              <h5 className={styles.cardTitle}>
                <Link href={item.href}>{item.title}</Link>
              </h5>

              <p className={styles.cardText}>{item.description}</p>

              <Link href={item.href} className={styles.cardLink}>
                {services.linkLabel}
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.counters}>
          {services.counters.map((counter) => (
            <Counter key={counter.label} counter={counter} />
          ))}
        </div>
      </div>
    </section>
  );
}
