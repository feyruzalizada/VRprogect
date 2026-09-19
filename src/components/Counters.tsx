"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Counters.module.css";
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

        // someone who asked for less motion gets the final number straight away
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setValue(counter.value);
          return;
        }

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

export default function Counters() {
  return (
    <div className={styles.counters}>
      {services.counters.map((counter) => (
        <Counter key={counter.label} counter={counter} />
      ))}
    </div>
  );
}
