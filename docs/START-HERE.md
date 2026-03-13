# MortgageTech TeamAI -- Start Here

> Last updated: 2026-03-13 | S-20260313-01

Welcome to the MortgageTech knowledge base. This document is your map. Whether you're onboarding, looking up an Encompass setting, or trying to deploy the website, start here and follow the trail.

---

## What Is This Repo?

TeamAI is the team's shared brain. It contains:

- **Knowledge articles** that AI agents and humans both use to answer Encompass questions
- **Deployment docs** for the website and workbook
- **Trade show flyers** (HTML source + PDF exports)
- **Templates** for starting new projects or configuring your own AI workspace
- **Scripts** for Encompass API operations
- **A complete export of our Encompass settings** (17,357 custom fields, 411 forms, 268 documents, and more)

AI agents search this repo automatically. But it's organized for humans first.

---

## Quick Links by Role

### "I'm new here"

1. Read [Team Onboarding Guide](./team-onboarding.md) -- how we work, what tools we use
2. Read [Instruction Guide](./instruction-guide.md) -- how the 3-layer AI instruction system works
3. Browse the [Knowledge Base](#knowledge-base-map) below to see what we've documented

### "I need to look up an Encompass setting"

1. Start with [Encompass Settings Index](../knowledge/encompass-settings/00-INDEX.md) -- full inventory with stats
2. For field IDs, see [Custom Fields Index](../knowledge/encompass-settings/04-custom-fields-index.md) (17,357 fields across 6 part files)
3. For business rules, see [Business Rules Overview](../knowledge/encompass-admin/business-rules-overview.md)
4. For personas, see [Personas](../knowledge/encompass-settings/03-personas.md) (90 personas)
5. For workflow rules, see [Workflow Rules](../knowledge/encompass-admin/workflow-rules.md)

### "I need to deploy the website"

1. Read [Website Deployment Runbook](./website-deployment-runbook.md) -- step-by-step with common problems
2. Understand the architecture: [Website Architecture](../knowledge/website-architecture.md)
3. For SWA-specific details: [Azure SWA Deployment](../knowledge/azure-swa-deployment.md)

### "I'm working on the URLA Workbook"

1. Read [Workbook Architecture](../knowledge/urla-workbook-architecture.md) -- T-panel system, 800px, CSS variables, dark mode
2. Review [Custom Forms](../knowledge/encompass-settings/16-custom-forms.md) -- 411 forms in our instance
3. Check [Field Reference](../knowledge/field-reference.md) for common field IDs
4. Check [SDK Forms & Automation](../knowledge/encompass-dev/sdk-forms-automation.md) for the SDK side

### "I need to update a trade show flyer"

1. Read [Flyer Pipeline](../knowledge/flyer-pipeline.md) -- how to edit HTML, generate PDFs, deploy
2. Flyer HTML/PDF pairs are in this folder: [docs/](./)

### "I'm writing Encompass SDK code"

1. Start with [SDK Architecture](../knowledge/encompass-dev/sdk-architecture.md) -- Session object, 17 sub-APIs
2. For CRUD operations: [SDK Write Capabilities](../knowledge/encompass-dev/sdk-write-capabilities.md)
3. For loan data: [SDK Loan Operations](../knowledge/encompass-dev/sdk-loan-operations.md)
4. For milestones/conditions: [SDK Workflow & Compliance](../knowledge/encompass-dev/sdk-workflow-compliance.md)
5. For queries: [SDK Query & Reporting](../knowledge/encompass-dev/sdk-query-reporting.md)
6. For forms/events: [SDK Forms & Automation](../knowledge/encompass-dev/sdk-forms-automation.md)

### "I want to set up my own AI workspace"

1. Copy [Personal Agent Config Template](../templates/claude-template.md) to your local `.copilot/` directory
2. For project-level rules, copy [Project Template](../templates/project-template.md) to `.github/copilot-instructions.md`
3. Org-wide rules from this repo apply automatically on top

---

## Knowledge Base Map

Here's everything in the repo, organized by domain.

### Encompass Settings (52 files, 3.3+ MB)

The crown jewel. A complete export of our Encompass instance:

| Area | Key File | What's In It |
|------|----------|-------------|
| Overview | [00-INDEX.md](../knowledge/encompass-settings/00-INDEX.md) | Full inventory, stats, data sources |
| Users | [01-users.md](../knowledge/encompass-settings/01-users.md) | 53 users |
| Organizations | [02-organizations.md](../knowledge/encompass-settings/02-organizations.md) | 74 orgs |
| Personas | [03-personas.md](../knowledge/encompass-settings/03-personas.md) | 90 personas |
| Custom Fields | [04-custom-fields-index.md](../knowledge/encompass-settings/04-custom-fields-index.md) | 17,357 fields (index + 6 part files) |
| Field Triggers | [05-field-triggers.md](../knowledge/encompass-settings/05-field-triggers.md) | 396 triggers |
| Data Entry Rules | [06-data-entry-rules.md](../knowledge/encompass-settings/06-data-entry-rules.md) | 126 rules |
| Field Access | [07-field-access-rules.md](../knowledge/encompass-settings/07-field-access-rules.md) | 58 rules |
| Loan Access | [08-loan-access-rules.md](../knowledge/encompass-settings/08-loan-access-rules.md) | 17 rules |
| Print Forms | [09-print-form-rules.md](../knowledge/encompass-settings/09-print-form-rules.md) | 18 rules |
| Milestones | [10-milestones.md](../knowledge/encompass-settings/10-milestones.md) | 54 milestones |
| Documents | [12-documents.md](../knowledge/encompass-settings/12-documents.md) | 268 documents |
| Tasks | [13-tasks.md](../knowledge/encompass-settings/13-tasks.md) | 130 tasks |
| Alerts | [14-alerts.md](../knowledge/encompass-settings/14-alerts.md) | 88 alerts |
| Custom Forms | [16-custom-forms.md](../knowledge/encompass-settings/16-custom-forms.md) | 411 forms |
| Business Rules | [20-business-rules-code.md](../knowledge/encompass-settings/20-business-rules-code.md) | Transpiled VBScript rules |
| Closing Costs | [27-xlsx-closing-costs.md](../knowledge/encompass-settings/27-xlsx-closing-costs.md) | Fee schedules |
| Condition Sets | [42-condition-sets.md](../knowledge/encompass-settings/42-condition-sets.md) | Condition definitions |

### Encompass Admin (3 files)

| File | Topic |
|------|-------|
| [business-rules-overview.md](../knowledge/encompass-admin/business-rules-overview.md) | How rules work, types, triggers |
| [loan-folders.md](../knowledge/encompass-admin/loan-folders.md) | Folder structure and organization |
| [workflow-rules.md](../knowledge/encompass-admin/workflow-rules.md) | Workflow automation rules |

### Encompass SDK v25.4 (6 files)

| File | Focus |
|------|-------|
| [sdk-architecture.md](../knowledge/encompass-dev/sdk-architecture.md) | Session object, connection, 17 sub-APIs |
| [sdk-write-capabilities.md](../knowledge/encompass-dev/sdk-write-capabilities.md) | REST vs SDK write access |
| [sdk-loan-operations.md](../knowledge/encompass-dev/sdk-loan-operations.md) | Loan object (46 props, 49 methods) |
| [sdk-workflow-compliance.md](../knowledge/encompass-dev/sdk-workflow-compliance.md) | Milestones, conditions, TRID |
| [sdk-query-reporting.md](../knowledge/encompass-dev/sdk-query-reporting.md) | Pipeline queries, ERDB, CRM |
| [sdk-forms-automation.md](../knowledge/encompass-dev/sdk-forms-automation.md) | Custom forms, real-time events |

### Website & Workbook (3 files)

| File | Topic |
|------|-------|
| [website-architecture.md](../knowledge/website-architecture.md) | Site structure, nav system, page inventory |
| [azure-swa-deployment.md](../knowledge/azure-swa-deployment.md) | SWA CLI deployment how-to |
| [urla-workbook-architecture.md](../knowledge/urla-workbook-architecture.md) | T-panel system, 800px, CSS vars, dark mode |

### Flyers & Docs

| File | Topic |
|------|-------|
| [flyer-pipeline.md](../knowledge/flyer-pipeline.md) | How to create/export flyers |
| [website-deployment-runbook.md](./website-deployment-runbook.md) | Step-by-step deploy guide |
| [team-onboarding.md](./team-onboarding.md) | New team member guide |
| [instruction-guide.md](./instruction-guide.md) | 3-layer AI instruction system |

### Templates

| File | Use |
|------|-----|
| [claude-template.md](../templates/claude-template.md) | Personal AI workspace config (local, not committed) |
| [project-template.md](../templates/project-template.md) | Project-level copilot-instructions.md scaffold |
| [_template.md](../knowledge/_template.md) | Knowledge article template |

### Scripts

| File | Purpose |
|------|---------|
| [ice-api.js](../scripts/ice-api.js) | Encompass REST API proxy with OAuth2 |
| [ice-fetch.js](../scripts/ice-fetch.js) | Auth-walled web page fetcher |

---

## How This Repo Is Organized (3-Layer System)

```
Layer 1: Org Instructions (.github/copilot-instructions.md)
  |  Global rules every agent follows: iron rules, conventions, guardrails
  |
Layer 2: Knowledge Base (knowledge/)
  |  Searchable articles agents query to answer Encompass questions
  |  Subfolders: encompass-admin, encompass-dev, encompass-settings
  |
Layer 3: Personal Config (templates/claude-template.md)
     Your own workspace, preferences, parked work, protected files
```

Agents search Layer 2 first, then external sources, then use domain knowledge (with stated confidence).

---

## Contributing

1. Copy `knowledge/_template.md` to the appropriate subfolder
2. Fill in all sections -- especially **Encompass Path** and **Key Fields** for settings articles
3. Tag generously -- agents match question keywords to tags
4. Commit and push

The repo is the team's memory. The more complete it is, the better the AI agents perform, and the more the team can self-serve without waiting for experts.

---

*This guide will grow as the knowledge base grows. If something's missing, add it.*
