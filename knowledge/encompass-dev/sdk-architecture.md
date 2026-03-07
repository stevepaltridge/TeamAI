# Encompass SDK v25.4 — Session Architecture & Connection

- **Status:** Complete
- **Tags:** SDK, architecture, session, authentication, API, connection, sub-APIs, services
- **Last Updated:** 2026-03-02

---

## Question
How does the Encompass SDK connect to an instance and what APIs are available through the Session object?

## Short Answer
The SDK connects via `Session.Start()` with server URI + credentials (or OAuth). The `Session` object is the root of everything — it exposes 31 properties, 10 methods, 2 events, and **17 sub-API managers** covering every domain in Encompass. Unlike the REST API, the SDK provides **full read/write access** to admin configuration via `Session.ConfigurationManager`.

## Encompass Path
Encompass SDK v25.4.0.4 → `EllieMae.Encompass.dll` → `EllieMae.Encompass.Session`

## Detailed Explanation

### Connection
```csharp
// Standard connection
var session = new Session();
session.Start("https://BE11146040.ea.elliemae.net$BE11146040", "admin", "password");

// OAuth connection (preferred for server apps)
session.StartWithOAuthToken("https://BE11146040.ea.elliemae.net$BE11146040", oauthToken);
```

The server URI follows the pattern `https://<InstanceID>.ea.elliemae.net$<InstanceID>`. Our instance is **BE11146040**.

### Session Object — 31 Properties, 10 Methods, 2 Events

**Key Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `Loans` | LoanManager | Open, create, query, pipeline access |
| `Contacts` | ContactManager | CRM — borrower & business contacts |
| `Users` | UserManager | User CRUD, groups, personas |
| `Organizations` | OrgManager | Org hierarchy management |
| `Calendar` | CalendarManager | Business calendar & holidays |
| `Reports` | ReportManager | ERDB reporting cursors |
| `DataExchange` | DataExchangeManager | Inter-session messaging, custom data |
| `ServerEvents` | ServerEventManager | Real-time event monitors (5 types) |
| `SystemSettings` | SystemSettingsManager | Secondary market, comp, DB, fees |
| `ConfigurationManager` | ConfigManager | **Full admin config read/WRITE** |
| `SettingsService` | SettingsService | Admin settings API |
| `LockDeskSettingsService` | LockDeskService | Lock desk configuration |
| `ID` | string | Session identifier |
| `UserID` | string | Authenticated user |
| `ServerURI` | string | Connected instance URI |

**Key Methods:**
- `Start()` / `StartWithOAuthToken()` — connect
- `End()` — disconnect
- `ImpersonateUser()` — execute as another user
- `RestoreIdentity()` — return to original identity
- `GetServerInfo()` — instance metadata

**Events:**
- `ServerEvent` — global server events
- `Disconnected` — connection lost

### 17 Sub-API Managers

| Manager | Domain | Key Capabilities |
|---------|--------|-----------------|
| `Loans` | Loan lifecycle | Open, create, query, pipeline, lock, commit |
| `Contacts` | CRM | Borrower/business contacts, opportunities |
| `Users` | Identity | User CRUD, group assignment, persona mapping |
| `Organizations` | Hierarchy | Org tree, child orgs, settings |
| `Calendar` | Scheduling | Business days, holidays |
| `Reports` | Analytics | ERDB cursors, field projections |
| `DataExchange` | Integration | Custom data objects, inter-session messaging |
| `ServerEvents` | Monitoring | 5 real-time monitors (Loan, Session, Connection, License, Exception) |
| `SystemSettings` | Config | Secondary market, compensation, DB, fees |
| `CorrespondentMaster` | Trading | Correspondent master data |
| `CorrespondentTradeService` | Trading | Trade execution |
| `GSECommitmentService` | Secondary | GSE commitment management |
| `LoanTradeService` | Trading | Loan trade operations |
| `SecurityTradeService` | Securities | Security trade execution |
| `MbsPoolService` | Securities | MBS pool management |
| `LockDeskSettingsService` | Lock desk | Lock desk rules & configuration |
| `SettingsService` | Admin | Global admin settings API |

### Our Instance Details
- **Instance ID:** BE11146040
- **Company:** MortgageTech (DBA: Ellie Mae Partner - Certified Encompass Admins)
- **Edition:** Banker
- **User Limit:** 20 licenses
- **CDKey:** AHTYTGXWLP
- **Client ID:** 3011146040
- **OAPI Gateway:** api.elliemae.com

## Key Fields / Objects
- `EllieMae.Encompass.Session` — root object
- `EllieMae.Encompass.Configuration.ConfigurationManager` — admin config (SDK-only write access)
- `EllieMae.Encompass.Server.ServerEvents` — 5 real-time monitors
- `EllieMae.Encompass.SystemSettings` — 5 property groups

## Common Mistakes
1. **Using REST API for admin writes** — The REST API returns 403 Forbidden on most admin configuration endpoints. Use the SDK's `ConfigurationManager` instead.
2. **Not calling `Session.End()`** — Leaks a license seat. Always wrap in try/finally or use `using` pattern.
3. **Hardcoding instance URI** — Use environment variables or config files. URI format changes by environment.
4. **Ignoring `ImpersonateUser()`** — For operations that need to run as a specific user (audit trail), use impersonation rather than that user's credentials.

## Related Articles
- [sdk-write-capabilities.md](sdk-write-capabilities.md) — REST vs SDK write access comparison
- [sdk-loan-operations.md](sdk-loan-operations.md) — Loan object deep dive
- [sdk-query-reporting.md](sdk-query-reporting.md) — Query engine & ERDB reporting

## External References
- Encompass SDK v25.4.0.4 installed at `C:/Dev/Encompass254/`
- SDK data files: `C:/Dev/TeamAI/data/be11146040/sdk-*.json`
- SDK capability docs: `C:/Dev/TeamAI/docs/SDK-Advanced-Capabilities.html`
