# Encompass SDK v25.4 — Workflow, Conditions & Compliance

- **Status:** Complete
- **Tags:** SDK, workflow, milestones, conditions, TRID, compliance, alerts, triggers, eFolder, lock, BPM
- **Last Updated:** 2026-03-02

---

## Question
How does the SDK manage loan workflow — milestones, conditions, TRID compliance, alerts, lock requests, and the eFolder document engine?

## Short Answer
The SDK provides full programmatic control over the entire loan lifecycle workflow: **47 milestone definitions** (41 active) with template assignment, a **13-state condition engine**, **18 TRID disclosure variants**, a **26-type alert system**, **8-state lock request lifecycle**, **162 audit log types**, and an **eFolder document engine** with eDelivery/eSign integration. All of these are read/write via the SDK — most are read-only or unavailable via REST.

## Encompass Path
SDK: `Session.Loans.Open(guid)` → `Loan.Log`, `Loan.Attachments`, `Session.ConfigurationManager`

## Detailed Explanation

### Milestone Engine — 47 Definitions (41 Active)

Our instance (BE11146040) has 47 milestone definitions. The active workflow sequence:

```
Started → Qualification → Disclosure Review → Processing → Submittal →
Conditional Approval → Resubmittal → Approval → Ready for Docs →
Doc Preparation → Docs Signing → Post Closing → Funding → Shipping →
Purchased → Account Reconciled → Servicing → MERS Transfer → Trailing Docs
```

**Additional milestone series:**
- **Construction:** Construction Start → Construction End → C&P Conversion
- **Broker:** Broker Submittal → Broker Approval → Broker Docs
- **CLD:** CLD Received → CLD Reviewed → CLD Cleared
- **Collateral:** Collateral Received → Collateral Reviewed
- **Custom (MortgageTech):** On Your Mark → Get Ready → Get Set → Go → UW → Decisioned → UWC → CTC
- **Completion:** Final milestone

**SDK Milestone Operations:**
```csharp
// Apply a specific milestone template
loan.ApplyManualMilestoneTemplate("Standard Workflow");

// Auto-select best matching template based on loan characteristics
loan.ApplyBestMatchingMilestoneTemplate();

// Access milestone log
foreach (var entry in loan.Log.MilestoneLog) {
    Console.WriteLine($"{entry.MilestoneName}: {entry.Date} by {entry.CompletedBy}");
}

// MilestoneTemplate management via ConfigurationManager
var templates = session.ConfigurationManager.GetMilestoneTemplates();
```

Each milestone has:
- **RoleID** — assigned role (Processor, Underwriter, Closer, etc.)
- **DefaultDays** — expected days to complete
- **Active/Archived** status

### Conditions Engine — 13 States

Full state machine for underwriting and closing conditions:

```
Added → Expected → Requested → Re-requested → Received → Reviewed → Cleared
                                                              ↓
                                                    Sent / Waived / Expired /
                                                    Fulfilled / PastDue / Rejected
```

| State | Description |
|-------|-------------|
| `Added` | Condition created |
| `Expected` | Anticipated but not yet required |
| `Requested` | Formally requested from borrower |
| `Re-requested` | Follow-up request sent |
| `Received` | Document/data received |
| `Reviewed` | Reviewed by underwriter |
| `Cleared` | Condition satisfied |
| `Sent` | Sent to borrower/third party |
| `Waived` | Waived by underwriter |
| `Expired` | Past deadline |
| `Fulfilled` | Fully satisfied (alternate to Cleared) |
| `PastDue` | Overdue |
| `Rejected` | Document rejected, re-request needed |

**SDK Condition Operations:**
```csharp
// Validate all conditions
loan.ValidateUnderwritingAdvancedConditions();

// Auto-generate conditions from AUS findings
// Auto-clear conditions on document receipt
// Auto-escalate on expiration
// Pre/post-save hooks:
loan.GetOnBeforeCommitExtensions();  // Pre-save
loan.GetOnCommittedExtensions();     // Post-save
```

### TRID & Compliance Engine — 18 Disclosure Variants

| Variant | Enum Value | When Used |
|---------|-----------|-----------|
| Loan Estimate | `LoanEstimate` | Initial LE disclosure |
| Closing Disclosure | `ClosingDisclosure` | Final CD |
| Revised LE | `RevisedLE` | Changed circumstances |
| Revised CD | `RevisedCD` | CD corrections |
| Corrected CD | `CorrectedCD` | Post-closing corrections |
| Initial TIL | `InitialTIL` | Truth-in-Lending initial |
| Revised TIL | `RevisedTIL` | TIL revision |
| + 11 additional | Various | Edge cases and corrections |

**UCD (Uniform Closing Dataset) Generation:**
```csharp
// Generate ULAD XML for Loan Estimate
string leXml = loan.GetUCDForLoanEstimate();

// Generate ULAD XML for Closing Disclosure
string cdXml = loan.GetUCDForClosingDisclosure();
```

**TRID Alert Triggers:**
- `RediscloseTIL` — TIL redisclosure needed
- `RediscloseGFERateLocked` — Rate lock triggers GFE redisclosure
- `RediscloseGFEChangedCircumstances` — Changed circumstances trigger
- `HUD1ToleranceViolation` — Fee tolerance exceeded
- `ClosingDateViolation` — Closing date problem
- `GFEExpires` — GFE expiration approaching

### Lock Request Lifecycle — 8 States

```
None → Pending → RateLocked → RateExpired
                     ↓
        LockExpired / Inactive / Denied / Cancelled
```

Rate lock integrates with:
- `LockDeskSettingsService` — lock desk configuration
- Automated expiration alerts
- Re-lock workflows
- 6 lock-related alert types

### Alert System — 26 Types

The SDK manages 26 alert types for automated workflow notifications:

**Compliance Alerts:**
- `RediscloseTIL`, `RediscloseGFERateLocked`, `RediscloseGFEChangedCircumstances`
- `HUD1ToleranceViolation`, `ClosingDateViolation`, `GFEExpires`

**Workflow Alerts:**
- Milestone overdue, condition past due, document expiring
- Lock expiration, rate change, fee adjustment

**Real-Time Monitoring:**
```csharp
// Subscribe to loan alerts via ServerEvents
session.ServerEvents.LoanMonitor.EventOccurred += (sender, e) => {
    if (e.Type == LoanMonitorEventType.Saved) {
        // Check for new alerts on loan save
    }
};
```

### eFolder Document Engine

**TrackedDocument — 162 Log Types:**
```csharp
// Access eFolder
var docs = loan.Attachments;

// Get specific document
TrackedDocument appraisal = docs["Appraisal"];

// Attach binary content
appraisal.Attach("C:\\docs\\appraisal.pdf");

// Download content
byte[] content = appraisal.GetAttachmentContent(0);
```

**Bulk Operations — CurrentDocumentsManager:**
```csharp
var mgr = loan.CurrentDocumentsManager;
mgr.RefreshAll();        // Refresh all document statuses
mgr.GetAllDocuments();   // Retrieve full document list
```

**eDelivery & eSign:**
- Integrated electronic delivery and signing
- Status tracking through document lifecycle
- Compliance audit trail for all delivery events

### Our Instance Trigger Configuration (SDK-Extracted)
From `triggers-config-sdk.json` — our active trigger rules:
- **Milestone Metrics Triggers** — 36 events tracking milestone timing
- **UW Signing Levels** — Underwriter authority tiers
- **TRID Untrigger Rules** — 6 events for TRID compliance
- **General Triggers** — 28 events for standard workflow
- **Rate/Fee Adjustment Triggers** — 26 events for pricing changes

**Key Policy Settings:**
- `MilestoneRollback = Enabled` — milestones can be rolled back (important for corrections)
- `AllowConcurrentEditing = False` — one user at a time per loan
- `WebHookEnabled = True` — REST API webhooks active alongside SDK events

## Key Fields / Objects
- `EllieMae.Encompass.Loans.MilestoneTemplate` — milestone workflow definition
- `EllieMae.Encompass.BusinessEnums.ConditionStatus` — 13-state condition enum
- `EllieMae.Encompass.BusinessEnums.StandardDisclosure2015Type` — 18 TRID variants
- `EllieMae.Encompass.BusinessEnums.LockRequestStatus` — 8 lock states
- `EllieMae.Encompass.Loans.Logging.*` — 162 audit log types
- `EllieMae.Encompass.Loans.TrackedDocument` — eFolder document object

## Common Mistakes
1. **Not checking milestone rollback policy** — Our instance allows rollback. Automations should account for milestones going backward.
2. **Ignoring condition state transitions** — Conditions follow a state machine. You can't jump from `Added` directly to `Cleared` — the intermediate states matter for compliance.
3. **TRID timing violations** — Disclosure timing is federally regulated. SDK automations must respect the required waiting periods between LE/CD issuance and closing.
4. **Lock desk vs. loan lock confusion** — `Loan.Lock()` is an editing lock (prevents concurrent edits). `LockRequestStatus` is a RATE lock (price commitment). Different concepts.
5. **Not using bulk eFolder operations** — For processing multiple documents, use `CurrentDocumentsManager` instead of iterating `Attachments` one at a time.

## Related Articles
- [sdk-loan-operations.md](sdk-loan-operations.md) — Loan object and field access
- [sdk-architecture.md](sdk-architecture.md) — Session and sub-APIs
- [sdk-query-reporting.md](sdk-query-reporting.md) — Pipeline and reporting
- [sdk-forms-automation.md](sdk-forms-automation.md) — Custom forms and real-time events

## External References
- Milestone definitions: `C:/Dev/TeamAI/data/be11146040/sdk-milestones.json` (47 milestones)
- Trigger rules: `C:/Dev/TeamAI/data/be11146040/triggers-config-sdk.json` (1,631 lines)
- Policy settings: `C:/Dev/TeamAI/data/be11146040/sdk-policy-settings.json` (200+ policies)
- SDK capability doc: `C:/Dev/TeamAI/docs/SDK-Advanced-Capabilities.html` (Pages 3-4)
