# Encompass SDK v25.4 — Forms, UI Automation, Real-Time Events & System Admin

- **Status:** Complete
- **Tags:** SDK, forms, automation, UI, controls, events, plugins, monitors, users, ACL, system settings, external orgs
- **Last Updated:** 2026-03-02

---

## Question
How do I build custom Encompass desktop forms, subscribe to real-time events, manage plugins, control user access, and administer system settings via the SDK?

## Short Answer
The SDK includes **EncompassAutomation.dll** (138 types) for building custom desktop forms with standard UI controls, event binding, and field linking. A **real-time event engine** offers 5 monitors with 22 event types for live loan/session monitoring. The SDK also provides **User & Organization management** (22 types, 103 feature flags), **ACL control** (8 methods including impersonation), **External Organization** management (25 types), and **System Settings** administration — all writable only through the SDK, not REST.

## Encompass Path
SDK: `EncompassAutomation.dll` → `CodeBase`, `Session.ServerEvents`, `Session.Users`, `Session.Organizations`, `Session.SystemSettings`

## Detailed Explanation

### Form Designer — 138 Types (EncompassAutomation.dll)

Custom Encompass desktop forms are built using types from `EncompassAutomation.dll`:

**Entry Point — CodeBase:**
```csharp
// CodeBase is the entry point for all custom form plugins
public class MyCustomForm : CodeBase
{
    public override void Run()
    {
        // Access the loan object
        var loan = this.Loan;
        
        // Access form controls
        var amountField = this.GetControl<DropdownEditBox>("txtLoanAmount");
        amountField.Value = loan.Fields["1109"].FormattedValue;
        
        // Bind to field updates
        amountField.Change += (s, e) => {
            loan.Fields["1109"].Value = amountField.Value;
        };
    }
}
```

**UI Controls Available:**
| Control | Purpose |
|---------|---------|
| `Button` | Clickable action button |
| `CheckBox` | Boolean toggle |
| `DropdownBox` | Fixed selection list |
| `DropdownEditBox` | Editable dropdown (combo box) |
| `CategoryBox` | Categorized selection |
| `Calendar` | Date picker |
| `ContactButton` | Contact lookup button |
| `ContainerControl` | Panel / group container |
| `ContentControl` | Rich content area |
| `DesignerControl` | Base for custom controls |
| `Label` | Static text display |
| `TextBox` | Text input |

**Core Infrastructure:**
- `Control` — base class for all UI elements
- `ControlCollection` — form control container
- `ControlEvent` — event routing
- `CopyBuffer` — clipboard operations
- `BorrowerLink` — borrower pair navigation

**12 Event Interfaces:**
| Interface | Purpose |
|-----------|---------|
| `ISupportsEvents` | Base event support |
| `ISupportsLoadEvent` | Form load handler |
| `ISupportsClickEvent` | Button/control click |
| `ISupportsChangeEvent` | Value change handler |
| `ISupportsFocusEvent` | Focus gain/loss |
| `ISupportsPopupEvent` | Popup/dialog events |
| `ISupportsFormatEvent` | Display formatting |
| `ISupportsDateSelected` | Calendar date selection |
| `ISupportsDataBind` | Data binding to fields |
| `IActionable` | Command execution |
| `ILog` | Logging interface |
| `ILogErrorData` | Error logging data |

**Pattern for a Complete Custom Form:**
```csharp
public class LoanSummaryForm : CodeBase, 
    ISupportsLoadEvent, ISupportsChangeEvent
{
    private DropdownEditBox loanAmount;
    private DropdownBox loanType;
    private Button calculateBtn;
    
    // Called when form loads
    public void LoadEvent(object sender, EventArgs e)
    {
        loanAmount = GetControl<DropdownEditBox>("txtAmount");
        loanType = GetControl<DropdownBox>("ddlType");
        calculateBtn = GetControl<Button>("btnCalc");
        
        // Bind to loan fields
        loanAmount.Value = Loan.Fields["1109"].FormattedValue;
        loanType.Value = Loan.Fields["1172"].FormattedValue;
        
        calculateBtn.Click += OnCalculate;
    }
    
    // Called when any bound value changes
    public void ChangeEvent(object sender, ChangeEventArgs e)
    {
        // Recalculate on any change
        UpdateSummary();
    }
    
    private void OnCalculate(object sender, EventArgs e)
    {
        Loan.Calculate();  // Trigger full recalculation
    }
}
```

### Our Installed Plugins — 56 Active

From `sdk-misc-settings.json`, our BE11146040 instance has 56 plugins:

**Key Plugins:**
| Plugin | Purpose |
|--------|---------|
| `AutoLoanNumbering` | Automatic loan number assignment |
| `ConditionsFX` | Enhanced conditions management |
| `DocumentFX` | Document management extensions |
| `Navigator` | Enhanced navigation |
| `HMDA_AUS_Automation` | HMDA & AUS automation |
| `EPPS` | Encompass Product & Pricing Service |

Custom forms deploy AS plugins — they're registered, versioned, and loaded by the plugin engine.

### Real-Time Server Events — 5 Monitors, 22 Event Types

```csharp
// Access the event engine
var events = session.ServerEvents;
```

**LoanMonitor — 11 Events (the big one):**
```csharp
var loanMonitor = events.LoanMonitor;

loanMonitor.LoanOpened += (s, e) => { /* User opened a loan */ };
loanMonitor.LoanClosed += (s, e) => { /* User closed a loan */ };
loanMonitor.LoanSaved += (s, e) => { /* Loan committed to server */ };
loanMonitor.LoanMoved += (s, e) => { /* Loan moved to different folder */ };
loanMonitor.LoanDeleted += (s, e) => { /* Loan deleted */ };
loanMonitor.LoanLocked += (s, e) => { /* Editing lock acquired */ };
loanMonitor.LoanUnlocked += (s, e) => { /* Editing lock released */ };
loanMonitor.MilestoneCompleted += (s, e) => { /* Milestone finished */ };
loanMonitor.AlertTriggered += (s, e) => { /* Alert fired */ };
loanMonitor.DocumentAttached += (s, e) => { /* eFolder attachment */ };
loanMonitor.FieldChanged += (s, e) => { /* Field value changed */ };
```

**ConnectionMonitor — 3 Events:**
```csharp
events.ConnectionMonitor.Connected += (s, e) => { /* User connected */ };
events.ConnectionMonitor.Disconnected += (s, e) => { /* User disconnected */ };
events.ConnectionMonitor.Reconnected += (s, e) => { /* Auto-reconnect */ };
```

**SessionMonitor — 3 Events:**
```csharp
events.SessionMonitor.SessionStarted += (s, e) => { /* New session */ };
events.SessionMonitor.SessionEnded += (s, e) => { /* Session closed */ };
events.SessionMonitor.SessionTimeout += (s, e) => { /* Timeout warning */ };
```

**LicenseMonitor — 3 Events:**
```csharp
events.LicenseMonitor.LicenseConsumed += (s, e) => { /* Seat taken */ };
events.LicenseMonitor.LicenseReleased += (s, e) => { /* Seat freed */ };
events.LicenseMonitor.LicenseExhausted += (s, e) => { /* All 20 seats full */ };
```

**ExceptionMonitor — 2 Events:**
```csharp
events.ExceptionMonitor.ExceptionOccurred += (s, e) => { /* Server exception */ };
events.ExceptionMonitor.WarningOccurred += (s, e) => { /* Server warning */ };
```

### User & Organization Management — 22 Types

```csharp
// User management
var users = session.Users;

// Get all users
foreach (User user in users.GetAllUsers()) {
    Console.WriteLine($"{user.FullName} - {user.UserID} - {user.Enabled}");
}

// Organization management (tree structure)
var orgs = session.Organizations;
var root = orgs.GetRootOrganization();   // "MortgageTech" (OrgCode=20)

foreach (Organization child in root.Children) {
    Console.WriteLine($"{child.Name} - {child.OrgCode}");
}
```

**Feature Flags — 103 Values:**
Control exactly what features each user/role can access:
```csharp
// Check specific feature flags
bool canTrade = user.GetFeatureFlag(FeatureFlag.Trading);
bool canUnderwrite = user.GetFeatureFlag(FeatureFlag.Underwriting);

// Set feature flags
user.SetFeatureFlag(FeatureFlag.LockDesk, true);
session.Users.Save(user);
```

Categories of feature flags:
- Loan operations (create, delete, move, duplicate)
- Pipeline access (folders, views, bulk operations)
- Reporting (standard, custom, ERDB)
- Trading (lock, trade, commitment)
- Administration (users, settings, forms)
- eFolder (view, upload, download, delete)
- Compliance (HMDA, CRA, fair lending)

### ACL & Access Rights — 8 Methods

```csharp
// Standard access control
session.Users.GetAccessRights(userId, loanFolder);
session.Users.SetAccessRights(userId, loanFolder, rights);

// Role-based access
session.Users.GetUserRoles(userId);
session.Users.SetUserRoles(userId, roles);

// Loan-level access
loan.GetAccessRights(userId);
loan.SetAccessRights(userId, rights);

// IMPERSONATION — execute operations as another user
session.Users.ImpersonateUser(targetUserId);
// All subsequent operations run as targetUserId
// Use with extreme caution — full audit trail is maintained

// Revert impersonation
session.Users.RevertImpersonation();
```

> **WARNING:** `ImpersonateUser()` is extremely powerful. Every action taken while impersonating appears as that user in audit logs. Our instance requires admin credentials for this operation.

### External Organizations — 25 Types

Manage the external organization database (title companies, appraisers, insurance, etc.):

```csharp
var extOrgs = session.ConfigurationManager.GetExternalOrganizations();

// Types include:
// Appraiser, Attorney, TitleCompany, InsuranceAgent
// HazardInsurance, FloodInsurance, MortgageInsurance
// Investor, Warehouse, Correspondent
// Settlement, SurveyCompany, CreditAgency
// And more...
```

### System Settings — Full Control

```csharp
// 5 System Settings Properties
session.SystemSettings.CompanyName;           // "MortgageTech"
session.SystemSettings.CompanyAddress;        // Address object
session.SystemSettings.LicenseInfo;           // License details
session.SystemSettings.ServerInfo;            // Server configuration
session.SystemSettings.DatabaseInfo;          // DB configuration

// 4 System Settings Methods
session.SystemSettings.GetSystemSetting(key);
session.SystemSettings.SetSystemSetting(key, value);
session.SystemSettings.GetAllSettings();
session.SystemSettings.SaveSettings();
```

### Namespace Distribution — Top 20

The SDK's 885 types are distributed across 67 namespaces. The largest:

| Namespace | Types | Purpose |
|-----------|-------|---------|
| `EllieMae.Encompass.Loans` | 89 | Core loan operations |
| `EllieMae.Encompass.BusinessEnums` | 118 | All enumerations |
| `EllieMae.Encompass.Configuration` | 67 | Settings & config |
| `EllieMae.Encompass.Contacts` | 42 | CRM |
| `EllieMae.Encompass.Automation` | 138 | Forms & UI (separate DLL) |
| `EllieMae.Encompass.Query` | 15 | Search & query |
| `EllieMae.Encompass.Reporting` | 12 | ERDB & reports |
| `EllieMae.Encompass.Trading` | 25 | Secondary markets |
| `EllieMae.Encompass.Organizations` | 25 | External orgs |
| `EllieMae.Encompass.Users` | 22 | User management |

## Key Fields / Objects
- `EllieMae.Encompass.Automation.CodeBase` — custom form entry point
- `EllieMae.Encompass.Automation.Control` — base UI control
- `EllieMae.Encompass.ServerEvents.*` — 5 monitors, 22 event types
- `EllieMae.Encompass.Users.User` — user object (103 feature flags)
- `EllieMae.Encompass.Users.ImpersonateUser()` — impersonation method
- `EllieMae.Encompass.Configuration.ExternalOrganization` — 25 org types
- `EllieMae.Encompass.SystemSettings` — 5 properties, 4 methods

## Common Mistakes
1. **Building forms without understanding CodeBase lifecycle** — `CodeBase.Run()` executes once on form open. Use event interfaces for ongoing interaction. Don't put business logic directly in `Run()`.
2. **Not cleaning up event subscriptions** — Server event monitors consume resources. Unsubscribe when done. A leaked `LoanMonitor` subscription can fire thousands of unnecessary callbacks.
3. **Using ImpersonateUser casually** — This is an audit-sensitive operation. Every impersonated action is logged. Use it only for legitimate admin automation, never for bypassing access controls.
4. **Confusing plugin deployment** — Custom forms must be registered as plugins, compiled against the correct SDK version (v25.4.0.4), and deployed to all client machines. Version mismatch = crash on form open.
5. **Feature flag count assumption** — There are 103 flags, not a fixed set. New Encompass versions add flags. Always check for `Unknown` flag values when iterating.
6. **LicenseMonitor.LicenseExhausted panic** — We have 20 seats. When all 20 are consumed, new SDK sessions will FAIL to connect. Monitor this event in production automations and implement graceful queue/retry.

## Related Articles
- [sdk-architecture.md](sdk-architecture.md) — Session object and connection
- [sdk-write-capabilities.md](sdk-write-capabilities.md) — What the SDK can write that REST can't
- [sdk-loan-operations.md](sdk-loan-operations.md) — Loan object deep dive
- [sdk-workflow-compliance.md](sdk-workflow-compliance.md) — Milestones, conditions, TRID
- [sdk-query-reporting.md](sdk-query-reporting.md) — Query engine and CRM

## External References
- Plugin inventory: `C:/Dev/TeamAI/data/be11146040/sdk-misc-settings.json` (56 plugins listed)
- User roster: `C:/Dev/TeamAI/data/be11146040/sdk-session-data.json` (6,152 lines)
- System settings: `C:/Dev/TeamAI/data/be11146040/sdk-system-settings.json` (48 investor templates)
- SDK capability doc: `C:/Dev/TeamAI/docs/SDK-Advanced-Capabilities.html` (Pages 8-10)
- EncompassAutomation.dll: `C:/Dev/Encompass254/Assemblies/EncompassAutomation.dll` (138 types)
- EncompassObjects.dll: `C:/Dev/Encompass254/Assemblies/EncompassObjects.dll` (885 types)
