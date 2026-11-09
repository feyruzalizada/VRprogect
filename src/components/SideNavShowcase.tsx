"use client";

import { useEffect, useRef, useState } from "react";
import BookReader3D from "./BookReader3D";
import { scrollToElement } from "./navScroll";
import styles from "./SideNavShowcase.module.css";
import type { BookUi } from "@/content/i18n/types";
import { sideNav as azSideNav, type SideNavContent, type SideNavLink } from "@/content/sidenav";

// an open panel closes by itself after this long
const PANEL_MS = 45000;

const blockStyle: Record<string, string> = {
  flow: styles.panelFlow,
  quote: styles.panelQuote,
  author: styles.panelAuthor,
};

function Panel({ link, open, onClose, closeLabel }: { link: SideNavLink; open: boolean; onClose: () => void; closeLabel: string }) {
  return (
    <div
      id={link.id}
      className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
      aria-hidden={!open}
      data-panel
    >
      <button type="button" className={styles.panelClose} onClick={onClose} aria-label={closeLabel} tabIndex={open ? 0 : -1}>
        <span aria-hidden="true">×</span>
      </button>
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

export default function SideNavShowcase({
  sideNav = azSideNav,
  book,
  closeLabel,
}: {
  sideNav?: SideNavContent;
  book: BookUi;
  closeLabel: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const asideRef = useRef<HTMLElement>(null);
  const close = () => setOpenId(null);
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
    // a press anywhere but the open panel or a panel's own toggle closes it, and so does Escape
    function onPointer(event: PointerEvent) {
      const target = event.target as Element | null;
      if (target?.closest("[data-panel]")) return;
      if (target?.closest("[aria-controls]") && asideRef.current?.contains(target)) return;
      setOpenId(null);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenId(null);
    }
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(id);
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [openId]);

  return (
    <section id="kitab" className={styles.section}>
      <aside className={styles.aside} ref={asideRef}>
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

          <Panel link={sideNav.intro} open={introOpen} onClose={close} closeLabel={closeLabel} />
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

                  <Panel link={link} open={isOpen} onClose={close} closeLabel={closeLabel} />
                </li>
              );
            })}
          </ul>
        </nav>

      </aside>

      <div className={styles.stage}>
        <BookReader3D t={book} />
      </div>
    </section>
  );
}
