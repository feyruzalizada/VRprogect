"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./SideNavShowcase.module.css";
import { sideNav } from "@/content/sidenav";

const SLIDE_MS = 7000;

const socialPaths: Record<string, string> = {
  X: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
  Facebook:
    "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
  Linkedin:
    "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
  Instagram:
    "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
};

export default function SideNavShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % sideNav.slides.length),
      SLIDE_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.section}>
      <aside className={styles.aside}>
        <Link href="#" className={styles.logo} aria-label="Theratio">
          <Image src={sideNav.logo} alt="" width={80} height={107} unoptimized />
        </Link>

        <nav className={styles.nav} aria-label="Showcase">
          <ul className={styles.navList}>
            {sideNav.links.map((link, index) => (
              <li key={link.label} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${index === 0 ? styles.navCurrent : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className={styles.social}>
          {sideNav.social.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={styles.socialLink} aria-label={item.label}>
                <svg viewBox="0 0 512 512" aria-hidden>
                  <path d={socialPaths[item.label]} />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className={styles.stage}>
        {sideNav.slides.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="(max-width: 991px) 100vw, 80vw"
            loading="lazy"
            className={`${styles.slide} ${index === active ? styles.slideActive : ""}`}
          />
        ))}

        <p className={styles.slogan}>{sideNav.slogan}</p>

        <div className={styles.content}>
          <Image
            src={sideNav.mark}
            alt=""
            width={95}
            height={90}
            loading="lazy"
            className={styles.mark}
          />

          <h2 className={styles.heading}>
            {sideNav.heading[0]}
            <br />
            {sideNav.heading[1]}
          </h2>

          <Link href={sideNav.ctaHref} className={styles.button}>
            {sideNav.ctaLabel}
          </Link>
        </div>

        <Link href={sideNav.scrollHref} className={styles.scroll}>
          {sideNav.scrollLabel}
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M12 4v14m0 0l-5-5m5 5l5-5" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
