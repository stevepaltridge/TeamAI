# Getting Started

Complete these steps once. Takes about 10 minutes.

## Prerequisites

| Tool | How to Get It |
|------|---------------|
| VS Code | https://code.visualstudio.com/download |
| Git | https://git-scm.com/download/win |
| Node.js (LTS) | https://nodejs.org/ |
| GitHub Copilot license | Ask Steve |

## Step 1: Clone the Repo

```powershell
git clone https://dev.azure.com/MtgTechTeam/TeamAI/_git/TeamAI C:\Dev\TeamAI
```

## Step 2: Run the Setup Script

```powershell
cd C:\Dev\TeamAI
powershell -ExecutionPolicy Bypass -File scripts/teamai-setup.ps1
```

This installs everything automatically: VS Code extensions, Copilot settings, MCP server configuration, git identity.

## Step 3: Open the Workspace

Double-click `C:\Dev\TeamAI\TeamAI.code-workspace` to open TeamAI in VS Code with all settings pre-loaded.

On first open, VS Code will:
- Auto-pull the latest changes from the repo
- Prompt you to install recommended extensions (accept all)

## Step 4: Sign In

When you first use Copilot Chat, you'll be prompted to sign in:
- **GitHub** — for Copilot (use your personal or company GitHub account)
- **Microsoft 365** — for knowledge search (use your @mortgagetech.com account)

## Verify It Works

1. Open Copilot Chat (`Ctrl+Shift+I`)
2. Ask: "What is the field ID for the borrower's annual income?"
3. You should get an answer sourced from our knowledge base

## Automated Updates

TeamAI auto-pulls the latest version every time you open the workspace. You always have the current knowledge base and instructions.

## Need Help?

See [Troubleshooting](docs/team-onboarding.md#troubleshooting) or ask Steve.
