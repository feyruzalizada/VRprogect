"use client";

import { useState } from "react";

import type { CalcUi } from "@/content/i18n/types";
import type { Lang } from "@/i18n/config";
import { fmt } from "@/i18n/fmt";
import { REFERENCE_MM, vrValue } from "@/lib/vrCalc";

import styles from "./AdaptiveCalc.module.css";

const elements = [
  { key: "switch", base: 900, source: "R14 · §6.7" },
  { key: "seat", base: 450, source: "R14 · §6.10" },
  { key: "worktop", base: 900, source: "R14 · §6.8" },
] as const;

const icons = {
  switch: (
    <>
      <rect height="22" rx="3" width="16" x="6" y="3" />
      <path d="M10 7h8v14h-8zM14 10v4" />
    </>
  ),
  seat: <path d="M7 14V4h13v10M5 14h18v5H5zM7 19v6M21 19v6" />,
  worktop: (
    <path d="M3 9h22v4H3zM5 13v12M23 13v12M14 13v12M5 20h9M16 6h5M18 6V3h3" />
  ),
};

type Result = { tenths: number };

// height in millimetres (tenths of a centimetre), or the error key
function parse(raw: string, adult: boolean): Result | keyof CalcUi["errors"] {
  const v = raw.trim();
  if (!v) return "empty";
  if (!/^\d{2,3}([.,]\d)?$/.test(v)) return "format";
  const tenths = Math.round(Number(v.replace(",", ".")) * 10);
  if (tenths < 1400 || tenths > 2100) return "range";
  if (!adult) return "adult";
  return { tenths };
}

export default function CalcWidget({ t, lang }: { t: CalcUi; lang: Lang }) {
  const [height, setHeight] = useState("");
  const [adult, setAdult] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const comma = lang !== "en";
  const cm = (tenths: number) => {
    const s = tenths % 10 ? (tenths / 10).toFixed(1) : String(tenths / 10);
    return comma ? s.replace(".", ",") : s;
  };

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = parse(height, adult);
    if (typeof r === "string") {
      setError(t.errors[r]);
      setResult(null);
      return;
    }
    setError(null);
    setResult(r);
  }

  const n = result ? cm(result.tenths) : "";
  const ratio = result ? result.tenths / REFERENCE_MM : 0;

  return (
    <div
      className={styles.shell}
      id="kalk-demo"
      aria-labelledby="calc-heading"
      role="region"
    >
      <div className={styles.top}>
        <h2 id="calc-heading">{t.heading}</h2>
        <span className={styles.step}>{t.step}</span>
      </div>
      <div className={styles.layout}>
        <form className={styles.input} onSubmit={submit} noValidate>
          <label className={styles.fieldLabel} htmlFor="calc-height">
            {t.heightLabel}
          </label>
          <div className={styles.heightInput}>
            <input
              id="calc-height"
              name="height"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              spellCheck={false}
              maxLength={5}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              aria-describedby="calc-hint calc-error"
              aria-invalid={error ? true : undefined}
            />
            <span>{t.unitCm}</span>
          </div>
          <p className={styles.hint} id="calc-hint">
            {t.hint}
            <br />
            {t.hintNote}
          </p>
          <label className={styles.check}>
            <input
              type="checkbox"
              checked={adult}
              onChange={(e) => setAdult(e.target.checked)}
            />
            <span>{t.adult}</span>
          </label>
          <button className={styles.primary} type="submit">
            {t.submit}
          </button>
          <p
            className={styles.error}
            id="calc-error"
            role="alert"
            hidden={!error}
          >
            {error}
          </p>
          <div className={styles.privacy}>
            <span aria-hidden="true">○</span>
            <p>{t.privacy}</p>
          </div>
        </form>
        <div className={styles.results}>
          <div className={styles.resultsHeading}>
            <p>{result ? fmt(t.resultTitle, { n }) : t.resultIdle}</p>
            <span className={`${styles.badge} ${result ? styles.ready : ""}`}>
              {result ? t.badgeReady : t.badgeIdle}
            </span>
          </div>
          <div className={styles.grid}>
            {elements.map((el, i) => {
              const value = result ? vrValue(el.base, result.tenths) : null;
              const d = value === null ? 0 : value - el.base;
              const sign = d > 0 ? `+${d}` : d < 0 ? `−${-d}` : "0";
              return (
                <article className={styles.card} key={el.key}>
                  <div className={styles.cardTop}>
                    <span className={styles.index}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <svg
                      aria-hidden="true"
                      fill="none"
                      height="28"
                      viewBox="0 0 28 28"
                      width="28"
                    >
                      {icons[el.key]}
                    </svg>
                  </div>
                  <h3>{t.elements[el.key].title}</h3>
                  <p className={styles.base}>
                    {t.base}{" "}
                    <strong>
                      {el.base} <span>{t.unitMm}</span>
                    </strong>
                  </p>
                  <div className={styles.candidate}>
                    <span className={styles.value}>{value ?? "—"}</span>
                    <span className={styles.unit}>{t.unitMm}</span>
                  </div>
                  <p className={styles.candidateLabel}>{t.candidate}</p>
                  <span className={styles.difference}>
                    {value === null ? " " : fmt(t.difference, { d: sign })}
                  </span>
                  <p className={styles.datum}>{t.elements[el.key].datum}</p>
                  <p className={styles.source}>
                    {el.source} <span>{t.sourceNote}</span>
                  </p>
                </article>
              );
            })}
          </div>
          {result && (
            <p className={styles.note}>
              {fmt(t.ratioNote, { r: ratio.toFixed(6) })}
            </p>
          )}
          <p className={styles.srOnly} aria-live="polite" aria-atomic="true">
            {result ? fmt(t.live, { n }) : ""}
          </p>
        </div>
      </div>
      <div className={styles.warning}>
        <span aria-hidden="true" className={styles.noteIcon}>
          !
        </span>
        <p>
          <strong>{t.warningLead}</strong> {t.warning}
        </p>
      </div>
      <noscript>
        <p className={styles.noscript}>{t.noscript}</p>
      </noscript>
    </div>
  );
}
