"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./Header.module.css";
import { scrollToElement } from "./navScroll";
import type { Ui } from "@/content/i18n/types";
import type { SearchItem, SearchTarget } from "@/lib/searchIndex";

const MAX_RESULTS = 8;

// case, ə/ı and diacritics don't matter
function fold(s: string) {
  return s
    .toLocaleLowerCase("az")
    .replace(/ə/g, "e")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function snippet(text: string, foldedText: string, word: string) {
  const at = word ? foldedText.indexOf(word) : -1;
  const start = at > 40 ? at - 40 : 0;
  const cut = text.slice(start, start + 120).trim();
  return (start > 0 ? "…" : "") + cut + (start + 120 < text.length ? "…" : "");
}

// sections, cards and panels open themselves when they hear these
export function goTo(go: SearchTarget) {
  if (go.service) {
    window.dispatchEvent(new CustomEvent("vr:show-service", { detail: go.service }));
    return;
  }
  if (go.panel) {
    window.dispatchEvent(new CustomEvent("vr:open-panel", { detail: go.panel }));
    return;
  }
  if (go.news) {
    const item = document.getElementById(`xeber-${go.news}`);
    const list = item?.parentElement;
    if (item && list) {
      list.scrollTo({ left: item.offsetLeft - (list.clientWidth - item.offsetWidth) / 2, behavior: "smooth" });
      scrollToElement(item);
      return;
    }
  }
  const section = document.querySelector(go.section);
  if (section) scrollToElement(section);
}

export default function SiteSearch({ index, t, onDone }: { index: SearchItem[]; t: Ui["search"]; onDone: () => void }) {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const folded = useMemo(
    () => index.map((item) => ({ item, title: fold(item.title), text: fold(item.text) })),
    [index],
  );

  const q = fold(query);
  const words = useMemo(() => q.split(" ").filter(Boolean), [q]);

  const results = useMemo(() => {
    if (q.length < 2) return [];
    return folded
      .map((entry) => {
        const all = `${entry.title} ${entry.text}`;
        if (!words.every((w) => all.includes(w))) return null;
        let score = 0;
        if (entry.title.includes(q)) score += 4;
        if (entry.title.startsWith(q)) score += 2;
        if (words.every((w) => entry.title.includes(w))) score += 2;
        return { ...entry, score };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_RESULTS);
  }, [folded, q, words]);

  const rows = results.length;
  const searched = q.length >= 2;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function pick(i: number) {
    goTo(results[i].item.go);
    onDone();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      onDone();
    } else if (event.key === "ArrowDown" && rows) {
      event.preventDefault();
      setCursor((c) => (c + 1) % rows);
    } else if (event.key === "ArrowUp" && rows) {
      event.preventDefault();
      setCursor((c) => (c - 1 + rows) % rows);
    }
  }

  return (
    <div className={styles.searchField}>
      <form
        className={styles.searchForm}
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (rows) pick(cursor);
        }}
      >
        <label htmlFor="site-search" className="sr-only">
          {t.label}
        </label>
        <input
          ref={inputRef}
          id="site-search"
          type="search"
          name="s"
          autoComplete="off"
          placeholder={t.placeholder}
          className={styles.searchInput}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCursor(0);
          }}
          onKeyDown={onKeyDown}
          role="combobox"
          aria-expanded={searched}
          aria-controls="site-search-results"
          aria-activedescendant={rows ? `site-search-${cursor}` : undefined}
        />
        <button type="submit" className={styles.searchSubmit} aria-label={t.submit}>
          <svg viewBox="0 0 22 22" fill="none" width="22" height="22" aria-hidden>
            <circle cx="9.5" cy="9.5" r="6.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="m14.5 14.5 5 5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </button>
      </form>

      {searched ? (
        <ul id="site-search-results" className={styles.searchResults} role="listbox" aria-label={t.results}>
          {rows === 0 ? <li className={styles.searchEmpty}>{t.empty}</li> : null}
          {results.map((r, i) => (
            <li
              key={`${r.item.kind}-${r.item.title}-${i}`}
              id={`site-search-${i}`}
              role="option"
              aria-selected={cursor === i}
              className={`${styles.searchResult} ${cursor === i ? styles.searchResultOn : ""}`}
              onMouseEnter={() => setCursor(i)}
              onClick={() => pick(i)}
            >
              <span className={styles.searchKind}>{r.item.kind}</span>
              <span className={styles.searchTitle}>{r.item.title}</span>
              {r.item.text ? <span className={styles.searchSnippet}>{snippet(r.item.text, r.text, words[0])}</span> : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
