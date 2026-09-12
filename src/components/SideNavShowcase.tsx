"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./SideNavShowcase.module.css";
import { sideNav } from "@/content/sidenav";

const SLIDE_MS = 7000;

export default function SideNavShowcase() {
  const [active, setActive] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);

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
        <Link href="#" className={styles.logo} aria-label="VR Global Group">
          <Image src={sideNav.logo} alt="" width={216} height={217} unoptimized />
        </Link>

        <nav className={styles.nav} aria-label="Showcase">
          <ul className={styles.navList}>
            {sideNav.links.map((link) => {
              const isOpen = link.id === openId;

              return (
                <li key={link.id} className={styles.navItem}>
                  <button
                    type="button"
                    className={`${styles.navLink} ${isOpen ? styles.navCurrent : ""}`}
                    aria-expanded={isOpen}
                    aria-controls={link.id}
                    onClick={() => setOpenId(isOpen ? null : link.id)}
                  >
                    {link.label}
                  </button>

                  <div
                    id={link.id}
                    className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                    aria-hidden={!isOpen}
                  >
                    <h3 className={styles.panelTitle}>{link.label}</h3>
                    {link.body.map((text) => (
                      <p key={text} className={styles.panelText}>
                        {text}
                      </p>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

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
            {sideNav.heading.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>

          <p className={styles.subtitle}>{sideNav.subtitle}</p>

          {sideNav.description.map((line) => (
            <p key={line} className={styles.description}>
              {line}
            </p>
          ))}

          <p className={styles.author}>
            {sideNav.author}
            <span className={styles.authorRole}>{sideNav.authorRole}</span>
          </p>

          <Link href={sideNav.ctaHref} className={styles.button}>
            {sideNav.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
