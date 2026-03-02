# [PROJECT NAME] — Copilot Project Instructions
# Project-specific rules. Sits in YOUR project repo at .github/copilot-instructions.md
# Org-wide rules from MortgageTech/TeamAI apply automatically on top of these.

---

## What Is This Project?

<!-- One-liner describing the project -->
<!-- Example: Custom web form for Encompass Web (ICE Mortgage Technology). Deployed to Azure Static Web Apps. -->

---

## Key Paths

<!-- Map the important files/folders agents need to know about -->

| What | Where |
|------|-------|
| Main entry point | `<!-- e.g., index.html -->` |
| Styles | `<!-- e.g., src/styles/ -->` |
| Scripts | `<!-- e.g., src/scripts/ -->` |
| Tests | `<!-- e.g., tests/ -->` |
| Deploy config | `<!-- e.g., DEPLOYMENT.md -->` |
| Archives | `<!-- e.g., ARCHIVES/ -->` |

---

## Project-Specific Rules

<!-- Add rules that are unique to THIS project. Don't repeat org-level rules. -->
<!-- Examples: -->

### Build & Deploy
<!-- - Deploy command: `npm run deploy` -->
<!-- - Always use wrapper scripts, never raw CLI -->
<!-- - Deploy from specific directory only -->

### Architecture Constraints
<!-- - Component pattern: describe how components are structured -->
<!-- - Binding mechanism: describe data binding approach -->
<!-- - CSS strategy: variables file, naming convention -->

### Firewall / Protected Files
<!-- - List files that agents must NOT modify -->
<!-- - Example: All T*A*.html files at workspace root -->

### Dev Environment
<!-- - Dev server command: `npm start` (port XXXX) -->
<!-- - Test command: `npm test` -->

---

## Quick Commands

<!-- Project-specific shortcuts agents should recognize -->

| User says | Agent does |
|-----------|-----------|
| `preflight` | <!-- Run project checks --> |
| `run tests` | <!-- Run test suite --> |
| `local preview` | <!-- Start dev server --> |
| `ship it` | <!-- Deploy sequence --> |

---

## Routing — Read Only When Relevant

<!-- Point agents to deeper docs they should read on-demand, not always -->

| Task involves... | Read first |
|------------------|------------|
| Deployment | `<!-- DEPLOYMENT.md -->` |
| Past issues | `<!-- known-issues.md -->` |
| Architecture | `<!-- ARCHITECTURE.md -->` |

---

*[PROJECT NAME] Copilot Instructions v1.0 — [DATE]*
