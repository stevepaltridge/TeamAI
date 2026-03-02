# MortgageTech — AI Agent Instructions
# Org-wide rules. Injected into every Copilot chat across all MortgageTech repos.
# Version: 1.0 | March 2, 2026

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

1. **Search `knowledge/`** in this TeamAI repo first — match question keywords against article tags and content
2. **If found** → answer from the article, cite the source file
3. **If not found** → check `knowledge/external-sources.md` for relevant URLs and attempt to fetch
4. **If external source requires auth** → tell the user the specific URL/article number to look up, suggest they paste key content back for future reference
5. **If no source available** → use domain knowledge, clearly state confidence level ("Based on general Encompass knowledge..." or "I'm not certain — verify in Encompass Settings")
6. **Never fabricate** Encompass field IDs, menu paths, or admin settings. If unsure, say so.

---

## Project-Specific Rules

Each repository has its own `.github/copilot-instructions.md` with project-specific rules (file paths, scripts, deployment steps, firewalls). These are additive — org rules + repo rules both apply.

See the TeamAI repo README for the full instruction architecture.

---

*MortgageTech AI Agent Instructions v1.1 — March 2, 2026*
