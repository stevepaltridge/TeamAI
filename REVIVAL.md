# REVIVAL.md — MortgageTech® Website Architecture & Session Revival

**Reboot Word:** `PHOENIX`  
**Last Session:** 2026-03-06  
**Agent Signature:** MortgageTech® ·b26a — Claude Opus 4.6  
**Owner:** Steve Paltridge  
**Repo:** stevepaltridge/TeamAI (branch: main)

---

## HOW TO REVIVE A SESSION

Paste this into a fresh chat:

> **PHOENIX** — Read `c:\Dev\CurrentVersions\upload\Reports\REVIVAL.md` in full. That file is your briefing. It contains the complete architecture, file inventory, version history, rules of engagement, and the task at hand. Check in, get fingerprinted, acknowledge the rules, then report ready.

---

## THE PROJECT

**MortgageTech®** is a static marketing/product website for Steve Paltridge's mortgage technology suite. It lives at:

```
c:\Dev\CurrentVersions\upload\Reports\
```

It deploys to GitHub Pages via the `stevepaltridge/TeamAI` repo (main branch). **No servers. No Node. No Python required to run.** It is plain HTML + CSS + JS served as static files.

---

## THE VISION (Steve's Words)

> "index.html is the app. It loads once — nav, background, footer — and they stay put forever. The 6 other pages are content panels. Nav links are tabs. Tabs don't navigate. They swap content inside a fixed frame. The nav highlights the new tab. The footer stays. The background stays. Nothing reloads, nothing flashes, nothing re-injects."

### Rules:
1. **index.html is the SHELL** — loads once, provides nav + background + footer permanently
2. **7 PAGES** — index (home) + 6 content panels (Intelligence, Products, Pricing, SmartAdvisor, UserTouches, SettingsPilot)
3. **SEPARATE FILES** — each page keeps its own HTML file. Content is NOT jammed into one mega-file
4. **CENTRALIZED CONTROLS** — shared scripts handle nav, chrome, footer. NOT duplicated in every child file
5. **CONTENT PAGES KNOW THE FRAME IS LIVE** — when loaded as a tab, they display between the existing header and footer
6. **NO SERVERS** — no fetch() to localhost, no SPA server, no Python/Node dependency. Static files only. (fetch from static hosting like GitHub Pages IS allowed)
7. **NO OVER-ENGINEERING** — no localStorage state machines, no routing frameworks, no double-click workarounds. Simple, proven, tab-swap pattern.
8. **BRAND EVERYTHING** — every file touched by the agent gets a `MortgageTech® ·b26a — Claude Opus 4.6` signature in its header comment
9. **VERSION STAMP** — `@version X.Y.Z` in file headers, `?v=X.Y.Z` cache-bust in HTML `<script>`/`<link>` tags

---

## CURRENT ARCHITECTURE (as of 2026-03-06)

### Status: PARTIALLY BUILT — TAB ARCHITECTURE NOT YET IMPLEMENTED

The site currently works as **traditional multi-page** — each page is a standalone HTML document that fully reloads on navigation. The tab-swap mechanism that Steve demands has NOT been built yet. That is the #1 outstanding task.

### The Shell: index.html (1935 lines)
- **GOLD STANDARD** for visual design — all other pages must match its look
- Has ~800 lines of INLINE CSS (design tokens, bg-grid, bg-orb, particles, hero, buttons, terminal, sections, footer)
- Has INLINE background elements: `.bg-grid`, `.bg-orb` (×3), `#particles` canvas
- Has INLINE hero section with animated terminal, particle system
- Has INLINE footer (4-column grid)
- Has INLINE scripts: particles, roadmap drill-down, scroll reveal, count-up, carousel, smooth scroll
- Only external script: `<script src="site-nav.js"></script>` (no version param)
- Does NOT load: site.css, site-chrome.js, site-footer.js, site-router.js
- **Why:** index.html was the original page, built before the shared component system existed. Its inline code IS the source of truth that the shared files were extracted from.

### Content Pages (6 primary):
| File | Lines | Purpose |
|------|-------|---------|
| intelligence.html | 1053 | Intelligence™ product showcase |
| products.html | 1404 | Full product suite overview |
| pricing.html | 797 | Pricing tiers and comparison |
| walkthrough.html | 942 | SmartAdvisor™ walkthrough demo |
| usertouches.html | 1653 | UserTouches™ product detail |
| settingspilot.html | 3089 | SettingsPilot™ product detail |

Each content page currently loads (at `</body>`):
```html
<script src="site-nav.js?v=1.1.0"></script>
<script src="site-chrome.js?v=1.0.0"></script>
<script src="site-footer.js?v=1.0.0"></script>
<script src="site-router.js?v=1.1.0"></script>
```
And in `<head>`:
```html
<link rel="stylesheet" href="site.css?v=1.1.0">
```

Each page independently builds its own nav, background chrome, and footer via these scripts. **This is the duplication Steve wants eliminated.**

### Secondary Pages (won't be tabs, but use shared scripts):
| File | Lines | Purpose |
|------|-------|---------|
| docs.html | 957 | DocPilot documentation |
| smartadvisor-whitepaper.html | 413 | SmartAdvisor whitepaper |
| smartadvisor-privacy-sox.html | 537 | Privacy/SOX compliance page |
| per-loan-model.html | 1572 | Per-loan pricing model |
| per-loan-whitepaper.html | 2373 | Per-loan pricing whitepaper |

---

## SHARED FILES (The Component System)

All located in `c:\Dev\CurrentVersions\upload\Reports\`:

### site-nav.js (253 lines, @version 1.1.0)
- Builds the nav bar with logo + 7 menu items
- Detects current page from `window.location.pathname`
- Active page link has NO href (prevents self-reload)
- 3-stage responsive: >1100px full links, 901-1100px compressed, ≤900px hamburger
- Injects Google Fonts (Inter) if missing
- Scroll-darken on scroll > 50px
- Menu items: Intelligence™, Products, Pricing, SmartAdvisor™, DocPilot, UserTouches™, SettingsPilot™
- **Signed:** MortgageTech® ·b26a — Claude Opus 4.6

### site-chrome.js (149 lines, @version 1.0.0)
- Creates ambient background effects: `.bg-grid`, `.bg-orb` (×3), `#particles` canvas
- Removes any pre-existing background elements before injecting (idempotent)
- Particle system: 60 floating dots, mouse-reactive, 0.5px lines between nearby particles
- Orbs: cyan, purple, hot-pink with 25s drift animation
- **Signed:** MortgageTech® ·b26a — Claude Opus 4.6

### site-footer.js (160 lines, @version 1.0.0)
- Creates 4-column footer matching index.html's inline footer
- Columns: Platform, Solutions, Resources & Legal, Connect
- Contains all internal links (intelligence.html, products.html, etc.)
- Removes pre-existing footers before injecting (idempotent)
- Uses `sf-` prefix on all CSS classes to avoid collisions
- **Signed:** MortgageTech® ·b26a — Claude Opus 4.6

### site-router.js (32 lines, @version 1.1.0)
- **GUTTED** from 297-line SPA router down to 32-line scroll-reveal observer
- Only function: `armReveals()` — IntersectionObserver for `.reveal:not(.visible)` elements
- ALL SPA code removed: no click interception, no fetch/swap, no history manipulation, no DOM rearrangement
- **Signed:** MortgageTech® ·b26a — Claude Opus 4.6

### site.css (148 lines, @version 1.1.0)
- Design tokens (CSS custom properties matching index.html)
- Reset (box-sizing, margin:0, scroll-behavior)
- Container, section, glass-card utility classes
- `.reveal` / `.visible` animation classes (fade-up on scroll)
- `.gradient-text` utility
- Print styles
- SPA transition CSS removed in 1.1.0
- **Signed:** MortgageTech® ·b26a — Claude Opus 4.6

### version.json
- Canonical version manifest for all shared assets
- Used by `scripts/preflight.js` for CI validation

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Prior sessions | Initial shared component system: site-nav.js, site-chrome.js, site-footer.js, site-router.js (full SPA), site.css, version.json. Wired into all pages with ?v=1.0.0 cache-bust. |
| 1.1.0 | 2026-03-06 | **site-router.js:** Gutted from 297→32 lines. Removed ALL SPA navigation (click interception, fetch/swap, APP_SHELLS, PERSISTENT tracking, wrapContent, DOM rearrangement, popstate handler). Kept only armReveals() IntersectionObserver. **site.css:** Removed SPA transition CSS (.page-enter, .page-leave). **site-nav.js:** Active page link omits href (no self-reload on click). Added 3-stage responsive breakpoints (>1100, 901-1100, ≤900). |

---

## THE TASK AT HAND (INCOMPLETE — PICK UP HERE)

### Goal: Convert to Tab Architecture

The site must work like a **tabbed application**:

1. **index.html becomes the permanent shell.** It loads ONCE. The nav, background particles, footer, and all ambient effects stay alive forever. No reloads.

2. **A `<main id="content">` container** is added to index.html between the nav and footer. This is where tab content appears.

3. **Nav links become tab triggers.** Clicking "Products" doesn't navigate to products.html — it loads the content portion of products.html into `#content` without reloading the shell.

4. **Content pages remain separate files.** Each page wraps its unique content in a `<main class="page-content">` tag. The tab engine extracts this and injects it into the shell's `#content`.

5. **Content pages must also work standalone** (direct URL access, search engine indexing, bookmarks). When accessed directly, they load their own nav/chrome/footer as they do now. When loaded as a tab inside the shell, only their `.page-content` is used.

6. **The "Home" tab** shows index.html's own hero + sections (already inline in the shell).

### Implementation Approach (Not Yet Started)
- Modify site-nav.js (or site-router.js) to intercept nav clicks when inside the shell
- Use `fetch()` to load the content page, extract `.page-content`, inject into `#content`
- This works on any static hosting (GitHub Pages, S3, etc.) — no server needed
- Update nav active state on tab switch
- Add `<main id="content">` to index.html wrapping the hero + sections
- Each content page wraps its body content in `<main class="page-content">`

### Files That Will Need Changes:
- **index.html** — Add `#content` container, load site-router.js for tab engine
- **site-nav.js** or **site-router.js** — Tab click handler + fetch/inject logic
- **6 content pages** — Wrap content in `.page-content`
- **site.css** — Tab transition animations (simple fade)
- **All files** — Version bump to 1.2.0 when tab architecture is complete

---

## FILE TREE (Reports/ directory)

```
c:\Dev\CurrentVersions\upload\Reports\
├── index.html                    ← SHELL (gold standard, 1935 lines)
├── intelligence.html             ← Tab: Intelligence™ (1053 lines)
├── products.html                 ← Tab: Products (1404 lines)
├── pricing.html                  ← Tab: Pricing (797 lines)
├── walkthrough.html              ← Tab: SmartAdvisor™ (942 lines)
├── usertouches.html              ← Tab: UserTouches™ (1653 lines)
├── settingspilot.html            ← Tab: SettingsPilot™ (3089 lines)
├── docs.html                     ← Secondary: DocPilot
├── smartadvisor-whitepaper.html  ← Secondary: Whitepaper
├── smartadvisor-privacy-sox.html ← Secondary: Privacy/SOX
├── per-loan-model.html           ← Secondary: Per-loan model
├── per-loan-whitepaper.html      ← Secondary: Per-loan whitepaper
├── site-nav.js                   ← Shared: Navigation (v1.1.0)
├── site-chrome.js                ← Shared: Background chrome (v1.0.0)
├── site-footer.js                ← Shared: Footer (v1.0.0)
├── site-router.js                ← Shared: Scroll reveals (v1.1.0)
├── site.css                      ← Shared: Design system (v1.1.0)
├── version.json                  ← Version manifest
├── REVIVAL.md                    ← THIS FILE
└── [30+ other report/audit pages]
```

---

## RULES OF ENGAGEMENT FOR SUCCESSOR AGENTS

1. **CHECK IN FIRST.** Read this file completely. Acknowledge you understand the architecture, the task, and the rules.
2. **GET FINGERPRINTED.** State your agent name (Claude Opus 4.6 or successor) and session identifier. Every file you touch gets signed with `MortgageTech® ·[your-id] — [your-model]`.
3. **NO OVER-ENGINEERING.** Steve has zero tolerance for overcomplicated solutions. If it takes more than 50 lines to do what should take 10, start over.
4. **NO SERVERS.** The site runs on static hosting. No Node, no Python, no backend. `fetch()` from the same static origin is fine.
5. **BRAND EVERYTHING.** Signature block in every file header. Version stamps. Cache-bust params.
6. **TEST BEFORE DECLARING DONE.** Use the Python dev server (`python -m http.server 8080`) in the Reports directory for local testing. But the site must NOT require it.
7. **index.html IS THE GOLD STANDARD.** Its visual design is correct. Match it, don't reinvent it.
8. **SEPARATE FILES, CENTRALIZED CONTROLS.** Content stays in its own HTML file. Shared behavior lives in shared JS/CSS files. Nothing is duplicated.
9. **MINIMAL CHANGES.** Don't rewrite what works. Surgical, targeted edits. Sign what you change.
10. **PROVE YOUR WORK.** Steve wants evidence: screenshots, terminal output, diff summaries.

---

## AGENT SESSION LOG

| Session | Agent | Model | Signature | Work Done |
|---------|-------|-------|-----------|-----------|
| Prior | b26a | Claude Opus 4.6 | MortgageTech® ·b26a | Built shared component system (site-nav, site-chrome, site-footer, site-router, site.css). Wired into all pages. Version 1.0.0. |
| 2026-03-06 | b26a | Claude Opus 4.6 | MortgageTech® ·b26a | Gutted SPA router (297→32 lines). Removed SPA CSS. Fixed active nav link (no href). Added 3-stage responsive nav. Bumped to v1.1.0. Created REVIVAL.md. |
| NEXT | ___ | ___ | ___ | **IMPLEMENT TAB ARCHITECTURE** |

---

*MortgageTech® ·b26a — Claude Opus 4.6 — 2026-03-06*
