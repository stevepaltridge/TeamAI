/**
 * build-knowledge-base.js
 * 
 * Extracts all Encompass settings from the complete JSON export
 * and the Bayshore Settings Library XLSX into organized, searchable
 * markdown files that the AI agent can grep through to answer
 * Encompass admin questions.
 * 
 * Source: C:\Dev\EncompassSettingsPlugin\encompass-settings-complete.json
 * Source: C:\Users\StevePaltridge\Downloads\Bayshore_Settings_Library (1).xlsx
 * Output: C:\Dev\TeamAI\knowledge\encompass-settings\
 */

const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const COMPLETE_JSON = 'C:\\Dev\\EncompassSettingsPlugin\\encompass-settings-complete.json';
const XLSX_FILE = 'C:\\Users\\StevePaltridge\\Downloads\\Bayshore_Settings_Library (1).xlsx';
const OUTPUT_DIR = 'C:\\Dev\\TeamAI\\knowledge\\encompass-settings';

// Ensure output directory
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeKB(filename, content) {
  const fp = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(fp, content, 'utf8');
  console.log(`  Written: ${filename} (${(content.length / 1024).toFixed(1)} KB)`);
}

function safeStr(val) {
  if (val === null || val === undefined) return '';
  return String(val);
}

// ============================================================
// MAIN
// ============================================================
console.log('Loading complete JSON...');
const data = JSON.parse(fs.readFileSync(COMPLETE_JSON, 'utf8'));
ensureDir(OUTPUT_DIR);

// ---- 1. SERVER & COMPANY INFO ----
console.log('\n1. Server & Company Info');
const sdk = data._sdkExport;
let serverInfo = `# Encompass Server Configuration\n\n`;
serverInfo += `## Server Info\n`;
serverInfo += `- Instance: ${data.server}\n`;
serverInfo += `- Export Date: ${data.exportDate}\n`;
serverInfo += `- Exporter: ${data.exporterVersion}\n\n`;
if (sdk.serverInfo) {
  serverInfo += `### Server Details\n`;
  for (const [k, v] of Object.entries(sdk.serverInfo)) {
    serverInfo += `- ${k}: ${safeStr(v)}\n`;
  }
}
serverInfo += `\n## Company Info\n`;
if (sdk.companyInfo) {
  for (const [k, v] of Object.entries(sdk.companyInfo)) {
    if (typeof v !== 'object') serverInfo += `- ${k}: ${safeStr(v)}\n`;
  }
}
serverInfo += `\n## License Info\n`;
if (sdk.licenseInfo) {
  for (const [k, v] of Object.entries(sdk.licenseInfo)) {
    serverInfo += `- ${k}: ${safeStr(v)}\n`;
  }
}
writeKB('00-server-info.md', serverInfo);

// ---- 2. USERS ----
console.log('\n2. Users');
const users = sdk.users || [];
let usersContent = `# Encompass Users (${users.length})\n\n`;
usersContent += `| ID | Name | Email | Persona | WorkingFolder | Enabled | LastLogin |\n`;
usersContent += `|----|------|-------|---------|---------------|---------|----------|\n`;
users.forEach(u => {
  usersContent += `| ${u.ID || ''} | ${u.FullName || ''} | ${u.Email || ''} | ${u.PersonaName || u.Persona || ''} | ${u.WorkingFolder || ''} | ${u.Enabled !== false ? 'Yes' : 'No'} | ${u.LastLogin || ''} |\n`;
});
writeKB('01-users.md', usersContent);

// ---- 3. ORGANIZATIONS ----
console.log('\n3. Organizations');
const orgs = sdk.organizations || [];
let orgsContent = `# Organizations (${orgs.length})\n\n`;
orgs.forEach(o => {
  orgsContent += `## ${o.Name || o.ID}\n`;
  orgsContent += `- ID: ${o.ID || ''}\n`;
  orgsContent += `- OrgCode: ${o.OrgCode || ''}\n`;
  orgsContent += `- Company: ${o.CompanyName || ''}\n`;
  orgsContent += `- Phone: ${o.CompanyPhone || ''}\n`;
  orgsContent += `- NMLS: ${o.NMLSEntityID || o.NMLS || ''}\n`;
  orgsContent += `- State: ${o.CompanyState || ''}\n`;
  orgsContent += `- City: ${o.CompanyCity || ''}\n\n`;
});
writeKB('02-organizations.md', orgsContent);

// ---- 4. PERSONAS ----
console.log('\n4. Personas');
const bra1 = data.bizRuleAnalyzerData1.data;
const personas = bra1.lstPersonas || [];
let personasContent = `# Personas (${personas.length})\n\n`;
personas.forEach(p => {
  personasContent += `## ${p.Name || p.PersonaName || p.ID || 'Unknown'}\n`;
  for (const [k, v] of Object.entries(p)) {
    if (typeof v !== 'object' && k !== 'Name') {
      personasContent += `- ${k}: ${safeStr(v)}\n`;
    }
  }
  personasContent += `\n`;
});
writeKB('03-personas.md', personasContent);

// ---- 5. CUSTOM FIELDS ----
console.log('\n5. Custom Fields');
const customFields = bra1.lstCustomFields || [];
let cfContent = `# Custom Fields (${customFields.length})\n\n`;
cfContent += `This is the complete list of all custom fields in the Encompass instance.\n\n`;

// Group by prefix pattern
const cfGroups = {};
customFields.forEach(cf => {
  const id = cf.FieldID || cf.fieldId || cf.ID || '';
  const prefix = id.replace(/[0-9]+$/, '').replace(/\.$/, '') || 'Other';
  if (!cfGroups[prefix]) cfGroups[prefix] = [];
  cfGroups[prefix].push(cf);
});

// Write a summary first
cfContent += `## Summary by Prefix\n\n`;
cfContent += `| Prefix | Count |\n|--------|-------|\n`;
Object.keys(cfGroups).sort().forEach(prefix => {
  cfContent += `| ${prefix} | ${cfGroups[prefix].length} |\n`;
});
cfContent += `\n`;

// Write all fields in a table
cfContent += `## All Custom Fields\n\n`;
if (customFields.length > 0) {
  const fieldKeys = Object.keys(customFields[0]);
  cfContent += `| ${fieldKeys.join(' | ')} |\n`;
  cfContent += `| ${fieldKeys.map(() => '---').join(' | ')} |\n`;
  
  // For very large field sets, write first 500 then continue in another file
  const CHUNK_SIZE = 3000;
  const chunks = Math.ceil(customFields.length / CHUNK_SIZE);
  
  if (chunks === 1) {
    customFields.forEach(cf => {
      cfContent += `| ${fieldKeys.map(k => safeStr(cf[k]).replace(/\|/g, '\\|').substring(0, 100)).join(' | ')} |\n`;
    });
    writeKB('04-custom-fields.md', cfContent);
  } else {
    // Too large - write index and split files
    for (let i = 0; i < chunks; i++) {
      let chunkContent = i === 0 ? cfContent : `# Custom Fields (Part ${i + 1})\n\n`;
      chunkContent += `| ${fieldKeys.join(' | ')} |\n`;
      chunkContent += `| ${fieldKeys.map(() => '---').join(' | ')} |\n`;
      const slice = customFields.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
      slice.forEach(cf => {
        chunkContent += `| ${fieldKeys.map(k => safeStr(cf[k]).replace(/\|/g, '\\|').substring(0, 100)).join(' | ')} |\n`;
      });
      writeKB(`04-custom-fields-part${i + 1}.md`, chunkContent);
    }
  }
}

// ---- 6. FIELD TRIGGERS ----
console.log('\n6. Field Triggers');
const triggers = bra1.lstFieldTriggers || [];
let trigContent = `# Field Triggers (${triggers.length})\n\n`;
trigContent += `Field triggers fire when a specific field value changes and can set other field values or execute actions.\n\n`;

triggers.forEach((t, idx) => {
  trigContent += `## Trigger ${idx + 1}: ${t.Name || t.TriggerName || t.RuleName || 'Unnamed'}\n\n`;
  for (const [k, v] of Object.entries(t)) {
    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
      trigContent += `- **${k}**: ${safeStr(v)}\n`;
    } else if (Array.isArray(v)) {
      trigContent += `- **${k}**: [${v.length} items]\n`;
      v.forEach((item, vi) => {
        if (typeof item === 'object' && item !== null) {
          trigContent += `  - Item ${vi + 1}: ${JSON.stringify(item).substring(0, 200)}\n`;
        } else {
          trigContent += `  - ${safeStr(item)}\n`;
        }
      });
    } else if (typeof v === 'object' && v !== null) {
      trigContent += `- **${k}**: ${JSON.stringify(v).substring(0, 300)}\n`;
    }
  }
  trigContent += `\n---\n\n`;
});
writeKB('05-field-triggers.md', trigContent);

// ---- 7. FIELD DATA ENTRY RULES ----
console.log('\n7. Field Data Entry Rules');
const dataEntryRules = bra1.lstFieldDataEntryRules || [];
let derContent = `# Field Data Entry Rules (${dataEntryRules.length})\n\n`;
derContent += `Data entry rules control which fields are required, read-only, or hidden under specific conditions.\n\n`;

dataEntryRules.forEach((r, idx) => {
  derContent += `## Rule ${idx + 1}: ${r.Name || r.RuleName || 'Unnamed'}\n\n`;
  for (const [k, v] of Object.entries(r)) {
    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
      derContent += `- **${k}**: ${safeStr(v)}\n`;
    } else if (Array.isArray(v)) {
      trigContent += `- **${k}**: [${v.length} items]\n`;
      v.slice(0, 20).forEach((item, vi) => {
        if (typeof item === 'object') {
          derContent += `  - ${JSON.stringify(item).substring(0, 300)}\n`;
        } else {
          derContent += `  - ${safeStr(item)}\n`;
        }
      });
      if (v.length > 20) derContent += `  - ... and ${v.length - 20} more\n`;
    } else if (typeof v === 'object' && v !== null) {
      derContent += `- **${k}**: ${JSON.stringify(v).substring(0, 500)}\n`;
    }
  }
  derContent += `\n---\n\n`;
});
writeKB('06-data-entry-rules.md', derContent);

// ---- 8. FIELD ACCESS RULES ----
console.log('\n8. Field Access Rules');
const accessRules = bra1.lstFieldAccessRules || [];
let arContent = `# Field Access Rules (${accessRules.length})\n\n`;
arContent += `Field access rules control which personas can view or edit specific fields.\n\n`;

accessRules.forEach((r, idx) => {
  arContent += `## Rule ${idx + 1}: ${r.Name || r.RuleName || 'Unnamed'}\n\n`;
  for (const [k, v] of Object.entries(r)) {
    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
      arContent += `- **${k}**: ${safeStr(v)}\n`;
    } else if (Array.isArray(v)) {
      arContent += `- **${k}**: [${v.length} items]\n`;
      v.slice(0, 30).forEach(item => {
        if (typeof item === 'object') {
          arContent += `  - ${JSON.stringify(item).substring(0, 400)}\n`;
        } else {
          arContent += `  - ${safeStr(item)}\n`;
        }
      });
      if (v.length > 30) arContent += `  - ... and ${v.length - 30} more\n`;
    } else if (typeof v === 'object' && v !== null) {
      arContent += `- **${k}**: ${JSON.stringify(v).substring(0, 500)}\n`;
    }
  }
  arContent += `\n---\n\n`;
});
writeKB('07-field-access-rules.md', arContent);

// ---- 9. LOAN ACCESS RULES ----
console.log('\n9. Loan Access Rules');
const loanRules = bra1.lstLoanAccessRules || [];
let lrContent = `# Loan Access Rules (${loanRules.length})\n\n`;
lrContent += `Loan access rules control which personas can access loans based on conditions.\n\n`;

loanRules.forEach((r, idx) => {
  lrContent += `## Rule ${idx + 1}: ${r.Name || r.RuleName || 'Unnamed'}\n\n`;
  for (const [k, v] of Object.entries(r)) {
    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
      lrContent += `- **${k}**: ${safeStr(v)}\n`;
    } else if (Array.isArray(v)) {
      lrContent += `- **${k}**: [${v.length} items]\n`;
      v.slice(0, 20).forEach(item => {
        if (typeof item === 'object') {
          lrContent += `  - ${JSON.stringify(item).substring(0, 400)}\n`;
        } else {
          lrContent += `  - ${safeStr(item)}\n`;
        }
      });
    } else if (typeof v === 'object' && v !== null) {
      lrContent += `- **${k}**: ${JSON.stringify(v).substring(0, 500)}\n`;
    }
  }
  lrContent += `\n---\n\n`;
});
writeKB('08-loan-access-rules.md', lrContent);

// ---- 10. PRINT FORM RULES ----
console.log('\n10. Print Form Rules');
const printRules = bra1.lstPrintFormRules || [];
let prContent = `# Print Form Rules (${printRules.length})\n\n`;
printRules.forEach((r, idx) => {
  prContent += `## Rule ${idx + 1}: ${r.Name || r.RuleName || 'Unnamed'}\n\n`;
  for (const [k, v] of Object.entries(r)) {
    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
      prContent += `- **${k}**: ${safeStr(v)}\n`;
    } else if (typeof v === 'object' && v !== null) {
      prContent += `- **${k}**: ${JSON.stringify(v).substring(0, 500)}\n`;
    }
  }
  prContent += `\n---\n\n`;
});
writeKB('09-print-form-rules.md', prContent);

// ---- 11. MILESTONES ----
console.log('\n11. Milestones');
const milestones = bra1.lstMilestones || [];
const sdkMilestones = sdk.milestones || {};
let msContent = `# Milestones (${milestones.length})\n\n`;
milestones.forEach(m => {
  msContent += `## ${m.Name || m.MilestoneName || m.ID || 'Unknown'}\n`;
  for (const [k, v] of Object.entries(m)) {
    if (typeof v !== 'object') msContent += `- ${k}: ${safeStr(v)}\n`;
  }
  msContent += `\n`;
});
if (typeof sdkMilestones === 'object' && !Array.isArray(sdkMilestones)) {
  msContent += `\n## SDK Milestone Details\n\n`;
  for (const [k, v] of Object.entries(sdkMilestones)) {
    msContent += `### ${k}\n`;
    if (typeof v === 'object') {
      msContent += `\`\`\`json\n${JSON.stringify(v, null, 2).substring(0, 1000)}\n\`\`\`\n\n`;
    } else {
      msContent += `${safeStr(v)}\n\n`;
    }
  }
}
writeKB('10-milestones.md', msContent);

// ---- 12. MILESTONE REQUIREMENTS ----
console.log('\n12. Milestone Requirements');
const msReqs = bra1.lstMilestoneReqs || [];
let msrContent = `# Milestone Requirements (${msReqs.length})\n\n`;
msReqs.forEach((r, idx) => {
  msrContent += `## Requirement ${idx + 1}: ${r.Name || r.RuleName || 'Unnamed'}\n\n`;
  for (const [k, v] of Object.entries(r)) {
    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
      msrContent += `- **${k}**: ${safeStr(v)}\n`;
    } else if (Array.isArray(v)) {
      msrContent += `- **${k}**: [${v.length} items]\n`;
      v.slice(0, 20).forEach(item => {
        if (typeof item === 'object') {
          msrContent += `  - ${JSON.stringify(item).substring(0, 300)}\n`;
        } else {
          msrContent += `  - ${safeStr(item)}\n`;
        }
      });
    } else if (typeof v === 'object' && v !== null) {
      msrContent += `- **${k}**: ${JSON.stringify(v).substring(0, 500)}\n`;
    }
  }
  msrContent += `\n---\n\n`;
});
writeKB('11-milestone-requirements.md', msrContent);

// ---- 13. DOCUMENTS ----
console.log('\n13. Documents');
const docs = bra1.lstDocuments || [];
let docContent = `# eFolder Documents (${docs.length})\n\n`;
docContent += `| # | Name | Description |\n|---|------|-------------|\n`;
docs.forEach((d, i) => {
  const name = d.Name || d.DocumentName || d.Title || '';
  const desc = d.Description || '';
  docContent += `| ${i + 1} | ${name.replace(/\|/g, '\\|')} | ${desc.replace(/\|/g, '\\|').substring(0, 100)} |\n`;
});
docContent += `\n## Document Details\n\n`;
docs.forEach((d, i) => {
  docContent += `### ${i + 1}. ${d.Name || d.DocumentName || d.Title || 'Unnamed'}\n`;
  for (const [k, v] of Object.entries(d)) {
    if (typeof v !== 'object') docContent += `- ${k}: ${safeStr(v)}\n`;
  }
  docContent += `\n`;
});
writeKB('12-documents.md', docContent);

// ---- 14. TASKS ----
console.log('\n14. Tasks');
const tasks = bra1.lstTasks || [];
let taskContent = `# Tasks (${tasks.length})\n\n`;
tasks.forEach((t, i) => {
  taskContent += `## ${i + 1}. ${t.Name || t.TaskName || 'Unnamed'}\n`;
  for (const [k, v] of Object.entries(t)) {
    if (typeof v !== 'object') taskContent += `- ${k}: ${safeStr(v)}\n`;
  }
  taskContent += `\n`;
});
writeKB('13-tasks.md', taskContent);

// ---- 15. ALERTS ----
console.log('\n15. Alerts');
const alerts = sdk.alerts || [];
let alertContent = `# Alerts (${alerts.length})\n\n`;
alerts.forEach((a, i) => {
  alertContent += `## ${i + 1}. Alert: ${a.AlertID || a.Name || 'Unknown'}\n`;
  alertContent += `- Message: ${a.Message || ''}\n`;
  alertContent += `- Enabled: ${a.AlertEnabled}\n`;
  alertContent += `- Timing: ${a.AlertTiming || ''}\n`;
  alertContent += `- Days Before: ${a.DaysBefore || ''}\n`;
  for (const [k, v] of Object.entries(a)) {
    if (!['AlertID', 'Message', 'AlertEnabled', 'AlertTiming', 'DaysBefore', 'Name'].includes(k) && typeof v !== 'object') {
      alertContent += `- ${k}: ${safeStr(v)}\n`;
    }
  }
  alertContent += `\n`;
});
writeKB('14-alerts.md', alertContent);

// ---- 16. SYSTEM SETTINGS ----
console.log('\n16. System Settings');
let sysContent = `# System Settings\n\n`;
if (sdk.systemSettings) {
  for (const [k, v] of Object.entries(sdk.systemSettings)) {
    if (typeof v !== 'object') {
      sysContent += `- **${k}**: ${safeStr(v)}\n`;
    } else {
      sysContent += `## ${k}\n\`\`\`json\n${JSON.stringify(v, null, 2).substring(0, 2000)}\n\`\`\`\n\n`;
    }
  }
}
sysContent += `\n## Policy & Settings\n\n`;
if (sdk.policyAndSettings) {
  for (const [k, v] of Object.entries(sdk.policyAndSettings)) {
    if (typeof v !== 'object') {
      sysContent += `- **${k}**: ${safeStr(v)}\n`;
    } else {
      sysContent += `### ${k}\n\`\`\`json\n${JSON.stringify(v, null, 2).substring(0, 2000)}\n\`\`\`\n\n`;
    }
  }
}
sysContent += `\n## Service URLs\n\n`;
if (sdk.serviceUrls) {
  for (const [k, v] of Object.entries(sdk.serviceUrls)) {
    sysContent += `- **${k}**: ${safeStr(v)}\n`;
  }
}
writeKB('15-system-settings.md', sysContent);

// ---- 17. CUSTOM FORM NAMES ----
console.log('\n17. Custom Forms');
const forms = bra1.lstCustomFormNames || [];
let formsContent = `# Custom Forms / Input Forms (${forms.length})\n\n`;
formsContent += `These are all custom and standard input forms available in the instance.\n\n`;
formsContent += `| # | Form Name/ID |\n|---|-------------|\n`;
forms.forEach((f, i) => {
  const name = typeof f === 'string' ? f : (f.Name || f.FormName || f.ID || JSON.stringify(f).substring(0, 100));
  formsContent += `| ${i + 1} | ${safeStr(name).replace(/\|/g, '\\|')} |\n`;
});
writeKB('16-custom-forms.md', formsContent);

// ---- 18. TRIGGER CONFIG (separate from BRA) ----
console.log('\n18. Trigger Configuration');
const trigConfig = data.triggersConfigInfo || {};
let tcContent = `# Trigger Configuration\n\n`;
tcContent += `- Total Triggers: ${trigConfig._triggerCount || 0}\n`;
tcContent += `- Total Milestones: ${trigConfig._milestoneCount || 0}\n`;
tcContent += `- Last Modified: ${trigConfig.triggersModificationTime || 'N/A'}\n\n`;

if (trigConfig.triggers) {
  tcContent += `## Triggers Detail\n\n`;
  const trigArray = Array.isArray(trigConfig.triggers) ? trigConfig.triggers : Object.values(trigConfig.triggers);
  trigArray.forEach((t, i) => {
    tcContent += `### Trigger ${i + 1}\n`;
    tcContent += `\`\`\`json\n${JSON.stringify(t, null, 2).substring(0, 2000)}\n\`\`\`\n\n`;
  });
}

if (trigConfig.milestonesList) {
  tcContent += `## Milestones List\n\n`;
  const msList = Array.isArray(trigConfig.milestonesList) ? trigConfig.milestonesList : Object.values(trigConfig.milestonesList);
  msList.forEach((m, i) => {
    if (typeof m === 'object') {
      tcContent += `${i + 1}. ${m.Name || m.MilestoneName || JSON.stringify(m).substring(0, 100)}\n`;
    } else {
      tcContent += `${i + 1}. ${safeStr(m)}\n`;
    }
  });
}
writeKB('17-trigger-configuration.md', tcContent);

// ---- 19. XLSX SETTINGS LIBRARY ----
console.log('\n19. Bayshore Settings Library (XLSX)');
if (fs.existsSync(XLSX_FILE)) {
  const wb = XLSX.readFile(XLSX_FILE);
  
  // Create an index of all sheets
  let xlsxIndex = `# Bayshore Settings Library - Sheet Index\n\n`;
  xlsxIndex += `Source: Bayshore_Settings_Library (1).xlsx\n`;
  xlsxIndex += `Sheets: ${wb.SheetNames.length}\n\n`;
  xlsxIndex += `| # | Sheet Name | Rows | Columns |\n|---|-----------|------|---------|\n`;
  
  wb.SheetNames.forEach((name, i) => {
    const ws = wb.Sheets[name];
    const range = XLSX.utils.decode_range(ws['!ref'] || 'A1');
    xlsxIndex += `| ${i + 1} | ${name} | ${range.e.r + 1} | ${range.e.c + 1} |\n`;
  });
  writeKB('18-xlsx-sheet-index.md', xlsxIndex);

  // Extract key sheets that are most useful for troubleshooting
  const keySheets = [
    'Custom Print Forms', 'Input Forms', 'User Profiles', 'eFolder Documents',
    'eDisclosure Plan Codes', 'Closing Plan Codes', 'Loan Templates',
    'Loan Programs', 'Closing Costs', 'Input Form Sets', 'Settlement Service Providers',
    'Document Sets', 'Task Sets', 'Data Templates', 'Loan Template Sets',
    'Business Rules', 'Milestone Completion', 'Field Triggers',
    'Persona Access to Fields', 'Input Form List', 'Custom Fields',
    'Fee Management', 'Milestone Requirements', 'Persona Access to Loans',
    'Status Online', 'Automated Conditions'
  ];

  let sheetNum = 19;
  keySheets.forEach(sheetName => {
    if (!wb.SheetNames.includes(sheetName)) return;
    const ws = wb.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });
    if (!jsonData || jsonData.length === 0) return;

    const headers = jsonData[0] || [];
    let content = `# ${sheetName}\n\n`;
    content += `Rows: ${jsonData.length - 1} | Columns: ${headers.length}\n\n`;
    
    // Write as markdown table
    content += `| ${headers.map(h => safeStr(h).replace(/\|/g, '\\|')).join(' | ')} |\n`;
    content += `| ${headers.map(() => '---').join(' | ')} |\n`;
    
    for (let r = 1; r < jsonData.length; r++) {
      const row = jsonData[r] || [];
      content += `| ${headers.map((_, c) => safeStr(row[c]).replace(/\|/g, '\\|').replace(/\n/g, ' ').substring(0, 150)).join(' | ')} |\n`;
    }
    
    const safeName = sheetName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    writeKB(`${sheetNum}-xlsx-${safeName}.md`, content);
    sheetNum++;
  });

  // Also extract Condition Set sheets
  const conditionSheets = wb.SheetNames.filter(n => n.includes('Condition'));
  if (conditionSheets.length > 0) {
    let condContent = `# Condition Sets (${conditionSheets.length} sheets)\n\n`;
    conditionSheets.forEach(sheetName => {
      const ws = wb.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });
      if (!jsonData || jsonData.length === 0) return;
      const headers = jsonData[0] || [];
      condContent += `## ${sheetName} (${jsonData.length - 1} rows)\n\n`;
      condContent += `| ${headers.map(h => safeStr(h).replace(/\|/g, '\\|')).join(' | ')} |\n`;
      condContent += `| ${headers.map(() => '---').join(' | ')} |\n`;
      for (let r = 1; r < jsonData.length; r++) {
        const row = jsonData[r] || [];
        condContent += `| ${headers.map((_, c) => safeStr(row[c]).replace(/\|/g, '\\|').replace(/\n/g, ' ').substring(0, 150)).join(' | ')} |\n`;
      }
      condContent += `\n`;
    });
    writeKB(`${sheetNum}-condition-sets.md`, condContent);
    sheetNum++;
  }

  // Stacking templates
  const stackingSheets = wb.SheetNames.filter(n => n.includes('Stacking'));
  if (stackingSheets.length > 0) {
    let stackContent = `# Stacking Templates (${stackingSheets.length} sheets)\n\n`;
    stackingSheets.forEach(sheetName => {
      const ws = wb.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });
      if (!jsonData || jsonData.length === 0) return;
      const headers = jsonData[0] || [];
      stackContent += `## ${sheetName} (${jsonData.length - 1} rows)\n\n`;
      stackContent += `| ${headers.map(h => safeStr(h).replace(/\|/g, '\\|')).join(' | ')} |\n`;
      stackContent += `| ${headers.map(() => '---').join(' | ')} |\n`;
      for (let r = 1; r < jsonData.length; r++) {
        const row = jsonData[r] || [];
        stackContent += `| ${headers.map((_, c) => safeStr(row[c]).replace(/\|/g, '\\|').replace(/\n/g, ' ').substring(0, 150)).join(' | ')} |\n`;
      }
      stackContent += `\n`;
    });
    writeKB(`${sheetNum}-stacking-templates.md`, stackContent);
    sheetNum++;
  }

  // Secondary fields and other remaining sheets
  const coveredSheets = new Set([...keySheets, ...conditionSheets, ...stackingSheets]);
  const remainingSheets = wb.SheetNames.filter(n => !coveredSheets.has(n));
  if (remainingSheets.length > 0) {
    let remContent = `# Additional Settings Sheets (${remainingSheets.length})\n\n`;
    remainingSheets.forEach(sheetName => {
      const ws = wb.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });
      if (!jsonData || jsonData.length === 0) return;
      const headers = jsonData[0] || [];
      remContent += `## ${sheetName} (${jsonData.length - 1} rows)\n\n`;
      remContent += `| ${headers.map(h => safeStr(h).replace(/\|/g, '\\|')).join(' | ')} |\n`;
      remContent += `| ${headers.map(() => '---').join(' | ')} |\n`;
      for (let r = 1; r < jsonData.length; r++) {
        const row = jsonData[r] || [];
        remContent += `| ${headers.map((_, c) => safeStr(row[c]).replace(/\|/g, '\\|').replace(/\n/g, ' ').substring(0, 150)).join(' | ')} |\n`;
      }
      remContent += `\n`;
    });
    writeKB(`${sheetNum}-additional-sheets.md`, remContent);
    sheetNum++;
  }
} else {
  console.log('  XLSX file not found, skipping');
}

// ---- 20. TRANSPILED BUSINESS RULES CODE ----
console.log('\n20. Business Rules Code');
const transpiledPath = 'C:\\Dev\\EncompassSettingsPlugin\\transpiled-rules.json';
if (fs.existsSync(transpiledPath)) {
  const transpiled = JSON.parse(fs.readFileSync(transpiledPath, 'utf8'));
  let rulesCode = `# Business Rules - Transpiled Code\n\n`;
  rulesCode += `These are the VBScript business rules transpiled to JavaScript for readability.\n\n`;
  
  if (Array.isArray(transpiled)) {
    transpiled.forEach((r, i) => {
      rulesCode += `## Rule ${i + 1}: ${r.name || r.ruleName || 'Unnamed'}\n\n`;
      if (r.originalVbs) {
        rulesCode += `### Original VBScript\n\`\`\`vbs\n${r.originalVbs.substring(0, 3000)}\n\`\`\`\n\n`;
      }
      if (r.transpiledJs) {
        rulesCode += `### Transpiled JavaScript\n\`\`\`javascript\n${r.transpiledJs.substring(0, 3000)}\n\`\`\`\n\n`;
      }
      for (const [k, v] of Object.entries(r)) {
        if (!['originalVbs', 'transpiledJs', 'name', 'ruleName'].includes(k)) {
          if (typeof v === 'string') {
            rulesCode += `- **${k}**: ${v.substring(0, 500)}\n`;
          } else if (typeof v !== 'object') {
            rulesCode += `- **${k}**: ${safeStr(v)}\n`;
          }
        }
      }
      rulesCode += `\n---\n\n`;
    });
  } else if (typeof transpiled === 'object') {
    for (const [k, v] of Object.entries(transpiled)) {
      rulesCode += `## ${k}\n\n`;
      rulesCode += `\`\`\`json\n${JSON.stringify(v, null, 2).substring(0, 5000)}\n\`\`\`\n\n`;
    }
  }
  writeKB('20-business-rules-code.md', rulesCode);
}

// ---- 21. RULES CODE CATALOG ----
const catalogPath = 'C:\\Dev\\EncompassSettingsPlugin\\rules-code-catalog.json';
if (fs.existsSync(catalogPath)) {
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  let catContent = `# Business Rules Code Catalog\n\n`;
  
  if (Array.isArray(catalog)) {
    catContent += `Total rules with code: ${catalog.length}\n\n`;
    catalog.forEach((r, i) => {
      catContent += `## ${i + 1}. ${r.name || r.ruleName || r.id || 'Rule'}\n\n`;
      for (const [k, v] of Object.entries(r)) {
        if (typeof v === 'string' && v.length > 200) {
          catContent += `### ${k}\n\`\`\`\n${v.substring(0, 5000)}\n\`\`\`\n\n`;
        } else if (typeof v !== 'object') {
          catContent += `- **${k}**: ${safeStr(v)}\n`;
        }
      }
      catContent += `\n---\n\n`;
    });
  } else if (typeof catalog === 'object') {
    for (const [k, v] of Object.entries(catalog)) {
      catContent += `## ${k}\n\n`;
      if (typeof v === 'string') {
        catContent += `\`\`\`\n${v.substring(0, 5000)}\n\`\`\`\n\n`;
      } else {
        catContent += `\`\`\`json\n${JSON.stringify(v, null, 2).substring(0, 5000)}\n\`\`\`\n\n`;
      }
    }
  }
  writeKB('21-rules-code-catalog.md', catContent);
}

// ---- MASTER INDEX ----
console.log('\n=== Building Master Index ===');
const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.md')).sort();
let indexContent = `# Encompass Settings Knowledge Base\n\n`;
indexContent += `**Instance:** BE11146040 (Bayshore Mortgage Funding / MortgageTech)\n`;
indexContent += `**Export Date:** ${data.exportDate}\n`;
indexContent += `**Knowledge Base Built:** ${new Date().toISOString()}\n\n`;
indexContent += `## Data Sources\n\n`;
indexContent += `1. **SDK Export (ExportV5)** - Direct Encompass SDK extraction (Feb 21, 2026)\n`;
indexContent += `2. **BRA Decryption** - Business Rules Analyzer data1.json + data2.json\n`;
indexContent += `3. **Bayshore_Settings_Library.xlsx** - Comprehensive settings workbook\n`;
indexContent += `4. **Transpiled Rules** - VBScript→JS business rules code\n\n`;
indexContent += `## Quick Stats\n\n`;
indexContent += `| Category | Count |\n|----------|-------|\n`;
indexContent += `| Users | ${users.length} |\n`;
indexContent += `| Organizations | ${orgs.length} |\n`;
indexContent += `| Personas | ${personas.length} |\n`;
indexContent += `| Custom Fields | ${customFields.length} |\n`;
indexContent += `| Field Triggers | ${triggers.length} |\n`;
indexContent += `| Data Entry Rules | ${dataEntryRules.length} |\n`;
indexContent += `| Field Access Rules | ${accessRules.length} |\n`;
indexContent += `| Loan Access Rules | ${loanRules.length} |\n`;
indexContent += `| Print Form Rules | ${printRules.length} |\n`;
indexContent += `| Milestones | ${milestones.length} |\n`;
indexContent += `| Milestone Requirements | ${msReqs.length} |\n`;
indexContent += `| Documents | ${docs.length} |\n`;
indexContent += `| Tasks | ${tasks.length} |\n`;
indexContent += `| Alerts | ${alerts.length} |\n`;
indexContent += `| Custom Forms | ${forms.length} |\n`;
indexContent += `| Trigger Configs | ${trigConfig._triggerCount || 0} |\n\n`;
indexContent += `## Knowledge Base Files\n\n`;
files.forEach((f, i) => {
  const size = fs.statSync(path.join(OUTPUT_DIR, f)).size;
  indexContent += `${i + 1}. **${f}** (${(size / 1024).toFixed(1)} KB)\n`;
});

writeKB('00-INDEX.md', indexContent);

console.log('\n=== DONE ===');
console.log(`Knowledge base built at: ${OUTPUT_DIR}`);
console.log(`Total files: ${files.length + 1}`);
