"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./HeroSlider.module.css";
import { heroCues, heroSocial, heroVideo, type HeroCue } from "@/content/hero";

const CHAR_STAGGER = 60;

function cueAt(cues: HeroCue[], time: number) {
  const index = cues.findIndex((cue) => time >= cue.from && time < cue.to);
  return index === -1 ? 0 : index;
}

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

export default function HeroSlider({ cues = heroCues }: { cues?: HeroCue[] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const current = cues[active];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const start = () => video.play().catch(() => {});

    // Safari plays HLS natively, everything else needs hls.js
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = heroVideo.hls;
      start();
      return;
    }

    let hls: { destroy: () => void } | undefined;
    let cancelled = false;

    import("hls.js").then(({ default: Hls }) => {
      if (cancelled) return;
      if (Hls.isSupported()) {
        const instance = new Hls({ capLevelToPlayerSize: true });
        instance.loadSource(heroVideo.hls);
        instance.attachMedia(video);
        instance.on(Hls.Events.MANIFEST_PARSED, start);
        hls = instance;
      } else if (heroVideo.mp4) {
        video.src = heroVideo.mp4;
        start();
      }
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, []);

  const onTime = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const next = cueAt(cues, video.currentTime);
    setActive((prev) => (prev === next ? prev : next));
  }, [cues]);

  const goTo = useCallback(
    (index: number) => {
      const target = (index + cues.length) % cues.length;
      const video = videoRef.current;
      if (video) video.currentTime = cues[target].from;
      setActive(target);
    },
    [cues],
  );

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Studio highlights"
    >
      <video
        ref={videoRef}
        className={styles.video}
        poster={heroVideo.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onTimeUpdate={onTime}
      />

      <span className={styles.scrim} aria-hidden />

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
        {cues.map((cue, index) => (
          <button
            key={cue.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`${cue.title}`}
            onClick={() => goTo(index)}
            className={`${styles.bullet} ${index === active ? styles.bulletActive : ""}`}
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
