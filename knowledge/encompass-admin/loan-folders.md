# Loan Folder Rules — Automatic Loan Movement

> **Status:** verified
> **Last updated:** 2026-03-02
> **Author:** ClaudeOpus4.6·c347
> **Tags:** loan folder, loan folder rules, move loan, workflow, milestone, business rules, folder automation, exclude test, exclude employee, field 3142

## Question

How do I automatically move loans between folders in Encompass based on milestones or conditions, while excluding test/employee loan folders?

## Short Answer

Use **Loan Folder Rules** (not Workflow rules) under Encompass Settings → Business Rules → Loan Folder Rules. Each rule defines conditions (using milestone fields, loan fields, etc.) that trigger an automatic folder move. Exclude test/employee folders by adding a condition on the current loan folder (Field ID 3142).

## Encompass Path

```
Encompass Settings → Business Rules → Loan Folder Rules
```

- **Encompass Desktop:** Settings (gear icon) → Company/User Setup → Business Rules → Loan Folder Rules
- **Encompass Web (admin):** Settings → Loan Setup → Loan Folder Rules

> **Important:** This is NOT under Workflow Rules. "Workflow" in the user's email context likely means "loan workflow/process," not the Encompass Workflow Rules feature. Loan folder automation lives specifically in **Loan Folder Rules**.

## Detailed Explanation

### What Loan Folder Rules Do

Loan Folder Rules automatically move a loan from one folder to another when specified conditions are met. They evaluate on loan save and trigger folder moves without manual intervention.

### Setting Up a Rule

1. Navigate to **Settings → Business Rules → Loan Folder Rules**
2. Click **New** to create a rule
3. Configure:
   - **Rule Name:** Descriptive name (e.g., "Move to Processing at Submission")
   - **Destination Folder:** The folder loans will move TO
   - **Conditions:** Field-based conditions that must ALL be true for the move to trigger

### Excluding Test/Employee Folders

To prevent the rule from moving loans currently in test or employee folders, add **exclusion conditions** using Field 3142 (Current Loan Folder):

**Condition logic:**
```
Field 3142 (Loan Folder) != "Test Loans"
AND
Field 3142 (Loan Folder) != "Employee Loans"
AND
Field 3142 (Loan Folder) != "Training"
AND
[your milestone/trigger condition]
```

This ensures the rule only fires for loans in production folders.

### Using Milestones as Triggers

Common milestone-based triggers:

| Milestone Event | Typical Field | Example Condition |
|-----------------|---------------|-------------------|
| Application received | Log.MS.Date.Application | Is not empty |
| Submitted to Processing | Log.MS.Date.Submittal | Is not empty |
| Approved | Log.MS.Date.Approval | Is not empty |
| Docs Drawn | Log.MS.Date.DocsDrawn | Is not empty |
| Funded | Log.MS.Date.Funding | Is not empty |
| Shipped/Purchased | Log.MS.Date.Shipping | Is not empty |

### Rule Evaluation Order

- Rules evaluate **top to bottom** in the list
- **First matching rule wins** — the loan moves to that rule's destination folder
- Use the **Move Up / Move Down** buttons to set priority
- A loan can only be in one folder at a time

### Example Configuration

**Goal:** Move loans to "Processing" folder when submitted, but NOT if they're in Test/Employee folders.

| # | Condition | Operator | Value |
|---|-----------|----------|-------|
| 1 | Field 3142 (Loan Folder) | Not equal to | Test Loans |
| 2 | Field 3142 (Loan Folder) | Not equal to | Employee Loans |
| 3 | Log.MS.Date.Submittal | Is not empty | — |

**Destination Folder:** Processing

## Key Fields

| Field ID | Name | Description |
|----------|------|-------------|
| 3142 | Loan Folder | Current loan folder name. Use to exclude/include specific folders. |
| Log.MS.Date.Application | Application Milestone | Date application milestone was completed |
| Log.MS.Date.Submittal | Submittal Milestone | Date loan was submitted to processing |
| Log.MS.Date.Approval | Approval Milestone | Date loan was approved |
| Log.MS.Date.DocsDrawn | Docs Drawn Milestone | Date closing docs were drawn |
| Log.MS.Date.Funding | Funding Milestone | Date loan was funded |
| Log.MS.Date.Shipping | Shipping Milestone | Date loan was shipped to investor |
| Log.MS.Date.Clear to Close | Clear to Close Milestone | Date loan received clear to close |
| LOANFOLDER | Loan Folder (alternate) | Some contexts use LOANFOLDER instead of 3142 |

## Common Mistakes

- **Using Workflow Rules instead of Loan Folder Rules** — Workflow Rules handle task assignments and notifications, NOT folder moves. Loan folder automation is its own section under Business Rules.
- **Forgetting to exclude test folders** — Without the exclusion condition, test/training loans get moved into production folders, polluting reports and pipelines.
- **Not considering rule order** — If a more generic rule is above a more specific one, the generic rule fires first and the specific one never triggers.
- **Thinking milestones = Encompass field 3142** — Field 3142 is the FOLDER, not the milestone. Milestones use `Log.MS.Date.*` field IDs.
- **"Workflow" confusion** — When business users say "workflow" they often mean "loan process/pipeline." The Encompass feature for auto-moving folders is specifically called "Loan Folder Rules."

## Related Articles

- [Business Rules Overview](./business-rules-overview.md)
- [Workflow Rules](./workflow-rules.md)

## External References

- [Developer Connect — Loan Folders (API)](https://developer.icemortgagetechnology.com/developer-connect/docs/ucm-loan-folders)
- [Resource Center](https://resourcecenter.elliemae.com/resourcecenter/encompass.aspx) (requires auth — search "loan folder rules")
- [ICE Community Forums](https://ice-em.my.site.com/s/) (requires auth — search "loan folder move")
