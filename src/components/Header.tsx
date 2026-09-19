"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { mainNav } from "@/content/navigation";

function CaretDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 6" fill="none" className={className} aria-hidden>
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 22 22" fill="none" width="22" height="22" aria-hidden>
      <circle cx="9.5" cy="9.5" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="m14.5 14.5 5 5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 22 22" fill="none" width="22" height="22" aria-hidden>
      <path d="M2 5h18M2 11h18M2 17h18" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 22 22" fill="none" width="20" height="20" aria-hidden>
      <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

const LANGUAGES = ["AZ", "EN", "RU"] as const;

type Lang = (typeof LANGUAGES)[number];

function LangSwitch({
  lang,
  onPick,
  className,
}: {
  lang: Lang;
  onPick: (code: Lang) => void;
  className: string;
}) {
  return (
    <div className={className} role="group" aria-label="Language">
      {LANGUAGES.map((code, index) => (
        <span key={code} className={styles.langOption}>
          {index > 0 && <span className={styles.langDivider} aria-hidden />}
          <button
            type="button"
            onClick={() => onPick(code)}
            aria-pressed={lang === code}
            className={`${styles.langButton} ${
              lang === code ? styles.langButtonActive : ""
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}

// the navbar only moves inside one page, so every item scrolls by hand and
// leaves the address bar on "/" — a leftover #hash pulled the page back down
function handleNavClick(event: React.MouseEvent, href: string) {
  if (href !== "/" && !href.startsWith("#")) return;
  event.preventDefault();

  if (href === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (href.length > 1) {
    const target = document.querySelector(href);
    if (!target) return;
    // the bar turns fixed once the page moves, so stop that much short of the
    // section or its first rows sit under it
    const bar = document.querySelector("header");
    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      (bar?.offsetHeight ?? 0);
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  } else {
    return;
  }

  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname);
  }
}

function LangDropdown({ lang, onPick }: { lang: Lang; onPick: (code: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={styles.langDrop}>
      <button
        type="button"
        className={`${styles.langTrigger} ${open ? styles.langTriggerOpen : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Language"
        onClick={() => setOpen((v) => !v)}
      >
        {lang}
        <CaretDown className={styles.langCaret} />
      </button>

      <ul className={`${styles.langMenu} ${open ? styles.langMenuOpen : ""}`}>
        {LANGUAGES.map((code) => (
          <li key={code}>
            <button
              type="button"
              className={`${styles.langMenuItem} ${
                lang === code ? styles.langMenuItemActive : ""
              }`}
              aria-pressed={lang === code}
              tabIndex={open ? 0 : -1}
              onClick={() => {
                onPick(code);
                setOpen(false);
              }}
            >
              {code}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // visual only — no locale routing yet
  const [lang, setLang] = useState<Lang>("AZ");
  const [stuck, setStuck] = useState(false);

  // an open panel used to leave the page scrolling behind it
  useEffect(() => {
    if (!panelOpen && !mobileOpen) return;

    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [panelOpen, mobileOpen]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${stuck ? styles.stuck : ""}`}>
      <div className={styles.bar}>
        <div className={`${styles.inner} ${styles.desktopBar}`}>
          <div className={styles.colLogo}>
            <Link href="/" className={styles.logo} aria-label="VR Global Group">
              <span className={styles.brand}>
                <span>VR</span>
                <span>Global</span>
                <span>Group</span>
              </span>
            </Link>
          </div>

          <div className={styles.colMenu}>
            <nav className={styles.nav} aria-label="Main">
              <ul className={styles.navList}>
                {mainNav.map((item) => (
                  <li key={item.label} className={styles.navItem}>
                    <Link
                      href={item.href}
                      className={styles.navLink}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.colActions}>
            <LangDropdown lang={lang} onPick={setLang} />

            <button
              type="button"
              className={`${styles.action} ${styles.search}`}
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <SearchIcon />
            </button>

            <div className={styles.panelToggleWrap}>
              <button
                type="button"
                className={styles.action}
                aria-label="Open side panel"
                aria-expanded={panelOpen}
                onClick={() => setPanelOpen(true)}
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.mobileBar}>
          <Link href="/" className={styles.mobileLogo} aria-label="VR Global Group">
            <span className={styles.brand}>
              <span>VR</span>
              <span>Global</span>
              <span>Group</span>
            </span>
          </Link>
          <div className={styles.mobileActions}>
            <LangSwitch
              lang={lang}
              onPick={setLang}
              className={styles.mobileLangSwitch}
            />
            <button
              type="button"
              className={`${styles.action} ${styles.search}`}
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              className={styles.action}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className={styles.searchField}>
          <form
            className={styles.searchForm}
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="site-search" className="sr-only">
              Search for:
            </label>
            <input
              id="site-search"
              type="search"
              name="s"
              placeholder="SEARCH..."
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchSubmit} aria-label="Submit search">
              <SearchIcon />
            </button>
          </form>
        </div>
      )}

      {(panelOpen || mobileOpen) && (
        <button
          type="button"
          className={styles.overlay}
          aria-label="Close"
          onClick={() => {
            setPanelOpen(false);
            setMobileOpen(false);
          }}
        />
      )}

      <aside
        className={`${styles.sidePanel} ${panelOpen ? styles.sidePanelOpen : ""}`}
        aria-hidden={!panelOpen}
      >
        <button
          type="button"
          className={styles.panelClose}
          aria-label="Close side panel"
          onClick={() => setPanelOpen(false)}
          tabIndex={panelOpen ? 0 : -1}
        >
          <CloseIcon />
        </button>

        <div className={styles.panelBrand}>
          <span className={styles.brand}>
            <span>VR</span>
            <span>Global</span>
            <span>Group</span>
          </span>
        </div>

        <nav className={styles.panelNav} aria-label="Panel">
          <ul className={styles.panelNavList}>
            {mainNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={styles.panelNavLink}
                  tabIndex={panelOpen ? 0 : -1}
                  onClick={(e) => {
                    setPanelOpen(false);
                    handleNavClick(e, item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </aside>

      <nav
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!mobileOpen}
        aria-label="Mobile"
      >
        <button
          type="button"
          className={styles.panelClose}
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          tabIndex={mobileOpen ? 0 : -1}
        >
          <CloseIcon />
        </button>
        <ul className={styles.mobileList}>
          {mainNav.map((item) => (
            <li key={item.label} className={styles.mobileItem}>
              <div className={styles.mobileRow}>
                <Link
                  href={item.href}
                  className={styles.mobileLink}
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleNavClick(e, item.href);
                  }}
                >
                  {item.label}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
