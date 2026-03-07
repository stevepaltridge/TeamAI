# CX.LOCKSNAPCHECKALL Bug Discovery and Live Fix Report

**Prepared by:** AI Agent (GitHub Copilot, Claude Opus 4.6)  
**Requested by:** Steve Paltridge  
**Date:** June 2025  
**Encompass Instance:** BE11146040 (Testbed/Demo Server)  
**Status:** FIX APPLIED AND VERIFIED  

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Background — What We Were Doing](#background)
3. [The Lock Snapshot System Explained](#lock-snapshot-system)
4. [API Capability Testing — Finding What We Could Change](#api-capability-testing)
5. [Bug Discovery — The Copy-Paste Error](#bug-discovery)
6. [Business Impact — What This Bug Meant](#business-impact)
7. [The Fix — Exactly What Changed](#the-fix)
8. [Implementation — How We Applied It](#implementation)
9. [Verification — Proving It Worked](#verification)
10. [The Fix Script — Full Source Code](#fix-script)
11. [Technical Reference](#technical-reference)
12. [Appendix: Complete Lock Snapshot Field Map](#appendix)

---

## 1. Executive Summary <a name="executive-summary"></a>

During an AI-assisted audit of Encompass instance BE11146040, we discovered a **copy-paste bug** in a calculated custom field called **CX.LOCKSNAPCHECKALL** — the master aggregator for the lock snapshot comparison system.

The bug: **`[CX.LOCKSNAPLOAN11]` (Warn Interest Rate) was referenced twice**, while **`[CX.LOCKSNAPLOAN20]` (Warn Margin) was never referenced at all**. This means the system's check for whether any lock snapshot field had changed was **silently ignoring margin changes**.

We fixed this live via the Encompass REST API. The fix was applied as a PATCH to the custom field's calculation, verified via a subsequent GET, and the field now correctly checks all 10 loan-level warning fields (LOCKSNAPLOAN11 through LOCKSNAPLOAN20), each exactly once.

**This is the first time we have demonstrated that the AI agent can not only analyze an Encompass configuration but actually modify it — finding a real bug and fixing it via the API in a single session.**

---

## 2. Background — What We Were Doing <a name="background"></a>

### Prior Work

Over previous sessions, the AI agent had already completed three major analyses of instance BE11146040:

1. **Admin Support Knowledge Base** — A comprehensive reference document covering all configured business rules, custom fields, personas, roles, and loan programs.
2. **Operational Audit** — A review of the instance's overall configuration health.
3. **Rule Quality Assessment** — A detailed grading of business rule quality (resulting in a grade of **B-**), which included identification of potential issues in field calculations and business logic.

### The Request

Steve asked: **"Could you effect a change to a rule to make it work or better?"**

This was a pivotal moment — moving from *analysis* (read-only) to *action* (read-write). The goal was to demonstrate that the AI agent could not only find problems but actually fix them, live, on a real Encompass instance.

### The Challenge

Before we could fix anything, we needed to determine which parts of the Encompass configuration could be modified via the REST API. This required testing multiple endpoints to see which ones would accept write operations.

---

## 3. The Lock Snapshot System Explained <a name="lock-snapshot-system"></a>

To understand the bug, you need to understand what the Lock Snapshot system does.

### Purpose

The Lock Snapshot system is a set of approximately **70 custom fields** that work together to **compare the current state of a loan against a snapshot taken at the time the rate was locked**. If any key field has changed since the lock, the system flags it for review.

### How It Works

The system uses four categories of fields, each following the same pattern:

| Category | Prefix | What It Tracks |
|----------|--------|---------------|
| **Program** | LOCKSNAPPROG | Loan program details (Rate, Price, Program Name, etc.) |
| **Loan** | LOCKSNAPLOAN | Loan-level data (Interest Rate, Amount, LTV, FICO, etc.) |
| **Property** | LOCKSNAPPROP | Property details (Type, County, State, Zip) |
| **Profit** | LOCKSNAPPROF | Profitability measures |

Within each category, there are two sets of fields:

- **Data Fields** (numbered 01–10): Store the snapshot value or perform a comparison calculation.
- **Warning Fields** (numbered 11–20): Contain a formula that evaluates to either `"REVIEW DIFFERENCE"` or `"VALID"` by comparing current loan data against the snapshot.

### The Master Aggregator: CX.LOCKSNAPCHECKALL

The field **CX.LOCKSNAPCHECKALL** is the master roll-up. Its calculation is a single large `Iif()` expression that checks **every warning field** across all four categories. If **any** warning field equals `"REVIEW DIFFERENCE"` (or `"SHORT FUNDS"` for the profit check), the master field returns `"REVIEW DIFFERENCES"`. Otherwise, it returns `"VALID"`.

Think of it as a giant logical OR across all the individual checks:

```
If (ANY warning field = "REVIEW DIFFERENCE") → "REVIEW DIFFERENCES"
Else → "VALID"
```

This is likely used in the UI to display a summary status indicator and/or to drive business rules that gate lock-related workflows.

---

## 4. API Capability Testing — Finding What We Could Change <a name="api-capability-testing"></a>

Before we could fix anything, we needed to find out what the Encompass REST API would let us modify.

### What We Tested

We systematically tested write access to every major configuration endpoint:

| Endpoint | Method | Result | HTTP Status |
|----------|--------|--------|-------------|
| `/encompass/v1/settings/loan/fieldLockRules` | POST | **Blocked** | 403 Forbidden |
| `/encompass/v1/settings/loan/fieldTriggerRules` | POST | **Blocked** | 403 Forbidden |
| `/encompass/v1/settings/loan/fieldAccessRights` | POST | **Blocked** | 403 Forbidden |
| `/encompass/v1/settings/loan/automatedConditions` | POST | **Blocked** | 403 Forbidden |
| `/encompass/v1/settings/loan/customFields/{id}` | GET | **Works** | 200 OK |
| `/encompass/v1/settings/loan/customFields/{id}` | PATCH | **Works** | 204 No Content |
| `/encompass/v1/settings/loan/customFields` | POST | **Blocked** | 403 Forbidden |

### Key Finding

**Custom field PATCH is the one write operation that works.** All business rules endpoints return 403, meaning our API products don't include those write permissions. But we *can* modify existing custom field definitions — including their calculated field formulas.

This focused our fix candidates: we needed to find a bug in a **custom field calculation**, not in a business rule.

### Authentication Discovery

During testing, we also resolved an important technical detail: the Encompass API requires a **qualified username format**:

```
username@encompass:INSTANCE_ID
```

For example: `steve@encompass:BE11146040`

Sending just the bare username (without the `@encompass:INSTANCE_ID` suffix) returns a 401 "Invalid username or password" error. This pattern was found by examining the existing `ice-api.js` utility in our codebase.

---

## 5. Bug Discovery — The Copy-Paste Error <a name="bug-discovery"></a>

### How We Found It

During the field analysis phase, we retrieved the live calculation for CX.LOCKSNAPCHECKALL via the API. When we examined the references against the known field mapping, a pattern violation jumped out.

### The Original (Buggy) Calculation

Here is the original calculation, with the problem highlighted:

```
Iif(
  [CX.LOCKSNAPPROG11]="REVIEW DIFFERENCE" OR    ← Warn Rate (Program)
  [CX.LOCKSNAPPROG12]="REVIEW DIFFERENCE" OR    ← Warn Price
  [CX.LOCKSNAPPROG13]="REVIEW DIFFERENCE" OR    ← Warn Program Name
  [CX.LOCKSNAPPROG14]="REVIEW DIFFERENCE" OR    ← Warn Product
  [CX.LOCKSNAPPROG15]="REVIEW DIFFERENCE" OR    ← Warn Investor
  [CX.LOCKSNAPPROG16]="REVIEW DIFFERENCE" OR    ← Warn # of Days
  [CX.LOCKSNAPPROG17]="REVIEW DIFFERENCE" OR    ← Warn Expiration Date
  [CX.LOCKSNAPPROG18]="REVIEW DIFFERENCE" OR    ← Warn Lock Date
  [CX.LOCKSNAPLOAN11]="REVIEW DIFFERENCE" OR    ← Warn Int Rate       ✓
  [CX.LOCKSNAPLOAN11]="REVIEW DIFFERENCE" OR    ← Warn Int Rate AGAIN ✗ DUPLICATE!
  [CX.LOCKSNAPLOAN12]="REVIEW DIFFERENCE" OR    ← Warn Ln Amt
  [CX.LOCKSNAPLOAN13]="REVIEW DIFFERENCE" OR    ← Warn Occ
  [CX.LOCKSNAPLOAN14]="REVIEW DIFFERENCE" OR    ← Warn Doc Type
  [CX.LOCKSNAPLOAN15]="REVIEW DIFFERENCE" OR    ← Warn Purp
  [CX.LOCKSNAPLOAN16]="REVIEW DIFFERENCE" OR    ← Warn LTV
  [CX.LOCKSNAPLOAN17]="REVIEW DIFFERENCE" OR    ← Warn CLTV
  [CX.LOCKSNAPLOAN18]="REVIEW DIFFERENCE" OR    ← Warn FICO
  [CX.LOCKSNAPLOAN19]="REVIEW DIFFERENCE" OR    ← Warn DTI
                                                   ← LOCKSNAPLOAN20 MISSING! (Warn Margin)
  [CX.LOCKSNAPPROP11]="REVIEW DIFFERENCE" OR    ← Warn Property Type
  [CX.LOCKSNAPPROP12]="REVIEW DIFFERENCE" OR    ← Warn County
  [CX.LOCKSNAPPROP13]="REVIEW DIFFERENCE" OR    ← Warn State
  [CX.LOCKSNAPPROP14]="REVIEW DIFFERENCE" OR    ← Warn Zip
  [CX.LOCKSNAPPROF18]="SHORT FUNDS",
  "REVIEW DIFFERENCES",
  "VALID"
)
```

### The Diagnostic

| Field | Expected Count | Actual Count | Status |
|-------|---------------|--------------|--------|
| LOCKSNAPLOAN11 (Warn Int Rate) | 1 | **2** | DUPLICATE |
| LOCKSNAPLOAN12 (Warn Ln Amt) | 1 | 1 | OK |
| LOCKSNAPLOAN13 (Warn Occ) | 1 | 1 | OK |
| LOCKSNAPLOAN14 (Warn Doc Type) | 1 | 1 | OK |
| LOCKSNAPLOAN15 (Warn Purp) | 1 | 1 | OK |
| LOCKSNAPLOAN16 (Warn LTV) | 1 | 1 | OK |
| LOCKSNAPLOAN17 (Warn CLTV) | 1 | 1 | OK |
| LOCKSNAPLOAN18 (Warn FICO) | 1 | 1 | OK |
| LOCKSNAPLOAN19 (Warn DTI) | 1 | 1 | OK |
| LOCKSNAPLOAN20 (Warn Margin) | 1 | **0** | **MISSING** |

### Root Cause

This is a classic **copy-paste error**. When building the `Iif()` expression, someone copied the `LOCKSNAPLOAN11` line to start the loan section, then pasted and incremented the numbers for 12 through 19. But the first paste was never changed from 11, and the final entry (20, for Warn Margin) was never added.

---

## 6. Business Impact — What This Bug Meant <a name="business-impact"></a>

### What Was Happening

The CX.LOCKSNAPCHECKALL field serves as the system's master "anything changed?" indicator. Because LOCKSNAPLOAN20 was never checked:

- **If the loan's margin changed after the lock snapshot was taken, the master check field would still show "VALID".**
- The individual field CX.LOCKSNAPLOAN20 would correctly show "REVIEW DIFFERENCE" for that specific comparison, but the top-level aggregator would not pick it up.
- Any workflow, UI indicator, or business rule that depended on CX.LOCKSNAPCHECKALL to detect post-lock changes would **miss margin changes entirely**.

### Risk Level

For ARM (Adjustable Rate Mortgage) loans, margin is a critical pricing component. A change in margin after lock could represent a significant pricing discrepancy that this system was designed to catch — but wasn't catching.

The duplicate LOCKSNAPLOAN11 reference was **harmless** (checking the same field twice in an OR is redundant but doesn't break logic). The **missing LOCKSNAPLOAN20** was the real problem — it created a silent gap in the comparison system.

---

## 7. The Fix — Exactly What Changed <a name="the-fix"></a>

### Before vs. After

The fix was surgical — only two changes to the calculation:

| Change | Before | After |
|--------|--------|-------|
| **Line 10** (was duplicate LOCKSNAPLOAN11) | `[CX.LOCKSNAPLOAN11]="REVIEW DIFFERENCE" OR` | *(removed)* |
| **After LOCKSNAPLOAN19** | *(nothing — jumped straight to LOCKSNAPPROP11)* | `[CX.LOCKSNAPLOAN20]="REVIEW DIFFERENCE" OR` *(added)* |

### The Fixed Calculation

```
Iif(
  [CX.LOCKSNAPPROG11]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPPROG12]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPPROG13]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPPROG14]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPPROG15]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPPROG16]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPPROG17]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPPROG18]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPLOAN11]="REVIEW DIFFERENCE" OR     ← x1 only now
  [CX.LOCKSNAPLOAN12]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPLOAN13]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPLOAN14]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPLOAN15]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPLOAN16]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPLOAN17]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPLOAN18]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPLOAN19]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPLOAN20]="REVIEW DIFFERENCE" OR     ← NEW — Warn Margin now checked
  [CX.LOCKSNAPPROP11]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPPROP12]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPPROP13]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPPROP14]="REVIEW DIFFERENCE" OR
  [CX.LOCKSNAPPROF18]="SHORT FUNDS",
  "REVIEW DIFFERENCES",
  "VALID"
)
```

### Verification Check Built Into the Script

Before applying the fix, the script programmatically verified that **every LOCKSNAPLOAN field from 11 to 20 appears exactly once** in the fixed calculation. This prevents any future copy-paste errors from slipping through.

---

## 8. Implementation — How We Applied It <a name="implementation"></a>

### Step-by-Step Process

1. **Authenticated** via OAuth2 password grant to the Encompass API (`api.elliemae.com`).

2. **Retrieved the current state** of CX.LOCKSNAPCHECKALL via GET to confirm what was on the server.

3. **Validated the fix** programmatically — regex-counted every LOCKSNAPLOAN reference to confirm the fixed calculation was correct.

4. **Applied the fix** via PATCH:
   ```
   PATCH /encompass/v1/settings/loan/customFields/CX.LOCKSNAPCHECKALL
   ```
   Request body:
   ```json
   {
     "description": "Lock Snapshot - Indicate Review",
     "format": "STRING",
     "maxLength": 15,
     "calculation": "<fixed calculation>"
   }
   ```
   
   **Response: 204 No Content** (success)

5. **Verified** via a follow-up GET that the saved calculation matches what we sent.

### Obstacles Overcome During Implementation

| Problem | Cause | Resolution |
|---------|-------|------------|
| 401 "Invalid username or password" | Sent bare username | Added `@encompass:BE11146040` suffix (found in ice-api.js) |
| 400 "Format is empty" | PATCH body missing `format` | Added `format: "STRING"` |
| 400 "Invalid value of max length" | PATCH body missing `maxLength` | Added `maxLength: 15` |
| 400 "Please provide description" | PATCH body missing `description` | Added `description` field |
| Calculation was blank on server | Earlier test PATCH had accidentally cleared it | Hardcoded original calculation in fix script, applied fix from known-good source |

The last point deserves explanation: during initial API write testing (before the bug fix), a test PATCH was sent to this field without including the `calculation` property. The API interpreted this as "set calculation to empty." The fix script accounted for this by carrying both the original buggy calculation (for documentation) and the fixed calculation (for application), applying the fix from known-good data.

---

## 9. Verification — Proving It Worked <a name="verification"></a>

After the PATCH returned 204, a GET request was made to read back the field:

```
GET /encompass/v1/settings/loan/customFields/CX.LOCKSNAPCHECKALL
```

**Results:**

| Check | Value | Expected | Status |
|-------|-------|----------|--------|
| HTTP Status | 200 | 200 | PASS |
| `isCalculatedField` | `true` | `true` | PASS |
| LOCKSNAPLOAN11 count | 1 | 1 | PASS |
| LOCKSNAPLOAN20 count | 1 | 1 | PASS |
| Full calculation matches | Yes | Yes | PASS |

**Console output from the fix script:**

```
=== CX.LOCKSNAPCHECKALL Bug Fix ===

Authenticated.

=== Calculation Diff ===
Diagnostic:
  Original: LOCKSNAPLOAN11 x2, LOCKSNAPLOAN20 x0
  Fixed:    LOCKSNAPLOAN11 x1, LOCKSNAPLOAN20 x1
  All LOCKSNAPLOAN 11-20: each appears exactly once. GOOD.

=== Applying PATCH ===
PATCH status: 204

=== Verification GET ===
isCalculatedField: true

Final verification:
  LOCKSNAPLOAN11: 1 (expected 1)
  LOCKSNAPLOAN20: 1 (expected 1)

  FIX APPLIED AND VERIFIED SUCCESSFULLY!

  What changed:
  - Removed duplicate [CX.LOCKSNAPLOAN11] reference
  - Added missing [CX.LOCKSNAPLOAN20] (Warn Margin)
  - Lock snapshot margin comparisons are now properly checked
```

---

## 10. The Fix Script — Full Source Code <a name="fix-script"></a>

The complete script is at: `scripts/fix-locksnapcheckall.js`

It is a self-contained Node.js script that:

1. Authenticates to the Encompass API using environment credentials (from `.env`)
2. Carries both the original buggy calculation and the fixed calculation as string constants
3. Programmatically validates the fix (regex counts for all LOCKSNAPLOAN 11–20)
4. Reads the current server state via GET
5. Applies the fix via PATCH
6. Verifies the result via a follow-up GET
7. Reports pass/fail for every validation check

Dependencies: `https` (built-in Node.js), `dotenv` (for environment variables).

### To Run It Again (if needed)

```bash
cd C:\Dev\TeamAI
node scripts/fix-locksnapcheckall.js
```

The script is **idempotent** — running it again will simply re-apply the same correct calculation.

---

## 11. Technical Reference <a name="technical-reference"></a>

### API Details

| Item | Value |
|------|-------|
| API Host | `api.elliemae.com` |
| Auth Endpoint | `POST /oauth2/v1/token` |
| Auth Type | OAuth2 Password Grant |
| Username Format | `user@encompass:INSTANCE_ID` |
| Custom Field Read | `GET /encompass/v1/settings/loan/customFields/{fieldId}` |
| Custom Field Update | `PATCH /encompass/v1/settings/loan/customFields/{fieldId}` |

### Required PATCH Body Fields

When patching a custom field, the API requires ALL of these:

| Field | Type | Description |
|-------|------|-------------|
| `description` | string | Field description (mandatory, returns 400 without it) |
| `format` | string | Data format, e.g., "STRING" |
| `maxLength` | integer | Maximum field length |
| `calculation` | string | The Iif() formula (for calculated fields) |

Omitting any of these produces a 400 Bad Request with a specific error message.

### Files Created/Used in This Process

| File | Purpose |
|------|---------|
| `scripts/fix-locksnapcheckall.js` | The fix script (main deliverable) |
| `scripts/ice-api.js` | Existing GET-only API utility (referenced for auth format) |
| `scripts/test-api-write.js` | API write capability testing script |
| `data/be11146040/custom-fields-v1.json` | Local backup of all custom field definitions |
| `.env` | API credentials (not committed to source control) |

---

## 12. Appendix: Complete Lock Snapshot Field Map <a name="appendix"></a>

### Loan Fields (LOCKSNAPLOAN)

| Data Field | Description | Warning Field | Description |
|------------|-------------|---------------|-------------|
| LOCKSNAPLOAN01 | Interest Rate | LOCKSNAPLOAN11 | Warn Int Rate |
| LOCKSNAPLOAN02 | Loan Amount | LOCKSNAPLOAN12 | Warn Ln Amt |
| LOCKSNAPLOAN03 | Occupancy | LOCKSNAPLOAN13 | Warn Occ |
| LOCKSNAPLOAN04 | Doc Type | LOCKSNAPLOAN14 | Warn Doc Type |
| LOCKSNAPLOAN05 | Purpose | LOCKSNAPLOAN15 | Warn Purp |
| LOCKSNAPLOAN06 | LTV | LOCKSNAPLOAN16 | Warn LTV |
| LOCKSNAPLOAN07 | CLTV | LOCKSNAPLOAN17 | Warn CLTV |
| LOCKSNAPLOAN08 | FICO | LOCKSNAPLOAN18 | Warn FICO |
| LOCKSNAPLOAN09 | DTI | LOCKSNAPLOAN19 | Warn DTI |
| LOCKSNAPLOAN10 | Margin | **LOCKSNAPLOAN20** | **Warn Margin** ← was missing |

### Additional Loan Fields

| Field | Description |
|-------|-------------|
| LOCKSNAPLOAN22H / 22L | Threshold High/Low (field 22) |
| LOCKSNAPLOAN23 | Additional field |
| LOCKSNAPLOAN24 | Additional field |
| LOCKSNAPLOAN26H / 26L | Threshold High/Low (field 26) |
| LOCKSNAPLOAN27H / 27L | Threshold High/Low (field 27) |
| LOCKSNAPLOAN28–31 | Additional fields |

### Program Fields (LOCKSNAPPROG)

| Data Field | Description | Warning Field | Description |
|------------|-------------|---------------|-------------|
| LOCKSNAPPROG01 | Rate | LOCKSNAPPROG11 | Warn Rate |
| LOCKSNAPPROG02 | Price | LOCKSNAPPROG12 | Warn Price |
| LOCKSNAPPROG03 | Program Name | LOCKSNAPPROG13 | Warn Program Name |
| LOCKSNAPPROG04 | Product | LOCKSNAPPROG14 | Warn Product |
| LOCKSNAPPROG05 | Investor | LOCKSNAPPROG15 | Warn Investor |
| LOCKSNAPPROG06 | # of Days | LOCKSNAPPROG16 | Warn # of Days |
| LOCKSNAPPROG07 | Expiration Date | LOCKSNAPPROG17 | Warn Expiration Date |
| LOCKSNAPPROG08 | Lock Date | LOCKSNAPPROG18 | Warn Lock Date |
| LOCKSNAPPROG09 | (unused) | — | — |

### Property Fields (LOCKSNAPPROP)

| Data Field | Description | Warning Field | Description |
|------------|-------------|---------------|-------------|
| LOCKSNAPPROP01 | Property Type | LOCKSNAPPROP11 | Warn Property Type |
| LOCKSNAPPROP02 | County | LOCKSNAPPROP12 | Warn County |
| LOCKSNAPPROP03 | State | LOCKSNAPPROP13 | Warn State |
| LOCKSNAPPROP04 | Zip Code | LOCKSNAPPROP14 | Warn Zip |

### Profit Fields (LOCKSNAPPROF)

| Data Field | Description | Warning Field | Description |
|------------|-------------|---------------|-------------|
| LOCKSNAPPROF01–08 | Profit data | LOCKSNAPPROF18 | Short Funds check |

### Utility Fields

| Field | Description |
|-------|-------------|
| **CX.LOCKSNAPCHECKALL** | **Master aggregator — the field we fixed** |
| CX.LOCKSNAPTIME | Timestamp of when the snapshot was taken |
| CX.LOCKSNAP.BY | User who took the snapshot |

---

## Summary

This session demonstrated end-to-end AI-assisted configuration management:

1. **Discovered** a real bug through systematic analysis of field calculations
2. **Diagnosed** the exact nature and impact of the copy-paste error  
3. **Tested** API capabilities to determine what could be fixed programmatically
4. **Built** a fix script with built-in validation and verification
5. **Applied** the fix live via the Encompass REST API
6. **Verified** the fix was correctly saved on the server

The Lock Snapshot system's margin comparison is now properly included in the master check, closing a gap that would have allowed post-lock margin changes to go undetected.

---

*This document was generated from the complete conversation between Steve Paltridge and the AI agent during the bug discovery and fix session. The fix script (`scripts/fix-locksnapcheckall.js`) serves as both the implementation tool and an audit trail of exactly what was changed.*
