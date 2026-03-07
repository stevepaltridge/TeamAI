# Encompass SDK v25.4 — Loan Object & Operations

- **Status:** Complete
- **Tags:** SDK, loan, fields, lock, commit, export, import, pipeline, borrower, eFolder, AI
- **Last Updated:** 2026-03-02

---

## Question
What can the SDK do with individual loans? How do I open, modify, lock, export, and manage loans programmatically?

## Short Answer
The `Loan` object has **46 properties** and **49 methods** — it's the largest single object in the SDK (1,938 members total). You can open/create/lock/unlock/force-lock/commit/close/move/delete/export/import loans, access all 17,359 fields, manage borrower pairs, read the full audit trail (162 log types), work with eFolder documents, and run AI analysis (income, asset, document classification, AIQ credit model).

## Encompass Path
SDK: `Session.Loans.Open(guid)` → `EllieMae.Encompass.Loans.Loan`

## Detailed Explanation

### Opening & Creating Loans
```csharp
// Open by GUID
Loan loan = session.Loans.Open("{guid-here}");

// Open by loan number
Loan loan = session.Loans.Open("2024001234");

// Create new loan in folder
Loan loan = session.Loans.CreateNew("My Pipeline\\Active Loans");

// Create from template
Loan loan = session.Loans.CreateNew("folder", templatePath);
```

### 46 Key Properties
| Property | Type | Description |
|----------|------|-------------|
| `Fields` | LoanFields | **All 17,359 fields** — read/write by field ID |
| `BorrowerPairs` | BorrowerPairCollection | Multiple borrower pairs |
| `CurrentBorrowerPair` | BorrowerPair | Active borrower pair |
| `Liabilities` | LiabilityCollection | All liabilities |
| `Mortgages` | MortgageCollection | Current mortgages |
| `Deposits` | DepositCollection | Deposit accounts |
| `Attachments` | AttachmentCollection | eFolder attachments |
| `AuditTrail` | AuditTrailCollection | **162 log types** |
| `Log` | LogCollections | Milestone/conversation/status logs |
| `Servicing` | LoanServicing | Post-close servicing data |
| `LoanFolder` | string | Current folder location |
| `GUID` | string | Unique loan identifier |
| `LoanNumber` | string | Human-readable loan number |
| `Locked` | bool | Whether loan is currently locked |
| `LockedBy` | string | User who holds the lock |
| `LastModified` | DateTime | Last save timestamp |
| `MilestoneCurrentName` | string | Active milestone |
| `Associates` | LoanAssociates | Assigned team members |

### 49 Key Methods

**Lifecycle:**
| Method | Description |
|--------|-------------|
| `Lock()` | Acquire exclusive write lock |
| `Unlock()` | Release lock |
| `ForceLock()` | Break another user's lock (admin only) |
| `Commit()` | Save all changes to server |
| `Refresh()` | Reload from server |
| `Close()` | Release loan object |

**Operations:**
| Method | Description |
|--------|-------------|
| `Move(folderName)` | Move loan to different folder |
| `Delete()` | Permanently delete loan |
| `Recalculate()` | Trigger all field calculations |
| `ExecuteCalculation(options)` | Run specific calculation triggers |
| `ApplyTemplate(templatePath)` | Apply loan template |
| `ApplyTemplateSet(templateSetPath)` | Apply template set |
| `ApplyMilestoneTemplate(name)` | Set milestone workflow |
| `ApplyBestMatchingMilestoneTemplate()` | Auto-select best template |

**Export/Import:**
| Method | Description |
|--------|-------------|
| `Export(format)` | Export to FNMA 3.0/3.2, MISMO 2.3.1/2.4/2.6, AUS, EDRS, etc. |
| `Import(format, data)` | Import from FNMA 3.x, FNMA 3.4, ILAD |
| `ImportWithTemplate(format, data, template)` | Import with template application |
| `ImportWithLoanOfficer(format, data, lo)` | Import assigning LO |
| `ImportFromBytes(format, bytes)` | Import from byte array |
| `GetUCDForLoanEstimate()` | Generate ULAD XML for LE |
| `GetUCDForClosingDisclosure()` | Generate ULAD XML for CD |

**Access Control:**
| Method | Description |
|--------|-------------|
| `GetAccessRights()` | Current user's effective rights |
| `GetAssignedAccessRights()` | Explicitly assigned rights |
| `GetEffectiveAccessRights()` | Computed rights after group/persona |
| `GetUsersWithAssignedRights()` | All users with access |
| `AssignRights(userId, rights)` | Grant/revoke access |

**Extensions:**
| Method | Description |
|--------|-------------|
| `GetOnBeforeCommitExtensions()` | Pre-save hook plugins |
| `GetOnCommittedExtensions()` | Post-save hook plugins |
| `ValidateUnderwritingAdvancedConditions()` | Condition validation |

### Field Access — 17,359 Fields
```csharp
// Read a field
string loanAmount = loan.Fields["1109"].ToString();  // Loan Amount
string loanNumber = loan.Fields["364"].ToString();    // Loan Number
string borrowerName = loan.Fields["4000"].ToString(); // Borrower Name
string loanProgram = loan.Fields["1401"].ToString();  // Loan Program
string rate = loan.Fields["3"].ToString();            // Interest Rate

// Write a field
loan.Fields["1109"].Value = 350000;
loan.Fields["3"].Value = 6.875;
loan.Commit();  // Save changes

// Check if field is locked
bool isLocked = loan.Fields["1109"].Locked;

// Get field descriptor
var desc = loan.Fields["1109"].Descriptor;
string fieldName = desc.Description;  // "Loan Amount"
```

### Export Formats — 10 Options
| Format | Enum Value | Use Case |
|--------|-----------|----------|
| FNMA 3.0 | `FNMA30` | Fannie Mae legacy |
| FNMA 3.2 | `FNMA32` | Fannie Mae current |
| MISMO 2.3.1 Closing | `CLOSING231` | Standard closing |
| MISMO 2.4 Closing | `CLOSING24` | Updated closing |
| MISMO 2.6 Closing | `CLOSING26` | Latest closing |
| MISMO 2.3.1 AUS | `AUS231` | AUS submission |
| MISMO 2.4 AUS | `AUS24` | Updated AUS |
| CWLEDA | `CWLEDA` | Countrywide legacy |
| EDRS | `EDRS` | Electronic doc recording |
| Loan Delivery | `LOANDELIVERY` | Investor delivery |

### Import Formats — 3 Options
| Format | Enum Value | Methods |
|--------|-----------|---------|
| FNMA 3.x | `FNMA3X` | `Import()`, `ImportWithTemplate()`, `ImportWithLoanOfficer()` |
| FNMA 3.4 | `FNMA34` | All import methods |
| ILAD | `ILAD` | All import methods |

### AI Engine (SDK-Only)
```csharp
// Income Analysis AI
var incomeResult = loan.AnalyzeIncome();

// Asset Analysis AI
var assetResult = loan.AnalyzeAssets();

// Document Classification AI — 300+ document types
var docResult = loan.ClassifyDocuments();

// AIQ Credit Model
var aiqResult = loan.RunAIQCreditModel();
```

### eFolder Document Operations
```csharp
// Get all tracked documents
var docs = loan.Attachments;

// Access specific document
TrackedDocument doc = docs["Appraisal"];

// Attach file
doc.Attach("C:\\appraisal.pdf");

// Download attachment
byte[] content = doc.GetAttachmentContent(attachmentIndex);

// Bulk operations via CurrentDocumentsManager
var mgr = loan.CurrentDocumentsManager;
mgr.RefreshAll();

// eDelivery / eSign integration
var eDeliver = loan.eDelivery;
var eSign = loan.eSign;
```

### Calculation Triggers — 12 Options
```csharp
// Execute specific calculations
loan.ExecuteCalculation(CalculationTriggerOptions.DDM);
loan.ExecuteCalculation(CalculationTriggerOptions.RESPA2015);
loan.ExecuteCalculation(CalculationTriggerOptions.AggregateEscrow);
loan.ExecuteCalculation(CalculationTriggerOptions.MIP);
loan.ExecuteCalculation(CalculationTriggerOptions.RecalculateHMDA);
```
Full list: DDM, RESPA2015, AggregateEscrow, MIP, FHA203K, MLDS, PTCPOC, USDAMIP, TPO, COPYLIABILITIESTOPG3, RECALCULATEHMDA, plus general `Recalculate()`.

### Audit Trail — 162 Log Types
The `Loans.Logging` namespace (largest in the SDK) tracks every loan action:
| Log Type | What It Tracks |
|----------|---------------|
| `MilestoneLog` | Milestone completion events |
| `ConversationLog` | Internal messages/notes |
| `StatusOnlineLog` | Status changes |
| `LockDenialLog` | Lock denial events |
| `DocumentLog` | Document events (attach, send, sign) |
| `ComplianceLog` | Compliance check results |
| `PostClosingLog` | Post-close actions |
| `PrintLog` | Print events |

## Key Fields / Objects
- `EllieMae.Encompass.Loans.Loan` — 46 properties, 49 methods, 1,938 total members
- `EllieMae.Encompass.Loans.LoanFields` — access to all 17,359 fields
- `EllieMae.Encompass.Loans.Logging` — 162 audit trail types
- `EllieMae.Encompass.Loans.BorrowerPair` — borrower data object
- `EllieMae.Encompass.Loans.TrackedDocument` — eFolder document

## Common Mistakes
1. **Not locking before writing** — Always call `loan.Lock()` before modifying fields. Without a lock, `Commit()` will fail. Our instance has `AllowConcurrentEditing = False`.
2. **Forgetting to Commit()** — Field changes are local until `Commit()` is called. No auto-save.
3. **Not closing loans** — Always call `loan.Close()` when done. Leaving loans open holds resources and can block other users.
4. **Using wrong field IDs** — Field IDs are numeric strings (e.g., "1109" for Loan Amount). Use `loan.Fields[id].Descriptor.Description` to verify.
5. **Bulk operations without cursors** — Don't open 1,000 loans individually. Use `Session.Loans.OpenPipeline()` for bulk reads and selective field projections.
6. **Ignoring ForceLock() audit trail** — ForceLock breaks another user's lock. It's logged and should only be used for stuck loans, not routine automation.

## Related Articles
- [sdk-architecture.md](sdk-architecture.md) — Session connection & sub-APIs
- [sdk-write-capabilities.md](sdk-write-capabilities.md) — REST vs SDK comparison
- [sdk-workflow-compliance.md](sdk-workflow-compliance.md) — Milestones, conditions, TRID
- [sdk-query-reporting.md](sdk-query-reporting.md) — Pipeline queries & ERDB

## External References
- Full field list: `C:/Dev/TeamAI/data/be11146040/custom-fields.json` (17,359 fields)
- Pipeline fields: `C:/Dev/TeamAI/data/be11146040/pipeline-fields.json` (1,529 fields)
- SDK capability doc: `C:/Dev/TeamAI/docs/SDK-Advanced-Capabilities.html` (Pages 1-2)
