<!-- @wbx-modified ClaudeOpus4.6·b26a | 2026-03-07 | Revival doc — SA 6-tab redesign session handoff | prev: new -->
# 🔁 REVIVAL — SmartAdvisor 6-Tab Panel Redesign

> **Revival keyword:** `REVIVAL-SA-TABS`
> Paste that one phrase into a new chat after reboot. Your successor will find this file,
> read it, and know exactly where to pick up.

---

## 0. Successor Onboarding Checklist

**You are continuing a multi-session project. Before doing ANYTHING else:**

1. **Handshake** — Run `node scripts/agent-ping.js --new` and echo the ACK.
2. **Read rules** — `.github/copilot-instructions.md` (272 lines). Non-negotiable.
3. **Preflight** — Run `node scripts/preflight.js` before any code edit.
4. **Read this file end-to-end** — It contains everything you need.
5. **Read the diary** — `ClaudeOpus4.6.md` (≤150 lines). The SA session log near the bottom is your most recent context.
6. **Fingerprint yourself** — After handshake, note your agent ID (from the ACK). All files you touch must be branded: `node scripts/brand-check.js stamp <file> "<reason>"`.
7. **Understand the rules**: Edit in `working/` first. Copy to root for testing. Brand after editing. Test visually. Never touch `upload/`. Never delete files — archive instead. Max 3 terminals. Tiny changes, tested individually.

---

## 1. What Was Built (The Big Picture)

The existing SmartAdvisor sidebar panel in the URLA Workbook was a **flat scrolling panel** — all content in one long column. The user (Steve) wanted it redesigned as a **6-tab layout** so each functional area gets its own tab:

| Tab # | Name | Purpose |
|-------|------|---------|
| 1 | **Work** | Active tasks, milestones, pipeline status |
| 2 | **Fields** | Field-level intelligence, data quality, missing fields |
| 3 | **Risk** | Risk scoring, compliance flags, QC alerts |
| 4 | **Docs** | Document tracking, eFolder integration |
| 5 | **AI** | AI chat, scenario analysis, recommendations |
| 6 | **Team** | Role selector, assignments, collaboration |

Additional UI elements preserved/added:
- **Calc strip** — 4 mini-calculators: Credit Score, Housing Ratio, DTI, LTV
- **Thought bubble** — Toggles on brain-icon click, explains what SA does
- **Role selector** — Dropdown to switch between LO/Processor/UW/Closer/Mgr
- **Scenario selector** — Dropdown for what-if analysis
- **Bottom toolbar** — Mode badge + toggle buttons (moved from old position)

---

## 2. File Inventory (Every File Touched or Created)

### Modified Files (all branded `·b26a`)

| File | Location | Size | Lines | What Changed |
|------|----------|------|-------|-------------|
| `smart-advisor-panel.html` | `CurrentVersions/` | 22,762b | 442 | **Complete rewrite** — v4.0 tabbed layout. 6 `.sa-tab-btn` in `#saTabBar`. 6 `.sa-tab-content` divs in `#saBody`. 155 div opens = 155 closes. All existing DOM IDs preserved. |
| `smart-advisor-panel.html` | `CurrentVersions/working/` | 22,762b | 442 | Identical copy (edit here first) |
| `smart-advisor.css` | `CurrentVersions/` | 62,477b | 2,190 | **~65 lines appended** at end: `.sa-tab-bar`, `.sa-tab-btn` (flex, orange active, 2px border-bottom indicator), `.sa-tab-content` (display:none / `.active` display:block), `.sa-bottom-toolbar`. Dark-mode variants included. |
| `smart-advisor.css` | `CurrentVersions/working/` | 62,477b | 2,190 | Identical copy |
| `smart-advisor-live.js` | `CurrentVersions/` | 406,997b | 8,642 | **`_wireTabBar()` added** at line ~8369. Called from `cacheDOMRefs()` at line ~1547. Click handlers toggle `.active` on buttons + panels. Console log confirms wiring. |
| `smart-advisor-live.js` | `CurrentVersions/working/` | 406,997b | 8,642 | Identical copy |

### Created Files

| File | Location | Size | Lines | Purpose |
|------|----------|------|-------|---------|
| `sa-redesign-mockup.html` | `c:\Dev\` (workspace root) | ~65KB | 1,423 | **Standalone reference mockup**. Self-contained HTML+CSS+JS. All 6 tabs functional. User confirmed 100% complete. This is the DESIGN REFERENCE — the target look-and-feel. |
| `REVIVAL-SA-TABS.md` | `CurrentVersions/` | this file | — | Session handoff document |

### Archived Files (originals before rewrite)

| File | Archive Location | Original Size |
|------|-----------------|---------------|
| `smart-advisor-panel.html` | `ARCHIVES/smartadvisor-panel-pre-tabs-20260306/` | 19,533b |
| `smart-advisor-live.js` | `ARCHIVES/smartadvisor-panel-pre-tabs-20260306/` | 405,583b |
| `smart-advisor.css` | `ARCHIVES/smartadvisor-panel-pre-tabs-20260306/` | 60,547b |

**Full revert**: Copy all 3 files from the archive back to `CurrentVersions/` root.

### NOT Modified (host pages — important context)

| File | Role |
|------|------|
| `URLA_Workbook.html` | Host page. Line ~53 loads CSS with `?v=20260306d`. |
| `URLA_Workbook.js` | Lines 3633-3700: `initSmartAdvisor()` fetches `./smart-advisor-panel.html`, strips `<script>` tags, injects HTML into `#smart-advisor-host`, dynamically loads `smart-advisor-live.js`, calls `SmartAdvisorLive.init(sidebar)`. |

---

## 3. How the Panel Loads (Critical Architecture)

```
URLA_Workbook.html
  └─ URLA_Workbook.js :: initSmartAdvisor()
       ├─ fetch('./smart-advisor-panel.html')
       ├─ Strip <script> tags from response
       ├─ Inject HTML into #smart-advisor-host
       ├─ Dynamically create <script src="smart-advisor-live.js">
       └─ On script load → SmartAdvisorLive.init(sidebar)
            └─ cacheDOMRefs()
                 ├─ Binds 40+ DOM IDs
                 ├─ _wireActionButtons()
                 └─ _wireTabBar()  ← NEW (line ~1547)
                      └─ Queries #saTabBar → .sa-tab-btn click handlers
                           └─ Toggle .active on buttons + .sa-tab-content panels
```

**Key insight**: The panel HTML is fetched and injected into the workbook DOM. It does NOT run as a standalone page. The CSS is loaded by the host page (`smart-advisor.css` via `<link>` tag). The JS is loaded dynamically after HTML injection. This is the same pattern used by `StatusPanel.html`.

---

## 4. How the Tab System Works

### HTML Structure (smart-advisor-panel.html)
```html
<div id="smartAdvisorSidebar" class="sa-sidebar nsp-flyout-panel">
  <!-- header, thought bubble, doc links, calc strip -->
  
  <div class="sa-tab-bar" id="saTabBar">
    <button class="sa-tab-btn active" data-tab="work">Work</button>
    <button class="sa-tab-btn" data-tab="fields">Fields</button>
    <button class="sa-tab-btn" data-tab="risk">Risk</button>
    <button class="sa-tab-btn" data-tab="docs">Docs</button>
    <button class="sa-tab-btn" data-tab="ai">AI</button>
    <button class="sa-tab-btn" data-tab="team">Team</button>
  </div>
  
  <div id="saBody">
    <!-- 4 diagnostic overlays preserved -->
    <div class="sa-tab-content active" data-tab="work">...</div>
    <div class="sa-tab-content" data-tab="fields">...</div>
    <div class="sa-tab-content" data-tab="risk">...</div>
    <div class="sa-tab-content" data-tab="docs">...</div>
    <div class="sa-tab-content" data-tab="ai">...</div>
    <div class="sa-tab-content" data-tab="team">...</div>
  </div>
  
  <!-- bottom toolbar -->
</div>
```

### CSS (smart-advisor.css, lines ~2125-2190)
- `.sa-tab-bar` — flexbox row, border-bottom, subtle background
- `.sa-tab-btn` — flex:1, orange on hover/active, 2px border-bottom indicator
- `.sa-tab-content` — `display:none` default, `display:block` when `.active`
- Dark-mode variants included

### JS (smart-advisor-live.js, lines ~8365-8399)
- `_wireTabBar()` — queries `#saTabBar`, iterates `.sa-tab-btn`, adds click handlers
- On click: removes `.active` from all buttons + all `.sa-tab-content`, adds `.active` to clicked button + matching panel
- Console log: `[SmartAdvisor] Tab bar wired: 6 tabs` on init, `[SmartAdvisor] Switched to tab: <name>` on click
- Called from `cacheDOMRefs()` at line ~1547

---

## 5. Current Status: WORK IN PROGRESS

### What Works
- ✅ Mockup complete and user-approved (standalone reference)
- ✅ Archive created with 3 original files
- ✅ Panel HTML rewritten with 6-tab structure
- ✅ Tab CSS added to stylesheet
- ✅ `_wireTabBar()` wired and called from `cacheDOMRefs()`
- ✅ All files branded with `·b26a`
- ✅ Files synced from `working/` to root `CurrentVersions/`
- ✅ Tabs ARE rendering visually in the workbook (confirmed)
- ✅ Work tab shows as active on load
- ✅ Calc strip visible, bottom toolbar visible

### What Needs Debugging
- ⚠️ **User reported "I'M NOT SEEING IT"** — tabs visible but tab SWITCHING may not work on click
- Possible causes:
  1. **Browser cache** — cache-bust is `?v=20260306d` on the CSS. JS is loaded dynamically (no cache-bust param on it). May need bumping or hard refresh.
  2. **`_wireTabBar()` timing** — may fire before DOM injection is complete. Check browser console for `[SmartAdvisor] Tab bar wired: 6 tabs` log.
  3. **`_host` scope** — `_wireTabBar()` uses `_host` (the sidebar container) to scope queries. If `_host` isn't set when `cacheDOMRefs()` runs, queries return null.
  4. **CSS specificity** — `.sa-tab-content.active { display:block }` might be overridden by another rule.

### Debugging Steps (for successor)
1. Open workbook: `http://localhost:9879/CurrentVersions/URLA_Workbook.html`
2. Open browser DevTools → Console
3. Look for: `[SmartAdvisor] Tab bar wired: 6 tabs` — if missing, `_wireTabBar()` didn't run
4. Look for: `[SmartAdvisor] Switched to tab: fields` (etc.) when clicking tabs — if missing, click handlers not attached
5. If no console logs: check `_host` value at the time `cacheDOMRefs()` runs
6. If cache issue: bump `?v=20260306d` to `?v=20260306e` in URLA_Workbook.html line ~53 AND URLA_Workbook.js line ~3641
7. Try hard refresh: Ctrl+Shift+R in browser

---

## 6. The Replacement Plan (How Mockup → Production)

```
Phase 1: ✅ DONE — Build standalone mockup (sa-redesign-mockup.html)
Phase 2: ✅ DONE — Archive originals, rewrite panel HTML/CSS/JS
Phase 3: 🔄 IN PROGRESS — Debug tab switching in workbook context
Phase 4: ⬜ TODO — Port fixes to upload/ for production staging
Phase 5: ⬜ TODO — Deploy to Azure SWA (production)
Phase 6: ⬜ TODO — Verify in Encompass Web (real loan data)
```

The mockup (`sa-redesign-mockup.html`) is the **design source of truth**. It has all the visual polish, interactions, and content. The actual panel files (`smart-advisor-panel.html`, `.css`, `.js`) are adapted from the mockup to fit the workbook's injection architecture.

**Key difference**: The mockup is self-contained (inline CSS+JS). The panel files split across 3 files because the workbook loads them separately (HTML fetched, CSS via `<link>`, JS dynamically loaded).

---

## 7. Environment & Tools

| What | Value |
|------|-------|
| HTTP server | Port 9879, serves from `c:\Dev` |
| Workbook URL | `http://localhost:9879/CurrentVersions/URLA_Workbook.html` |
| Cache-bust | `?v=20260306d` (in HTML line ~53 and JS line ~3641) |
| Working dir | `CurrentVersions/working/` — edit here first |
| Root dir | `CurrentVersions/` — copy from working/ for testing |
| Upload dir | `CurrentVersions/upload/` — PRODUCTION STAGING, DO NOT TOUCH until Phase 4 |
| Diary | `ClaudeOpus4.6.md` (≤150 lines, enforced) |
| Rules | `.github/copilot-instructions.md` |
| Handshake | `node scripts/agent-ping.js --new` |
| Preflight | `node scripts/preflight.js` |
| Branding | `node scripts/brand-check.js stamp <file> "<reason>"` |

---

## 8. Agent Lineage

| Agent ID | Model | Session | Work Done |
|----------|-------|---------|-----------|
| `·b26a` | ClaudeOpus4.6 | 2026-03-06/07 | Built mockup, archived originals, rewrote panel to 6-tab layout, wired JS, branded all files, created this revival doc |
| *(successor)* | *(TBD)* | *(next session)* | Pick up at Phase 3 debugging — see Section 5 |

---

## 9. Rules Summary (Quick Reference for Successor)

1. **Handshake FIRST** — `node scripts/agent-ping.js --new`, echo ACK
2. **Preflight before code edits** — `node scripts/preflight.js`
3. **Edit in `working/` first** — then copy to root for testing
4. **Brand everything** — `node scripts/brand-check.js stamp <file> "<reason>"`
5. **Never touch `upload/`** — that's production staging
6. **Never delete files** — archive to `ARCHIVES/`
7. **Max 3 terminals** — kill when done
8. **Diary update after code changes** — `ClaudeOpus4.6.md`
9. **Test visually** — open workbook in browser, check DevTools console
10. **Tiny changes, tested individually** — one edit, verify, next edit

---

*Created by ClaudeOpus4.6·b26a | 2026-03-07 | For session continuity after reboot*
