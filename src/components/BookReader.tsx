"use client";
/* eslint-disable @next/next/no-img-element -- pages are swapped by the reader script, next/image would get in the way */

import { useEffect, useRef } from "react";

import "./BookReader.css";

const BASE = "/kitab/";
const FRONT_SRC = `${BASE}assets/front_FINAL_TOXUNULMAZ.png`;

const CHAPTERS: [number, string][] = [
  [1, "Titul və nəşr rekvizitləri"],
  [7, "Mündəricat"],
  [17, "I hissə: Giriş və konsepsiya"],
  [55, "II hissə: Daimi metodoloji model"],
  [81, "VR Tətbiq Protokolu"],
  [84, "VR Adaptiv Erqonomik Ölçü Sistemi"],
  [151, "İnteryer elementlərinin adaptiv ölçüləri"],
  [371, "Ailə və otaq planlaması"],
  [485, "İşıqlandırma"],
  [597, "Havalandırma və hava keyfiyyəti"],
  [707, "İsitmə və soyutma"],
  [784, "Çoxistifadəçili məkanlar"],
  [788, "İnteryer layihələndirmə"],
  [800, "Vahid şərti işarələr sistemi"],
  [813, "III hissə: Təhlükəsizlik modeli"],
  [820, "Materiallar və sertifikatlar"],
  [839, "Audit, nəzarət və yoxlama"],
  [859, "IV hissə: Təhsil və təlim"],
  [861, "Rəqəmsal reyestr"],
  [862, "Pilot tətbiq"],
  [864, "VR Adaptiv Atlas"],
  [865, "Nəticə və inkişaf xəritəsi"],
  [866, "Əlavələr"],
  [867, "Normativ və elmi mənbələr"],
  [875, "Qısaltmalar və ölçü vahidləri"],
  [883, "Əsas qərar cədvəlləri"],
  [886, "Mövzu göstəricisi"],
];

declare global {
  interface Window {
    VR_SEARCH_TEXT?: string[];
  }
}

// the reader logic is the package's own script, scoped to this block
function mountReader(root: HTMLElement, col: HTMLElement) {
  const ac = new AbortController();
  const signal = ac.signal;
  const timers = new Set<ReturnType<typeof setTimeout>>();
  const later = (fn: () => void, ms: number) => {
    const t = setTimeout(() => {
      timers.delete(t);
      fn();
    }, ms);
    timers.add(t);
  };

  const N = 889, FRONT = -1, BACK = 890, pdfPrefix = `${BASE}pages/p`, front = FRONT_SRC, back = `${BASE}assets/back_FINAL_TOXUNULMAZ.png`;
  const $ = <T extends HTMLElement = HTMLElement>(id: string) => root.querySelector(`#${id}`) as T;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  // the 760px switch follows the column, matching the @container rule
  const mobile = { matches: col.getBoundingClientRect().width <= 760 };

  let current = FRONT, turning = false, zoomPage = 1, zoomScale = 1;
  let searchNorm: string[] | null = null;
  let displayedMatches: { page: number; snippet: string }[] = [];
  const loaded: Record<string, boolean> = Object.create(null);

  const path = (n: number) => (n === FRONT ? front : n === BACK ? back : n >= 1 && n <= N ? pdfPrefix + String(n).padStart(4, "0") + ".webp" : null);
  const isPdf = (n: number) => n >= 1 && n <= N;
  function preload(n: number) { const p = path(n); if (!p || loaded[p]) return; loaded[p] = true; const i = new Image(); i.src = p; }
  function viewStart(n: number) { if (n === FRONT || n === BACK) return n; return n === 1 ? 1 : n % 2 === 0 ? n : n - 1; }
  function folio(n: number) { return isPdf(n) ? String(n) : ""; }
  function setPageImg(element: HTMLImageElement, n: number) { const p = path(n); if (p) { if (element.getAttribute("src") !== p) element.src = p; element.style.opacity = "1"; } else { element.removeAttribute("src"); element.style.opacity = "0"; } }
  function pair(n: number): [number, number] { const s = viewStart(n); return s === 1 ? [0, 1] : [s, s + 1]; }
  function pageLabel(n: number) { if (n === FRONT) return "Ön üz qabığı"; if (n === BACK) return "Arxa üz qabığı"; if (mobile.matches) return `Səhifə ${n} / ${N}`; const [l, r] = pair(n); return l ? `Səhifələr ${l}–${r} / ${N}` : `Səhifə 1 / ${N}`; }
  function draw() {
    $("coverStand").hidden = !(current === FRONT || current === BACK); $("desktopBook").hidden = current === FRONT || current === BACK;
    if (current === FRONT || current === BACK) { setPageImg($("coverImg"), current); } else { const [l, r] = pair(current); setPageImg($("leftImg"), l); setPageImg($("rightImg"), r); $("leftFolio").textContent = folio(l); $("rightFolio").textContent = folio(r); }
    setPageImg($("mobileImg"), current);
    $("pageStatus").textContent = pageLabel(current);
    $("hint").textContent = current === FRONT ? "Kitabı açmaq üçün üz qabığına toxunun." : current === BACK ? "Kitabın sonu. Əvvəlki düyməsi ilə geri qayıdın." : "Səhifəyə klikləyin və ya keçid düymələrindən istifadə edin.";
    $<HTMLButtonElement>("prev").disabled = current === FRONT; $<HTMLButtonElement>("next").disabled = current === BACK;
    $<HTMLInputElement>("progressSlider").value = current === FRONT ? "1" : current === BACK ? "889" : String(current);
    $("progressPct").textContent = current === FRONT ? "0%" : current === BACK ? "100%" : Math.round((current / N) * 100) + "%";
    if (isPdf(current)) $<HTMLInputElement>("jumpTo").value = String(current);
    if (current !== FRONT) { preload(current + 1); preload(current + 2); preload(current - 1); }
  }
  function adjacentTarget(direction: number) { if (current === FRONT) return direction > 0 ? 1 : FRONT; if (current === BACK) return direction < 0 ? (mobile.matches ? N : 888) : BACK; if (mobile.matches) return Math.max(FRONT, Math.min(BACK, current + direction)); if (direction > 0) return current === 1 ? 2 : current === 888 ? BACK : Math.min(888, viewStart(current) + 2); return current === 1 ? FRONT : current === 2 ? 1 : Math.max(2, viewStart(current) - 2); }
  function go(direction: number) { if (turning) return; const target = adjacentTarget(direction); if (target !== current) navigate(target, direction); }
  function navigate(target: number, direction = 0) {
    target = Math.min(BACK, Math.max(FRONT, Math.trunc(Number(target)))); if (target === current || turning) return; if (!mobile.matches && isPdf(target)) target = viewStart(target);
    const old = current; const animate = !reduce.matches && direction !== 0 && isPdf(old) && isPdf(target) && Math.abs((mobile.matches ? old : Math.max(1, viewStart(old))) - (mobile.matches ? target : Math.max(1, viewStart(target)))) < 3;
    if (animate) { turning = true; if (mobile.matches) flipMobile(old, target); else flipDesktop(old, target, direction); return; }
    if (old === FRONT && isPdf(target) && !mobile.matches) { $("coverStand").classList.add("opening"); turning = true; later(() => { current = target; turning = false; $("coverStand").classList.remove("opening"); draw(); }, reduce.matches ? 20 : 380); } else { current = target; draw(); }
  }
  function flipDesktop(old: number, target: number, direction: number) {
    const [ol, or] = pair(old), [nl, nr] = pair(target), leaf = $("desktopLeaf"); leaf.hidden = false; leaf.style.transition = "none"; leaf.classList.remove("to-left");
    if (direction > 0) { setPageImg($("leftImg"), ol); setPageImg($("rightImg"), nr); setPageImg($("leafFrontImg"), or); setPageImg($("leafBackImg"), nl); void leaf.offsetWidth; leaf.style.transition = ""; requestAnimationFrame(() => leaf.classList.add("to-left")); }
    else { setPageImg($("leftImg"), nl); setPageImg($("rightImg"), or); setPageImg($("leafFrontImg"), nr); setPageImg($("leafBackImg"), ol); leaf.classList.add("to-left"); void leaf.offsetWidth; leaf.style.transition = ""; requestAnimationFrame(() => leaf.classList.remove("to-left")); }
    later(() => { leaf.hidden = true; leaf.classList.remove("to-left"); current = target; turning = false; draw(); }, 690);
  }
  function flipMobile(old: number, target: number) { const leaf = $("mobileLeaf"); setPageImg($("mobileFront"), old); setPageImg($("mobileBack"), target); setPageImg($("mobileImg"), target); leaf.hidden = false; leaf.style.transition = "none"; leaf.classList.remove("to-left"); void leaf.offsetWidth; leaf.style.transition = ""; requestAnimationFrame(() => leaf.classList.add("to-left")); later(() => { leaf.hidden = true; leaf.classList.remove("to-left"); current = target; turning = false; draw(); }, 510); }
  function jump(n: number | string) { const p = Number(n); const input = $<HTMLInputElement>("jumpTo"); if (!Number.isInteger(p) || p < 1 || p > N) { input.setCustomValidity("1–889 arası səhifə seçin."); input.reportValidity(); later(() => input.setCustomValidity(""), 1000); return; } navigate(p); }
  function openZoom() { zoomPage = current === FRONT ? FRONT : current === BACK ? BACK : current; if (!mobile.matches && isPdf(zoomPage)) zoomPage = pair(current)[1]; zoomScale = 1; paintZoom(); $("zoomModal").hidden = false; document.body.style.overflow = "hidden"; }
  function paintZoom() { setPageImg($("zoomImg"), zoomPage); $("zoomImg").classList.toggle("is-zoomed", zoomScale > 1); $("zoomStatus").textContent = (zoomPage === FRONT ? "Ön üz" : zoomPage === BACK ? "Arxa üz" : "Səhifə " + zoomPage + " / " + N) + " · " + (zoomScale > 1 ? "Böyük ölçü" : "Ekrana uyğun"); $<HTMLButtonElement>("zoomPrev").disabled = zoomPage === FRONT; $<HTMLButtonElement>("zoomNext").disabled = zoomPage === BACK; }
  function closeZoom() { $("zoomModal").hidden = true; document.body.style.overflow = ""; }
  function zoomNav(d: number) { zoomPage = Math.min(BACK, Math.max(FRONT, zoomPage + d)); paintZoom(); if (isPdf(zoomPage)) navigate(zoomPage); }
  function searchNormalize(s: string) { return String(s).toLocaleLowerCase("az").replace(/ə/g, "e").replace(/ı/g, "i").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim(); }
  function escapeHtml(s: string) { return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!); }

  // the 3 MB text index loads on the first search, not with the page
  let indexLoading: Promise<void> | null = null;
  function loadIndex() {
    if (window.VR_SEARCH_TEXT) return Promise.resolve();
    indexLoading ??= new Promise<void>((resolve, reject) => {
      const s = document.createElement("script");
      s.src = `${BASE}assets/search-index.js`;
      s.onload = () => resolve();
      s.onerror = () => { indexLoading = null; s.remove(); reject(); };
      document.head.append(s);
    });
    return indexLoading;
  }

  async function startSearch() {
    const q = $<HTMLInputElement>("searchInput").value.trim(); if (q.length < 2) { $("searchSummary").textContent = "Ən azı 2 simvol daxil edin."; return; }
    if (!searchNorm) {
      $("searchSummary").textContent = "Mətn indeksi hazırlanır…";
      try { await loadIndex(); } catch { $("searchSummary").textContent = "Axtarış indeksi yüklənmədi. Yenidən cəhd edin."; return; }
      if (signal.aborted || !Array.isArray(window.VR_SEARCH_TEXT)) return;
      searchNorm = window.VR_SEARCH_TEXT.map(searchNormalize);
    }
    const text = window.VR_SEARCH_TEXT!;
    const needle = searchNormalize(q); displayedMatches = []; for (let i = 0; i < N; i++) { const x = searchNorm[i]; const ix = x.indexOf(needle); if (ix >= 0) { const raw = text[i]; const cut = Math.max(0, Math.min(raw.length - 165, ix - 60)); displayedMatches.push({ page: i + 1, snippet: raw.slice(cut, cut + 180) }); } }
    $("searchSummary").textContent = displayedMatches.length + " səhifədə uyğunluq tapıldı" + (displayedMatches.length > 60 ? " · İlk 60 nəticə göstərilir" : "");
    const wrap = $("searchResults"); wrap.replaceChildren(); if (!displayedMatches.length) { const x = document.createElement("p"); x.textContent = "Uyğun nəticə yoxdur. Digər açar sözlə yoxlayın."; x.style.color = "#afbdcc"; wrap.append(x); return; }
    displayedMatches.slice(0, 60).forEach((x) => { const btn = document.createElement("button"); btn.type = "button"; btn.className = "search-result"; btn.innerHTML = "<strong>Səhifə " + x.page + "</strong><span>" + escapeHtml(x.snippet) + "</span>"; btn.addEventListener("click", () => { closeSearch(); jump(x.page); }, { signal }); wrap.append(btn); });
  }
  function openSearch() { $("searchModal").hidden = false; document.body.style.overflow = "hidden"; later(() => $("searchInput").focus(), 50); void loadIndex().catch(() => {}); }
  function closeSearch() { $("searchModal").hidden = true; document.body.style.overflow = ""; }

  const on = <K extends keyof HTMLElementEventMap>(el: HTMLElement, type: K, fn: (e: HTMLElementEventMap[K]) => void, opts: AddEventListenerOptions = {}) =>
    el.addEventListener(type, fn as EventListener, { ...opts, signal });

  on($("prev"), "click", () => go(-1)); on($("next"), "click", () => go(1));
  on($("panelLeft"), "click", () => go(-1)); on($("panelRight"), "click", () => go(1));
  for (const n of ["panelLeft", "panelRight", "coverStand", "mobileBook"]) on($(n), "keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (n === "panelLeft") go(-1); else go(1); } });
  on($("coverStand"), "click", () => (current === FRONT ? go(1) : go(-1)));
  on($("mobileBook"), "click", (e) => { if (e.detail === 0) return; const rect = (e.currentTarget as HTMLElement).getBoundingClientRect(); if (e.clientX - rect.left < rect.width * 0.25) go(-1); else go(1); });
  let startX = 0, startY = 0, suppress = false;
  on($("mobileBook"), "touchstart", (e) => { if (e.touches.length !== 1) return; startX = e.touches[0].clientX; startY = e.touches[0].clientY; suppress = false; }, { passive: true });
  on($("mobileBook"), "touchend", (e) => { const x = e.changedTouches[0].clientX - startX, y = e.changedTouches[0].clientY - startY; if (Math.abs(x) > 45 && Math.abs(x) > Math.abs(y) * 1.2) { go(x < 0 ? 1 : -1); suppress = true; } }, { passive: true });
  on($("mobileBook"), "click", (e) => { if (suppress) { e.stopImmediatePropagation(); suppress = false; } }, { capture: true });
  on($("jumpForm"), "submit", (e) => { e.preventDefault(); jump($<HTMLInputElement>("jumpTo").value); });
  on($("progressSlider"), "change", (e) => jump((e.target as HTMLInputElement).value));
  on($("chapters"), "change", (e) => { const v = (e.target as HTMLSelectElement).value; if (v) jump(Number(v)); });
  on($("zoom"), "click", openZoom); on($("zoomClose"), "click", closeZoom);
  on($("zoomPlus"), "click", () => { zoomScale = 2; paintZoom(); }); on($("zoomMinus"), "click", () => { zoomScale = 1; paintZoom(); });
  on($("zoomPrev"), "click", () => zoomNav(-1)); on($("zoomNext"), "click", () => zoomNav(1));
  on($("searchOpen"), "click", openSearch); on($("searchClose"), "click", closeSearch);
  on($("searchForm"), "submit", (e) => { e.preventDefault(); void startSearch(); });
  on($("zoomModal"), "click", (e) => { if (e.target === $("zoomModal")) closeZoom(); });
  on($("searchModal"), "click", (e) => { if (e.target === $("searchModal")) closeSearch(); });

  // arrow keys turn pages only while the book is on screen or a dialog of it is open
  let inView = false;
  const io = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; }, { threshold: 0.35 });
  io.observe($("desktopScene").closest(".reader")!);
  window.addEventListener("keydown", (e) => {
    const t = e.target as HTMLElement | null; if (["INPUT", "TEXTAREA", "SELECT"].includes(t?.tagName ?? "")) return;
    const zoomOpen = !$("zoomModal").hidden, searchOpen = !$("searchModal").hidden;
    if (!inView && !zoomOpen && !searchOpen) return;
    if (e.key === "Escape") { if (zoomOpen) closeZoom(); if (searchOpen) closeSearch(); return; }
    if (zoomOpen) { if (e.key === "ArrowRight") zoomNav(1); else if (e.key === "ArrowLeft") zoomNav(-1); return; }
    if (searchOpen) return;
    if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); go(1); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(-1); }
  }, { signal });

  const ro = new ResizeObserver(() => {
    const m = col.getBoundingClientRect().width <= 760;
    if (m === mobile.matches) return;
    mobile.matches = m;
    if (isPdf(current) && !mobile.matches) current = viewStart(current);
    if (turning) { turning = false; $("desktopLeaf").hidden = true; $("mobileLeaf").hidden = true; }
    draw();
  });
  ro.observe(col);

  draw();

  return () => {
    ac.abort();
    io.disconnect();
    ro.disconnect();
    timers.forEach(clearTimeout);
    document.body.style.overflow = "";
  };
}

export default function BookReader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const colRef = useRef<HTMLDivElement>(null);

  useEffect(() => mountReader(rootRef.current!, colRef.current!), []);

  return (
    <div ref={rootRef} className="vrbook">
      <div ref={colRef} className="vrbook-col">
        <div className="shell">
          <header className="top">
            <div className="brand">
              <span className="brand-logo" aria-hidden="true">VR</span>
              <div className="brand-text">
                <strong>VR STANDARTLARI 2026</strong>
                <small>VR Adaptiv Erqonomik Ölçü Sistemi</small>
              </div>
            </div>
            <div className="top-right">
              <span className="tag bold">889 səhifə • R14</span>
              <span className="tag">İnteraktiv elektron nəşr</span>
            </div>
          </header>
          <nav className="toolbar" aria-label="Kitabı idarə et">
            <button className="btn nav-btn" id="prev" type="button" aria-label="Əvvəlki səhifə">← Əvvəlki</button>
            <span className="nav-label" id="pageStatus" role="status" aria-live="polite">Üz qabığı</span>
            <button className="btn gold nav-btn" id="next" type="button" aria-label="Növbəti səhifə">Növbəti →</button>
            <button className="btn" id="zoom" type="button">⤢ Böyüt</button>
            <button className="btn" id="searchOpen" type="button">⌕ Axtar</button>
          </nav>
          <div>
            <div className="reader">
              <div className="book-hint" id="hint">Üz qabığına klikləyin və ya “Növbəti” düyməsini seçin.</div>
              <section className="desktop-wrap" aria-label="İki səhifəli 3D kitab">
                <div className="desktop-scene" id="desktopScene">
                  <div className="desktop-book" id="desktopBook" hidden>
                    <div className="page-panel left" id="panelLeft" tabIndex={0} role="button" aria-label="Əvvəlki vərəqə keç">
                      <img id="leftImg" alt="Sol kitab səhifəsi" draggable={false} />
                      <small className="folio" id="leftFolio" />
                    </div>
                    <div className="page-panel right" id="panelRight" tabIndex={0} role="button" aria-label="Növbəti vərəqə keç">
                      <img id="rightImg" alt="Sağ kitab səhifəsi" draggable={false} />
                      <small className="folio" id="rightFolio" />
                    </div>
                    <span className="midline" />
                    <div className="turn-leaf" id="desktopLeaf" hidden>
                      <div className="face front"><img id="leafFrontImg" alt="" draggable={false} /></div>
                      <div className="face back"><img id="leafBackImg" alt="" draggable={false} /></div>
                    </div>
                  </div>
                  <div className="cover-stand" id="coverStand" role="button" tabIndex={0} aria-label="Kitabı aç">
                    <div className="closed-book">
                      <img id="coverImg" src={FRONT_SRC} alt="VR Standartları 2026 kitabının təsdiqlənmiş ön üz qabığı" draggable={false} loading="lazy" />
                    </div>
                  </div>
                </div>
              </section>
              <section className="mobile-scene" aria-label="Mobil cihaz üçün tək səhifəli kitab">
                <div className="mobile-book" id="mobileBook" role="button" tabIndex={0} aria-label="Növbəti səhifəyə keç">
                  <div className="mobile-body">
                    <img id="mobileImg" alt="Kitabın hazırkı səhifəsi" src={FRONT_SRC} draggable={false} loading="lazy" />
                    <div className="mobile-turn" id="mobileLeaf" hidden>
                      <div className="face front"><img id="mobileFront" alt="" draggable={false} /></div>
                      <div className="face back"><img id="mobileBack" alt="" draggable={false} /></div>
                    </div>
                    <span className="mobile-spine" />
                  </div>
                </div>
              </section>
            </div>
            <section className="under-controls" aria-label="Səhifə seçimi">
              <form className="pagejump" id="jumpForm">
                <label htmlFor="jumpTo">PDF səhifə:</label>
                <input type="number" id="jumpTo" min={1} max={889} placeholder="1–889" required inputMode="numeric" />
                <button className="btn gold go" type="submit">Keç</button>
              </form>
              <input type="range" className="pagerange" id="progressSlider" aria-label="İstənilən səhifəyə keç" min={1} max={889} step={1} defaultValue={1} />
              <span className="tag" id="progressPct">0%</span>
            </section>
            <section className="chapter-bar">
              <label htmlFor="chapters">Mündəricatdan keçid:</label>
              <select id="chapters" aria-label="Kitabın əsas bölmələrini seçin" defaultValue="">
                <option value="">Bölmə seçin…</option>
                {CHAPTERS.map(([page, title]) => (
                  <option key={page} value={page}>{`${page} — ${title}`}</option>
                ))}
              </select>
            </section>
            <p className="detail">Kompüterdə kitab iki səhifə, telefonda bir səhifə ilə açılır. Düymələr, klaviaturanın ← → oxları və mobil sürüşdürmə ilə vərəqləyin.</p>
          </div>
          <footer className="site-footer">© 2026 Vəliyev Muxtar Seyfəddin oğlu · PRINT-001/R14 · Ön və arxa üz: FINAL / TOXUNULMAZ. Bel: SINAQ. Bu, interaktiv baxış versiyasıdır; çap təsdiqi deyil.</footer>
        </div>
      </div>

      <div className="modal" id="zoomModal" hidden role="dialog" aria-modal="true" aria-label="Səhifəni böyük göstər">
        <div className="modal-bar">
          <strong id="zoomStatus">Səhifə</strong>
          <div className="modal-actions">
            <button className="btn" id="zoomMinus" type="button" aria-label="Kiçilt">−</button>
            <button className="btn" id="zoomPlus" type="button" aria-label="Böyüt">+</button>
            <button className="btn" id="zoomPrev" type="button">←</button>
            <button className="btn" id="zoomNext" type="button">→</button>
            <button className="btn gold" id="zoomClose" type="button">Bağla ×</button>
          </div>
        </div>
        <div className="modal-scroller" id="zoomScroller">
          <img id="zoomImg" className="zoom-img" alt="Kitab səhifəsinin böyüdülmüş görüntüsü" />
        </div>
      </div>
      <div className="modal" id="searchModal" hidden role="dialog" aria-modal="true" aria-label="Bütün kitabda mətn axtarışı">
        <div className="search-panel">
          <div className="search-head">
            <h2>889 səhifə üzrə axtarış</h2>
            <button className="btn" id="searchClose" type="button">Bağla ×</button>
          </div>
          <form className="search-line" id="searchForm">
            <input id="searchInput" type="search" autoComplete="off" placeholder="Məsələn: antropometriya, işıq açarı, audit" aria-label="Kitabda mətn axtar" />
            <button type="submit" className="btn gold">Axtar</button>
          </form>
          <div className="search-summary" id="searchSummary">Kitabın bütün 889 səhifəsinin mətnində axtarış aparılır.</div>
          <div className="search-results" id="searchResults" aria-live="polite" />
        </div>
      </div>
    </div>
  );
}
