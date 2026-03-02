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
└── encompass-dev/         ← SDK, API, custom forms, scripting
    └── (future articles)
```

## Tags Convention

Each article has a `Tags:` line. Agents should match question keywords against tags.
