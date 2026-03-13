# Admin Quick Reference

One-stop cheat sheet for daily TeamAI and Encompass admin tasks.

## Daily Workflow

| Task | How |
|------|-----|
| Open TeamAI | Double-click `TeamAI.code-workspace` (auto-pulls latest) |
| Ask Encompass question | `Ctrl+Shift+I` in VS Code, type naturally |
| Check if your clone is current | Run task: `Ctrl+Shift+P` > "Tasks: Run Task" > "TeamAI: Freshness Check" |
| Update manually | In terminal: `cd C:\Dev\TeamAI && git pull` |
| Test API connection | Run task: "TeamAI: Test API Connection" |

## Common Copilot Questions

```
"What is the field ID for [description]?"
"How do I configure [feature] in Encompass?"
"What business rules affect [process]?"
"Search MasteringEncompass for [topic]"
"What are the settings for [admin feature]?"
```

## Key Paths

| What | Where |
|------|-------|
| Org AI instructions | `.github/copilot-instructions.md` |
| Knowledge articles | `knowledge/` |
| Admin knowledge | `knowledge/encompass-admin/` |
| Settings exports | `knowledge/encompass-settings/` (read-only) |
| Scripts | `scripts/` |
| Setup guide | `docs/team-onboarding.md` |
| Wiki pages | `docs/devops-wiki/` |

## Encompass API Commands

All require `.env` configured with valid credentials.

```powershell
# List loan folders
node scripts/ice-api.js folders

# Get field schema
node scripts/ice-api.js fields

# Rebuild knowledge base from API
node scripts/build-knowledge-base-v2.js
```

## VS Code Tasks (Ctrl+Shift+P > "Tasks: Run Task")

| Task | What It Does |
|------|-------------|
| TeamAI: Auto-Pull Latest | Pulls latest from main (runs automatically on open) |
| TeamAI: Test API Connection | Tests Encompass API credentials |
| TeamAI: Rebuild Knowledge Base | Re-exports knowledge from API |
| TeamAI: Freshness Check | Shows how current your local clone is |

## Adding Knowledge

1. Create a `.md` file in `knowledge/encompass-admin/` (or appropriate subfolder)
2. Write in plain Markdown. One topic per file.
3. Commit and push:
   ```powershell
   git add knowledge/your-article.md
   git commit -m "Add: your topic description"
   git push
   ```

See [Contributing Knowledge](docs/devops-wiki/Contributing-Knowledge.md) for guidelines.

## Contacts

| Question | Ask |
|----------|-----|
| API credentials, setup issues | Steve |
| Copilot license | Steve |
| Knowledge article corrections | Open a commit or tell Steve |
| Git conflicts | Steve or Kris |
