"use client";
/* eslint-disable @next/next/no-img-element -- faces are built by the reader script, next/image would get in the way */

import { useEffect, useRef } from "react";

import "./BookReader3D.css";
import type { BookUi } from "@/content/i18n/types";
import { fmt } from "@/i18n/fmt";
import { sitePhone } from "@/lib/site";

const BASE = "/kitab3d/";
const N = 24;
const asset = (key: string) => `${BASE}${key}.webp`;

// the 3D sample's own script, scoped to this block
function mountReader(root: HTMLElement, t: BookUi) {
  const ac = new AbortController();
  const signal = ac.signal;
  const $ = <T extends HTMLElement = HTMLElement>(id: string) => root.querySelector(`#${id}`) as T;

  type Face = { type: "image"; key: string; page?: number; label: string } | { type: "lining"; label: string };
  const sheetDefs: { kind: string; front: Face; back: Face }[] = [
    { kind: "cover", front: { type: "image", key: "front", label: t.faceFront }, back: { type: "lining", label: t.faceInnerFront } },
    ...Array.from({ length: N / 2 }, (_, j) => ({ kind: "paper", front: { type: "image" as const, key: "p" + (2 * j + 1), page: 2 * j + 1, label: fmt(t.facePage, { n: 2 * j + 1 }) }, back: { type: "image" as const, key: "p" + (2 * j + 2), page: 2 * j + 2, label: fmt(t.facePage, { n: 2 * j + 2 }) } })),
    { kind: "cover", front: { type: "lining", label: t.faceInnerBack }, back: { type: "image", key: "back", label: t.faceBack } },
  ];
  const book = $("book");
  const pageStatus = $("pageStatus");
  const instructions = $("instructions");
  const progressFill = $("progressFill");
  const prev = $<HTMLButtonElement>("previous");
  const next = $<HTMLButtonElement>("next");
  const slider = $<HTMLInputElement>("stepRange");
  const select = $<HTMLSelectElement>("pageJump");
  const zoomBtn = $("zoomBtn");
  const fullBtn = $("fullBtn");
  const modal = $("zoomModal");
  const modalImg = $<HTMLImageElement>("zoomImage");
  const modalLabel = $("zoomPageLabel");
  const modPrev = $<HTMLButtonElement>("zoomPrevious");
  const modNext = $<HTMLButtonElement>("zoomNext");
  const thumbRow = $("pageThumbs");
  const sheets: HTMLElement[] = [];
  let current = 0, locked = false, transitionTimer: ReturnType<typeof setTimeout> | undefined, zoomAt = 0, pointerStart: { x: number; y: number } | null = null, cancelClick = false;
  const maxSheets = sheetDefs.length;
  const zoomItems = [{ key: "front", title: t.zoomFront }, ...Array.from({ length: N }, (_, i) => ({ key: "p" + (i + 1), title: fmt(t.page, { n: i + 1 }) })), { key: "back", title: t.zoomBack }];

  // images get their src only once the book is about to scroll in
  const pending: HTMLImageElement[] = [];
  let ready = false;
  function setSrc(img: HTMLImageElement, src: string) {
    if (ready) img.src = src;
    else { img.dataset.src = src; pending.push(img); }
  }

  function sideNode(data: Face, side: string) {
    const n = document.createElement("div");
    n.className = "book-face " + side + (data.type === "lining" ? " lining" : "");
    n.setAttribute("aria-label", data.label || "");
    if (data.type === "image") {
      const img = document.createElement("img"); setSrc(img, asset(data.key)); img.alt = data.label || ""; img.draggable = false;
      img.decoding = "async"; img.loading = data.key === "front" || data.key === "p1" ? "eager" : "lazy";
      n.appendChild(img);
    } else {
      const lining = document.createElement("div"); lining.className = "lining-ornament";
      lining.innerHTML = '<span class="lining-mark" aria-hidden="true">◆</span><span class="lining-hairline" aria-hidden="true"></span>';
      n.appendChild(lining);
    }
    return n;
  }
  sheetDefs.forEach((d, i) => {
    const sh = document.createElement("div"); sh.className = "sheet " + d.kind;
    sh.appendChild(sideNode(d.front, "front")); sh.appendChild(sideNode(d.back, "back"));
    sh.style.zIndex = String(maxSheets - i + 20);
    book.appendChild(sh); sheets.push(sh);
  });
  const jumpOptions = [{ label: t.optFront, value: 0 }];
  for (let s = 1; s <= maxSheets - 1; s++) {
    if (s === 1) jumpOptions.push({ label: fmt(t.optPage, { n: 1 }), value: s });
    else if (s === maxSheets - 1) jumpOptions.push({ label: fmt(t.optPage, { n: 24 }), value: s });
    else jumpOptions.push({ label: fmt(t.optPages, { a: 2 * s - 2, b: 2 * s - 1 }), value: s });
  }
  jumpOptions.push({ label: t.optBack, value: maxSheets });
  jumpOptions.forEach((v) => { const o = document.createElement("option"); o.value = String(v.value); o.textContent = v.label; select.appendChild(o); });
  function reindex() {
    for (let i = 0; i < sheets.length; i++) sheets[i].style.zIndex = String(i < current ? maxSheets + 20 + i : maxSheets + 20 - i);
  }
  function pageLabel() {
    if (current === 0) return t.frontCover;
    if (current === maxSheets) return t.backCover;
    if (current === 1) return fmt(t.page, { n: 1 });
    if (current === maxSheets - 1) return fmt(t.page, { n: 24 });
    return fmt(t.pages, { a: current * 2 - 2, b: current * 2 - 1 });
  }
  function updateControls() {
    pageStatus.textContent = pageLabel();
    prev.disabled = current === 0 || locked;
    next.disabled = current === maxSheets || locked;
    slider.value = String(current); select.value = String(current);
    progressFill.style.width = ((current / maxSheets) * 100).toFixed(2) + "%";
    if (current === 0) instructions.textContent = t.hintCover;
    else if (current === maxSheets) instructions.textContent = t.hintBack;
    else instructions.textContent = t.hintPages;
    for (const n of thumbRow.querySelectorAll<HTMLElement>("[data-step]")) {
      n.classList.toggle("active", Number(n.dataset.step) === current);
    }
  }
  function finishFlip(sh: HTMLElement) {
    if (!locked) return;
    locked = false;
    sh.style.transition = "";
    reindex(); updateControls();
  }
  function flip(dir: number) {
    if (locked) return;
    const nextStep = current + dir;
    if (nextStep < 0 || nextStep > maxSheets) return;
    locked = true;
    const sh = dir > 0 ? sheets[current] : sheets[current - 1];
    sh.style.zIndex = "999";
    updateControls();
    let completed = false;
    function done() { if (completed) return; completed = true; sh.removeEventListener("transitionend", end); clearTimeout(transitionTimer); finishFlip(sh); }
    function end(e: TransitionEvent) { if (e.target === sh && e.propertyName === "transform") done(); }
    sh.addEventListener("transitionend", end, { signal });
    sh.getBoundingClientRect();
    current = nextStep;
    if (dir > 0) sh.classList.add("flipped"); else sh.classList.remove("flipped");
    transitionTimer = setTimeout(done, 1050);
  }
  function jump(stepIn: number | string) {
    const step = Number(stepIn);
    if (!Number.isFinite(step) || step < 0 || step > maxSheets || locked) return;
    if (Math.abs(step - current) === 1) { flip(Math.sign(step - current)); return; }
    sheets.forEach((sh) => sh.classList.add("no-animate"));
    current = step;
    sheets.forEach((sh, i) => sh.classList.toggle("flipped", i < current));
    reindex(); updateControls();
    requestAnimationFrame(() => requestAnimationFrame(() => sheets.forEach((sh) => sh.classList.remove("no-animate"))));
  }
  book.addEventListener("click", (e) => {
    if (cancelClick) { cancelClick = false; return; }
    if ((e.target as HTMLElement).closest("button")) return;
    const r = book.getBoundingClientRect();
    if (e.clientX < r.left + r.width * 0.5) flip(-1); else flip(1);
  }, { signal });
  book.addEventListener("pointerdown", (e) => { if (e.pointerType === "touch" || e.pointerType === "pen") pointerStart = { x: e.clientX, y: e.clientY }; }, { passive: true, signal });
  book.addEventListener("pointerup", (e) => {
    if (!pointerStart) return;
    const dx = e.clientX - pointerStart.x; const dy = e.clientY - pointerStart.y; pointerStart = null;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.2) { cancelClick = true; flip(dx < 0 ? 1 : -1); setTimeout(() => { cancelClick = false; }, 250); }
  }, { signal });
  prev.addEventListener("click", () => flip(-1), { signal }); next.addEventListener("click", () => flip(1), { signal });
  slider.addEventListener("input", (e) => jump((e.target as HTMLInputElement).value), { signal });
  select.addEventListener("change", (e) => jump((e.target as HTMLSelectElement).value), { signal });
  function displayZoom() {
    const x = zoomItems[zoomAt]; modalImg.src = asset(x.key); modalImg.alt = x.title; modalLabel.textContent = x.title;
    modPrev.disabled = zoomAt <= 0; modNext.disabled = zoomAt >= zoomItems.length - 1;
    $("zoomViewport").scrollTo({ top: 0, behavior: "instant" });
  }
  function zoomOpen(key: string) {
    zoomAt = Math.max(0, zoomItems.findIndex((x) => x.key === key)); displayZoom();
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.classList.add("vrbook3d-lock");
  }
  function closeZoom() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.classList.remove("vrbook3d-lock"); }
  function currentZoomKey() {
    if (current === maxSheets) return "back";
    if (current === 0) return "front";
    if (current === maxSheets - 1) return "p24";
    return "p" + (2 * current - 1);
  }
  zoomBtn.addEventListener("click", () => zoomOpen(currentZoomKey()), { signal });
  $("modalClose").addEventListener("click", closeZoom, { signal });
  modal.addEventListener("click", (e) => { if (e.target === modal) closeZoom(); }, { signal });
  modPrev.addEventListener("click", () => { if (zoomAt > 0) { zoomAt--; displayZoom(); } }, { signal });
  modNext.addEventListener("click", () => { if (zoomAt < zoomItems.length - 1) { zoomAt++; displayZoom(); } }, { signal });
  fullBtn.addEventListener("click", async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else await $("reader").requestFullscreen(); }
    catch (err) { console.warn("Fullscreen not available", err); }
  }, { signal });

  // keys turn pages only while the book is on screen, in full screen or zoomed
  let inView = false;
  const io = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; }, { threshold: 0.35 });
  io.observe($("reader"));
  document.addEventListener("keydown", (e) => {
    const tag = (document.activeElement || ({} as Element)).tagName;
    if (modal.classList.contains("open")) {
      if (e.key === "Escape") { closeZoom(); e.preventDefault(); }
      if (e.key === "ArrowRight") { if (zoomAt < zoomItems.length - 1) { zoomAt++; displayZoom(); } e.preventDefault(); }
      if (e.key === "ArrowLeft") { if (zoomAt > 0) { zoomAt--; displayZoom(); } e.preventDefault(); }
      return;
    }
    if (!inView && !document.fullscreenElement) return;
    if (tag === "SELECT" || tag === "INPUT") return;
    if (e.key === "ArrowRight" || e.key === "PageDown") { flip(1); e.preventDefault(); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { flip(-1); e.preventDefault(); }
    if (e.key === "Home") { jump(0); e.preventDefault(); }
    if (e.key === "End") { jump(maxSheets); e.preventDefault(); }
    if (e.key === "Enter" && document.activeElement === book) { flip(1); e.preventDefault(); }
  }, { signal });
  const quick = [{ step: 0, label: t.quick.cover, key: "front" }, { step: 1, label: t.quick.title, key: "p1" }, { step: 3, label: t.quick.copyright, key: "p5" }, { step: 4, label: t.quick.contents, key: "p7" }, { step: 8, label: t.quick.contentsMore, key: "p15" }, { step: 12, label: t.quick.firstSection, key: "p23" }, { step: maxSheets, label: t.quick.back, key: "back" }];
  quick.forEach((q) => {
    const b = document.createElement("button"); b.type = "button"; b.className = "quick-link"; b.dataset.step = String(q.step);
    const im = document.createElement("img"); im.alt = ""; setSrc(im, asset(q.key)); im.loading = "lazy";
    const label = document.createElement("span"); label.textContent = q.label;
    b.append(im, label); b.addEventListener("click", () => jump(q.step), { signal }); thumbRow.appendChild(b);
  });
  book.tabIndex = 0;
  updateControls();

  const near = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    near.disconnect();
    ready = true;
    for (const img of pending) img.src = img.dataset.src!;
    pending.length = 0;
  }, { rootMargin: "300px 0px" });
  near.observe(root);

  return () => {
    ac.abort();
    io.disconnect();
    near.disconnect();
    clearTimeout(transitionTimer);
    document.body.classList.remove("vrbook3d-lock");
    book.replaceChildren(); select.replaceChildren(); thumbRow.replaceChildren();
  };
}

export default function BookReader3D({ t }: { t: BookUi }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => mountReader(rootRef.current!, t), [t]);

  return (
    <div ref={rootRef} className="vrbook3d">
      <div className="vrbook3d-col">
        <div className="app">
          <header className="head">
            <div className="mark">
              <div className="mark-icon" aria-hidden="true">VR</div>
              <div>
                <strong>{t.name}</strong>
                <small>{t.subtitle}</small>
              </div>
            </div>
            <div className="head-badges">
              <span className="badge">PRINT-001/R14</span>
              <span className="badge primary">{t.sampleBadge}</span>
            </div>
          </header>
          <div className="intro">
            <div className="overline">{t.overline}</div>
            <h3 className="intro-title">
              <a className="order" href={`https://wa.me/${sitePhone.replace("+", "")}?text=${encodeURIComponent(t.orderMessage)}`} target="_blank" rel="noopener noreferrer" aria-label={t.orderAria}>
                <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>
                <span>{t.title}</span>
                <span aria-hidden="true" className="order-arrow">↗</span>
              </a>
            </h3>
            <p>{t.intro}</p>
          </div>
          <div id="reader" className="reader">
            <div className="book-scene">
              <div id="book" className="book" role="group" aria-label={t.bookAria} title={t.bookTitle} />
            </div>
            <div className="page-edge-hint"><span>{t.back}</span><span>{t.forward}</span></div>
          </div>
          <section className="controls" aria-label={t.controlsAria}>
            <div className="control-top">
              <div className="ctrl-group">
                <button type="button" className="ctrl" id="previous" aria-label={t.prevAria}>{t.back}</button>
                <button type="button" className="ctrl main" id="next" aria-label={t.nextAria}>{t.forward}</button>
              </div>
              <div className="status" id="pageStatus" aria-live="polite">{t.frontCover}</div>
              <div className="ctrl-group">
                <button type="button" id="zoomBtn" className="ctrl" title={t.zoomTitle}>{t.zoom}</button>
                <button type="button" id="fullBtn" className="ctrl" title={t.fullscreenTitle}>{t.fullscreen}</button>
              </div>
            </div>
            <div className="control-bottom">
              <input type="range" className="range" id="stepRange" min={0} max={14} defaultValue={0} aria-label={t.sliderAria} />
              <select id="pageJump" className="mini-select" aria-label={t.jumpAria} />
            </div>
            <div className="progress"><div id="progressFill" /></div>
            <div id="instructions" className="instructions">{t.hintCover}</div>
          </section>
          <section className="quick-section">
            <div className="quick-header">
              <h4 className="quick-title">{t.quickTitle}</h4>
              <small>{t.quickNote}</small>
            </div>
            <div id="pageThumbs" className="page-thumbs" />
          </section>
          <footer className="disclaimer">
            <b>{t.disclaimerLead}</b> {t.disclaimer}
            <br />
            {t.controlsNote} <kbd>←</kbd> <kbd>→</kbd> / <kbd>Page Up</kbd> <kbd>Page Down</kbd> / {t.swipe}
          </footer>
        </div>
      </div>

      <div id="zoomModal" className="zoom-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-label={t.zoomDialog}>
        <div className="zoom-bar">
          <strong id="zoomPageLabel">{t.frontCover}</strong>
          <div className="zoom-nav">
            <button type="button" className="ctrl" id="zoomPrevious">←</button>
            <button type="button" className="ctrl" id="zoomNext">→</button>
            <button type="button" className="ctrl main" id="modalClose">{t.close}</button>
          </div>
        </div>
        <div id="zoomViewport" className="zoom-viewport">
          <img id="zoomImage" alt={t.zoomImageAlt} />
        </div>
      </div>
    </div>
  );
}
