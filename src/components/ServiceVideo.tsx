"use client";

import { useEffect, useRef } from "react";
import styles from "./Services.module.css";

export default function ServiceVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // without a poster the card would stay empty until the clip starts (or if autoplay is blocked),
    // so its first frame is fetched once it is near
    const near = poster
      ? null
      : new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;
            video.preload = "metadata";
            if (video.readyState === 0) video.load();
            near?.disconnect();
          },
          { rootMargin: "300px 0px" },
        );
    near?.observe(video);

    // plays like the hero clip whatever the system motion setting: these are short, muted loops
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      near?.disconnect();
    };
  }, [poster]);

  return (
    <video
      ref={ref}
      className={styles.video}
      // a frame a moment in, so the still is not a black fade-in
      src={poster ? src : `${src}#t=0.1`}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
