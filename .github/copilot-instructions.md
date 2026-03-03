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

## Project-Specific Rules

Each repository has its own `.github/copilot-instructions.md` with project-specific rules (file paths, scripts, deployment steps, firewalls). These are additive — org rules + repo rules both apply.

See the TeamAI repo README for the full instruction architecture.

---

*MortgageTech AI Agent Instructions v1.4 — March 2, 2026*
