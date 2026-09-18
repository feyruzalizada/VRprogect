"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./HeroSlider.module.css";
import { heroCues, heroSocial, heroVideo, type HeroCue } from "@/content/hero";

const CHAR_STAGGER = 60;
/** how long the outgoing text takes to leave before the next one enters */
const EXIT_MS = 520;

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden>
      <path
        fill="#ff0000"
        d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3 3 0 0 0 .5 6.2C0 8.09 0 12 0 12s0 3.91.5 5.8a3 3 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 0 0 2.12-2.13c.5-1.89.5-5.8.5-5.8s0-3.91-.5-5.8z"
      />
      <path fill="#fff" d="M9.55 15.57V8.43L15.82 12z" />
    </svg>
  );
}

const TIKTOK_GLYPH =
  "M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z";

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden>
      {/* the mark is one note printed three times: cyan behind, red in front */}
      <path fill="#25f4ee" d={TIKTOK_GLYPH} transform="translate(-1.1 1.1)" />
      <path fill="#fe2c55" d={TIKTOK_GLYPH} transform="translate(1.1 -1.1)" />
      <path fill="#fff" d={TIKTOK_GLYPH} />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden>
      <defs>
        <linearGradient id="hero-ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ffd521" />
          <stop offset="0.25" stopColor="#f50000" />
          <stop offset="0.5" stopColor="#b900b4" />
          <stop offset="0.75" stopColor="#7300c0" />
          <stop offset="1" stopColor="#4c5fd7" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="6"
        fill="none"
        stroke="url(#hero-ig)"
        strokeWidth="2.1"
      />
      <circle cx="12" cy="12" r="4.6" fill="none" stroke="url(#hero-ig)" strokeWidth="2.1" />
      <circle cx="17.6" cy="6.4" r="1.5" fill="url(#hero-ig)" />
    </svg>
  );
}

function SocialIcon({ id }: { id: string }) {
  if (id === "youtube") return <YoutubeIcon />;
  if (id === "tiktok") return <TiktokIcon />;
  if (id === "instagram") return <InstagramIcon />;
  return (
    <Image
      src="/images/social/facebook.png"
      alt=""
      width={40}
      height={40}
      className={styles.socialIcon}
      unoptimized
    />
  );
}

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

export default function HeroSlider({ cues = heroCues }: { cues?: HeroCue[] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const current = cues[shown];

  // hold the old cue on screen while it animates out, then swap
  useEffect(() => {
    if (active === shown) return;
    setLeaving(true);
    const timer = setTimeout(() => {
      setShown(active);
      setLeaving(false);
    }, EXIT_MS);
    return () => clearTimeout(timer);
  }, [active, shown]);

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

  return (
    <section
      className={styles.hero}
      aria-label="VR Global Group"
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
      <div
        className={`${styles.layers} ${leaving ? styles.leaving : ""}`}
        key={current.id}
      >
        <Watermark word={current.watermark} />
        <h1 className={styles.title}>{current.title}</h1>
        <p className={styles.description}>{current.description}</p>
        <p className={styles.trust}>{current.trust}</p>
      </div>

      <ul className={styles.social}>
        {heroSocial.map((item) => (
          <li key={item.id} className={styles.socialItem}>
            <a
              href={item.href}
              className={`${styles.socialLink} ${styles[item.id]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon id={item.id} />
              {item.parts.map((part) => (
                <span key={part}>{part}</span>
              ))}
            </a>
          </li>
        ))}
      </ul>

    </section>
  );
}
