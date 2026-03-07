# Encompass SDK v25.4 — Write Capabilities (REST API vs SDK)

- **Status:** Complete
- **Tags:** SDK, REST, API, write, CRUD, ConfigurationManager, admin, comparison
- **Last Updated:** 2026-03-02

---

## Question
What can the Encompass SDK write/modify that the REST API cannot? What's the real difference between REST and SDK access?

## Short Answer
The REST API is **read-heavy, write-limited** — most admin configuration endpoints return **403 Forbidden**. The SDK provides **full CRUD** on virtually everything via `Session.ConfigurationManager`. If you need to programmatically create or modify business rules, personas, milestones, custom forms, triggers, loan templates, document sets, or system settings — the SDK is the only path.

## Encompass Path
SDK: `Session.ConfigurationManager` → full admin CRUD
REST: `api.elliemae.com/encompass/v3/` → mostly read-only on admin config

## Detailed Explanation

### REST API Capabilities (What It CAN Do)
| Domain | Read | Write | Notes |
|--------|------|-------|-------|
| Loans | ✅ | ✅ | Full CRUD on individual loans |
| Loan Fields | ✅ | ✅ | Read/write field values |
| Pipeline | ✅ | ❌ | Query only |
| Documents/eFolder | ✅ | ✅ | Attach/download documents |
| Contacts | ✅ | ✅ | Borrower & business contacts |
| Users | ✅ | ⚠️ | Read yes; limited user management |
| Webhooks | ✅ | ✅ | Subscribe to events |

### REST API Limitations (What Returns 403)
| Domain | Read | Write | Notes |
|--------|------|-------|-------|
| Business Rules | ⚠️ | ❌ | **403** — Cannot create/modify rules |
| Personas | ⚠️ | ❌ | **403** — Cannot modify persona definitions |
| Milestones | ⚠️ | ❌ | **403** — Cannot modify milestone templates |
| Custom Forms | ❌ | ❌ | **Not exposed** via REST at all |
| Loan Templates | ⚠️ | ❌ | **403** — Read-only access |
| Document Sets | ⚠️ | ❌ | **403** — Cannot modify doc set config |
| Condition Templates | ⚠️ | ❌ | **403** |
| System Settings | ⚠️ | ❌ | **403** — Cannot modify system config |
| Triggers | ⚠️ | ❌ | **403** — Cannot modify field triggers |
| Organization Config | ⚠️ | ❌ | **403** on most writes |
| Fee Tables | ⚠️ | ❌ | **403** |
| Closing Cost Templates | ⚠️ | ❌ | **403** |

### SDK Write Capabilities (What ConfigurationManager CAN Do)
The SDK's `Session.ConfigurationManager` provides full CRUD on **everything** the REST API blocks:

```csharp
var config = session.ConfigurationManager;

// Business Rules — full CRUD
var rules = config.GetBusinessRules(BusinessRuleType.FieldTrigger);
// Create, modify, delete any rule type

// Personas — full CRUD
var personas = config.GetPersonas();
// Create new personas, modify permissions, assign features

// Milestone Templates — full CRUD
config.GetMilestoneTemplates();
// Create/modify milestone sequences, associate roles, set default days

// Custom Forms — full CRUD
config.GetCustomForms();
// Deploy custom input forms and plugins

// Loan Templates — full CRUD
config.GetLoanTemplates();
// Create/modify any loan template

// Document Sets — full CRUD
config.GetDocumentSets();
// Manage document set configurations

// System Settings — direct write
session.SystemSettings.Secondary = newSettings;
session.SystemSettings.CompensationSettings = newComp;
```

### SDK-Only Operations (No REST Equivalent)
| Operation | SDK API | REST Equivalent |
|-----------|---------|----------------|
| Create business rules | `ConfigurationManager.GetBusinessRules()` | None — 403 |
| Modify personas | `ConfigurationManager.GetPersonas()` | None — 403 |
| Deploy custom forms | `ConfigurationManager.GetCustomForms()` | None — not exposed |
| Manage milestone templates | `ConfigurationManager.GetMilestoneTemplates()` | None — 403 |
| Modify triggers | `ConfigurationManager.GetBusinessRules(FieldTrigger)` | None — 403 |
| Real-time server events | `Session.ServerEvents.*Monitor` | Webhooks (delayed, not real-time) |
| Pipeline cursor iteration | `Session.Loans.OpenPipeline()` | POST /pipeline (limited) |
| Impersonate user | `Session.ImpersonateUser()` | None |
| AI Engine access | Income/Asset/Document AI | None |
| eFolder eDelivery/eSign | `CurrentDocumentsManager` | Partial (attach only) |
| Trade management | 25 trade types (correspondent, GSE, MBS) | None |
| Lock desk settings | `LockDeskSettingsService` | None |
| Custom data objects | `DataExchange.GetCustomDataObject()` | None |
| Settings packages | `CreatePackageImporter()` | None |

### When to Use Which

**Use REST API when:**
- Building web apps that need loan data
- Simple loan field reads/writes
- Webhook-driven automations
- Lightweight integrations (no SDK install needed)
- Cloud/serverless deployments

**Use SDK when:**
- Admin configuration changes (business rules, personas, milestones)
- Bulk operations across the pipeline
- Real-time event monitoring
- Custom form deployment
- Trade management / secondary market
- Anything the REST API returns 403 on
- Operations requiring user impersonation

### Our Instance Policy Settings (SDK-Extracted)
Key write-relevant policies from `sdk-policy-settings.json`:
- `AllowConcurrentEditing = False` — only one user can modify a loan at a time
- `MilestoneRollback = Enabled` — milestones can be rolled back
- `WebHookEnabled = True` — webhooks active for REST subscribers
- `DataLakeEnabled = True` — data lake integration active
- `IP Restriction = Enabled` — IP-based access control active

## Key Fields / Objects
- `EllieMae.Encompass.Configuration.ConfigurationManager` — admin CRUD gateway
- `EllieMae.Encompass.BusinessRules.*` — all rule types
- `EllieMae.Encompass.Templates.*` — 49 template types
- `EllieMae.Encompass.Configuration.*` — 19 configuration types

## Common Mistakes
1. **Assuming REST can do everything** — REST is great for loan data but cannot modify admin config. The 403s are by design, not a permissions issue.
2. **Building admin tools on REST** — If your tool needs to create/modify business rules, personas, or templates, it MUST use the SDK.
3. **Not understanding the license cost** — SDK connections consume a user license seat. Plan for dedicated service accounts.
4. **Mixing REST and SDK in the same operation** — Be careful about stale data. If SDK modifies a setting, REST cache may not reflect it immediately.
5. **Trying to deploy SDK to serverless** — The SDK requires a Windows environment with the SDK assemblies installed. It cannot run in Azure Functions (Linux) or AWS Lambda.

## Related Articles
- [sdk-architecture.md](sdk-architecture.md) — Session object and connection
- [sdk-loan-operations.md](sdk-loan-operations.md) — Loan-level CRUD operations
- [sdk-workflow-compliance.md](sdk-workflow-compliance.md) — Milestone and rule management

## External References
- REST API: `https://api.elliemae.com/encompass/v3/`
- SDK installed: `C:/Dev/Encompass254/`
- API Client ID for REST: `jnpknrc`
- SDK data files: `C:/Dev/TeamAI/data/be11146040/sdk-*.json`
