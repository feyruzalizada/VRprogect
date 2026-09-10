"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./HeroSlider.module.css";
import { heroSlides, heroSocial, type HeroSlide } from "@/content/hero";

const AUTOPLAY_MS = 6000;
const CHAR_STAGGER = 60;

function Watermark({ word }: { word: string }) {
  return (
    <span className={styles.watermark} aria-hidden>
      {[...word].map((char, index) => (
        <span key={`${char}-${index}`} className={styles.charMask}>
          <span
            className={styles.char}
            style={{ animationDelay: `${index * CHAR_STAGGER}ms` }}
          >
            {char}
          </span>
        </span>
      ))}
    </span>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 26 12" fill="none" aria-hidden>
      <path
        d={
          direction === "left"
            ? "M25 6H1m0 0 5-5M1 6l5 5"
            : "M1 6h24m0 0-5-5m5 5-5 5"
        }
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function HeroSlider({
  slides = heroSlides,
}: {
  slides?: HeroSlide[];
}) {
  const [active, setActive] = useState(0);
  const current = slides[active];

  const goTo = useCallback(
    (index: number) => setActive((index + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % slides.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(timer);
  }, [active, slides.length]);

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Studio highlights"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === active ? styles.slideActive : ""}`}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={styles.image}
          />
        </div>
      ))}

      <div className={styles.gridLines} aria-hidden>
        <span className={`${styles.lineVertical} ${styles.lineLeft}`} />
        <span className={`${styles.lineVertical} ${styles.lineRight}`} />
        <span className={styles.lineHorizontal} />
      </div>

      {/* key remount replays the entrance animations */}
      <div className={styles.layers} key={current.id}>
        <Watermark word={current.watermark} />
        <h1 className={styles.title}>{current.title}</h1>
        <p className={styles.description}>{current.description}</p>
        <Link href={current.ctaHref} className={styles.button}>
          {current.ctaLabel}
        </Link>
      </div>

      <ul className={styles.social}>
        {heroSocial.map((item) => (
          <li key={item.label} className={styles.socialItem}>
            <a
              href={item.href}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.bullets} role="tablist" aria-label="Slides">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goTo(index)}
            className={`${styles.bullet} ${
              index === active ? styles.bulletActive : ""
            }`}
          />
        ))}
      </div>

      <div className={styles.arrows}>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Previous slide"
          onClick={() => goTo(active - 1)}
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Next slide"
          onClick={() => goTo(active + 1)}
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </section>
  );
}
