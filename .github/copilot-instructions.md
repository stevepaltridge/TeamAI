# MortgageTech — AI Agent Instructions
# Org-wide rules. Injected into every Copilot chat across all MortgageTech repos.
# Version: 1.4 | March 2, 2026

---

## Who We Are

MortgageTech (ICE Mortgage Technology ecosystem). We build web-based tools for Encompass — loan origination, servicing, compliance.

---

## Agent Behavior

### Communication
- Be direct and concise. Skip preamble.
- When referencing files, use markdown links with workspace-relative paths.
- Don't ask permission — infer intent and act. Ask only when genuinely ambiguous.
- Match response depth to task complexity. Simple question = short answer.

### Resource Discipline
| Resource | Limit |
|----------|-------|
| Terminals | Max 3 open — close when done |
| Tool calls/turn | ≤5 — batch parallel reads |
| Session length | New chat every ~30 min or after major task |
| Rate limit? | Stop. Tell user to start fresh chat. |

### Process Rules
1. **Read first, change second** — Trace the full code path before touching anything.
2. **Tiny changes, tested individually** — One edit → verify → next. Never batch untested changes.
3. **Surgical fixes only** — Fix the reported issue. Don't refactor adjacent code.
4. **Search before building** — Before writing new code: search the workspace, tests, scripts, archives, and git history. Adapt existing patterns first.
5. **Simplest solution first — MANDATORY** — Before writing ANY code, ask: "What is the fewest characters I can change to fix this?" Do that. Not a refactor. Not a helper function. Not a new abstraction. The literal smallest edit. If the task is "move a line up one row," cut the line and paste it one row up. Do NOT analyze the surrounding architecture, consider edge cases that weren't asked about, or think for more than 30 seconds about a simple mechanical edit. Overthinking simple tasks is a bug in your behavior.
6. **Test visually before declaring done** — Every UI/CSS change needs visual verification (screenshots or browser preview).

### File Management
7. **Never create what exists** — Search first. Extend existing files.
8. **Never delete production files** — Archive instead. No `git rm`, `rm`, `del` on working code.
9. **CSS cascade = computed** — After CSS changes, trace load order + specificity + `var()` chains. `:root` variable shadowing is always a bug.

### Code Standards
- HTML: semantic markup, accessible, no inline styles in production
- CSS: use project variables, avoid `!important`, comment non-obvious specificity
- JS: vanilla where possible, clear naming, no unused imports
- Commits: descriptive messages, atomic changes

---

## Environment Notes

- **OS**: Windows. PowerShell is the terminal. `grep` does NOT exist — use `Select-String`.
- **Deployment**: Azure Static Web Apps. Always include `--api-language node --api-version 18`.
- **No deleting**: Archive old files, never delete them.

---

## Encompass Knowledge Base

When a user asks an Encompass configuration, admin, or development question:

### Step 1 — Company Knowledge Search (Primary)
Search ALL company OneDrive/SharePoint stores via MS365 Graph:
```
mcp_ms365_search-query(query: "<user's question keywords>", entityTypes: ["driveItem"], size: 5)
```
This searches **12,700+ indexed documents** across the entire company:
- **MasteringEncompass** — 11,657 forum posts (.enriched.json with full text + metadata)
- **EllieForum** — 1,018 Ellie Mae community posts
- **Team docs** — training guides, admin playbooks, workflow configs on SharePoint + all team members' OneDrives

**Reading search results:**
- Search hits include `summary` with `<c0>`-highlighted terms — often sufficient to answer
- For deeper content from `.json` or `.txt` files: download with `mcp_ms365_download-onedrive-file-content(driveId, driveItemId)` → get `@microsoft.graph.downloadUrl` → fetch via terminal: `Invoke-WebRequest -Uri $url -OutFile $env:TEMP/kb-hit.json; Get-Content $env:TEMP/kb-hit.json -Raw`
- For `.docx` / `.pdf` files: summaries are usually enough; if not, give the user the `webUrl` to open directly

### Step 2 — Local Quick Reference
Search `knowledge/` in this TeamAI repo — match question keywords against article tags and content. If found, answer from the article and cite the source file.

### Step 3 — Live API Data
If the answer requires live Encompass instance data: `node C:/Dev/TeamAI/scripts/ice-api.js <command>`

### Step 4 — Web Content
If an external URL is needed: check `knowledge/external-sources.md`, then `node C:/Dev/TeamAI/scripts/ice-fetch.js <url>` for auth-walled pages.

### Step 5 — Domain Knowledge
If no source available, use domain knowledge. Clearly state confidence level. **Never fabricate** Encompass field IDs, menu paths, or admin settings.

### Prerequisite
Team members need the **MS 365 MCP Server** VS Code extension, signed into their `@mortgagetech.com` account. Without it, skip to Step 2.

### Proxy Tools

| Tool | Purpose | Usage |
|------|---------|-------|
| `mcp_ms365_search-query` | Company-wide doc search | `entityTypes: ["driveItem"]`, `size: 5` |
| `mcp_ms365_download-onedrive-file-content` | Download file from any drive | `driveId` + `driveItemId` from search hit |
| `ice-api.js` | Encompass REST API (OAuth2) | `node C:/Dev/TeamAI/scripts/ice-api.js folders\|field\|rules\|get` |
| `ice-fetch.js` | Auth-walled web pages | `node C:/Dev/TeamAI/scripts/ice-fetch.js <url>` |

## Credential Security — MANDATORY

- **NEVER read, cat, type, or open** `.env` files. These contain auth credentials managed by the user.
- **NEVER echo, print, or output** environment variables that may contain secrets.
- **Use `ice-api.js` / `ice-fetch.js` as proxies** — they read `.env` internally; you only see results on stdout.
- **NEVER suggest storing credentials** in any file that is committed to git.
- If `.env` is missing, tell the user: "Copy `.env.template` to `.env` and fill in your ICE credentials."

---

## 🧭 BREADCRUMB — Project Knowledge Map (ALWAYS READ ON SESSION START)

**Keyword:** `TEAMAI-KNOWLEDGE-MAP-2026`

This section exists so no session ever loses track of accumulated work. If you are a new session: read this, orient, then proceed. Do NOT re-discover what is already mapped here.

### Active Instance
- **Encompass Instance:** BE11146040
- **Credentials:** `C:/Dev/TeamAI/.env` (NEVER read directly — use ice-api.js / ice-fetch.js)
- **API Client ID:** jnpknrc

### Data Layer (41 files, ~41MB)
| Path | Contents |
|------|----------|
| `C:/Dev/TeamAI/data/be11146040/` | All extracted instance data — REST API (custom fields 17,359; alerts 88; orgs 74; users 53; personas 89; loan folders 24; loan schema 243 entities; pipeline fields 1,529) + SDK (milestones 47, system settings 48 investor templates, policies 200+, service URLs 83 endpoints, triggers 33, company/license/server info, key URLs 19, misc settings 56 plugins) + BRA ref (triggers 396, data entry 126, field access 58, loan access 17, print forms 18, docs 268, tasks 130, milestone reqs 36, personas 90, custom forms 411, input forms 409) |
| `C:/Dev/TeamAI/docs/` | SDK capability documentation — `SDK-Capabilities-Flyer.html` (6pp), `SDK-Advanced-Capabilities.html` (10pp, 1165 lines). Source material for encompass-dev/ KB articles. |

### Knowledge Base (122+ markdown files)
| Path | Contents |
|------|----------|
| `C:/Dev/TeamAI/knowledge/encompass-settings/` | Generated KB v2 — sections 00-44, from server info through xlsx sheets. Built by `scripts/build-knowledge-base-v2.js` (1115 lines, 24 core sections + xlsx sheets) |
| `C:/Dev/TeamAI/knowledge/encompass-admin/` | Hand-written admin guides (business rules, loan folders, workflow rules) |
| `C:/Dev/TeamAI/knowledge/encompass-dev/` | SDK v25.4 deep reference — 6 articles: architecture, write capabilities (REST vs SDK), loan operations, workflow/compliance, query/reporting/CRM, forms/automation/events/admin. 885 public types, 138 automation types, 118 enums documented. |
| `C:/Dev/TeamAI/knowledge/external-sources.md` | Curated URL catalog for ICE docs, forums, developer portals |

### Scripts
| Script | Purpose |
|--------|---------|
| `scripts/build-knowledge-base-v2.js` | Transforms raw data → 116 markdown KB files. 24 sections. Fully reviewed, no bugs. |
| `scripts/ice-api.js` | Encompass REST API proxy (OAuth2 via .env) |
| `scripts/ice-fetch.js` | Auth-walled web page fetcher (Playwright + .env) |
| `scripts/extract-live.js` | Live data extraction from Encompass instance |

### Archives — OldMachine-SB6 (MASSIVE — do not re-scrape what exists)
| Path | Contents |
|------|----------|
| `C:/Dev/OldMachine-SB6/MasteringEncompass/` | **Hundreds** of scraped community Q&A posts (enriched JSON, MHTML, TXT), developer API docs (developer.icemortgagetechnology.com), structured CSVs (encompass_posts.csv, encompass_qa_report.csv, encompass_kb_summary.csv), search indexes, Python scrapers (scrape_encompass_feed.py, scrape_full_threads.py), PowerShell scrapers (ME_Scrape_Locked.ps1, DevOpsUploader), HTTrack mirror configs, Encompass PDFs (SDK Programmer's Guide, Keyboard Shortcuts, System Requirements) |
| `C:/Dev/OldMachine-SB6/GPTlogs/Test1/` | 10 pages from forum.elliemae.com "Developer Connect/APIs" section (HTML/TXT/PNG triplets). Forum has 46 pages total — only 10 captured. |
| `C:/Dev/scrapeice/` | ICE docs scraper (`scrape_ice_docs.py`) targeting help.icemortgagetechnology.com + developer.icemortgagetechnology.com. Has `ice_docs_repo/` output folder. |

### SharePoint / OneDrive Knowledge (via MS365 MCP)
- **12,700+ indexed documents** across MortgageTech company stores
- **MasteringEncompass collection:** 11,657 forum posts (.enriched.json)
- **EllieForum collection:** 1,018 Ellie Mae community posts
- **Team docs:** Training guides, admin playbooks, workflow configs
- Access: `mcp_ms365_search-query(query, entityTypes: ["driveItem"], size: 5)`

### Coverage Assessment (as of March 2, 2026)
- **By categories:** ~80-85% of Encompass admin areas covered (up from 70-75% after SDK integration)
- **By importance:** ~90-95% of high-impact settings + development capabilities captured
- **SDK coverage:** Full — 885 public types, 138 automation types, 118 enums, 67 namespaces, 20+ service APIs documented across 6 articles
- **Known gaps:** Loan programs, closing cost templates, data templates, input form sets, document sets, condition sets, fee schedules, duplicate checking, rate lock settings

### Strategic Vision (3 products — PLANNING PHASE, not started)
1. **Admin Support KB** — Admins across the country use VS Code + Copilot to ask Encompass settings questions → answered from KB + Graph Search + live API
2. **Operational Audit** — Assess whether an instance's settings support a well-run mortgage operation (milestone flow, persona permissions, rule coverage, folder structure)
3. **Client Consulting Pipeline** — Ingest ANY client's settings dump → audit config → deliver recommendations. Repeatable product.
- **User Touches** — Behavioral data (timing, keystrokes, borrower file progression) to be integrated. Source: SharePoint or local TBD.

### Forum Access (needs recreation)
- Previous session had programmatic forum access — lost in reboot
- Target forums: masteringencompass.com, community.icemortgagetechnology.com (now ice-em.my.site.com), forum.elliemae.com
- Existing cookies in `OldMachine-SB6/MasteringEncompass/cookies*.txt` — likely expired
- Existing scrapers in same folder — may be reusable with fresh auth

### Session Recovery
- If starting fresh, search for `TEAMAI-KNOWLEDGE-MAP-2026` — this section has everything.
- Project session summary: `C:/Dev/TeamAI/docs/project-session-summary.md` (keyword: `TEAMAI-REBOOT-2026`)
- The user is **Steve Paltridge**, sole architect of MortgageTech TeamAI.

---

## Project-Specific Rules

Each repository has its own `.github/copilot-instructions.md` with project-specific rules (file paths, scripts, deployment steps, firewalls). These are additive — org rules + repo rules both apply.

See the TeamAI repo README for the full instruction architecture.

---

*MortgageTech AI Agent Instructions v1.5 — March 2, 2026*
