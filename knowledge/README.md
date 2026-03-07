# Encompass Knowledge Base

Internal knowledge articles for ICE Mortgage Technology Encompass. Agents search here **first** before external sources.

## How to Use (for agents)

1. Search `knowledge/` for articles matching the user's question
2. If found → answer from the article, cite it
3. If not found → check `external-sources.md` for relevant URLs
4. If still not found → use domain knowledge, clearly state confidence level
5. Never fabricate Encompass-specific field IDs, menu paths, or settings

## How to Contribute (for humans)

1. Copy `_template.md` → new file in the appropriate subfolder
2. Fill in all sections — especially **Encompass Path** and **Key Fields**
3. Commit and push — dual-push sends to both GitHub and Azure DevOps

## Structure

```
knowledge/
├── README.md              ← this file
├── _template.md           ← article template
├── external-sources.md    ← curated URLs for ICE/Encompass docs
├── field-reference.md     ← common Encompass field IDs
├── encompass-admin/       ← settings, business rules, config
│   ├── loan-folders.md
│   ├── business-rules-overview.md
│   └── workflow-rules.md
└── encompass-dev/         ← SDK v25.4 deep reference (6 articles)
    ├── sdk-architecture.md        ← Session object, connection, 17 sub-APIs
    ├── sdk-write-capabilities.md  ← REST vs SDK — what returns 403 vs. full CRUD
    ├── sdk-loan-operations.md     ← Loan object (46 props, 49 methods), fields, export/import
    ├── sdk-workflow-compliance.md  ← Milestones (47), conditions (13 states), TRID, alerts, eFolder
    ├── sdk-query-reporting.md     ← Pipeline queries, ERDB, CRM (42 types), data exchange
    └── sdk-forms-automation.md    ← Custom forms (138 types), real-time events, users/ACL, admin
```

## Tags Convention

Each article has a `Tags:` line. Agents should match question keywords against tags.
