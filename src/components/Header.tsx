"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import { mainNav, sidePanel, type NavItem } from "@/content/navigation";

function CaretDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 6" fill="none" className={className} aria-hidden>
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function CaretRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 6 10" fill="none" className={className} aria-hidden>
      <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
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

function DesktopDropdown({ items }: { items: NavItem[] }) {
  return (
    <ul className={styles.dropdown}>
      {items.map((item) => (
        <li key={item.label} className={styles.dropdownItem}>
          <Link href={item.href} className={styles.dropdownLink}>
            {item.label}
          </Link>
          {item.children && (
            <>
              <CaretRight className={styles.subCaret} />
              <ul className={styles.subDropdown}>
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link href={child.href} className={styles.dropdownLink}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

function MobileNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(item.children?.length);

  return (
    <li className={styles.mobileItem}>
      <div className={styles.mobileRow}>
        <Link href={item.href} className={styles.mobileLink}>
          {item.label}
        </Link>
        {hasChildren && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={`Toggle ${item.label} submenu`}
            className={`${styles.mobileToggle} ${open ? styles.mobileToggleOpen : ""}`}
          >
            <CaretRight />
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul className={styles.mobileSub}>
          {item.children!.map((child) =>
            child.children?.length ? (
              <MobileNavItem key={child.label} item={child} />
            ) : (
              <li key={child.label}>
                <Link href={child.href} className={styles.mobileSubLink}>
                  {child.label}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );
}

const LANGUAGES = ["AZ", "EN", "RU"] as const;

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // visual only — no locale routing yet
  const [lang, setLang] = useState<(typeof LANGUAGES)[number]>("AZ");

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <div className={`${styles.inner} ${styles.desktopBar}`}>
          <div className={styles.colLogo}>
            <Link href="/" className={styles.logo} aria-label="Theratio">
              <Image
                src="/images/logo.svg"
                alt="Theratio"
                width={180}
                height={91}
                priority
                unoptimized
              />
            </Link>
          </div>

          <div className={styles.colMenu}>
            <nav className={styles.nav} aria-label="Main">
              <ul className={styles.navList}>
                {mainNav.map((item) => {
                  const hasDropdown = Boolean(item.children?.length);
                  return (
                    <li
                      key={item.label}
                      className={`${styles.navItem} ${!hasDropdown ? styles.navItemPlain : ""}`}
                    >
                      <Link href={item.href} className={styles.navLink}>
                        {item.label}
                        {hasDropdown && <CaretDown className={styles.caret} />}
                      </Link>

                      {item.children && <DesktopDropdown items={item.children} />}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className={styles.colActions}>
            <div
              className={styles.langSwitch}
              role="group"
              aria-label="Language"
            >
              {LANGUAGES.map((code, index) => (
                <span key={code} className={styles.langOption}>
                  {index > 0 && <span className={styles.langDivider} aria-hidden />}
                  <button
                    type="button"
                    onClick={() => setLang(code)}
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
          <Link href="/" className={styles.mobileLogo} aria-label="Theratio">
            <Image src="/images/logo.svg" alt="Theratio" width={150} height={76} unoptimized />
          </Link>
          <div className={styles.mobileActions}>
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

        <Image
          src={sidePanel.logo}
          alt="Theratio"
          width={160}
          height={40}
          className={styles.panelLogo}
          unoptimized
        />

        <h2 className={styles.panelHeading}>{sidePanel.galleryTitle}</h2>
        <ul className={styles.panelGallery}>
          {sidePanel.gallery.map((src) => (
            <li key={src}>
              <Image src={src} alt="" width={150} height={150} />
            </li>
          ))}
        </ul>

        <h2 className={styles.panelHeading}>{sidePanel.contactTitle}</h2>
        <ul className={styles.panelInfo}>
          <li>{sidePanel.address}</li>
          <li>
            <a href={`mailto:${sidePanel.email}`}>{sidePanel.email}</a>
          </li>
          <li>
            <a href={`tel:${sidePanel.phone.replace(/\s/g, "")}`}>
              {sidePanel.phone}
            </a>
          </li>
        </ul>

        <ul className={styles.panelSocial}>
          {sidePanel.social.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
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
            <MobileNavItem key={item.label} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
