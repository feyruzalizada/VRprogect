"use client";

import { useEffect, useState } from "react";
import BookReader3D from "./BookReader3D";
import { scrollToElement } from "./navScroll";
import styles from "./SideNavShowcase.module.css";
import { sideNav, type SideNavLink } from "@/content/sidenav";

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
  const [openId, setOpenId] = useState<string | null>(null);
  const introOpen = openId === sideNav.intro.id;

  // the header search opens a panel by its id
  useEffect(() => {
    function onOpen(event: Event) {
      const id = (event as CustomEvent<string>).detail;
      setOpenId(id);
      requestAnimationFrame(() => {
        const button = document.querySelector(`[aria-controls="${id}"]`);
        if (button) scrollToElement(button.closest("li") ?? button);
      });
    }
    window.addEventListener("vr:open-panel", onOpen);
    return () => window.removeEventListener("vr:open-panel", onOpen);
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
        <BookReader3D />
      </div>
    </section>
  );
}
