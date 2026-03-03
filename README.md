# TeamAI — MortgageTech AI Instruction System

Central repository for AI agent instructions used across all MortgageTech projects.

## Architecture

```
┌─────────────────────────────────────────────────────┐
│  Layer 1: Org-Level (this repo)                     │
│  .github/copilot-instructions.md                    │
│  → Universal rules for ALL MortgageTech repos       │
│  → Communication style, resource limits, process    │
├─────────────────────────────────────────────────────┤
│  Layer 2: Project-Level (each project repo)         │
│  .github/copilot-instructions.md                    │
│  → Project-specific: paths, scripts, firewall, etc. │
│  → Template provided: templates/project-template.md │
├─────────────────────────────────────────────────────┤
│  Layer 3: Personal Workspace (local only)           │
│  claude.md (workspace root, not committed)          │
│  → Developer-specific: diary, parked work, prefs    │
│  → Template provided: templates/claude-template.md  │
└─────────────────────────────────────────────────────┘
```

## How It Works

**VS Code + GitHub Copilot** automatically injects `.github/copilot-instructions.md` into every chat. When a developer opens a project:

1. **Org rules** load from this repo (if configured as org-level custom instructions on GitHub)
2. **Project rules** load from the project's own `.github/copilot-instructions.md`
3. **Personal rules** load from the developer's local `claude.md`

All three layers are additive — agents receive all applicable instructions.

## Repository Contents

```
TeamAI/
├── .github/
│   └── copilot-instructions.md    ← Org-wide agent rules (Layer 1)
├── templates/
│   ├── project-template.md        ← Starter for new project repos (Layer 2)
│   └── claude-template.md         ← Starter for developer workspace (Layer 3)
├── scripts/
│   ├── ice-api.js                 ← Encompass REST API proxy (OAuth2)
│   └── ice-fetch.js               ← Auth-walled web page fetcher
├── knowledge/
│   ├── encompass-admin/            ← Admin reference articles
│   ├── field-reference.md          ← Field ID quick reference
│   └── external-sources.md         ← Tiered URL reference
├── docs/
│   ├── instruction-guide.md       ← How to customize for your project
│   └── team-onboarding.md         ← Full team setup guide (email-ready)
├── .env.template                      ← Encompass API credential template
└── README.md                      ← This file
```

## Developer Onboarding (One-Time Setup)

Do these 4 steps once and you're done. Takes ~5 minutes.

> **Full setup guide with screenshots and troubleshooting:** See [docs/team-onboarding.md](docs/team-onboarding.md)

### Step 1: Clone this repo

```powershell
git clone https://dev.azure.com/MtgTechTeam/TeamAI/_git/CopilotInstructions C:\Dev\TeamAI
```

### Step 2: Add VS Code User Setting

Open VS Code → `Ctrl+Shift+P` → **Preferences: Open User Settings (JSON)** → add this inside the `{}`:

```json
"github.copilot.chat.codeGeneration.instructions": [
    {
        "file": "C:/Dev/TeamAI/.github/copilot-instructions.md"
    }
]
```

This injects our org-wide AI rules into every Copilot chat, in every workspace, automatically.

### Step 3: Configure MS365 MCP Server (Knowledge Search)

This lets the AI search 12,700+ company knowledge articles via Microsoft Graph:

In VS Code → `Ctrl+Shift+P` → **MCP: Open User Configuration** → add:

```json
{
    "servers": {
        "ms365": {
            "type": "stdio",
            "command": "npx",
            "args": ["-y", "@softeria/ms-365-mcp-server", "--org-mode"]
        }
    }
}
```

Sign in with your `@mortgagetech.com` account when prompted. Requires [Node.js](https://nodejs.org/) (LTS).

### Step 4: Open any project

Any project with its own `.github/copilot-instructions.md` will automatically add project-specific rules on top of the org rules. No extra config needed.

### Optional: Personal Layer

1. Copy `templates/claude-template.md` to your workspace root as `claude.md`
2. Add `claude.md` to your `.gitignore` (personal, not committed)
3. Fill in your preferences and working state

---

## Quick Start for New Projects

1. Copy `templates/project-template.md` to your project's `.github/copilot-instructions.md`
2. Fill in project-specific paths, scripts, and rules
3. Commit and push

## Updating Org Rules

Org-level rules affect ALL team members across ALL projects. Changes to `.github/copilot-instructions.md` in this repo should be:
- Reviewed before merging
- Backward compatible (don't break existing project instructions)
- Announced to the team

## Token Budget

AI agents have context limits. Keep instructions lean:

| Layer | Target | Purpose |
|-------|--------|---------|
| Org (Layer 1) | ≤3 KB | Universal rules |
| Project (Layer 2) | ≤5 KB | Project-specific |
| Personal (Layer 3) | ≤3 KB | Developer state |
| **Total injected** | **≤8 KB** | Combined |

---

*MortgageTech TeamAI v1.4 — March 2, 2026*
