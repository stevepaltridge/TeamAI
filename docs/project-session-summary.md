# MortgageTech TeamAI -- Project Session Summary

**Last Updated:** Session 4 (post Session 3)
**Session Lead:** Steve Paltridge
**Session Fingerprint:** `s4mt` (Session 4)

---

## Session History

### Session 4 -- Post-Session 3: Drill-Down Cards + SettingsPilot Prototype `·s4mt`

#### Completed

- **Drill-down preview panels on all 4 roadmap "Coming Soon" cards** -- Each card in the MortgageTech product site now has an expand/collapse panel showing screen previews of the upcoming product:
  - **SettingsPilot** -- Toggle Board with checkboxes, VBS→JS sandbox preview, environment diff table
  - **FormBuilder** -- Visual form designer canvas with drag-and-drop field palette and properties panel
  - **ComplianceGuard** -- Compliance monitoring dashboard with rule status indicators and audit timeline
  - **AutoDeploy** -- CI/CD pipeline visualization with environment promotion stages and deployment status
  - Each card has a styled "Preview Screens →" button that toggles the preview panel with smooth CSS transitions
  - JavaScript handler `togglePreview(cardId)` manages expand/collapse state
  - All previews use consistent CSS: `--brand-dark` backgrounds, `--brand-accent` (cyan) accents, `--brand-accent2` (violet) highlights

- **SettingsPilot architecture research** -- Deep investigation into what SettingsPilot could be:
  - Analyzed Encompass SDK: 5 internal managers (IBpmManager, IConfigurationManager, IFormManager, IServerManager, IAclGroupManager)
  - Cataloged 24 extraction categories from existing knowledge base (100+ files in `TeamAI/knowledge/encompass-settings/`)
  - Identified REST API 403 wall: admin write endpoints return 403 even with full admin tokens → SDK-only for writes
  - Proposed Hybrid Agent Architecture: local SDK agent + cloud web UI bridged via SignalR
  - Designed 4-panel "Settings IDE" layout: category tree, toggle board, inspector, sandbox

- **SettingsPilot interactive prototype** -- Created `settingspilot.html` (1,398 lines):
  - Top bar with breadcrumb navigation + migration progress bar (67% complete)
  - Left sidebar with category tree (Loan Programs, Business Rules, Custom Fields, etc.)
  - Central Toggle Board with 18+ demo rules, each with status toggle, risk badge, VBS/Web indicator
  - Inspector panel with visual WHEN/THEN/ELSE rule builder using styled chips
  - Sandbox panel with side-by-side VBS↔JS code comparison using real Encompass rule syntax
  - Environment diff table comparing DEV/STAGE/PROD settings
  - Status bar with back link to MortgageTech index.html
  - Full CSS design system matching brand: `--brand-dark: #060a1a`, `--brand-accent: #00d4ff`, `--brand-accent2: #7c3aed`
  - All interactive: clicking rules populates inspector, toggling switches, expandable sections

- **Linked SettingsPilot prototype from product site** -- Added "🚀 Launch SettingsPilot Prototype →" button in the SettingsPilot roadmap card preview panel, styled with gradient background, opens `settingspilot.html` in new tab

#### Successes

1. **Drill-down is reusable** -- The `togglePreview()` pattern and CSS classes work for any future card additions
2. **SettingsPilot prototype is self-contained** -- Single HTML file, all CSS/JS inline, no dependencies. Can be demoed anywhere
3. **Brand consistency maintained** -- All new UI uses the established CSS custom properties and design language
4. **settingspilot.html verified complete** -- Proper `</html>` closing tag, all sections render, interactive JS handlers functional
5. **Knowledge base depth** -- 100+ Encompass settings files in `TeamAI/knowledge/encompass-settings/` provide real data for future SettingsPilot development

#### Gotchas & Things to Know

1. **REST API 403 wall** -- Encompass REST API returns 403 on ALL admin write endpoints even with full admin OAuth tokens. This means SettingsPilot MUST use the desktop SDK (via local agent) for any write operations. Read operations work fine via REST.
2. **settingspilot.html is a PROTOTYPE** -- It shows mock data. No real Encompass connection. The Toggle Board rules are hard-coded demo data. The VBS code is static examples.
3. **Azure SWA is READ-ONLY** -- The deployed site at `https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/` requires `swa deploy` to update. Local file changes don't auto-deploy.
4. **index.html is ~2,067 lines** -- The main product site is a single monolithic HTML file with all CSS/JS inline. Edits require careful line targeting.

#### Files Created/Modified This Session

| File | Type | Location | Action |
|------|------|----------|--------|
| `settingspilot.html` | Interactive prototype | `CurrentVersions/Reports/` | Created (1,398 lines) |
| `index.html` | Product site | `CurrentVersions/Reports/` | Modified (drill-down panels + prototype link) |

---

### Session 3 -- March 3, 2026: Tradeshow Flyers + SharePoint Package `·0b2a`

#### Completed

- **3 print-ready tradeshow flyers** -- Full-page marketing HTML flyers with MortgageTech branding:
  - `docs/Flyer-Admin-On-Demand.html` (448 lines) -- Admin-On-Demand consulting service
  - `docs/Flyer-Encompass-Web-PowerUsers.html` (565 lines) -- Encompass Web Power Users training
  - `docs/Flyer-Encompass-Web-Migration.html` (560 lines) -- Encompass Web Migration services
  - All 3 PDFs generated (353-459 KB each)

- **SharePoint-ready product site package** -- Packaged 9 HTML pages into a self-contained folder for SharePoint distribution:
  - Location: `CurrentVersions/Reports/SharePoint-Package/` (10 files, 502 KB total)
  - Includes: dashboard, index, products, pricing, walkthrough, settingspilot, smartadvisor-whitepaper, smartadvisor-privacy-sox, tradeshow-flyer
  - All pages fully self-contained (inline CSS/JS/SVGs, zero local file dependencies)
  - README.md with deployment instructions included

- **Dashboard modified for static deployment** -- Removed live SignalR WebSocket dependency and replaced with auto-starting demo mode:
  - SignalR CDN `<script>` tag removed entirely
  - `signalR.HubConnectionBuilder()` code replaced with no-op stubs
  - Init logic changed: skip 10s wait + button click -> auto-launch `_stageDemoData()` + `enableDemoMode()`
  - 14 simulated loan officers across 9 roles (FS/LA/LO/LP/UW/CL/PC/LD/UU)
  - Demo pre-seeds realistic bottleneck pattern (LP heavy ~38%)
  - Updates every 3 seconds, CSV export works client-side, all filters/tabs/charts functional
  - ~3.2s total load time to live dashboard

#### Successes

1. **Zero broken links** -- All nav pages use relative `href="page.html"` links; works perfectly when all files sit in the same SharePoint folder
2. **True zero-dependency** -- Every page confirmed to have all CSS, JS, and SVGs inline. No local image/font/CSS/JS file references. Only external CDN: Google Fonts Inter in `index.html` (graceful fallback to system fonts)
3. **Demo mode is indistinguishable from live** -- Same charts, same role badges, same bottleneck alerts, same CSV exports. Gear animation runs ~3.2s then dashboard populates automatically
4. **Original files untouched** -- All source files in `Reports/` remain unmodified. SharePoint-Package is a clean copy with only `dashboard.html` modified

#### Gotchas & Things to Know

1. **Google Fonts CDN in index.html** -- Requires internet access. If SharePoint is accessed from a locked-down network that blocks `fonts.googleapis.com`, the Inter font won't load, but it fails gracefully to system sans-serif
2. **SharePoint HTML rendering** -- SharePoint may render HTML files inside an iframe or prompt download depending on library settings. If pages prompt download instead of rendering, the SharePoint admin needs to enable "Open in browser" for HTML files in the document library settings
3. **Demo mode runs indefinitely** -- `setInterval(3000)` accumulates data over time. Not a problem for demos but the data arrays grow without bound in a long-running tab
4. **CSV export uses Blob URLs** -- `URL.createObjectURL()` works in modern browsers but may be restricted in some enterprise environments with strict CSP policies
5. **No back-end** -- The dashboard's "Settings" and "Filters" that reference server-side features (role management, Encompass connection) are visual only in demo mode
6. **Email HTML flyers not yet created** -- Print flyers were completed and PDFs generated, but the email-compatible HTML versions (table-based layout, inline styles, 600px width) have not been started yet

#### Files Created This Session

| File | Type | Location |
|------|------|----------|
| `Flyer-Admin-On-Demand.html` | Print flyer | `TeamAI/docs/` |
| `Flyer-Admin-On-Demand.pdf` | PDF | `TeamAI/docs/` |
| `Flyer-Encompass-Web-PowerUsers.html` | Print flyer | `TeamAI/docs/` |
| `Flyer-Encompass-Web-PowerUsers.pdf` | PDF | `TeamAI/docs/` |
| `Flyer-Encompass-Web-Migration.html` | Print flyer | `TeamAI/docs/` |
| `Flyer-Encompass-Web-Migration.pdf` | PDF | `TeamAI/docs/` |
| `SharePoint-Package/` (10 files) | Site package | `CurrentVersions/Reports/` |

---

### Session 2 -- March 2, 2026: TeamAI Onboarding + Plugin Review

- **TeamAI onboarding:** Finalized and distributed onboarding docs for all MortgageTech team members, including setup steps for VS Code, Copilot, Azure DevOps, and OneDrive/SharePoint knowledge access.
- **Copilot Business org setup:** Created and configured the mortgagetechteam GitHub organization for centralized Copilot licensing and seat management.
- **Knowledge base integration:** Ensured the EncompassFX OneDrive folder is shared and indexed for Graph Search, enabling AI-powered answers from 12,700+ docs and company resources.
- **Loan folder automation troubleshooting:** Investigated and documented best practices for Encompass loan folder move rules, including plugin logic for CX.MTECH.FOLDER.CURRENT and workflow exclusions for test/employee loans.
- **Plugin code review:** Located the MTech2_MoveToFolderTriggerPlugin, attempted code access, and outlined steps for code verification and troubleshooting.
- **Documentation and logs:** Updated all onboarding guides, README, Layer 1 instructions, and living diary (ClaudeOpus4.6.md) to reflect current architecture, process, and team membership.

---

## Key Links

- Azure DevOps repo: https://dev.azure.com/MtgTechTeam/TeamAI/_git/CopilotInstructions
- GitHub org: https://github.com/orgs/mortgagetechteam
- EncompassFX knowledge folder: https://mortgagetech0-my.sharepoint.com/personal/steve_mortgagetech_com/Documents/EncompassFX
- Plugin ZIP: MTech2_MoveToFolderTriggerPlugin.zip (local and SharePoint)
- SharePoint Package: `CurrentVersions/Reports/SharePoint-Package/` (ready to upload)

## Next Steps

- Create email-compatible HTML versions of the 3 tradeshow flyers (table-based layout, 600px max width, all inline styles)
- Verify plugin code for CX.MTECH.FOLDER.CURRENT logic
- Ensure all team members have Copilot Business seats
- Test SharePoint package in target SharePoint environment
- Continue updating documentation as needed

---

**Keyword for session continuity:**

`SETTINGSPILOT-GENESIS`

Use this keyword after reboot to resume this project session and context instantly.
Previous keywords: `TEAMAI-REBOOT-2026` (Session 3)
