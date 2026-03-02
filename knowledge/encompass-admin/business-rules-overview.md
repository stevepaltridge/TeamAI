# Business Rules Overview

> **Status:** verified
> **Last updated:** 2026-03-02
> **Author:** ClaudeOpus4.6·c347
> **Tags:** business rules, settings, admin, configuration, automation, encompass settings

## Question

What are Encompass Business Rules and where do I find them?

## Short Answer

Business Rules are automated actions configured in Encompass Settings that trigger based on loan data conditions. They cover loan folder moves, field validation, access control, duplicate checking, and more.

## Encompass Path

```
Encompass Settings → Business Rules
```

## Detailed Explanation

### Categories of Business Rules

| Rule Type | What It Does | Path |
|-----------|-------------|------|
| **Loan Folder Rules** | Auto-move loans between folders based on conditions | Business Rules → Loan Folder Rules |
| **Field Rules** | Validate or auto-populate field values | Business Rules → Field Data Entry |
| **Lock Rules** | Control rate lock behavior | Business Rules → Lock Request |
| **Duplicate Check** | Flag potential duplicate loans | Business Rules → Duplicate Check |
| **Persona Access** | Control field/screen access by role | Business Rules → Persona Access to Loans |
| **Fee Rules** | Auto-populate fees | Business Rules → Fee Management |
| **Milestone Rules** | Auto-set milestones on conditions | Business Rules → Milestone Automation |
| **Document Rules** | Auto-request/assign documents | Business Rules → Document Automation |
| **Workflow Rules** | Task assignment and notification routing | Business Rules → Workflow Rules |
| **Alert Rules** | Display warnings/blocks on loan actions | Business Rules → Advanced Coding |

### Key Concepts

- **Conditions:** All rules use field-based conditions (Field ID + operator + value)
- **Evaluation:** Most rules evaluate on loan save; some evaluate on specific actions (lock request, milestone change)
- **Personas:** Many rules can be scoped to specific user personas
- **Priority:** Rules with ordering evaluate top-to-bottom; first match wins
- **Custom Fields:** CX.* fields can be used in conditions just like standard fields

## Common Mistakes

- **Confusing rule types** — Loan Folder Rules ≠ Workflow Rules ≠ Milestone Rules. Each serves a distinct purpose.
- **Not testing in a sandbox** — Business rule changes affect ALL loans. Test in a non-production environment first.
- **Overlapping conditions** — Two rules with overlapping conditions can cause unexpected behavior depending on evaluation order.

## Related Articles

- [Loan Folder Rules](./loan-folders.md)
- [Workflow Rules](./workflow-rules.md)

## External References

- [Resource Center](https://resourcecenter.elliemae.com/resourcecenter/encompass.aspx) (requires auth)
