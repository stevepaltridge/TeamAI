# Encompass SDK v25.4 — Query Engine, Reporting, CRM & Data Exchange

- **Status:** Complete
- **Tags:** SDK, query, pipeline, reporting, ERDB, CRM, contacts, data exchange, servicing, cursor
- **Last Updated:** 2026-03-02

---

## Question
How do I query loans in the pipeline, run reports, manage CRM contacts, and exchange data using the SDK?

## Short Answer
The SDK has a **15-type composable query engine** for pipeline searches, an **ERDB-backed reporting engine** (12 types, 7 report methods), a **42-type CRM system** with BorrowerContact (40 props) and BizContact (102 props), and a **data exchange API** (7 methods) for custom data objects and inter-user messaging. The query engine supports AND/OR composition, field-level sorting, and cursor-based paging for large result sets.

## Encompass Path
SDK: `Session.Loans.OpenPipeline()`, `Session.Reports`, `Session.Contacts`, `Session.DataExchange`

## Detailed Explanation

### Query Engine — 15 Types, Composable Criteria

Build complex queries using typed criterion objects that compose with AND/OR logic:

**Criterion Types:**
| Type | Purpose |
|------|---------|
| `QueryCriterion` | Base criterion class |
| `DateFieldCriterion` | Date range queries |
| `NumericFieldCriterion` | Numeric comparisons |
| `StringFieldCriterion` | Text matching (contains, starts with, equals) |
| `SortCriterion` | Result ordering |

**Composable Query Example:**
```csharp
// Find all FHA loans over $300K in processing
var criteria = new QueryCriterion[]
{
    new StringFieldCriterion("Fields.1172", "FHA", StringFieldMatchType.Exact),     // Loan type
    new NumericFieldCriterion("Fields.1109", 300000, OrdinalFieldMatchType.GreaterThan), // Amount
    new StringFieldCriterion("Fields.Log.MS.CurrentMilestone", "Processing", StringFieldMatchType.Exact)
};

// Combine with AND
var combined = QueryCriterion.AllOf(criteria);

// Or use OR logic
var either = QueryCriterion.AnyOf(criteria);

// Sort by loan amount descending
var sort = new SortCriterion("Fields.1109", SortOrder.Descending);
```

### Pipeline Cursor — Batch Processing

```csharp
// Open pipeline with criteria
LoanPipelineCursor cursor = session.Loans.OpenPipeline(combined);

// Efficient field-level access without opening each loan
foreach (PipelineData item in cursor) {
    string loanNumber = item["Fields.364"];       // Loan Number
    string borrower   = item["Fields.4000"];      // Borrower Name
    decimal amount    = item.GetField<decimal>("Fields.1109");
    
    // Check alerts
    var alerts = item.Alerts;
    
    // Check current lock status
    var lockInfo = item.CurrentLock;
    
    // Get loan identity for opening
    LoanIdentity id = item.LoanIdentity;
}

// Get available field names
string[] fields = cursor.GetFieldNames();

// Check access rights
var rights = cursor.GetAccessRights();
```

**Pipeline Intelligence:**
- `PipelineData.Item` — Basic loan identification
- `PipelineData.LoanIdentity` — Full identity for Loan.Open()
- `PipelineData.Alerts` — Active alerts on the loan
- `PipelineData.CurrentLock` — Rate lock status

> **Performance tip:** Pipeline queries read from the pipeline index, not individual loan files. This is orders of magnitude faster than opening each loan. Use pipeline queries for bulk reporting and filtering, then open specific loans only when you need full access.

### ERDB Reporting Engine — 12 Types

The Encompass Reporting Database (ERDB) provides SQL-like reporting across all loans:

**7 Report Methods:**
```csharp
// Open a report cursor (most common)
LoanReportCursor report = session.Reports.OpenReportCursor(
    reportFields,     // Fields to include
    criteria,         // Filter criteria
    sortCriteria      // Sort order
);

// Additional report methods
session.Reports.GetReportFieldDescriptors();    // Available fields
session.Reports.GetReportFieldDescriptor(id);   // Single field metadata
```

**LoanReportData:**
```csharp
foreach (LoanReportData row in report) {
    // Access typed field values
    string loanNum = row.GetField<string>("LoanNumber");
    DateTime? closed = row.GetField<DateTime?>("ClosedDate");
    decimal rate = row.GetField<decimal>("NoteRate");
}
```

**ReportingFieldDescriptor — 22 Members:**
- Field ID, name, description, data type
- Category, format, read-only status
- Sortable, filterable, groupable flags

### CRM & Contact Management — 42 Types

**BorrowerContact — 40 Properties, 8 Methods:**
```csharp
// Access contacts
var contacts = session.Contacts;

// Search for borrower contacts
var borrowers = contacts.GetBorrowerContacts(searchCriteria);

foreach (BorrowerContact contact in borrowers) {
    // Demographics (40 properties)
    string name    = contact.FullName;
    string email   = contact.Email;
    string phone   = contact.HomePhone;
    string ssn     = contact.SSN;           // Masked by default
    string address = contact.StreetAddress;
    
    // Financial
    decimal income = contact.MonthlyIncome;
    int score      = contact.CreditScore;
    
    // Relationship
    string lo      = contact.LoanOfficer;
    DateTime created = contact.DateCreated;
}
```

**BizContact — 102 Properties:**
Business contacts (realtors, title companies, appraisers, insurance agents, attorneys):
```csharp
var bizContacts = contacts.GetBizContacts(searchCriteria);

foreach (BizContact biz in bizContacts) {
    string company = biz.CompanyName;
    string license = biz.LicenseNumber;
    string nmlsId  = biz.NMLSId;
    string type    = biz.ContactType;   // e.g., "Appraiser", "Title"
}
```

**Contact-Related Types:**
- `Contact` (85 properties) — base contact class
- `ContactOpportunity` (63 properties) — sales opportunity tracking
- `ContactGroup` — contact segmentation
- `ContactTask` — tasks linked to contacts
- `ContactNote` — CRM notes
- `ContactAlert` — contact-level alerts

**8 Contact Methods:**
```csharp
contacts.GetBorrowerContacts(criteria);
contacts.GetBizContacts(criteria);
contacts.AddBorrowerContact(contact);
contacts.AddBizContact(contact);
contacts.UpdateBorrowerContact(contact);
contacts.UpdateBizContact(contact);
contacts.DeleteBorrowerContact(id);
contacts.DeleteBizContact(id);
```

### Data Exchange — 7 Methods

For custom data objects and inter-user messaging within Encompass:

```csharp
// Send data to a specific user
session.DataExchange.PostDataToUser(userId, "notification", data);

// Broadcast to all connected users
session.DataExchange.PostDataToAllUsers("system-alert", data);

// Post to current session
session.DataExchange.PostDataToSession("context-data", data);

// Custom Data Objects — persistent key-value store
session.DataExchange.GetCustomDataObject("my-config");
session.DataExchange.SaveCustomDataObject("my-config", data);
session.DataExchange.AppendCustomDataObject("my-log", data);
session.DataExchange.DeleteCustomDataObject("my-config");
```

**Use Cases:**
- Inter-plugin communication
- Custom application configuration stored within Encompass
- Audit logging to custom data objects
- User notification system
- Session-level shared state

### Servicing & Post-Close — 17 Types

For loans in the servicing phase:

```csharp
// Servicing types available
Payment payment;               // Individual payment record
PaymentReversal reversal;      // Payment reversal
PaymentSchedule schedule;      // Amortization / payment schedule
EscrowDisbursement escrow;     // Escrow account disbursements
PurchaseAdvice advice;         // Investor purchase advice
ServicingTransfer transfer;    // Servicing rights transfer
PayoffStatement statement;     // Payoff calculations
```

**Servicing Operations:**
- Record payments and reversals
- Manage escrow accounts
- Generate payoff statements
- Track servicing transfers
- Investor reporting

### Trade Management & Secondary Markets — 25 Types

**Correspondent Trading:**
```csharp
session.CorrespondentMaster;          // Correspondent relationships
session.CorrespondentTradeService;    // Trade execution
```

**GSE & Agency:**
```csharp
session.GSECommitmentService;         // Fannie/Freddie commitments
```

**Loan & Security Trades:**
```csharp
session.LoanTradeService;            // Whole loan trading
session.SecurityTradeService;        // Security-level trading
session.MbsPoolService;             // MBS pool management
session.LockDeskSettingsService;    // Lock desk configuration
```

**Trade Types Include:**
- Correspondent trades and commitments
- GSE commitments (FNMA, FHLMC)
- MBS pool creation and management
- Security trade execution
- Lock desk management
- Best efforts and mandatory delivery

## Key Fields / Objects
- `EllieMae.Encompass.Query.*` — 15 query types
- `EllieMae.Encompass.Reporting.*` — 12 reporting types
- `EllieMae.Encompass.Contacts.BorrowerContact` — 40 properties
- `EllieMae.Encompass.Contacts.BizContact` — 102 properties
- `EllieMae.Encompass.DataExchange.*` — 7 exchange methods
- `EllieMae.Encompass.Servicing.*` — 17 servicing types
- `EllieMae.Encompass.Trading.*` — 25 trade types

## Common Mistakes
1. **Opening loans for read-only queries** — Use `OpenPipeline()` or `OpenReportCursor()` instead of `Loans.Open()` when you only need a few fields. Pipeline queries are 100x faster.
2. **Not disposing cursors** — `LoanPipelineCursor` and `LoanReportCursor` hold server-side resources. Always dispose them.
3. **Confusing BorrowerContact vs. Loan Borrower** — `BorrowerContact` is a CRM record. The borrower ON a loan is `Loan.BorrowerPairs`. They're linked but separate.
4. **Custom data objects are NOT loan-level** — `DataExchange.GetCustomDataObject()` is session-level storage, not per-loan. For loan-level custom data, use virtual fields or custom loan data.
5. **ERDB vs. live data** — ERDB reporting may be slightly delayed (typically minutes). For real-time data, use pipeline queries or open the loan directly.

## Related Articles
- [sdk-loan-operations.md](sdk-loan-operations.md) — Loan object and field access
- [sdk-workflow-compliance.md](sdk-workflow-compliance.md) — Conditions and milestones
- [sdk-architecture.md](sdk-architecture.md) — Session and sub-API reference
- [sdk-forms-automation.md](sdk-forms-automation.md) — Custom forms and events

## External References
- SDK session data: `C:/Dev/TeamAI/data/be11146040/sdk-session-data.json` (6,152 lines — includes full user roster for query targets)
- Policy settings: `C:/Dev/TeamAI/data/be11146040/sdk-policy-settings.json` (200+ policies)
- SDK capability doc: `C:/Dev/TeamAI/docs/SDK-Advanced-Capabilities.html` (Pages 5-8)
