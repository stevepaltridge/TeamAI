# Contributing Knowledge

Anyone on the team can add or update knowledge articles. Here's how.

## Where Knowledge Lives

```
knowledge/
├── encompass-admin/     ← Admin reference articles
├── encompass-dev/       ← Developer reference articles
├── encompass-settings/  ← Exported settings (read-only, auto-generated)
├── field-reference.md   ← Field ID quick reference
├── external-sources.md  ← Tiered URL reference
└── README.md            ← Knowledge inventory
```

## Adding a New Article

1. Create a new `.md` file in the appropriate `knowledge/` subfolder
2. Use this structure:

```markdown
# Title of Your Article

## Summary
One-paragraph description of what this covers.

## Details
The full content. Use headings, tables, and code blocks as needed.

## Sources
- Where you got this information (URL, doc name, personal experience)
```

3. Commit and push:

```powershell
cd C:\Dev\TeamAI
git add knowledge/your-new-article.md
git commit -m "Add knowledge article: your topic"
git push
```

## Rules

- **Markdown only.** No Word docs, no PDFs. Markdown is searchable by the AI.
- **One topic per file.** Keeps search results focused.
- **Keep it factual.** Cite your sources. No speculation.
- **Don't edit `encompass-settings/`.** Those files are auto-generated from the Encompass API. They're read-only.

## Updating an Existing Article

1. Open the file in VS Code
2. Make your edits
3. Commit with a descriptive message: `git commit -m "Update field-reference: add TRID fields"`
4. Push

## Branch Policy

All changes go through `main` for now. If we grow, Steve may enable pull request reviews. Follow [Branch Policies](/Branch-Policies) for current rules.

## What Makes a Good Article

| Good | Bad |
|------|-----|
| Specific Encompass field IDs with descriptions | Vague "how to do stuff" |
| Step-by-step admin procedures | Copy-pasted ICE docs without context |
| Business rules with trigger conditions | Assumptions without verification |
| Error messages with solutions | "I think this might work" |
