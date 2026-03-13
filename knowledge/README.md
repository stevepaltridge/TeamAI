# Encompass Knowledge Base

Internal knowledge articles for ICE Mortgage Technology Encompass. Agents search here **first** before external sources.

## How to Use (for agents)

1. Search `knowledge/` for articles matching the user's question
2. If found -> answer from the article, cite it
3. If not found -> check `external-sources.md` for relevant URLs
4. If still not found -> use domain knowledge, clearly state confidence level
5. Never fabricate Encompass-specific field IDs, menu paths, or settings

## How to Contribute (for humans)

1. Copy `_template.md` -> new file in the appropriate subfolder
2. Fill in all sections -- especially **Encompass Path** and **Key Fields**
3. Commit and push -- dual-push sends to both GitHub and Azure DevOps

## Structure

```
knowledge/
|-- README.md                    <- this file
|-- _template.md                 <- article template
|-- external-sources.md          <- curated URLs for ICE/Encompass docs
|-- field-reference.md           <- common Encompass field IDs
|-- azure-swa-deployment.md      <- SWA CLI deployment operations
|-- website-architecture.md      <- website structure, nav system, pages
|-- urla-workbook-architecture.md <- T-panel system, 800px, CSS vars, dark mode
|-- flyer-pipeline.md            <- HTML-to-PDF flyer generation
|
|-- encompass-admin/             <- settings, business rules, config
|   |-- business-rules-overview.md
|   |-- loan-folders.md
|   +-- workflow-rules.md
|
|-- encompass-dev/               <- SDK v25.4 deep reference (6 articles)
|   |-- sdk-architecture.md        <- Session object, connection, 17 sub-APIs
|   |-- sdk-write-capabilities.md  <- REST vs SDK -- what returns 403 vs. full CRUD
|   |-- sdk-loan-operations.md     <- Loan object (46 props, 49 methods)
|   |-- sdk-workflow-compliance.md  <- Milestones (47), conditions (13 states), TRID
|   |-- sdk-query-reporting.md     <- Pipeline queries, ERDB, CRM (42 types)
|   +-- sdk-forms-automation.md    <- Custom forms (138 types), real-time events
|
+-- encompass-settings/          <- Complete instance export (52 files, 3.3+ MB)
    |-- 00-INDEX.md                <- Full inventory with stats
    |-- 00-server-info.md
    |-- 01-users.md                <- 53 users
    |-- 02-organizations.md        <- 74 orgs
    |-- 03-personas.md             <- 90 personas
    |-- 04-custom-fields-*.md      <- 17,357 fields (index + 6 parts)
    |-- 04-fields-cx-*.md          <- Field category detail files
    |-- 05-field-triggers.md       <- 396 triggers
    |-- 06-data-entry-rules.md     <- 126 rules
    |-- 07-field-access-rules.md   <- 58 rules
    |-- 08-loan-access-rules.md    <- 17 rules
    |-- 09-print-form-rules.md     <- 18 rules
    |-- 10-milestones.md           <- 54 milestones
    |-- 11-milestone-requirements.md
    |-- 12-documents.md            <- 268 documents
    |-- 13-tasks.md                <- 130 tasks
    |-- 14-alerts.md               <- 88 alerts
    |-- 15-system-settings.md
    |-- 16-custom-forms.md         <- 411 forms
    |-- 17-trigger-configuration.md
    |-- 18-44: xlsx sheet exports, business rules, condition sets, stacking templates
    +-- 44-additional-sheets.md
```

## Tags Convention

Each article has a `Tags:` line. Agents should match question keywords against tags.

## New in March 2026

- **Website & Workbook articles** -- architecture, deployment, T-panel system
- **Flyer pipeline** -- how to generate PDFs from HTML flyers
- **START HERE guide** -- human-first navigation document in `docs/START-HERE.md`
