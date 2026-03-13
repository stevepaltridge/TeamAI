# MortgageTech AI Platform — Team Onboarding Guide

**From:** Steve Paltridge  
**Date:** March 2, 2026  
**To:** All MortgageTech team members

---

## What This Is

We've built an AI-powered knowledge system that lets you ask questions about Encompass — configuration, admin, development, business rules, field IDs, workflows — and get accurate answers sourced from:

- **12,700+ MasteringEncompass forum articles** (scraped, indexed, searchable)
- **1,000+ EllieForum community posts** (Ellie Mae/ICE community archive)
- **Company SharePoint & OneDrive documents** (training guides, admin playbooks, configs)
- **Live Encompass API data** (loan folders, custom fields, schemas, personas)
- **Auth-walled ICE web pages** (Developer Connect docs, admin consoles)

It works through **VS Code + GitHub Copilot**. You type a question in Copilot Chat, and the AI agent searches all of these sources automatically to answer you.

---

## Setup Steps (One-Time, ~10 Minutes)

### Step 1: Install VS Code

If you don't already have it:

- **Download:** https://code.visualstudio.com/download
- Install with default settings

### Step 2: Install GitHub Copilot

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search for **"GitHub Copilot"** and install it
4. Sign in with your GitHub account when prompted
5. You need a **Copilot license** (Business or Individual). If you don't have one, ask Steve.

### Step 3: Clone the TeamAI Repository

Open a PowerShell terminal and run:

```powershell
git clone https://dev.azure.com/MtgTechTeam/TeamAI/_git/TeamAI C:\Dev\TeamAI
```

> **Note:** If you don't have git installed, download from https://git-scm.com/download/win

### Step 3b: Open the TeamAI Workspace

Double-click `C:\Dev\TeamAI\TeamAI.code-workspace` to open TeamAI in VS Code. This loads all recommended settings, extensions, and tasks automatically.

> **Auto-pull:** Every time you open the workspace, it automatically pulls the latest changes from the repo. You always have current knowledge articles and instructions.

### Step 4: Add Org-Wide AI Instructions to VS Code

This tells Copilot to load our company rules into every chat:

1. Open VS Code
2. Press `Ctrl+Shift+P` → type **"Preferences: Open User Settings (JSON)"** → Enter
3. Add this inside the `{}` (if there's already content, add a comma after the last line, then paste):

```json
"github.copilot.chat.codeGeneration.instructions": [
    {
        "file": "C:/Dev/TeamAI/.github/copilot-instructions.md"
    }
]
```

4. Save (`Ctrl+S`)

### Step 5: Set Up MS365 MCP Server (Knowledge Search)

This is what lets the AI search our company OneDrive/SharePoint knowledge stores:

1. In VS Code, press `Ctrl+Shift+P` → type **"MCP: Open User Configuration"** → Enter
2. This opens a `mcp.json` file. Add the MS365 server:

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

> If you already have other servers in the file, just add the `"ms365": { ... }` block inside the `"servers"` section.

3. Save (`Ctrl+S`)
4. When you first use it, the MS365 MCP server will prompt you to **sign in with your `@mortgagetech.com` Microsoft account**. This grants the AI read access to company OneDrive/SharePoint content.

**Prerequisite:** You need [Node.js](https://nodejs.org/) installed (LTS version). `npx` comes with it. If you run `npx --version` in a terminal and get a version number, you're good.

### Step 6: Set Up Encompass API Access (Optional)

This is only needed if you want the AI to pull live data from the Encompass instance (custom fields, loan folders, schemas, etc.):

1. Navigate to `C:\Dev\TeamAI`
2. Copy `.env.template` to `.env`
3. Fill in your ICE credentials:

```
ICE_INSTANCE_ID=BE11146040
ICE_USERNAME=your_encompass_username
ICE_PASSWORD=your_encompass_password
ICE_CLIENT_ID=jnpknrc
ICE_CLIENT_SECRET="ask Steve for the client secret"
```

> **Important:** The client secret contains special characters. It MUST be wrapped in double quotes (`"..."`) in the `.env` file. Ask Steve directly for the value — it is not committed to the repo.

4. Install dependencies:
```powershell
cd C:\Dev\TeamAI
npm install
```

5. Test the connection:
```powershell
node scripts/ice-api.js folders
```
If you see a list of loan folders, you're connected.

---

## How to Use It

### Ask an Encompass Question

1. Open any project in VS Code (or just open `C:\Dev\TeamAI`)
2. Open Copilot Chat (`Ctrl+Shift+I` or click the Copilot icon)
3. Ask your question naturally:

**Examples:**
- *"How do I set up business rules for lock request conditions in Encompass?"*
- *"What's the field ID for the borrower's annual income?"*
- *"How do I configure custom input forms in Encompass?"*
- *"What are the settings for automated document assignment?"*

The AI will automatically:
1. Search our 12,700+ knowledge base docs via Graph Search
2. Check local reference articles
3. Query the live Encompass API if needed
4. Synthesize an answer with source citations

### What It Can Search

| Source | Content | Size |
|--------|---------|------|
| MasteringEncompass | Forum posts (enriched JSON with full text + metadata) | 11,657 articles |
| EllieForum | Ellie Mae community archive | 1,018 posts |
| Team OneDrive/SharePoint | Training guides, admin docs, configs | All company drives |
| Encompass REST API | Live instance data (folders, fields, schemas) | Real-time |
| ICE Developer Connect | Auth-walled documentation pages | On demand |

---

## What Steve Needs to Do (Admin Steps)

These are one-time admin tasks that Steve will complete:

- [x] Set up TeamAI repo on Azure DevOps (+ GitHub mirror)
- [x] Create org-wide AI instructions (Layer 1 v1.5)
- [x] Build OAuth proxy for Encompass REST API (`ice-api.js`)
- [x] Build browser proxy for auth-walled pages (`ice-fetch.js`)
- [x] Configure MS365 Graph Search and validate pipeline
- [x] **Rename & share the OneDrive knowledge folder** — renamed to **EncompassFX** and shared with team. Location: `OneDrive > EncompassFX`.
- [x] **Auto-pull on workspace open** — VS Code tasks.json pulls latest on every open
- [x] **VS Code workspace file** — `TeamAI.code-workspace` with all settings, extensions, and tasks
- [x] **DevOps Wiki pages** — browsable docs in `docs/devops-wiki/`
- [x] **Freshness check script** — `node scripts/freshness-check.js`
- [ ] **Enable additional API products** on ICE Developer Connect (https://developer.icemortgagetechnology.com) for client ID `jnpknrc` — needed for field definitions, loans, pipeline, users, and business rules endpoints.
- [ ] **Ensure all team members have Copilot licenses** — manage via https://github.com/orgs/MortgageTech/settings (GitHub is required for Copilot licensing only).

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Copilot says it can't find MS365 tools | Make sure you completed Step 5 (MCP config) and signed in with your @mortgagetech.com account |
| `npx` not found | Install Node.js from https://nodejs.org/ (LTS version) |
| `ice-api.js` gets "Invalid credentials" | Double-check your `.env` values. Client secret MUST be in double quotes |
| `ice-api.js` returns 403 Forbidden | That API endpoint may not be enabled yet — Steve needs to enable it on Developer Connect |
| Graph Search returns 0 results | Make sure Steve has shared the **EncompassFX** OneDrive folder with you. Sign in again if your token expired |
| `git clone` fails | Install git from https://git-scm.com/download/win, or ask Steve for the repo as a zip |
| VS Code doesn't load org instructions | Verify the path in Step 4 matches where you cloned: `C:/Dev/TeamAI/.github/copilot-instructions.md` |

---

## Quick Reference

| What | Where / Command |
|------|-----------------|
| TeamAI repo (Azure DevOps) | https://dev.azure.com/MtgTechTeam/TeamAI/_git/TeamAI |
| TeamAI repo (GitHub) | https://github.com/stevepaltridge/TeamAI |
| VS Code download | https://code.visualstudio.com/download |
| Node.js download | https://nodejs.org/ |
| Git download | https://git-scm.com/download/win |
| ICE Developer Connect | https://developer.icemortgagetechnology.com |
| GitHub Copilot extension | Search "GitHub Copilot" in VS Code Extensions |
| MS365 MCP package | `@softeria/ms-365-mcp-server` (auto-installed via npx) |
| Org AI instructions | `C:\Dev\TeamAI\.github\copilot-instructions.md` |
| API proxy | `node C:\Dev\TeamAI\scripts\ice-api.js <command>` |
| Web proxy | `node C:\Dev\TeamAI\scripts\ice-fetch.js <url>` |
| Credential template | `C:\Dev\TeamAI\.env.template` |

---

## Team Members

This system is available to all @mortgagetech.com team members listed at [mortgagetech.com](https://www.mortgagetech.com):

| Name | Role |
|------|------|
| Steve Paltridge | Founder & CEO |
| Mindy McEuen Paltridge | Executive Vice President |
| Nicole Stufflebeam | Business Analyst & Support Engineer |
| Anne Moodey | Strategic Business Consultant |
| Jeannene Derback | Strategic Business Consultant |
| Candice Jones | Strategic Business Consultant |
| Kaley Kirsten | Strategic Business Consultant |
| Kris Drouet | Senior Developer |

**Questions?** Ask Steve or open an issue in the TeamAI repo.

---

## Additional Resources

| Resource | Location |
|----------|----------|
| Admin Quick Reference | [docs/devops-wiki/Admin-Quick-Reference.md](devops-wiki/Admin-Quick-Reference.md) |
| How to Ask Questions | [docs/devops-wiki/How-to-Ask-Questions.md](devops-wiki/How-to-Ask-Questions.md) |
| Contributing Knowledge | [docs/devops-wiki/Contributing-Knowledge.md](devops-wiki/Contributing-Knowledge.md) |
| Branch Policies | [docs/devops-wiki/Branch-Policies.md](devops-wiki/Branch-Policies.md) |
| Freshness Check | Run: `node scripts/freshness-check.js` |

---

*MortgageTech AI Platform — Onboarding v2.0 · March 13, 2026*
