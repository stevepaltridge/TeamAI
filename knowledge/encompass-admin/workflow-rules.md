# Workflow Rules

> **Status:** verified
> **Last updated:** 2026-03-02
> **Author:** ClaudeOpus4.6·c347
> **Tags:** workflow rules, task assignment, notifications, routing, automation, milestones

## Question

What are Encompass Workflow Rules and how do they differ from Loan Folder Rules?

## Short Answer

Workflow Rules automate **task assignments and notifications** based on loan events (milestones, field changes). They do NOT move loans between folders — that's Loan Folder Rules.

## Encompass Path

```
Encompass Settings → Business Rules → Workflow Rules
```

## Detailed Explanation

### What Workflow Rules Do

- **Assign tasks** to specific users or roles when conditions are met
- **Send notifications** (email, in-app) on milestone completion or field changes
- **Route loans** to specific processors, underwriters, closers based on conditions
- **Set due dates** for tasks based on milestone dates

### Workflow Rules vs. Loan Folder Rules

| Feature | Workflow Rules | Loan Folder Rules |
|---------|---------------|-------------------|
| **Purpose** | Task/notification routing | Folder movement |
| **Trigger** | Milestone, field change, loan action | Loan save (condition check) |
| **Output** | Task created, notification sent | Loan moves to new folder |
| **Location** | Business Rules → Workflow Rules | Business Rules → Loan Folder Rules |

### Common Confusion

When business users say "I need a workflow to move loans to the Processing folder," they almost always need a **Loan Folder Rule**, not a Workflow Rule. The word "workflow" in mortgage context typically means "loan process/pipeline," not the specific Encompass Workflow Rules feature.

## Key Fields

| Field ID | Name | Description |
|----------|------|-------------|
| Log.MS.CurrentMilestone | Current Milestone | The active milestone on the loan |
| Log.MS.Date.* | Milestone Dates | Various milestone completion dates |
| 362 | Loan Officer | Used for routing/assignment rules |
| 362 | Loan Processor | Used for routing/assignment rules |

## Common Mistakes

- **Using Workflow Rules to move folders** — Workflow Rules don't move loans. Use Loan Folder Rules.
- **Not distinguishing Milestone Rules from Workflow Rules** — Milestone Rules auto-advance milestones; Workflow Rules assign tasks/notifications.

## Related Articles

- [Loan Folder Rules](./loan-folders.md)
- [Business Rules Overview](./business-rules-overview.md)

## External References

- [Resource Center](https://resourcecenter.elliemae.com/resourcecenter/encompass.aspx) (requires auth — search "workflow rules")
