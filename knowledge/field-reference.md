# Common Encompass Field IDs

> **Status:** verified
> **Last updated:** 2026-03-02
> **Author:** ClaudeOpus4.6·c347
> **Tags:** field ID, field reference, encompass fields, data dictionary, MISMO

Quick reference for frequently-used Encompass field IDs. For the complete data dictionary, use the Encompass Schema API or export from Encompass Settings → Loan Setup → Loan Fields.

## Loan Information

| Field ID | Name | Notes |
|----------|------|-------|
| 3142 | Loan Folder | Current folder name |
| LOANFOLDER | Loan Folder (alt) | Alias for 3142 in some contexts |
| 364 | Loan Number | Encompass loan number |
| 19 | Loan Amount | Base loan amount |
| 1109 | Loan Purpose | Purchase, Refinance, etc. |
| 1172 | Loan Type | Conventional, FHA, VA, USDA |
| 3 | Interest Rate | Note rate |
| 4 | Loan Term (months) | Term in months |
| 1811 | Property Type | SFR, Condo, 2-4 Unit, etc. |
| 14 | Property Street Address | Subject property address |
| 15 | Property City | Subject property city |
| 12 | Property State | Subject property state |
| 1393 | Occupancy Type | Primary, Second Home, Investment |

## Borrower Info

| Field ID | Name | Notes |
|----------|------|-------|
| 4000 | Borrower First Name | Primary borrower |
| 4002 | Borrower Last Name | Primary borrower |
| 65 | Borrower SSN | Primary borrower SSN |
| 4004 | Co-Borrower First Name | Co-borrower |
| 4006 | Co-Borrower Last Name | Co-borrower |

## Milestones (Log.MS.Date.*)

| Field ID | Name | Notes |
|----------|------|-------|
| Log.MS.CurrentMilestone | Current Milestone | Active milestone name |
| Log.MS.Date.Application | Application | Date app received |
| Log.MS.Date.Submittal | Submittal | Submitted to processing |
| Log.MS.Date.Processing | Processing | Entered processing |
| Log.MS.Date.Underwriting | Underwriting | Sent to underwriting |
| Log.MS.Date.Approval | Approval | Approved |
| Log.MS.Date.Clear to Close | Clear to Close | CTC issued |
| Log.MS.Date.DocsDrawn | Docs Drawn | Closing docs drawn |
| Log.MS.Date.DocsSigning | Docs Signing | Docs out for signing |
| Log.MS.Date.Funding | Funding | Loan funded |
| Log.MS.Date.Shipping | Shipping | Shipped to investor |
| Log.MS.Date.Purchased | Purchased | Investor purchased |

## Users / Contacts

| Field ID | Name | Notes |
|----------|------|-------|
| 317 | Loan Officer Name | LO assigned to loan |
| 362 | Loan Processor Name | Processor assigned |
| 432 | Underwriter Name | UW assigned |
| NETEFOLDER.LoanOfficerID | LO User ID | For API/scripting |

## Custom Fields

Custom fields use the `CX.` prefix:
- `CX.FIELDNAME` — standard custom field
- `CX.FIELDNAME.1` through `CX.FIELDNAME.25` — indexed custom fields
- Custom fields are configured in: **Settings → Loan Setup → Loan Custom Fields**

## Virtual Fields

Virtual fields are read-only computed values. Common patterns:
- `VASUMM.*` — VA summary fields
- `HMDA.*` — HMDA reporting fields
- `Log.*` — Log/audit trail fields

## Notes

- Field IDs are case-sensitive in API calls
- Some fields have multiple IDs (e.g., 3142 and LOANFOLDER both reference the loan folder)
- For the full schema: `GET /encompass/v3/schemas/loan` via Developer Connect API
- To export all fields: Encompass Desktop → Reports → Fields
