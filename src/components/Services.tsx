"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ServiceIcon from "./ServiceIcons";
import styles from "./Services.module.css";
import { services } from "@/content/services";

const HOLD_MS = 3800;
/** how many cards stay stacked behind the front one */
const DEPTH = 3;

export default function Services({ id = "xidmetler" }: { id?: string }) {
  const items = services.items;
  const [front, setFront] = useState(0);
  const [running, setRunning] = useState(false);
  const deckRef = useRef<HTMLDivElement>(null);

  // the deck only turns while it is on screen and only if motion is wanted
  useEffect(() => {
    const node = deckRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => setRunning(entry.isIntersecting),
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(
      () => setFront((i) => (i + 1) % items.length),
      HOLD_MS,
    );
    return () => clearInterval(id);
  }, [running, items.length]);

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

        <div
          ref={deckRef}
          className={styles.deck}
          onMouseEnter={() => setRunning(false)}
          onMouseLeave={() => setRunning(true)}
        >
          <p className={styles.counter} aria-hidden>
            <span className={styles.counterNow} key={front}>
              {String(front + 1).padStart(2, "0")}
            </span>
            <span className={styles.counterAll}>
              / {String(items.length).padStart(2, "0")}
            </span>
          </p>

          <ul className={styles.stack}>
            {items.map((item, index) => {
              // how far this card sits behind the front one, wrapping round
              const depth = (index - front + items.length) % items.length;
              const turned = depth > items.length - 1 - DEPTH;

              return (
                <li
                  key={item.title}
                  className={`${styles.card} ${turned ? styles.cardTurned : ""}`}
                  style={{ "--depth": Math.min(depth, DEPTH) } as React.CSSProperties}
                  aria-current={depth === 0}
                >
                  <div className={styles.cardFace}>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(max-width: 767px) 88vw, 460px"
                        className={styles.cardPhoto}
                      />
                    ) : (
                      <span className={styles.cardMark} aria-hidden>
                        <ServiceIcon name={item.icon} />
                      </span>
                    )}

                    <div className={styles.cardText}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDescription}>{item.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.dots}>
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`${styles.dot} ${index === front ? styles.dotOn : ""}`}
              aria-label={item.title}
              aria-pressed={index === front}
              onClick={() => setFront(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
