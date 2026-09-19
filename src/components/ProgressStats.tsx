"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ProgressStats.module.css";
import {
  progressHeading,
  progressItems,
  type ProgressItem,
} from "@/content/progress";

const SIZE = 165;
const STROKE = 2;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const FILL_MS = 1600;

function Dial({ item }: { item: ProgressItem }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        // someone who asked for less motion gets the finished dial, not the fill
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setValue(item.percent);
          return;
        }

        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / FILL_MS, 1);
          setValue(Math.round(progress * item.percent));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [item.percent]);

  return (
    <div ref={ref} className={styles.item}>
      <div className={styles.dial}>
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={styles.ring} aria-hidden>
          <circle
            className={styles.track}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            strokeWidth={STROKE}
          />
          <circle
            className={styles.bar}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            strokeWidth={STROKE}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - value / 100)}
          />
        </svg>
        <span className={styles.percent}>{value}%</span>
      </div>

      <h4 className={styles.label}>{item.label}</h4>
      <p className={styles.text}>{item.description}</p>
    </div>
  );
}

export default function ProgressStats() {
  return (
    <section id="uslub-statistikasi" className={styles.section}>
      <div className={styles.heading}>
        <span className={styles.eyebrow}>{progressHeading.eyebrow}</span>
        <h2 className={styles.title}>{progressHeading.title}</h2>
        <span className={styles.rule} aria-hidden />
      </div>

      <div className={styles.container}>
        {progressItems.map((item) => (
          <Dial key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
