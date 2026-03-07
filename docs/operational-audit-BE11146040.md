# Operational Audit: Encompass Instance BE11146040

**Audit Date:** 2026-06-26  
**Data Extract Date:** 2026-03-03 (REST API) / 2026-03-02 (SDK/SmartClient)  
**Reference Data:** Bayshore BRA export, 2026-02-21  
**Auditor:** TeamAI Automated Audit Engine  
**Instance:** BE11146040  

---

## Executive Summary

Instance BE11146040 is a **mature, retail-focused mortgage operation** with wholesale/broker and correspondent lending desk (CLD) capabilities configured. The instance shows evidence of **significant build-out work** (89 personas, 396 field triggers, 268 documents, 17,359 custom fields across 665 namespaces) but also carries **substantial configuration debt** accumulated over many years of operation.

**Overall Assessment: FUNCTIONAL BUT NEEDS REMEDIATION**

The instance can originate and close loans through its retail pipeline. However, multiple security, governance, and hygiene issues reduce operational efficiency and increase compliance risk. The most critical finding is that **all 17 loan access rules are disabled**, meaning there are no milestone-based access restrictions governing who can edit what at each pipeline stage.

### Risk Rating

| Category | Rating | Summary |
|----------|--------|---------|
| **Security & Access Control** | 🔴 HIGH RISK | All loan access rules disabled; archive folders with full permissions; 0 disabled users |
| **Data Governance** | 🟡 MEDIUM RISK | Flat org structure; stale investors; ad-hoc test folders |
| **Pipeline & Workflow** | 🟢 LOW RISK | Well-structured 19-stage retail pipeline with clear role assignments |
| **Compliance Readiness** | 🟡 MEDIUM RISK | TRID/URLA 2020 configured; duplicate loan check disabled; construction milestones incomplete |
| **Automation & Rules** | 🟡 MEDIUM RISK | 396 field triggers (243 from 2019 spike); only 9 changes since 2023; stagnation risk |
| **Configuration Hygiene** | 🔴 HIGH RISK | Typos in milestones, defunct investors, separator personas, personal test folders |

---

## 1. Pipeline & Milestones

### 1.1 Active Retail Pipeline (19 stages, sorts 1–19)

| Sort | Milestone | Role | Days | Notes |
|------|-----------|------|------|-------|
| 1 | Started | — | 0 | Entry point |
| 2 | Qualification | Loan Officer | 2 | |
| 3 | Disclosure Review | Loan Assistant | 0 | |
| 4 | Processing | Processor | 3 | |
| 5 | Submittal | Processor | 3 | |
| 6 | Cond. Approval | Underwriter | 3 | |
| 7 | Resubmittal | Processor | 5 | |
| 8 | Approval | Underwriter | 4 | |
| 9 | Ready for Docs | Processor | 1 | |
| 10 | Doc Preparation | Closer | 3 | |
| 11 | Docs Signing | — | 3 | No role assigned |
| 12 | Post Closing | Post Closer | 5 | |
| 13 | Funding | Funder | 4 | |
| 14 | Shipping | Shipper | 3 | |
| 15 | Purchased | — | 25 | No role assigned |
| 16 | Acct. Reconciled | Accounting | 2 | |
| 17 | Servicing | Servicer | 30 | |
| 18 | MERS Transfer | MERS Coordinator | 1 | |
| 19 | Trailing Docs | Final Docs | 40 | Terminal working stage |

**Assessment:** Well-structured pipeline with appropriate role assignments and SLA days. The 19-stage flow covers origination through post-closing servicing handoff. Two milestones (Docs Signing, Purchased) lack role assignments — these should be assigned to ensure accountability.

### 1.2 Additional Milestone Groups

| Group | Milestones | Status |
|-------|------------|--------|
| **Construction** (sorts 20–22) | Construction, Construction Approval, "Constuction Mod" | ⚠️ Minimally configured — 0 days, no roles |
| **Broker/Wholesale** (sorts 23–26) | Broker Initial → Broker Submitted → Broker Closed → Broker Completion | Configured for wholesale channel |
| **CLD/Delegated** (sorts 27–32) | CLD Preclosing Review → CLD Purchased | Correspondent lending desk |
| **Consumer-Facing** (sorts 34–41) | "On Your Mark (PQ)" through "CTC" | Consumer Connect status tracking |
| **Collateral** (sort 33) | Collateral | |
| **Completion** (sort 99999999) | Completion | Terminal milestone |

### 1.3 Archived Milestones (11 retired)

PurchasedII, Purchasing, Welcome Package, Credit Inquiry, Credit Qual, Credit App, Docs Out, Closing Request, Ready4Shipping, Ready4Purchase, Loan Purchase, Credit Report — all have negative sort indices. This indicates **at least one major pipeline redesign** in the instance's history.

### 1.4 Milestone Findings

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| M-1 | **Typo: "Constuction Mod"** — missing 'r' in Construction | Low | Correct spelling |
| M-2 | **Construction milestones have 0 days and no roles** — unusable for actual construction lending | Medium | Configure or archive if not used |
| M-3 | **CORRESPONDENT policy = False, but CLD milestones exist** (sorts 27–32) | Medium | Reconcile policy setting with milestone configuration |
| M-4 | **"Docs Signing" and "Purchased" milestones have no role assigned** | Low | Assign roles for accountability |

---

## 2. Loan Folders

### 2.1 Folder Structure (24 folders)

**Retail Pipeline:**
- `010-Leads` — Originate=Permit, all others Deny
- `020-Prospects` — Originate=Permit, all others Deny
- `030-Pipeline` — All Deny (move-to only)
- `110-Completed` — All Deny
- `210-Adverse` — All Deny

**Year Archives:** 121-Completed 2015, 122-Completed 2014, 123-Completed 2016, 221-Adverse 2015, 222-Adverse 2014, 223-Adverse 2016

**TPO:** 300-TPO Active, 310-TPO Closed, 312-Closed 2016, 320-TPO Adversed, 322-TPO Adversed 2016

**Special:** 410-Employee Loans, 510-Auditing, Training (archived)

**Ad-hoc:** Anne's Test Loans, Inactive Leads, Mindy Test Loans, TEST (archived)

### 2.2 Folder Findings

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| F-1 | **4 archive folders have ALL activity rules set to PERMIT** (123-Completed 2016, 223-Adverse 2016, 312-Closed 2016, 322-TPO Adversed 2016) | 🔴 High | Lock down all archived folder activity rules to Deny immediately |
| F-2 | **Ad-hoc personal test folders** (Anne's Test Loans, Mindy Test Loans, TEST) exist in production | Medium | Remove or archive with proper access controls |
| F-3 | **Only years 2014–2016 have dedicated archive folders** — no archives for 2017–2025 | Low | Determine if loans from later years are properly organized |
| F-4 | **300-TPO Active has ALL PERMIT rules** — overly permissive for a production TPO folder | Medium | Restrict activity rules appropriate to TPO workflow |

---

## 3. Users & Organizations

### 3.1 Users (53 total, 0 disabled)

| Category | Count | Examples |
|----------|-------|---------|
| Real staff | ~19 | Steve Paltridge, Mindy Paltridge, Nicole Stufflebeam, Jim Klein, Martha Murphy, Anne Moodey, etc. |
| "User Touches" test accounts | 9 | testunderwriter (JILL), testprocessor (SUE), testloanofficer (BOB), etc. |
| Role-based generic accounts | 8 | underwriter, processor, opener, officer, closer, funder, shipper, accounting |
| Tech/system accounts | 5 | admin, api-user, test, mortgagetech, joedev |
| Other test accounts | 12 | mindytest, nicoletest, jimtest, vineela, nik, andriy, adyatel, tpowcadmin, etc. |

### 3.2 User Findings

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| U-1 | **Zero disabled users across 53 accounts** — highly unusual for an active instance | 🔴 High | Audit all accounts; disable any that are not actively used. At minimum, the 9 User Touches test accounts, personal test accounts, and role-based generic accounts should be reviewed |
| U-2 | **9 "User Touches" demo accounts** (testunderwriter, testprocessor, etc.) with full names like JILL, SUE, BOB — appear to be demonstration/training accounts | Medium | Disable if not in active training use |
| U-3 | **Role-based generic accounts** (underwriter, processor, etc.) — shared accounts are a compliance concern as they obscure audit trails | Medium | Replace with individual user accounts per FFIEC guidelines |
| U-4 | **testpostcloser SAM has (Archive) as working folder** — unusual configuration | Low | Review and correct |

### 3.3 Organizations (74 total, ALL FLAT)

The instance has 74 organization entries organized conceptually as:
- **Corporate departments** (15): Administration, Operations, Compliance, Processing, Underwriting, Closing, Shipping, etc.
- **Department subdivisions** (Gateway, Management, Personnel) for each department
- **Branches** (3+): *Test Branch (9999), Branch 1 (B2000), Branch 2 w/ Sub Branches (B3000)
- **Branch subdivisions**: Loan Assistants, Processors, Managers, Loan Officers, X-Disabled LO's
- **Special**: X-Disabled Accounts, !Test Users, *Training, Vendor Accounts

### 3.4 Organization Findings

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| O-1 | **ALL 74 orgs at root level — no parent-child hierarchy** | 🔴 High | Implement proper org hierarchy. Sub-branches (B3000A, B3000B) should be children of Branch 2 (B3000). Department subdivisions should be children of their department. This is critical for reporting, access control inheritance, and management visibility |
| O-2 | **"X-Disabled LO's" org exists** but no users are actually disabled (see U-1) | Medium | Indicates intent to manage disabled accounts but follow-through is missing |

---

## 4. Personas (89 total)

### 4.1 Persona Categories

| Category | Count | Notable |
|----------|-------|---------|
| Named User roles | ~21 | Loan Officer, Processor, Underwriter, Closer, Funder, Post Closer, Shipper, Servicer, etc. |
| Departments | ~26 | Disclosure Desk, Secondary Marketing, Lock Desk, HMDA Team, Accounting, etc. |
| Management | ~10 | Branch Manager, Operations Manager, TPO Administrator, etc. |
| Gateways | 6 | LA Gateway, Disclosure Desk Gateway, Processing Gateway, UW Gateway, Closing Gateway, Post Closing Gateway |
| TPO | 4 | Portal Admin, Account Executive, LO (EXT), Processor (EXT) |
| Vendors | 3 | EssentNoMi, MIAC, MortgageTech |
| Special/Admin | ~13 | Administrator, All Users, Audit, Disabled, Discontinued, Read Only, etc. |
| **Separator entries** | **6** | -------NAMED USERS-------, -------DEPARTMENTS-------, etc. |

### 4.2 Persona Findings

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| P-1 | **Duplicate role pairs** — "Loan Underwriter" (id 12) vs "Underwriter" (id 267), "Loan Closer" (id 13) vs "Closer" (id 273), "Loan Funder" (id 15) vs "Funder" (id 274), "Loan Post Closer" (id 17) vs "Post Closer" (id 276), "Loan Shipper" (id 19) vs "Shipper" (id 278), "Loan Servicer" (id 20) vs "Servicer" (id 279) | Medium | Consolidate duplicate personas. Likely artifacts of a rationalization project that was started but not completed |
| P-2 | **"Discontinued" persona has defaultAccess=All** — anyone accidentally assigned this persona gets unrestricted access | 🔴 High | Change defaultAccess to None immediately |
| P-3 | **6 separator entries** (------NAMED USERS-------, etc.) consume persona slots as full objects | Low | These are a UI organizational technique but consume resources unnecessarily |
| P-4 | **Typo: "MANAGEMEMT"** instead of "MANAGEMENT" in separator persona | Low | Correct spelling |
| P-5 | **"Appraisal Order Desk" persona has defaultAccess=All** — verify this is intentional | Medium | Review whether full access is appropriate for this role |

---

## 5. Business Rules

### 5.1 Field Triggers (396 rules)

| Metric | Value |
|--------|-------|
| Total rules | 396 |
| Enabled | 363 (91.7%) |
| Disabled | 33 (8.3%) |
| With advancedCode (VBScript/C#) | 141 (35.6%) |

**Modification Year Distribution:**

| Year | Count | Notes |
|------|-------|-------|
| 2011–2014 | 10 | Legacy rules |
| 2015 | 44 | TRID implementation year |
| 2016–2018 | 38 | |
| **2019** | **243** | **Massive spike — major automation project or migration** |
| 2020 | 22 | |
| 2021 | 13 | |
| 2022 | 7 | Declining activity |
| 2023 | 10 | |
| 2024 | 3 | |
| 2025 | 4 | |
| 2026 | 2 | Near-zero activity |

**Assessment:** The 2019 spike (61% of all triggers modified in one year) indicates a major automation initiative. Since then, trigger development has effectively stopped — only 26 modifications across 4+ years. This suggests the rules are in maintenance-only mode with no active development or refinement.

### 5.2 Data Entry Rules (126 rules)

| Metric | Value |
|--------|-------|
| Total rules | 126 |
| Enabled | 96 (76.2%) |
| Disabled | 30 (23.8%) |

Key rule categories observed: General Field Rule, File Must be Locked, Case Number Validation, MERS/MIN Validation, Order Docs Button Rules, Lock request field validation, NMLS validation, ADVERSE action series (General Borrower/Co-Borrower for 2009/2020 forms, HELOC, Member Number, Refinance).

**Assessment:** Solid set of data quality and compliance validation rules. The ADVERSE action series indicates proper decline/denial workflow. The 24% disabled rate is within normal range for iterative development.

### 5.3 Field Access Rules (58 rules)

| Metric | Value |
|--------|-------|
| Total rules | 58 |
| Enabled | 46 (79.3%) |
| Disabled | 12 (20.7%) |

Notable rules: General Field Access, Rate is Locked, GFE/Itemization lockdown after disclosure, TRID form version lockdown (multiple), USDA management for insuring, ARI field restriction, ATR/QM controls, PFQC read-only access, Mavent fail lockdown.

**Notable entries of concern:**
- `testtest` — test rule left enabled
- `!!!test1` — test rule left enabled
- `!!!test2` — test rule (disabled)
- `Jeannene Disclosure Testing` — personal test rule (disabled)
- `No eDisclosures on Thursday` — day-of-week restriction (disabled, possibly seasonal)

### 5.4 Loan Access Rules (17 rules) — ⚠️ CRITICAL FINDING

| Metric | Value |
|--------|-------|
| Total rules | 17 |
| **ALL DISABLED** | **17 (100%)** |

All 17 loan access rules — including 14 milestone-stage rules (01.00 File Started through 14.00 Completion), "Zombie Loan Rule," "When File Suspended," and "02.00 Qualification Finished" — are **disabled (status=0)**.

This means: **No milestone-based access restrictions are enforced.** Any user with loan access can edit any fields on any loan regardless of what pipeline stage it is in. This is one of the most fundamental access control mechanisms in Encompass.

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| BR-1 | **All 17 loan access rules disabled** — no milestone-based access restrictions | 🔴 Critical | Enable loan access rules with appropriate persona access rights per milestone. This is the single highest-priority remediation item |
| BR-2 | **Test rules left enabled** in field access rules (testtest, !!!test1) | Medium | Disable or remove test rules from production |
| BR-3 | **141 field triggers contain advancedCode** (VBScript/C#) — high maintenance burden, fragile | Medium | Document all advanced code rules; consider migrating critical logic to supported automation |
| BR-4 | **Field trigger development effectively stopped** — only 9 rule changes since 2023 | Low | Assess whether automation needs are being met or if the team has simply stopped maintaining rules |

### 5.5 Milestone Requirements (36 rules)

| Metric | Value |
|--------|-------|
| Total rules | 36 |
| Enabled | 3 (8.3%) |
| Disabled | 33 (91.7%) |
| With actual content (tasks/docs/fields) | 27 |

**Assessment:** Only 3 of 36 milestone requirement rules are enabled. Combined with all loan access rules being disabled, this means the pipeline has very few enforced gates. Loans can progress through milestones with minimal validation.

---

## 6. System Settings

### 6.1 Investor Templates (47 total)

Well-populated investor list covering Fannie Mae, Ginnie Mae, Wells Fargo, US Bank, PennyMac, Caliber, and 40+ others.

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| S-1 | **5 defunct investors still active:** GMAC (bankrupt 2012), Green Tree (merged 2015), Stearns Lending (closed 2020), Stonegate (merged 2016), SunTrust (merged into Truist 2019) | Medium | Remove or archive defunct investor templates |
| S-2 | **TypeOfPurchaser misclassification** — many investors incorrectly tagged as "Life Insurance Co." (e.g., PennyMac, Flagstar, Provident) | Medium | Correct TypeOfPurchaser values for HMDA and reporting accuracy |
| S-3 | **Compensation settings empty** — `{}` | Low | Verify if compensation is managed outside Encompass |
| S-4 | **Tables/Fees settings empty** — `{}` | Low | Verify if managed via separate configuration |
| S-5 | **DBScriptFolder points to local dev path** `C:\Dev\EncompassSettingsPlugin\DBScripts\` | Low | Not a production concern if only used for development |

### 6.2 Key Policy Settings

| Setting | Value | Assessment |
|---------|-------|------------|
| URLA 2020 | Effective 12/23/2020 | ✅ Current |
| TRID (NewRESPA2015) | Effective 10/3/2015 | ✅ Current |
| Enhanced Conditions Workflow | Enabled (12/12/2020) | ✅ Good |
| Concurrent Editing | Disabled | ✅ Correct for data integrity |
| Milestone Rollback | Enabled | ✅ Flexible |
| IP Restriction | Enabled | ✅ Security-positive |
| Lock Expiration | 60 days, business calendar | ✅ Standard |
| Lock Extension Daily Price Adj | 0.125 | ✅ Industry standard |
| Duplicate Loan Check | **Disabled** | ⚠️ Risk |
| Lock Desk Schedule | **Not configured** (all times empty) | ⚠️ Gap |
| Billing Model | Closed Loan (milestone 6 = Funding) | ✅ Standard |
| Data Lake | Enabled | ✅ Good |
| WebHooks | Enabled | ✅ Good |
| Loan Event Publishing | Enabled | ✅ Good |
| Loan Soft Archival | Enabled | ✅ Good |
| Enable All Channel | True | ✅ Supports multiple channels |
| CORRESPONDENT | False | ⚠️ Conflicts with CLD milestones |
| Trade Management | Enabled (BidTape, MBS Pool, FMP Mandatory GSE) | ✅ Sophisticated secondary marketing |
| Relock | Enabled | ✅ |
| Lock Cancellation | Enabled, requires form | ✅ Good governance |
| DisplayBusinessRuleOption | Enabled | ✅ Users can see which rule fired — aids troubleshooting |
| Autosave | 300 seconds (5 min) | ✅ Standard |

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| PS-1 | **DuplicateLoanCheck disabled** — no automatic detection of duplicate loan applications | Medium | Enable to prevent duplicate originations |
| PS-2 | **Lock Desk Schedule not configured** — all start/end times empty | Low | Configure if lock desk has defined business hours |
| PS-3 | **CORRESPONDENT=False but CLD milestones exist** | Medium | Enable correspondent setting or archive CLD milestones if correspondent channel is not active |

---

## 7. Documents, Tasks & Alerts

### 7.1 Documents (268 defined)

Well-organized document library using consistent naming conventions:
- **Prefixed categories** (156 docs): `*ASSET:`, `*CLOSING:`, `*COMPLIANCE:`, `*CREDIT:`, `*DISCL:`, `*EMPLOYMENT:`, `*FHA:`, `*ID:`, `*INCOME:`, `*INV:`, `*LOCK:`, `*MANF:`, `*OTC:`, `*PROPERTY:`, `*SUSPENSE:`, `*TITLE:`, `*USDA:`, `*UW:`, `*VA:`
- **TRID-prefixed** (7 docs): `~TRID` prefix for TRID-specific docs
- **Standard forms** (80+ docs): 1003, Loan Estimate, Closing Disclosure, etc.
- **Post Closing Conditions** (20): Numbered 1–20
- **Underwriting Conditions** (11): `xUW Condition 1–10` plus main UW Conditions doc
- **Special/legacy** (5): `!!AKA`, `!!Fax Cover Sheet`, `!Audit!`, `!Participation Package!`, `* Junk`

**Assessment:** Document library is comprehensive and well-categorized. The asterisk/tilde prefixing convention provides good sorting and grouping in the eFolder UI.

### 7.2 Tasks (130 defined)

Task library covers the full loan lifecycle:
- Milestone progression tasks (Move to Processing, Move to Submittal)
- Income/asset review tasks (Review Paystubs, Bank Statement reviews, Income Calculation)
- Credit tasks (Run AUS, DU findings, CAIVRS, LDP/GSA, Fraud Guard)
- Government loan tasks (FHA Case Number, VA COE, USDA/RD, FHA 203K)
- Title/property tasks (Order Appraisal, Flood Cert, Title, USPS)
- Compliance tasks (HMDA, Disclosure Review, QC Review, 4506-T)
- Closing/post-closing tasks (Final Docs, Shipping, MERS, Insuring)

**Assessment:** Solid task library reflecting mature operational processes. No milestone assignments were found in the export data (all show `milestone: none`), which may be an export limitation or may indicate tasks are not pre-assigned to specific milestones.

### 7.3 Alerts (88 total: 68 standard + 20 custom)

| Status | Count |
|--------|-------|
| Enabled | 77 (87.5%) |
| Disabled | 11 (12.5%) |

**Disabled alerts of note:**
- `Milestone Finished` — basic workflow notification disabled
- `Document Expected` / `Document Expired` — document tracking alerts disabled
- `Milestone Expected` — milestone SLA alerts disabled
- `Estimated Closing Date Has Passed!` — critical compliance alert disabled

**Custom alerts (20 total, 15 enabled):** Include TRID compliance alerts, key pricing field change notifications, credit pull reminders (25 days), VVOE reminders, appraisal due date tracking, MI checks, CTC countdown (10 days), and UW decision alerts.

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| A-1 | **"Milestone Finished" and "Milestone Expected" alerts disabled** — team does not receive milestone workflow notifications | Medium | Enable if milestone-based workflow visibility is desired |
| A-2 | **"Estimated Closing Date Has Passed!" disabled** — no alert when closing dates slip | Medium | Enable to support closing date compliance |
| A-3 | **"Document Expected" and "Document Expired" disabled** — no automated document follow-up | Medium | Enable to support document management workflow |
| A-4 | **"Test Alert" is enabled** | Low | Disable or remove |

---

## 8. Custom Fields (17,359 total)

### 8.1 Distribution

| Metric | Value |
|--------|-------|
| Total fields | 17,359 |
| CX-named (modern) | 17,259 (99.4%) |
| CUSTxxFV (legacy) | 99 (0.6%) |
| CUSTnnn (legacy) | 1 (<0.1%) |
| With descriptions | 17,332 (99.8%) |
| Calculated fields | 3,082 (17.8%) |
| Total namespaces | 665 |

### 8.2 Top Namespaces

| Namespace | Count | Likely Purpose |
|-----------|-------|----------------|
| CX.FX.* | 2,031 | Forms / Form Extensions |
| CX.(root) | 1,229 | Unnamespaced fields |
| CX.PC.* | 920 | Post Closing |
| CX.CM.* | 627 | Compliance / Case Management |
| CX.CC.* | 626 | Closing Conditions |
| CX.DRAW.* | 471 | Construction Draws |
| CX.SU.* | 467 | Submittal / Underwriting Submission |
| CX.UW.* | 377 | Underwriting |
| CX.LS.* | 370 | Loan Servicing |
| CX.LE.* | 329 | Loan Estimate |
| CX.TMS.* | 281 | Task Management System |
| CX.SAM.* | 257 | SmartAdvisor / Secondary Marketing |
| CX.CLD.* | 235 | Correspondent Lending Desk |
| CX.UWIC.* | 230 | UW Income Calculation |
| CX.CIBI.* | 221 | CI/BI (Credit/Income Business Intelligence) |

### 8.3 Format Distribution

| Format | Count | % |
|--------|-------|---|
| STRING | 6,399 | 36.9% |
| DECIMAL_2 | 3,027 | 17.4% |
| DATE | 1,964 | 11.3% |
| X (checkbox) | 1,706 | 9.8% |
| DROPDOWNLIST | 1,535 | 8.8% |
| INTEGER | 765 | 4.4% |
| YN (Yes/No) | 657 | 3.8% |
| AUDIT | 500 | 2.9% |
| DECIMAL_3 | 347 | 2.0% |
| Other | 459 | 2.6% |

**Assessment:** The custom field library is substantial (17,359) but well-organized with 99.4% using the modern CX. naming convention and 99.8% having descriptions. The 665 namespaces indicate extensive departmental customization. The 3,082 calculated fields (17.8%) represent significant business logic embedded in field definitions. The CX.DRAW.* namespace (471 fields) confirms active construction lending support despite the minimally configured construction milestones (see M-2).

---

## 9. Consolidated Findings

### Critical (Immediate Action Required)

| ID | Finding | Impact |
|----|---------|--------|
| **BR-1** | All 17 loan access rules disabled | No milestone-based access restrictions. Any user can edit any loan field at any pipeline stage. Fundamental security control missing. |
| **P-2** | "Discontinued" persona has defaultAccess=All | Accidental assignment grants unrestricted access |
| **F-1** | 4 archive folders (2016 vintage) have all activity rules set to PERMIT | Archived loans can be fully modified — originate, submit, close, delete |
| **U-1** | Zero disabled users across 53 accounts | Test, departed, and generic shared accounts remain active — expands attack surface and compliance exposure |
| **O-1** | All 74 orgs at root level — no hierarchy | No organizational access control inheritance; branch managers cannot be scoped to their branches; regulatory reporting (HMDA) may be affected |

### High Priority

| ID | Finding | Impact |
|----|---------|--------|
| BR-2 | Test rules enabled in production (testtest, !!!test1) | Unintended field access behavior |
| S-1 | 5 defunct investors (GMAC, Green Tree, Stearns, Stonegate, SunTrust) | Loan assignment errors; investor reporting inaccuracies |
| U-3 | Shared role-based accounts (underwriter, processor, etc.) | Audit trail opacity; FFIEC compliance concern |
| F-4 | TPO Active folder all-PERMIT | Overly permissive for third-party originator folder |

### Medium Priority

| ID | Finding | Impact |
|----|---------|--------|
| M-3 | CORRESPONDENT=False but CLD milestones exist | Configuration inconsistency |
| PS-1 | Duplicate Loan Check disabled | Duplicate origination risk |
| P-1 | 6 duplicate persona pairs | User assignment confusion; inconsistent access profiles |
| S-2 | TypeOfPurchaser misclassification across multiple investors | HMDA/reporting impact |
| A-1/A-2/A-3 | Key workflow alerts disabled (Milestone, Document, Closing Date) | Reduced operational visibility |
| BR-3 | 141 field triggers with advancedCode | Maintenance burden; undocumented business logic |
| P-5 | Appraisal Order Desk has defaultAccess=All | Potential over-access |

### Low Priority / Hygiene

| ID | Finding | Impact |
|----|---------|--------|
| M-1 | Typo: "Constuction Mod" | Professional appearance |
| M-2 | Construction milestones unconfigured | Won't function for construction lending workflow |
| P-3/P-4 | Separator personas; "MANAGEMEMT" typo | Persona slot waste; appearance |
| F-2 | Ad-hoc test folders in production | Governance gap |
| A-4 | "Test Alert" enabled | Unnecessary alert |
| BR-4 | Field trigger development stagnation | Potential automation gap |

---

## 10. Recommendations Summary

### Immediate (Week 1)

1. **Enable loan access rules** — configure persona-based access rights for each milestone stage. Start with the 14 milestone progression rules, then address Zombie Loan and Suspension rules.
2. **Change "Discontinued" persona defaultAccess to None** — one-click fix to close a critical security gap.
3. **Lock down 4 archive folders** — set all activity rules to Deny on 123-Completed 2016, 223-Adverse 2016, 312-Closed 2016, 322-TPO Adversed 2016.
4. **Disable test rules** (testtest, !!!test1, Test Alert).

### Short-Term (Weeks 2–4)

5. **User account audit** — disable all accounts not in active use. Target: reduce from 53 to ~25 active accounts.
6. **Implement org hierarchy** — restructure 74 orgs with proper parent-child relationships.
7. **Remove defunct investors** — archive or delete 5 stale investor templates.
8. **Consolidate duplicate personas** — merge 6 pairs of duplicate role personas.
9. **Enable DuplicateLoanCheck**.

### Medium-Term (Months 2–3)

10. **Configure construction milestones** properly if construction lending is active (CX.DRAW.* namespace suggests it is).
11. **Enable key workflow alerts** — Milestone Expected, Document Expected, Closing Date monitoring.
12. **Correct TypeOfPurchaser** values across investor templates for HMDA accuracy.
13. **Document all 141 advancedCode field triggers** — assess which contain critical business logic and which are obsolete.
14. **Reconcile CORRESPONDENT policy** with CLD milestones.

---

## Appendix A: Data Source Inventory

| File | Size | Records | Status |
|------|------|---------|--------|
| custom-fields-v1.json | 4.5 MB | 17,359 | ✅ Analyzed |
| custom-fields-v3.json | 6.4 MB | 17,359 | Available (v3 format) |
| persona-details-v1.json | 3.0 MB | 89 | ✅ Analyzed |
| ref-field-triggers.json | 1.8 MB | 396 | ✅ Analyzed |
| ref-field-access-rules.json | 1.4 MB | 58 | ✅ Analyzed |
| ref-data-entry-rules.json | 311 KB | 126 | ✅ Analyzed |
| ref-input-forms.json | 15 MB | — | Available (not analyzed — forms/layout data) |
| alerts-v1.json | 173 KB | 88 | ✅ Analyzed |
| ref-loan-access-rules.json | 75 KB | 17 | ✅ Analyzed |
| ref-milestone-requirements.json | 73 KB | 36 | ✅ Analyzed |
| ref-tasks.json | 39 KB | 130 | ✅ Analyzed |
| ref-documents.json | 28 KB | 268 | ✅ Analyzed |
| sdk-milestones.json | 16 KB | 54 | ✅ Analyzed |
| sdk-system-settings.json | 10 KB | 47 investors | ✅ Analyzed |
| sdk-policy-settings.json | 10 KB | — | ✅ Analyzed |
| users-v1.json | 24 KB | 53 | ✅ Analyzed |
| organizations-v1.json | 14 KB | 74 | ✅ Analyzed |
| loan-folders-v1.json | 7 KB | 24 | ✅ Analyzed |

---

*End of Operational Audit — Instance BE11146040*
