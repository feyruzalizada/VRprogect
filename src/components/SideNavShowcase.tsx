"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./SideNavShowcase.module.css";
import { sideNav, type SideNavLink } from "@/content/sidenav";

const SLIDE_MS = 7000;
const PANEL_MS = 50000;

const blockStyle: Record<string, string> = {
  flow: styles.panelFlow,
  quote: styles.panelQuote,
  author: styles.panelAuthor,
};

function Panel({ link, open }: { link: SideNavLink; open: boolean }) {
  return (
    <div
      id={link.id}
      className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
      aria-hidden={!open}
    >
      <h3 className={styles.panelTitle}>{link.label}</h3>
      {link.body.map((block) => (
        <p
          key={block.text}
          className={`${styles.panelText} ${blockStyle[block.kind] ?? ""}`}
        >
          {block.text}
        </p>
      ))}
    </div>
  );
}

export default function SideNavShowcase() {
  const [active, setActive] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);
  const introOpen = openId === sideNav.intro.id;

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % sideNav.slides.length),
      SLIDE_MS,
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!openId) return;
    const id = setTimeout(() => setOpenId(null), PANEL_MS);
    return () => clearTimeout(id);
  }, [openId]);

  return (
    <section id="kitab" className={styles.section}>
      <aside className={styles.aside}>
        <div className={styles.intro}>
          <h2 className={styles.asideTitle}>
            <button
              type="button"
              className={`${styles.asideTitleButton} ${introOpen ? styles.navCurrent : ""}`}
              aria-expanded={introOpen}
              aria-controls={sideNav.intro.id}
              onClick={() => setOpenId(introOpen ? null : sideNav.intro.id)}
            >
              {sideNav.intro.label}
            </button>
          </h2>

          <Panel link={sideNav.intro} open={introOpen} />
        </div>

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

                  <Panel link={link} open={isOpen} />
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
            width={216}
            height={217}
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
