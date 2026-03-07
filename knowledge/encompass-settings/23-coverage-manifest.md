# Data Coverage Manifest

## Data Sources

### Live from BE11146040 (2026-03-02)
- **REST API v1**: Custom Fields (17,359), Personas (89 + details), Alerts (88), Organizations (74 + details), Users (53 + details), Loan Folders (24), Loan Schema, Pipeline Fields
- **REST API v3**: Custom Fields (richer format), Personas, Loan Folders
- **SDK/ExportV5**: Server Info, Company Info, License, Milestones (54), System Settings, Policy Settings, Service URLs, Triggers Config, Misc Settings

### Bayshore Reference (imported into BE11146040, 2026-02-21)
- **BRA data1**: Field Triggers (396), Data Entry Rules (126), Field Access Rules (58), Loan Access Rules (17), Print Form Rules (18), Documents (268), Tasks (130), Milestone Requirements (36), Custom Forms (411), Personas (90 with deep access rights)
- **BRA data2**: Input Forms with HTML (409)

## Not Available
- Field triggers, data entry rules, access rules: REST API returns 403 (API products not enabled)
- Documents, tasks, templates, loan programs: REST API returns 403
- Closing costs, condition sets: REST API returns 403
- These settings are available from the Bayshore reference data which was imported into BE11146040

## Validation
- Custom field counts closely match: REST=17,359 vs BRA=17,357 (2 field difference)
- Milestone counts match: SDK=54, BRA=54
- Alert counts match: REST=88, SDK=88
- User/org/persona counts match across sources
- This confirms Bayshore settings were imported into BE11146040

## SDK Coverage Notes

```json
{
  "_description": "What this export covers and where each section came from",
  "sdkPublicAPI": {
    "source": "Encompass SDK - RuntimeServices + Session public properties",
    "serverInfo": "Session properties: ServerURI, UserID, ClientID, etc.",
    "companyInfo": "StartupInfo.CompanyInfo + OrgInfo",
    "licenseInfo": "StartupInfo.ServerLicense",
    "users": "Session.Users.GetAllUsers()",
    "personas": "StartupInfo.PersonaInfo (summary only; BRA has full detail)",
    "organizations": "Session.Organizations.GetAllOrganizations()",
    "milestones": "StartupInfo.Milestones + MilestoneTemplates + MilestoneAlertMessages",
    "alerts": "StartupInfo.AlertConfigs",
    "systemSettings": "Session.SystemSettings (Secondary, Compensation, Database, TablesAndFees)",
    "policyAndSettings": "StartupInfo: PolicySettings, EFolderSettings, PrintSettings, TradeSettings, etc.",
    "serviceUrls": "StartupInfo.ServiceUrls + key URL properties"
  },
  "bizRuleAnalyzerData1": {
    "source": "BizRuleAnalyzer hosted form plugin - runs server-side inside Encompass Desktop",
    "extractionMethod": "Custom input form 'Admin - BizRuleAnalyzer' with BizRuleAnalyzerHostedForm151.dll",
    "decryptionMethod": "Base64 -> Rijndael AES -> GZip decompress -> UTF-8 JSON",
    "lstCustomFields": "17,357 custom field definitions with calculations",
    "lstFieldDataEntryRules": "126 field data entry rules with conditions and advanced code",
    "lstFieldTriggers": "396 field triggers with events and advanced code",
    "lstMilestones": "54 milestone definitions",
    "lstDocuments": "268 document definitions",
    "lstTasks": "130 task definitions",
    "lstMilestoneReqs": "36 milestone requirements with docs/tasks/fields/advanced codes",
    "lstPersonas": "90 persona definitions (FULL detail vs SDK summary)",
    "lstFieldAccessRules": "58 field access rules with rights",
    "lstLoanAccessRules": "17 loan access rules with persona access",
    "lstPrintFormRules": "18 print form rules with items",
    "lstCustomFormNames": "411 custom form name mappings"
  },
  "bizRuleAnalyzerData2": {
    "source": "BizRuleAnalyzer hosted form plugin - form HTML extraction",
    "lstInputForms": "409 input forms with FormID, Name, FormOrder, emfrm_file (base64), FormHtml, LastModified"
  },
  "triggersConfigInfo": {
    "source": "SessionObjects.TriggersConfigInfo - live trigger configuration",
    "triggers": "33 TriggerInfo objects with full trigger details",
    "milestonesList": "54 milestones from trigger config"
  },
  "notCovered": {
    "templateFolders": "NULL in token-based SDK sessions (loan programs, closing costs, data templates, input form sets, document sets, etc.)",
    "documentTemplates": "NULL - SystemSettings.Documents is null in standalone exec",
    "bpmManagerDeepCalls": "All IBpmManager proxy calls fail - MarshalByRefObject transparent proxy has no usable methods from standalone exe",
    "formManagerCalls": "Same proxy issue as BpmManager",
    "configManagerCalls": "Same proxy issue as BpmManager",
    "workaround": "BizRuleAnalyzer data files contain ALL business rules that would come from these managers"
  }
}
```
