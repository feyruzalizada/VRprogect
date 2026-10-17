"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import styles from "./News.module.css";
import { news } from "@/content/news";
import type { NewsItem } from "@/lib/news";

export default function NewsCard({ item, date }: { item: NewsItem; date: string }) {
  const [flipped, setFlipped] = useState(false);
  const frontRef = useRef<HTMLButtonElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);

  function flip(next: boolean) {
    setFlipped(next);
    // keep keyboard focus on the side that is now showing
    requestAnimationFrame(() => (next ? backRef : frontRef).current?.focus({ preventScroll: true }));
  }

  return (
    <article className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
      <div className={styles.inner}>
        <button
          ref={frontRef}
          type="button"
          className={`${styles.face} ${styles.front}`}
          onClick={() => flip(true)}
          inert={flipped}
        >
          <span className={styles.media}>
            {item.image ? (
              <Image
                src={item.image.url}
                alt={item.image.alt}
                fill
                sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, (max-width: 1199px) 33vw, 290px"
                className={styles.image}
              />
            ) : null}
          </span>
          <span className={styles.frontBody}>
            <time className={styles.date} dateTime={item.date}>
              {date}
            </time>
            <span className={styles.cardTitle}>{item.title}</span>
            <span className={styles.read}>{news.read}</span>
          </span>
        </button>

        <div className={`${styles.face} ${styles.back}`} inert={!flipped}>
          <time className={styles.date} dateTime={item.date}>
            {date}
          </time>
          <h3 className={styles.backTitle}>{item.title}</h3>
          <div className={styles.text} tabIndex={0}>
            {item.text}
          </div>
          <div className={styles.actions}>
            {item.link ? (
              <a className={styles.source} href={item.link} target="_blank" rel="noopener noreferrer">
                {news.source}
              </a>
            ) : null}
            <button ref={backRef} type="button" className={styles.backButton} onClick={() => flip(false)}>
              {news.back}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
