# VR Global Group

One-page marketing site for **VR Global Group**, built around the book and methodology
**“VR Standartları 2026”** by Muxtar Ərturan. The site is in Azerbaijani.

- Live: https://vr-project-umber.vercel.app
- Every push to `master` auto-deploys to Vercel. There is no staging branch.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack, `src/`, `@/*` alias) |
| UI | React 19, TypeScript |
| Styles | **CSS Modules** — no Tailwind, no UI library |
| Fonts | `next/font/google` — Exo 2 (`--font-display`) for headings and UI, Raleway (`--font-raleway`) for body. Both with the `latin` + `latin-ext` subsets, which is what Azerbaijani needs |
| Video | HLS via `hls.js`, native HLS in Safari |

Frontend only. No backend, no API routes, no database.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build
npm start            # serve the build
npm run lint         # eslint
```

## Layout

```
src/
  app/
    layout.tsx       fonts, metadata, OpenGraph, Twitter card
    page.tsx         section order for the whole page
    globals.css      reset, --bar-height, .sr-only
    robots.ts        /robots.txt
    sitemap.ts       /sitemap.xml
  components/        one .tsx + one .module.css per section
  content/           all copy, as typed objects
public/
  stream/            the hero clip as HLS (init.mp4 + s000…s032.m4s)
  images/            photos, partner logos, social marks
```

Section order lives in `src/app/page.tsx`:

`Header` → `HeroSlider` → `QuoteBanner` → `SideNavShowcase` → `AdaptiveCalc` →
`ProgressStats` → `Services` → `PartnerStrip` → `PercentBand` → `Contacts`

## Where the text lives

**Never type copy into a component.** Everything sits in `src/content/`:

| File | Holds |
|---|---|
| `hero.ts` | `heroVideo` (HLS path, poster), `heroCues` — 16 timed blocks, `heroSocial` |
| `quote.ts` | the motto banner and its author |
| `sidenav.ts` | `intro` (the clickable heading) + `links` (8 menu items), each with typed body blocks |
| `services.ts` | `services` — eyebrow, heading, intro, 7 cards, 4 counters — and `countersHeading` |
| `progress.ts` | `progressHeading` + 8 style dials with their percentages |
| `partners.ts` | `partnersHeading` + the logo strip |
| `navigation.ts` | `mainNav` — 8 navbar items and their anchors |

Body blocks in `sidenav.ts` are typed: `p`, `flow`, `quote`, `author`. The component
picks the class from the `kind`, so a new paragraph needs no CSS.

## The hero

A muted, looping background clip with text driven by the playhead.

- The clip is served as **HLS** from `public/stream/`, not as one MP4, so the file
  cannot be pulled out of DevTools in one piece and only the watched seconds download.
- Safari plays HLS natively; everywhere else `hls.js` is loaded through a dynamic
  `import()`, so it stays out of the initial bundle.
- `next.config.ts` sets the content types for `.m3u8` and `.m4s`. **Safari refuses the
  stream without them** — do not remove that block.
- Text swaps on `timeupdate` only. There are deliberately no arrows or bullets: the
  slide cannot be changed by hand. Entry and exit animations mirror each other.
- Each cue has `from` / `to` in seconds. A dev-only check at the bottom of `hero.ts`
  warns in the console about gaps, overlaps and a wrong order.
- The clip pauses when the section scrolls out of view.

The 47 MB master is kept **outside the repo** at `Downloads/vr-video-backup/hero-original.mp4`,
and `public/video/` is gitignored. To re-cut the stream:

```bash
ffmpeg -i hero-original.mp4 -c copy \
  -f hls -hls_time 6 -hls_playlist_type vod \
  -hls_segment_type fmp4 -hls_fmp4_init_filename init.mp4 \
  -hls_segment_filename 's%03d.m4s' hero.m3u8
```

Re-cutting moves every boundary, so the `from` / `to` values in `hero.ts` have to be
checked again afterwards.

> **Never commit video or other large binaries.** History was already rewritten once,
> on 2026-09-16, to strip ~94 MB of them (`.git` went from 135 MB to 47 MB). The old
> history is backed up at `Downloads/vrproject-backup-20260916.bundle`.

## The showcase menu

`SideNavShowcase` has a dark sidebar with a heading and eight topics. **The heading
itself is a button** — `sideNav.intro` — and opens its own panel, sharing one open slot
with the list, so only one panel is ever visible. Both the heading and the list render
through the same `Panel` component. On desktop the panel slides out over the photo; at
991px and below it expands in the flow, right under whatever was clicked.

## The header

One burger menu for every screen. The same panel (`aside.sidePanel`, 400px wide,
`max-width: 100vw`, so it fills a phone) is opened by both the desktop and the mobile
bar button. Opening it locks the page scroll and hands the scrollbar width back as
padding, so nothing on the page shifts.

Navbar links do not use the `#hash`: `handleNavClick` scrolls by hand and keeps the
address bar on `/`, because a leftover hash pulled the page back down on reload. A tall
section stops just under the bar, a short one is centred on the screen.

## Assets

Partner logos in `public/images/partners/` are **white silhouettes with an alpha
channel**, shown at `opacity: .55` and full on hover — that is how the original theme
does grey-to-white. If you add one, match that: decide whether the artwork is dark ink
on a light background (alpha = 1 − luminance) or light ink on a coloured block
(alpha = luminance), apply a contrast curve, paint every pixel white and trim to the
alpha bounding box. Vector originals are always better if the client can supply them.

The strip is a pure CSS marquee: the list is rendered twice and the track slides
`-50%`. It pauses on hover and stops entirely under `prefers-reduced-motion`.

## Environment

| Variable | Default | Used for |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://vr-project-umber.vercel.app` | `metadataBase`, canonical, OpenGraph, `robots.txt`, `sitemap.xml` |

Set it once a real domain is in place, otherwise every absolute URL points at the
preview deployment.

## Not finished yet

- **`AdaptiveCalc` (`#kalkulyator`)** — an empty white section holding the slot. The
  old quiz was deleted; the real formula has to come from the client.
- **`Contacts` (`#kontaktlar`)** — an empty black section. The navbar already links to it.
- **AZ / EN / RU** — the switch only sets local state; there are no translations and no
  locale routing.
- **Search** — the form calls `preventDefault()` and does nothing.
- `sideNav.ctaHref` is `"#"`.
- `public/images/image1-home1.jpeg`, `showcase-1.jpg`, `showcase-2.jpg` and
  `bg-left-menu.jpg` come from a commercial theme and are **not licensed for
  production**. Replace them before launch.

## Known performance costs

Measured on 2026-09-19:

- The hero clip is **47.4 MB over 198 s in a single rendition**, 2.01 Mbit/s average and
  3.91 Mbit/s peak. On a throttled phone at 4 Mbit/s it stalls. `capLevelToPlayerSize`
  is set but has nothing to choose from — there is no variant ladder yet.
- `hls.js` ships the full build, 563 KB raw / 173 KB gzip. The clip is muted with no
  captions and no DRM, so `hls.js/dist/hls.light.mjs` would do at roughly half that.
- Files under `public/images/` are served `Cache-Control: public, max-age=0`, so the
  logos revalidate on every visit. `next.config.ts` only sets cache headers for `/stream`.

For reference, the same run measured CLS 0, LCP ~264 ms locally, 545 DOM nodes and no
console errors.

## Verifying a change

Measure, do not eyeball.

1. `npm run build && npm start`
2. Drive the page with a headless browser and check the real numbers: `scrollWidth` at
   1920 / 1440 / 1366 / 1024 / 768 / 375, and **also at short heights around 420px**,
   where fixed `100vh` sections used to clip their content.
3. `globals.css` sets `overflow-x: hidden` on `html, body`. It hides the off-canvas
   panel — but it will also swallow a genuine overflow bug, so lift it before trusting
   an overflow measurement.
4. `next start` caches optimised images. Delete `.next/cache/images` before re-checking
   a changed image.

New sections are built from the original Elementor markup of the Theratio theme
(`wpdemo.archiwp.com/theratio/`). Much of that theme is styled at runtime, so read the
**computed** styles from the demo rather than its stylesheet.
