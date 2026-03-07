# REBOOT: SETTINGSPILOT-GENESIS

> **Trigger Word:** `SETTINGSPILOT-GENESIS`
> **Created by:** GitHub Copilot (Claude Opus 4.6) · Session 4 · Fingerprint `s4mt`
> **Purpose:** Complete context reconstruction document. A fresh AI instance reading this file can resume exactly where Session 4 left off.

---

## WHO YOU ARE

You are GitHub Copilot (Claude Opus 4.6), working with **Steve Paltridge** — sole developer and owner of MortgageTech. Steve builds Encompass mortgage lending tools. You have been his AI pair programmer across 4 sessions. Steve calls you by name and expects you to know the codebase intimately.

## WHERE YOU ARE

**Workspace:** `c:\Dev` (Windows)
**OS:** Windows with PowerShell (NO grep — use `Select-String`)

## THE PROJECT

MortgageTech is building:
1. **A cinematic product website** for tradeshow/sales demos — dark theme, animated, single-page
2. **SettingsPilot** — a settings extraction/management tool for Encompass (the mortgage platform by ICE/Ellie Mae)
3. **WorkbooksFX** — a web-based Encompass form rendering engine (separate workspace, massive codebase)
4. **TeamAI** — a 3-layer AI instruction system for the whole team

---

## CRITICAL FILE MAP

### Main Deliverables
| File | Lines | What It Is |
|------|-------|-----------|
| `c:\Dev\CurrentVersions\Reports\index.html` | ~1,966 | Cinematic MortgageTech product site. Single HTML, all CSS/JS inline. Dark theme. Has hero, products, roadmap cards with drill-down previews |
| `c:\Dev\CurrentVersions\Reports\settingspilot.html` | 1,311 | Interactive SettingsPilot prototype. Single HTML, all inline. Category tree + toggle board + VBS↔JS sandbox + environment diff + rule builder |
| `c:\Dev\CurrentVersions\Reports\dashboard.html` | ? | Admin dashboard with demo mode (SignalR removed, auto-starts demo) |
| `c:\Dev\CurrentVersions\Reports\privacy-sox.html` | ? | Compliance/privacy page with ICE/Encompass compliance section |
| `c:\Dev\CurrentVersions\Reports\SharePoint-Package/` | 10 files | Self-contained copy for SharePoint distribution (502 KB) |

### Logs & Diaries (YOUR signed work)
| File | What It Tracks |
|------|---------------|
| `c:\Dev\TeamAI\docs\project-session-summary.md` | Session-by-session work log (Sessions 1-4). This is the MortgageTech Reports/SettingsPilot project log |
| `c:\Dev\CurrentVersions\ClaudeOpus4.6.md` | Living diary — Knowledge/Success/Gotchas/Opinions + Session Log. Covers BOTH WorkbooksFX and MortgageTech Reports |
| `c:\Dev\CurrentVersions\ClaudeOpus4.6-overflow.md` | Rotated older sessions from ClaudeOpus4.6.md (1,633 lines of history) |
| `c:\Dev\CurrentVersions\claude.md` | Layer 3 personal workspace rules for WorkbooksFX. Read-only locks, tool list, terminal gotchas, Start Words |
| `c:\Dev\TeamAI\docs\team-onboarding.md` | Full team setup guide |
| `c:\Dev\TeamAI\README.md` | 3-layer AI instruction architecture |

### Knowledge Base
| Path | Contents |
|------|---------|
| `c:\Dev\TeamAI\knowledge\encompass-settings\` | 100+ files: 44+ xlsx sheet catalogs, ~40 cx- custom field files, business rules, triggers, milestones, documents, tasks, alerts, loan folders, system settings, custom forms, policy settings, service URLs, pipeline fields |
| `c:\Dev\TeamAI\knowledge\encompass-admin\` | Admin reference articles |
| `c:\Dev\TeamAI\knowledge\encompass-dev\` | 6 SDK articles |

---

## CSS DESIGN SYSTEM

All MortgageTech pages use these CSS custom properties:
```css
--brand-dark: #060a1a;      /* Deep navy background */
--brand-accent: #00d4ff;    /* Cyan — primary accent */
--brand-accent2: #7c3aed;   /* Violet — secondary accent */
--brand-hot: #ff6b35;       /* Orange — warnings/hot items */
--brand-green: #10b981;     /* Green — success/enabled */
--brand-gold: #f59e0b;      /* Gold — premium/highlight */
```
**Fonts:** Inter (body) + JetBrains Mono (code). Google Fonts CDN with system fallback.
**Style:** Dark cinematic. Glass-morphism cards (backdrop-filter: blur). Gradient borders. Smooth CSS transitions.

---

## SESSION HISTORY (Condensed)

### Session 1 — Initial Website Build
- Built the cinematic single-page `index.html` from scratch
- Hero section, products grid, roadmap, pricing, contact
- Fixed Live Server flashing issue
- Removed origin section per Steve's request
- Added ICE/Encompass compliance to privacy-sox.html

### Session 2 — TeamAI Onboarding + Plugin Review
- Set up TeamAI 3-layer instruction system
- Copilot Business org setup (mortgagetechteam GitHub org)
- Knowledge base integration with OneDrive/SharePoint
- Plugin code review (MTech2_MoveToFolderTriggerPlugin)
- Updated all onboarding guides

### Session 3 — Tradeshow Flyers + SharePoint Package `·0b2a`
- 3 print HTML flyers (`TeamAI/docs/Flyer-*.html`) + PDFs
- SharePoint-Package (10 files, 502 KB, self-contained)
- Dashboard modified for static deploy (SignalR removed, demo auto-starts)
- Demo mode: 14 users, 9 roles, 3s interval, LP-heavy bottleneck

### Session 4 (CURRENT) — Drill-Down Cards + SettingsPilot `·s4mt`
- **Drill-down preview panels** on all 4 roadmap cards (SettingsPilot, FormBuilder, ComplianceGuard, AutoDeploy)
  - Each card has "Preview Screens →" button → expand/collapse panel with screen mockups
  - `togglePreview(cardId)` JS handler, smooth CSS transitions
- **SettingsPilot architecture research**
  - 5 SDK managers: IBpmManager, IConfigurationManager, IFormManager, IServerManager, IAclGroupManager
  - 24 extraction categories from knowledge base
  - REST API 403 wall on admin writes → need local SDK agent
  - Proposed: Hybrid Agent Architecture (local SDK + cloud web UI + SignalR bridge)
  - Proposed: 4-panel "Settings IDE" (category tree, toggle board, inspector, sandbox)
- **settingspilot.html prototype** (1,311 lines) — CREATED AND VERIFIED
  - Top bar + breadcrumb + migration progress bar (67%)
  - Left sidebar category tree
  - Central toggle board with 18+ demo rules (status toggles, risk badges, VBS/Web indicators)
  - Inspector panel with visual WHEN/THEN/ELSE rule builder
  - VBS↔JS side-by-side sandbox with real Encompass rule syntax
  - Environment diff table (DEV/STAGE/PROD comparison)
  - Status bar with "← MortgageTech" back link
- **Link added** in index.html: SettingsPilot card preview → opens settingspilot.html

---

## WHAT WAS HAPPENING WHEN SESSION ENDED

Steve asked me to:
1. ✅ Update all logs and diaries with Session 4 progress
2. ✅ Build this reboot document
3. ✅ Choose a trigger word → `SETTINGSPILOT-GENESIS`

**The work itself was COMPLETE.** All drill-down cards working, settingspilot.html created and verified, link added. Steve was wrapping up the session and wanted everything documented for continuity.

---

## ENCOMPASS SDK DETAILS (for SettingsPilot context)

**The 403 Wall:** Encompass REST API (api.elliemae.com) returns HTTP 403 on admin config write endpoints even with full admin OAuth2 tokens. Only READ operations work via REST. WRITE operations require the desktop .NET SDK.

**5 Key SDK Managers:**
1. `IBpmManager` — Business rules, field triggers, input form sets
2. `IConfigurationManager` — Loan programs, templates, system settings, custom fields
3. `IFormManager` — Custom forms, print forms
4. `IServerManager` — Users, roles, organizations, personas, compensation plans
5. `IAclGroupManager` — Access control, field-level security, role permissions

**Extraction Categories** (from knowledge base — 100+ files covering):
- Loan Programs, Business Rules, Custom Fields (cx- prefixed)
- Field Triggers, Milestones, Document Tracking
- Tasks & Alerts, Loan Folders, System Settings
- Custom Input Forms, Policy Settings, Service URLs
- Pipeline View Fields, Coverage Manifest, Condition Sets
- Stacking Templates, and more (44+ xlsx sheet catalogs)

**Hybrid Agent Architecture (proposed):**
```
[Browser: Settings IDE]  ←SignalR→  [Azure Function Hub]  ←gRPC→  [Local SDK Agent on Encompass server]
     Web UI (React)                   Cloud orchestrator              .NET desktop SDK (reads AND writes)
```

---

## AZURE SWA DEPLOYMENT

- **URL:** `https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/`
- **Method:** `swa deploy` from `CurrentVersions/` directory
- **Status:** READ-ONLY — local changes require explicit deploy
- **API:** Azure Functions in `CurrentVersions/api/` (Node.js 18)
- **Flags:** `--api-language node --api-version 18` or API functions 404 silently

---

## GOTCHAS & HARD-WON KNOWLEDGE

1. **NO grep on Windows** — Use `Select-String -Pattern "x" -Path file.txt` with `-Recurse` for recursive
2. **REST API 403** — Don't waste time trying admin writes via REST. SDK-only.
3. **settingspilot.html is mock data** — No real Encompass connection. Demo purposes.
4. **index.html is monolithic** (~1,966 lines) — All CSS/JS inline. Be surgical with edits.
5. **Cache keys matter** — WorkbooksFX uses `?v=` cache busting. Bump after any CSS/JS deploy.
6. **SharePoint HTML rendering** — May need admin to enable "Open in browser" for HTML files
7. **ClaudeOpus4.6.md has a diary-timer.js gate** — In the WorkbooksFX context, it enforces diary updates after code changes
8. **Session fingerprints** — Each session gets a 4-char hex ID suffixed with `·{id}`. Session 4 = `·s4mt`
9. **Steve is sole dev** — Refer by name. He expects you to know the codebase.
10. **Azure SWA fallback** — `navigationFallback.rewrite` can cause invisible 200 responses for missing files (SWA returns the fallback page). Validate response CONTENT, not just status code.

---

## WHAT TO DO WHEN REBOOTED

When Steve says `SETTINGSPILOT-GENESIS`:

1. **Read this file** (`c:\Dev\TeamAI\docs\REBOOT-SETTINGSPILOT-GENESIS.md`)
2. **Read the living diary** (`c:\Dev\CurrentVersions\ClaudeOpus4.6.md`) — latest session log at the bottom
3. **Read the session summary** (`c:\Dev\TeamAI\docs\project-session-summary.md`) — Session 4 entry
4. **Scan index.html** and **settingspilot.html** to re-familiarize with current code state
5. **Ask Steve:** "I'm back from SETTINGSPILOT-GENESIS. Session 4 left off with the SettingsPilot prototype complete and all drill-down cards working. What's next?"

---

## LIKELY NEXT STEPS (Steve hasn't confirmed)

- Deploy updated site to Azure SWA (`swa deploy`)
- Build out SettingsPilot further — connect to real data, start the local SDK agent
- Email-compatible HTML flyer versions (table-based, 600px, inline styles) — deferred from Session 3
- More product pages or refinements to existing ones
- WorkbooksFX overlap filter work (Start Word: `overlap filter` in claude.md)

---

*Signed: GitHub Copilot (Claude Opus 4.6) · Session `s4mt` · SETTINGSPILOT-GENESIS*
