/**
 * build-knowledge-base-v2.js
 * 
 * Builds the Encompass Settings knowledge base from properly sourced data:
 *   - REST API data (LIVE from BE11146040)
 *   - SDK session data (LIVE from BE11146040 via ExportV5)
 *   - BRA reference data (Bayshore-origin, imported into BE11146040)
 * 
 * Data Dir: C:\Dev\TeamAI\data\be11146040\
 * Output:   C:\Dev\TeamAI\knowledge\encompass-settings\
 */
const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data', 'be11146040');
const OUT = path.join(__dirname, '..', 'knowledge', 'encompass-settings');

function load(fn) {
  const fp = path.join(DATA, fn);
  if (!fs.existsSync(fp)) { console.warn(`  WARN: ${fn} not found`); return null; }
  return JSON.parse(fs.readFileSync(fp, 'utf8'));
}

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }

function write(fn, content) {
  fs.writeFileSync(path.join(OUT, fn), content, 'utf8');
  console.log(`  ${fn} (${(content.length / 1024).toFixed(1)} KB)`);
}

function s(val) {
  if (val === null || val === undefined) return '';
  return String(val);
}

function escMd(val) {
  return s(val).replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

// ============================================================
console.log('=== Encompass Settings Knowledge Base v2 ===\n');
ensureDir(OUT);

// Load all data sources
console.log('Loading data sources...');
const sdk = load('sdk-session-data.json');
const serverInfo = load('sdk-server-info.json');
const companyInfo = load('sdk-company-info.json');
const licenseInfo = load('sdk-license-info.json');
const milestones = load('sdk-milestones.json');
const systemSettings = load('sdk-system-settings.json');
const policySettings = load('sdk-policy-settings.json');
const serviceUrls = load('sdk-service-urls.json');
const keyUrls = load('sdk-key-urls.json');
const miscSettings = load('sdk-misc-settings.json');
const triggersConfig = load('triggers-config-sdk.json');
const coverageManifest = load('coverage-manifest.json');

// REST API data (live from BE11146040)
const customFieldsV1 = load('custom-fields-v1.json');
const customFieldsV3 = load('custom-fields-v3.json');
const personasV1 = load('personas-v1.json');
const personaDetails = load('persona-details-v1.json');
const alertsV1 = load('alerts-v1.json');
const orgsV1 = load('organizations-v1.json');
const orgDetails = load('org-details-v1.json');
const usersV1 = load('users-v1.json');
const userDetails = load('user-details-v1.json');
const foldersV1 = load('loan-folders-v1.json');
const loanSchema = load('loan-schema-v1.json');
const pipelineFields = load('pipeline-fields-v1.json');

// BRA reference data (Bayshore-origin, imported into BE11146040)
const refTriggers = load('ref-field-triggers.json');
const refDataEntryRules = load('ref-data-entry-rules.json');
const refFieldAccessRules = load('ref-field-access-rules.json');
const refLoanAccessRules = load('ref-loan-access-rules.json');
const refPrintFormRules = load('ref-print-form-rules.json');
const refDocuments = load('ref-documents.json');
const refTasks = load('ref-tasks.json');
const refMilestoneReqs = load('ref-milestone-requirements.json');
const refCustomForms = load('ref-custom-form-names.json');
const refPersonasBra = load('ref-personas-bra.json');

console.log('All sources loaded.\n');

const LIVE_TAG = '> **Source**: Live from BE11146040 (REST API / SDK) — extracted 2026-03-02\n\n';
const REF_TAG = '> **Source**: Bayshore reference data (imported into BE11146040) — BRA extraction 2026-02-21\n\n';
const MIXED_TAG = '> **Source**: Mixed — live BE11146040 data supplemented with Bayshore reference\n\n';

// ============================================================
// 00 - SERVER & COMPANY INFO
// ============================================================
console.log('Building knowledge files...');
{
  let md = `# Encompass Server Configuration — BE11146040\n\n${LIVE_TAG}`;
  md += `## Instance\n`;
  md += `- **Instance ID**: BE11146040\n`;
  md += `- **Company**: MortgageTech (Denver, CO)\n`;
  md += `- **SDK Export**: 2026-03-02\n`;
  md += `- **REST Extract**: 2026-03-02\n\n`;

  if (serverInfo) {
    md += `## Server Details\n`;
    for (const [k, v] of Object.entries(serverInfo)) {
      md += `- **${k}**: ${s(v)}\n`;
    }
    md += '\n';
  }
  if (companyInfo) {
    md += `## Company Info\n`;
    for (const [k, v] of Object.entries(companyInfo)) {
      if (typeof v !== 'object') md += `- **${k}**: ${s(v)}\n`;
    }
    md += '\n';
  }
  if (licenseInfo) {
    md += `## License\n`;
    for (const [k, v] of Object.entries(licenseInfo)) {
      md += `- **${k}**: ${s(v)}\n`;
    }
    md += '\n';
  }
  write('00-server-info.md', md);
}

// ============================================================
// 01 - USERS (Live from REST API)
// ============================================================
{
  const users = userDetails || usersV1 || [];
  let md = `# Encompass Users (${users.length})\n\n${LIVE_TAG}`;
  md += `| # | ID | Name | Email | Persona | WorkingFolder | Enabled | LastLogin |\n`;
  md += `|---|----|----- |-------|---------|---------------|---------|-----------|\n`;
  users.forEach((u, i) => {
    const id = u.id || u.ID || '';
    const name = u.fullName || u.FullName || `${u.firstName || ''} ${u.lastName || ''}`.trim() || '';
    const email = u.email || u.Email || '';
    const persona = u.persona?.entityName || u.PersonaName || u.Persona || '';
    const wf = u.workingFolder || u.WorkingFolder || '';
    const enabled = (u.enabled !== false && u.Enabled !== false) ? 'Yes' : 'No';
    const login = u.lastLogin || u.LastLogin || '';
    md += `| ${i + 1} | ${escMd(id)} | ${escMd(name)} | ${escMd(email)} | ${escMd(persona)} | ${escMd(wf)} | ${enabled} | ${escMd(login)} |\n`;
  });

  // User details section
  if (userDetails) {
    md += `\n## User Details\n\n`;
    for (const u of userDetails) {
      const name = u.fullName || `${u.firstName || ''} ${u.lastName || ''}`.trim();
      md += `### ${name} (${u.id || ''})\n`;
      if (u.email) md += `- Email: ${u.email}\n`;
      if (u.phone) md += `- Phone: ${u.phone}\n`;
      if (u.cellPhone) md += `- Cell: ${u.cellPhone}\n`;
      if (u.persona?.entityName) md += `- Persona: ${u.persona.entityName}\n`;
      if (u.workingFolder) md += `- Working Folder: ${u.workingFolder}\n`;
      if (u.organization?.entityName) md += `- Organization: ${u.organization.entityName}\n`;
      if (u.subordinateLoanAccess) md += `- Subordinate Loan Access: ${u.subordinateLoanAccess}\n`;
      if (u.peerLoanAccess) md += `- Peer Loan Access: ${u.peerLoanAccess}\n`;
      if (u.comments) md += `- Comments: ${u.comments}\n`;
      if (u.personalStatusOnline) md += `- Online Status: ${u.personalStatusOnline}\n`;
      md += '\n';
    }
  }
  write('01-users.md', md);
}

// ============================================================
// 02 - ORGANIZATIONS (Live from REST API)
// ============================================================
{
  const orgs = orgDetails || orgsV1 || [];
  let md = `# Organizations (${orgs.length})\n\n${LIVE_TAG}`;

  // Build tree structure
  const orgMap = {};
  orgs.forEach(o => { orgMap[o.id || o.ID] = o; });

  md += `| # | ID | Name | Parent | OrgType | HasChildren | Manager |\n`;
  md += `|---|----|------|--------|---------|-------------|---------|\n`;
  orgs.forEach((o, i) => {
    const id = o.id || o.ID || '';
    const name = o.name || o.Name || '';
    const parent = o.parentOrg?.entityName || o.ParentOrgID || '';
    const type = o.orgType || o.OrgType || '';
    const hasChildren = o.children?.length > 0 ? 'Yes' : 'No';
    const mgr = o.manager || '';
    md += `| ${i + 1} | ${escMd(id)} | ${escMd(name)} | ${escMd(parent)} | ${escMd(type)} | ${hasChildren} | ${escMd(mgr)} |\n`;
  });

  // Org details
  if (orgDetails) {
    md += `\n## Organization Details\n\n`;
    for (const o of orgDetails) {
      md += `### ${o.name || o.id}\n`;
      if (o.id) md += `- ID: ${o.id}\n`;
      if (o.orgType) md += `- Type: ${o.orgType}\n`;
      if (o.description) md += `- Description: ${o.description}\n`;
      if (o.parentOrg?.entityName) md += `- Parent: ${o.parentOrg.entityName}\n`;
      if (o.comment) md += `- Comment: ${o.comment}\n`;
      if (o.manager) md += `- Manager: ${o.manager}\n`;
      if (o.nmls) md += `- NMLS: ${o.nmls}\n`;
      if (o.legalEntityIdentifier) md += `- Legal Entity ID: ${o.legalEntityIdentifier}\n`;
      if (o.profile) {
        for (const [pk, pv] of Object.entries(o.profile)) {
          if (pv && typeof pv !== 'object') md += `- ${pk}: ${pv}\n`;
        }
      }
      md += '\n';
    }
  }
  write('02-organizations.md', md);
}

// ============================================================
// 03 - PERSONAS (Live REST + BRA reference for detail)
// ============================================================
{
  const personas = personaDetails || personasV1 || [];  // LIVE
  const braPersonas = refPersonasBra || [];  // REF for deep detail

  let md = `# Personas (${personas.length})\n\n${MIXED_TAG}`;
  md += `Persona list and basic details from BE11146040 live API.\n`;
  md += `Access rights detail from Bayshore reference (imported into BE11146040).\n\n`;

  md += `## Persona List\n\n`;
  md += `| # | ID | Name | Description |\n`;
  md += `|---|----|------|-------------|\n`;
  personas.forEach((p, i) => {
    const id = p.id || p.entityId || '';
    const name = p.entityName || p.name || '';
    const desc = p.description || '';
    md += `| ${i + 1} | ${escMd(id)} | ${escMd(name)} | ${escMd(desc)} |\n`;
  });

  // Detail from REST API
  if (personaDetails) {
    md += `\n## Persona Details (Live)\n\n`;
    for (const p of personaDetails) {
      md += `### ${p.entityName || p.name || p.id}\n`;
      if (p.id) md += `- ID: ${p.id}\n`;
      if (p.description) md += `- Description: ${p.description}\n`;

      // Access rights from REST detail
      if (p.accessRights) {
        md += `- Access Rights:\n`;
        for (const [k, v] of Object.entries(p.accessRights)) {
          if (typeof v === 'boolean') {
            md += `  - ${k}: ${v}\n`;
          } else if (typeof v === 'object' && v) {
            md += `  - ${k}: ${JSON.stringify(v).substring(0, 100)}\n`;
          }
        }
      }
      md += '\n';
    }
  }

  // BRA reference personas with deeper rights
  if (braPersonas.length > 0) {
    md += `\n## Persona Access Details (Bayshore Reference)\n\n`;
    for (const p of braPersonas) {
      const name = p.PersonaName || p.Name || '';
      const cats = p.Categories || p.AccessCategories || [];
      if (cats.length > 0 || p.FormAccessRights) {
        md += `### ${name}\n`;
        if (Array.isArray(cats)) {
          for (const cat of cats) {
            const catName = cat.CategoryName || cat.Name || '';
            md += `- **${catName}**\n`;
            const rights = cat.Rights || cat.Items || [];
            if (Array.isArray(rights)) {
              for (const r of rights.slice(0, 30)) {
                md += `  - ${r.Name || r.Right || JSON.stringify(r).substring(0, 80)}\n`;
              }
              if (rights.length > 30) md += `  - ... and ${rights.length - 30} more\n`;
            }
          }
        }
        md += '\n';
      }
    }
  }
  write('03-personas.md', md);
}

// ============================================================
// 04 - CUSTOM FIELDS (Live from REST API)  
// Split into category files due to 17K+ fields
// ============================================================
{
  const fields = customFieldsV1 || [];
  let indexMd = `# Custom Fields Index (${fields.length})\n\n${LIVE_TAG}`;
  indexMd += `Total custom fields: **${fields.length}**\n\n`;

  // Group by prefix/category
  const groups = {};
  const standardFields = [];
  for (const f of fields) {
    const id = f.id || f.fieldId || '';
    const desc = f.description || '';
    // Group by prefix: CX., CUST, etc.
    let prefix = 'Other';
    if (id.startsWith('CX.')) {
      // Sub-group CX fields by next segment
      const parts = id.split('.');
      prefix = parts.length > 2 ? `CX.${parts[1]}` : 'CX';
    } else if (id.startsWith('CUST')) {
      prefix = 'CUST (Standard Custom)';
    } else {
      prefix = id.split('.')[0] || 'Other';
    }
    if (!groups[prefix]) groups[prefix] = [];
    groups[prefix].push(f);
  }

  // Write index
  const sortedGroups = Object.entries(groups).sort((a, b) => b[1].length - a[1].length);
  indexMd += `## Field Groups by Prefix\n\n`;
  indexMd += `| Prefix | Count | File |\n`;
  indexMd += `|--------|-------|------|\n`;

  let fileNum = 0;
  const groupFiles = [];
  for (const [prefix, groupFields] of sortedGroups) {
    const fn = `04-fields-${prefix.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.md`;
    indexMd += `| ${escMd(prefix)} | ${groupFields.length} | ${fn} |\n`;
    groupFiles.push({ prefix, fields: groupFields, filename: fn });
  }
  write('04-custom-fields-index.md', indexMd);

  // Write top groups as individual files (limit to manageable sizes)
  let filesWritten = 0;
  for (const { prefix, fields: gf, filename } of groupFiles) {
    if (gf.length === 0) continue;
    let md = `# Custom Fields: ${prefix} (${gf.length})\n\n${LIVE_TAG}`;
    md += `| Field ID | Description | Format | Options | ReadOnly |\n`;
    md += `|----------|-------------|--------|---------|----------|\n`;
    for (const f of gf.slice(0, 500)) {
      const id = f.id || f.fieldId || '';
      const desc = (f.description || '').substring(0, 60);
      const fmt = f.format || f.fieldType || '';
      const opts = Array.isArray(f.options) ? f.options.slice(0, 3).map(o => o.value || o).join(', ') + (f.options.length > 3 ? '...' : '') : '';
      const ro = f.readOnly ? 'Yes' : '';
      md += `| ${escMd(id)} | ${escMd(desc)} | ${escMd(fmt)} | ${escMd(opts)} | ${ro} |\n`;
    }
    if (gf.length > 500) {
      md += `\n*Showing first 500 of ${gf.length} fields. Full data in custom-fields-v1.json.*\n`;
    }

    // For fields with options, list them
    const withOptions = gf.filter(f => Array.isArray(f.options) && f.options.length > 0);
    if (withOptions.length > 0 && withOptions.length <= 200) {
      md += `\n## Fields with Dropdown Options\n\n`;
      for (const f of withOptions.slice(0, 100)) {
        md += `### ${f.id || f.fieldId}\n`;
        if (f.description) md += `${f.description}\n`;
        md += `Options: ${f.options.map(o => o.value || o.text || o).join(' | ')}\n\n`;
      }
    }
    write(filename, md);
    filesWritten++;
    if (filesWritten >= 50) break;  // safety limit
  }
}

// ============================================================
// 05 - FIELD TRIGGERS (Bayshore Reference)
// ============================================================
{
  const triggers = refTriggers || [];
  let md = `# Field Triggers (${triggers.length})\n\n${REF_TAG}`;
  md += `Field triggers automate field value changes based on conditions.\n\n`;

  // Summarize by status
  const active = triggers.filter(t => t.status !== 2);
  const inactive = triggers.filter(t => t.status === 2);
  md += `- **Active**: ${active.length}\n`;
  md += `- **Inactive**: ${inactive.length}\n\n`;

  // Detail each trigger
  let num = 0;
  for (const t of triggers) {
    num++;
    const name = t.ruleName || `Trigger ${num}`;
    const status = t.status === 2 ? 'Inactive' : 'Active';
    const hasCode = t.advancedCode && t.advancedCode.trim().length > 0;
    const eventCount = Array.isArray(t.lstEvents) ? t.lstEvents.length : 0;

    md += `### ${num}. ${escMd(name)}\n`;
    md += `- Status: ${status}\n`;
    md += `- Events: ${eventCount}\n`;
    if (t.Condition) md += `- Condition: \`${s(t.Condition).substring(0, 200)}\`\n`;
    if (t.MilestoneID && t.MilestoneID !== '-1') md += `- Milestone ID: ${t.MilestoneID}\n`;
    if (t.RoleID && t.RoleID !== '-1') md += `- Role ID: ${t.RoleID}\n`;

    // Extract field IDs from event XML
    if (Array.isArray(t.lstEvents)) {
      for (const evt of t.lstEvents.slice(0, 5)) {
        const xml = evt.eventXml || '';
        // Extract fieldId from XML
        const fieldMatch = xml.match(/<element name="fieldId">([^<]+)</);
        const actionMatch = xml.match(/<element name="actionType">([^<]+)</);
        if (fieldMatch || actionMatch) {
          md += `  - Event: field=${fieldMatch ? fieldMatch[1] : '?'}, action=${actionMatch ? actionMatch[1] : '?'}\n`;
        }
      }
    }

    if (hasCode) {
      md += `- Advanced Code:\n\`\`\`\n${t.advancedCode.substring(0, 500)}\n\`\`\`\n`;
    }
    md += '\n';
    if (num >= 400) break;
  }
  write('05-field-triggers.md', md);
}

// ============================================================
// 06 - DATA ENTRY RULES (Bayshore Reference)
// ============================================================
{
  const rules = refDataEntryRules || [];
  let md = `# Field Data Entry Rules (${rules.length})\n\n${REF_TAG}`;
  md += `Data entry rules validate/require field values during loan processing.\n\n`;

  const active = rules.filter(r => r.status !== 2);
  md += `- **Active**: ${active.length}\n`;
  md += `- **Inactive**: ${rules.length - active.length}\n\n`;

  let num = 0;
  for (const r of rules) {
    num++;
    const name = r.ruleName || `Rule ${num}`;
    const status = r.status === 2 ? 'Inactive' : 'Active';

    md += `### ${num}. ${escMd(name)}\n`;
    md += `- Status: ${status}\n`;
    if (r.Condition) md += `- Condition: \`${s(r.Condition).substring(0, 300)}\`\n`;
    if (r.MilestoneID && r.MilestoneID !== '-1') md += `- Milestone ID: ${r.MilestoneID}\n`;
    if (r.RoleID && r.RoleID !== '-1') md += `- Role ID: ${r.RoleID}\n`;

    // Field data entry records
    const records = r.lstRecords || [];
    if (records.length > 0) {
      md += `- Data Entry Records (${records.length}):\n`;
      for (const rec of records.slice(0, 20)) {
        md += `  - Field: ${rec.fieldID || '?'}, Type: ${rec.ruleType || '?'}, Value: ${s(rec.ruleValue).substring(0, 80) || '(empty)'}\n`;
      }
      if (records.length > 20) md += `  - ... +${records.length - 20} more\n`;
    }

    // Required fields
    const reqFields = r.lstRequiredFields || [];
    if (reqFields.length > 0) {
      md += `- Required Fields (${reqFields.length}):\n`;
      for (const rf of reqFields.slice(0, 20)) {
        md += `  - ${rf.fieldID || '?'} requires ${rf.requiredFieldID || '?'}\n`;
      }
      if (reqFields.length > 20) md += `  - ... +${reqFields.length - 20} more\n`;
    }

    if (r.advancedCode && r.advancedCode.trim().length > 0) {
      md += `- Advanced Code:\n\`\`\`\n${r.advancedCode.substring(0, 500)}\n\`\`\`\n`;
    }
    md += '\n';
  }
  write('06-data-entry-rules.md', md);
}

// ============================================================
// 07 - FIELD ACCESS RULES (Bayshore Reference)
// ============================================================
{
  const rules = refFieldAccessRules || [];
  let md = `# Field Access Rules (${rules.length})\n\n${REF_TAG}`;
  md += `Field access rules control which personas can view/edit specific fields.\n\n`;

  const active = rules.filter(r => r.status !== 2);
  md += `- **Active**: ${active.length}\n`;
  md += `- **Inactive**: ${rules.length - active.length}\n\n`;

  // Access right constants
  md += `> Access Rights: 0=Hidden, 1=ReadOnly, 2=ReadWrite\n\n`;

  let num = 0;
  for (const r of rules) {
    num++;
    const name = r.ruleName || `Rule ${num}`;
    const status = r.status === 2 ? 'Inactive' : 'Active';

    md += `### ${num}. ${escMd(name)}\n`;
    md += `- Status: ${status}\n`;
    if (r.Condition) md += `- Condition: \`${s(r.Condition).substring(0, 300)}\`\n`;
    if (r.MilestoneID && r.MilestoneID !== '-1') md += `- Milestone ID: ${r.MilestoneID}\n`;
    if (r.RoleID && r.RoleID !== '-1') md += `- Role ID: ${r.RoleID}\n`;

    // Field/persona rights
    const rights = r.lstRights || [];
    if (rights.length > 0) {
      // Group by persona
      const byPersona = {};
      for (const rt of rights) {
        const pid = s(rt.personaID || 'all');
        if (!byPersona[pid]) byPersona[pid] = [];
        byPersona[pid].push(rt);
      }
      md += `- Rights (${rights.length} entries across ${Object.keys(byPersona).length} personas):\n`;
      for (const [pid, pRights] of Object.entries(byPersona).slice(0, 10)) {
        const accessTypes = [...new Set(pRights.map(r => r.accessRight))];
        const fieldSample = pRights.slice(0, 5).map(r => r.fieldID).join(', ');
        md += `  - Persona ${pid}: ${pRights.length} fields, access=${accessTypes.join('/')}, e.g. ${fieldSample}\n`;
      }
      if (Object.keys(byPersona).length > 10) md += `  - ... +${Object.keys(byPersona).length - 10} more personas\n`;
    }

    if (r.advancedCode && r.advancedCode.trim().length > 0) {
      md += `- Advanced Code:\n\`\`\`\n${r.advancedCode.substring(0, 500)}\n\`\`\`\n`;
    }
    md += '\n';
  }
  write('07-field-access-rules.md', md);
}

// ============================================================
// 08 - LOAN ACCESS RULES (Bayshore Reference)
// ============================================================
{
  const rules = refLoanAccessRules || [];
  let md = `# Loan Access Rules (${rules.length})\n\n${REF_TAG}`;
  md += `Loan access rules control which users/personas can access loans based on conditions.\n\n`;

  const active = rules.filter(r => r.status !== 2);
  md += `- **Active**: ${active.length}\n`;
  md += `- **Inactive**: ${rules.length - active.length}\n\n`;

  let num = 0;
  for (const r of rules) {
    num++;
    const name = r.ruleName || `Rule ${num}`;
    const status = r.status === 2 ? 'Inactive' : 'Active';

    md += `### ${num}. ${escMd(name)}\n`;
    md += `- Status: ${status}\n`;
    if (r.Condition) md += `- Condition: \`${s(r.Condition).substring(0, 300)}\`\n`;
    if (r.MilestoneID && r.MilestoneID !== '-1') md += `- Milestone ID: ${r.MilestoneID}\n`;
    if (r.RoleID && r.RoleID !== '-1') md += `- Role ID: ${r.RoleID}\n`;

    // Persona access
    const personaAccess = r.lstPersonaAccess || [];
    if (personaAccess.length > 0) {
      md += `- Persona Access (${personaAccess.length}):\n`;
      for (const pa of personaAccess.slice(0, 15)) {
        md += `  - Persona ${pa.personaID}: access=${pa.accessRight}\n`;
      }
      if (personaAccess.length > 15) md += `  - ... +${personaAccess.length - 15} more\n`;
    }

    // Fields
    const fields = r.lstFields || [];
    if (Array.isArray(fields) && fields.length > 0) {
      md += `- Fields (${fields.length}): ${fields.slice(0, 10).map(f => typeof f === 'string' ? f : (f.fieldID || JSON.stringify(f).substring(0, 30))).join(', ')}`;
      if (fields.length > 10) md += ` +${fields.length - 10} more`;
      md += '\n';
    }

    if (r.advancedCode && r.advancedCode.trim().length > 0) {
      md += `- Advanced Code:\n\`\`\`\n${r.advancedCode.substring(0, 500)}\n\`\`\`\n`;
    }
    md += '\n';
  }
  write('08-loan-access-rules.md', md);
}

// ============================================================
// 09 - PRINT FORM RULES (Bayshore Reference)
// ============================================================
{
  const rules = refPrintFormRules || [];
  let md = `# Print Form Rules (${rules.length})\n\n${REF_TAG}`;
  md += `Print form rules control which document forms are used for printing.\n\n`;

  let num = 0;
  for (const r of rules) {
    num++;
    const name = r.Name || r.RuleName || `Rule ${num}`;
    md += `### ${num}. ${escMd(name)}\n`;
    for (const [k, v] of Object.entries(r)) {
      if (typeof v !== 'object' && s(v).length < 200) {
        md += `- ${k}: ${escMd(s(v))}\n`;
      }
    }
    // Forms list
    const forms = r.Forms || r.PrintForms || [];
    if (Array.isArray(forms) && forms.length > 0) {
      md += `- Forms:\n`;
      for (const f of forms.slice(0, 20)) {
        md += `  - ${typeof f === 'string' ? f : JSON.stringify(f).substring(0, 80)}\n`;
      }
    }
    md += '\n';
  }
  write('09-print-form-rules.md', md);
}

// ============================================================
// 10 - MILESTONES (SDK Live + BRA Reference)
// ============================================================
{
  // SDK has milestone definitions, BRA has milestone requirements
  const ms = milestones || {};
  const msDefs = ms.definitions || ms.defs || ms.Definitions || [];
  const msTemplates = ms.templates || ms.Templates || [];

  // Also from triggers config
  const tcMilestones = triggersConfig?.milestonesList || [];

  let md = `# Milestones\n\n${MIXED_TAG}`;

  // From triggers config (live)
  if (tcMilestones.length > 0) {
    md += `## Milestone Definitions (${tcMilestones.length}) — Live\n\n`;
    md += `| # | Name | Days | RoleRequired |\n`;
    md += `|---|------|------|--------------|\n`;
    tcMilestones.forEach((m, i) => {
      const name = typeof m === 'string' ? m : (m.Name || m.name || JSON.stringify(m).substring(0, 60));
      const days = m.Days || m.days || '';
      const role = m.RoleRequired || m.roleRequired || '';
      md += `| ${i + 1} | ${escMd(s(name))} | ${s(days)} | ${escMd(s(role))} |\n`;
    });
    md += '\n';
  }

  // SDK milestone data
  if (typeof ms === 'object' && !Array.isArray(ms)) {
    for (const [k, v] of Object.entries(ms)) {
      if (Array.isArray(v) && v.length > 0) {
        md += `## ${k} (${v.length})\n\n`;
        for (const item of v.slice(0, 60)) {
          if (typeof item === 'string') {
            md += `- ${item}\n`;
          } else {
            md += `- ${item.Name || item.name || JSON.stringify(item).substring(0, 80)}\n`;
            for (const [ik, iv] of Object.entries(item)) {
              if (ik !== 'Name' && ik !== 'name' && typeof iv !== 'object' && s(iv).length < 100) {
                md += `  - ${ik}: ${s(iv)}\n`;
              }
            }
          }
        }
        md += '\n';
      }
    }
  }

  // Milestone Requirements (BRA reference)
  const reqs = refMilestoneReqs || [];
  if (reqs.length > 0) {
    md += `## Milestone Requirements (${reqs.length}) — Reference\n\n`;
    for (const r of reqs) {
      const name = r.Name || r.MilestoneName || '';
      md += `### ${escMd(name)}\n`;
      for (const [k, v] of Object.entries(r)) {
        if (typeof v !== 'object' && s(v).length < 200) {
          md += `- ${k}: ${s(v)}\n`;
        }
      }
      // Required fields/docs
      const items = r.Requirements || r.Items || r.RequiredFields || [];
      if (Array.isArray(items) && items.length > 0) {
        md += `- Requirements:\n`;
        for (const item of items.slice(0, 20)) {
          md += `  - ${typeof item === 'string' ? item : JSON.stringify(item).substring(0, 80)}\n`;
        }
      }
      md += '\n';
    }
  }
  write('10-milestones.md', md);
}

// ============================================================
// 11 - DOCUMENTS (Bayshore Reference)
// ============================================================
{
  const docs = refDocuments || [];
  let md = `# Documents (${docs.length})\n\n${REF_TAG}`;
  md += `Document templates for loan files.\n\n`;

  md += `| # | Name | GUID |\n`;
  md += `|---|------|------|\n`;
  docs.forEach((d, i) => {
    const name = d.docName || d.Name || d.DocumentName || '';
    const guid = d.docGuid || '';
    md += `| ${i + 1} | ${escMd(name)} | ${escMd(guid)} |\n`;
  });
  write('11-documents.md', md);
}

// ============================================================
// 12 - TASKS (Bayshore Reference)
// ============================================================
{
  const tasks = refTasks || [];
  let md = `# Tasks (${tasks.length})\n\n${REF_TAG}`;
  md += `Workflow task definitions.\n\n`;

  md += `| # | Name | Description | Days | Priority |\n`;
  md += `|---|------|-------------|------|----------|\n`;
  tasks.forEach((t, i) => {
    const name = t.taskName || t.Name || t.TaskName || '';
    const desc = s(t.taskDescription || t.Description || '').substring(0, 80);
    const days = t.daysToComplete || t.DaysToComplete || '';
    const priority = t.taskPriority || t.Priority || '';
    md += `| ${i + 1} | ${escMd(name)} | ${escMd(desc)} | ${s(days)} | ${s(priority)} |\n`;
  });
  write('12-tasks.md', md);
}

// ============================================================
// 13 - ALERTS (Live from REST API)
// ============================================================
{
  const alerts = alertsV1 || [];
  let md = `# Alerts (${alerts.length})\n\n${LIVE_TAG}`;
  md += `Automated loan alerts that notify users of conditions.\n\n`;

  let num = 0;
  for (const a of alerts) {
    num++;
    const name = a.name || a.description || `Alert ${num}`;
    md += `### ${num}. ${escMd(name)}\n`;

    for (const [k, v] of Object.entries(a)) {
      if (k === 'conditions' || k === 'Conditions') {
        const conds = Array.isArray(v) ? v : [v];
        md += `- Conditions:\n`;
        for (const c of conds.slice(0, 10)) {
          if (typeof c === 'string') md += `  - ${c}\n`;
          else md += `  - ${JSON.stringify(c).substring(0, 200)}\n`;
        }
      } else if (typeof v !== 'object' && s(v).length < 300) {
        md += `- ${k}: ${s(v)}\n`;
      } else if (typeof v === 'object' && v && !Array.isArray(v)) {
        md += `- ${k}: ${JSON.stringify(v).substring(0, 150)}\n`;
      }
    }
    md += '\n';
  }
  write('13-alerts.md', md);
}

// ============================================================
// 14 - LOAN FOLDERS (Live from REST API)
// ============================================================
{
  const folders = foldersV1 || [];
  let md = `# Loan Folders (${folders.length})\n\n${LIVE_TAG}`;

  md += `| # | Name | Path | Visible | Description |\n`;
  md += `|---|------|------|---------|-------------|\n`;
  folders.forEach((f, i) => {
    const name = f.folderName || f.name || f.Name || '';
    const fpath = f.path || f.folderPath || '';
    const visible = f.visible !== false ? 'Yes' : 'No';
    const desc = f.description || '';
    md += `| ${i + 1} | ${escMd(name)} | ${escMd(fpath)} | ${visible} | ${escMd(desc)} |\n`;
  });
  write('14-loan-folders.md', md);
}

// ============================================================
// 15 - SYSTEM SETTINGS (SDK Live)
// ============================================================
{
  const settings = systemSettings || {};
  let md = `# System Settings\n\n${LIVE_TAG}`;

  function writeSetting(obj, prefix = '', depth = 0) {
    let result = '';
    for (const [k, v] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}.${k}` : k;
      if (typeof v === 'object' && v && !Array.isArray(v)) {
        result += `${'  '.repeat(depth)}### ${fullKey}\n`;
        result += writeSetting(v, fullKey, depth + 1);
      } else if (Array.isArray(v)) {
        result += `${'  '.repeat(depth)}- **${k}**: [${v.length} items]\n`;
        for (const item of v.slice(0, 10)) {
          if (typeof item === 'object' && item !== null) {
            result += `${'  '.repeat(depth + 1)}- ${JSON.stringify(item).substring(0, 150)}\n`;
          } else {
            result += `${'  '.repeat(depth + 1)}- ${s(item).substring(0, 100)}\n`;
          }
        }
        if (v.length > 10) result += `${'  '.repeat(depth + 1)}- ... +${v.length - 10} more\n`;
      } else {
        result += `${'  '.repeat(depth)}- **${k}**: ${s(v).substring(0, 200)}\n`;
      }
    }
    return result;
  }

  md += writeSetting(settings);
  write('15-system-settings.md', md);
}

// ============================================================
// 16 - POLICY SETTINGS (SDK Live)
// ============================================================
{
  const policy = policySettings || {};
  let md = `# Policy & Settings\n\n${LIVE_TAG}`;
  md += `eFolder, print, trade management, and other policy settings.\n\n`;

  for (const [section, val] of Object.entries(policy)) {
    md += `## ${section}\n\n`;
    if (typeof val === 'object' && val) {
      for (const [k, v] of Object.entries(val)) {
        if (typeof v === 'object' && v && !Array.isArray(v)) {
          md += `### ${k}\n`;
          for (const [kk, vv] of Object.entries(v)) {
            md += `- ${kk}: ${s(vv).substring(0, 200)}\n`;
          }
          md += '\n';
        } else if (Array.isArray(v)) {
          md += `- **${k}**: [${v.length} items]\n`;
        } else {
          md += `- **${k}**: ${s(v).substring(0, 200)}\n`;
        }
      }
    } else {
      md += `${s(val).substring(0, 500)}\n`;
    }
    md += '\n';
  }
  write('16-policy-settings.md', md);
}

// ============================================================
// 17 - SERVICE URLS (SDK Live)
// ============================================================
{
  const urls = serviceUrls || {};
  const keys = keyUrls || {};
  let md = `# Service URLs\n\n${LIVE_TAG}`;
  md += `Internal Encompass service endpoints.\n\n`;

  md += `## Key URLs\n\n`;
  for (const [k, v] of Object.entries(keys)) {
    md += `- **${k}**: ${s(v)}\n`;
  }

  md += `\n## All Service URLs (${Object.keys(urls).length})\n\n`;
  md += `| Service | URL |\n`;
  md += `|---------|-----|\n`;
  for (const [k, v] of Object.entries(urls)) {
    md += `| ${escMd(k)} | ${escMd(s(v))} |\n`;
  }
  write('17-service-urls.md', md);
}

// ============================================================
// 18 - TRIGGERS CONFIG (SDK Live)
// ============================================================
{
  const tc = triggersConfig || {};
  let md = `# Triggers Configuration (SDK)\n\n${LIVE_TAG}`;
  md += `Trigger configuration from the SDK session (TriggersConfigInfo).\n\n`;

  if (tc.triggers) {
    const triggers = tc.triggers;
    if (Array.isArray(triggers)) {
      md += `## Triggers (${triggers.length})\n\n`;
      for (const t of triggers) {
        md += `### ${t.Name || t.name || 'Unnamed'}\n`;
        for (const [k, v] of Object.entries(t)) {
          if (typeof v !== 'object') md += `- ${k}: ${s(v).substring(0, 200)}\n`;
        }
        md += '\n';
      }
    } else if (typeof triggers === 'object') {
      md += `## Triggers\n\n`;
      for (const [k, v] of Object.entries(triggers)) {
        md += `### ${k}\n`;
        if (typeof v === 'object' && v) {
          for (const [kk, vv] of Object.entries(v)) {
            if (typeof vv !== 'object') md += `- ${kk}: ${s(vv).substring(0, 200)}\n`;
          }
        } else {
          md += `${s(v).substring(0, 500)}\n`;
        }
        md += '\n';
      }
    }
  }

  md += `\n## Metadata\n`;
  md += `- Trigger Count: ${tc._triggerCount || 'unknown'}\n`;
  md += `- Milestone Count: ${tc._milestoneCount || 'unknown'}\n`;
  md += `- Last Modified: ${tc.triggersModificationTime || 'unknown'}\n`;
  write('18-triggers-config.md', md);
}

// ============================================================
// 19 - CUSTOM FORMS (Bayshore Reference)
// ============================================================
{
  const forms = refCustomForms || [];
  let md = `# Custom Forms (${forms.length})\n\n${REF_TAG}`;
  md += `Custom form definitions in Encompass.\n\n`;

  md += `| # | Form Name |\n`;
  md += `|---|----------|\n`;
  forms.forEach((f, i) => {
    const name = typeof f === 'string' ? f : (f.Name || f.FormName || JSON.stringify(f).substring(0, 60));
    md += `| ${i + 1} | ${escMd(name)} |\n`;
  });
  write('19-custom-forms.md', md);
}

// ============================================================
// 20 - LOAN SCHEMA (Live from REST API)
// ============================================================
{
  const schema = loanSchema || {};
  let md = `# Loan Schema\n\n${LIVE_TAG}`;

  if (schema.schema_version) {
    md += `Schema Version: **${schema.schema_version}**\n\n`;
  }

  const entityTypes = schema.entity_types || {};
  const entityKeys = Object.keys(entityTypes);

  if (entityKeys.length > 0) {
    md += `## Entity Types (${entityKeys.length})\n\n`;

    // Summary table
    md += `| Entity | Properties |\n`;
    md += `|--------|------------|\n`;
    for (const eName of entityKeys) {
      const props = entityTypes[eName]?.properties || {};
      md += `| ${escMd(eName)} | ${Object.keys(props).length} |\n`;
    }
    md += '\n';

    // Detail for top entities (Loan is the big one)
    const topEntities = ['Loan', 'Fee', 'RegulationZ', 'Property', 'FhaVaLoan', 'Hmda', 'Gfe', 'ClosingCost', 'Application', 'Borrower'];
    for (const eName of [...topEntities, ...entityKeys.filter(k => !topEntities.includes(k))].slice(0, 30)) {
      const entity = entityTypes[eName];
      if (!entity) continue;
      const props = entity.properties || {};
      const propKeys = Object.keys(props);
      if (propKeys.length === 0) continue;

      md += `## ${eName} (${propKeys.length} properties)\n\n`;
      md += `| Property | Type | Format | Read Only | Description |\n`;
      md += `|----------|------|--------|-----------|-------------|\n`;
      for (const [pk, pv] of Object.entries(props).slice(0, 100)) {
        const type = pv.type || '';
        const fmt = pv.format || '';
        const ro = pv.read_only ? 'Yes' : '';
        const desc = (pv.description || '').substring(0, 50);
        md += `| ${escMd(pk)} | ${escMd(type)} | ${escMd(fmt)} | ${ro} | ${escMd(desc)} |\n`;
      }
      if (propKeys.length > 100) {
        md += `\n*Showing first 100 of ${propKeys.length} properties for ${eName}.*\n`;
      }
      md += '\n';
    }

    if (entityKeys.length > 30) {
      md += `\n*Showing first 30 of ${entityKeys.length} entities. Full schema in loan-schema-v1.json.*\n`;
    }
  } else if (schema.properties) {
    // Fallback flat schema
    const props = schema.properties;
    const propKeys = Object.keys(props);
    md += `Total properties: **${propKeys.length}**\n\n`;
    md += `| Property | Type | Description |\n`;
    md += `|----------|------|-------------|\n`;
    for (const [k, v] of Object.entries(props).slice(0, 200)) {
      md += `| ${escMd(k)} | ${escMd(v.type || '')} | ${escMd((v.description || '').substring(0, 60))} |\n`;
    }
  } else {
    md += `Schema keys: ${Object.keys(schema).join(', ')}\n`;
  }
  write('20-loan-schema.md', md);
}

// ============================================================
// 21 - PIPELINE FIELDS (Live from REST API)
// ============================================================
if (pipelineFields) {
  let md = `# Pipeline Field Definitions\n\n${LIVE_TAG}`;

  // Access the actual array - data is { pipelineLoanReportFieldDefs: [...] }
  let fields = [];
  if (Array.isArray(pipelineFields)) {
    fields = pipelineFields;
  } else if (pipelineFields.pipelineLoanReportFieldDefs) {
    fields = pipelineFields.pipelineLoanReportFieldDefs;
  } else if (pipelineFields.fieldDefinitions) {
    fields = pipelineFields.fieldDefinitions;
  } else if (pipelineFields.fields) {
    fields = pipelineFields.fields;
  }

  if (Array.isArray(fields) && fields.length > 0) {
    md += `Total: **${fields.length}** pipeline field definitions\n\n`;

    // Group by category
    const byCat = {};
    for (const f of fields) {
      const cat = f.category || 'Other';
      if (!byCat[cat]) byCat[cat] = [];
      byCat[cat].push(f);
    }
    md += `## Categories\n\n`;
    for (const [cat, items] of Object.entries(byCat).sort((a, b) => b[1].length - a[1].length)) {
      md += `- **${cat}**: ${items.length}\n`;
    }
    md += '\n';

    md += `## Field List\n\n`;
    md += `| Field ID | Description | Format | Category | Loan Data |\n`;
    md += `|----------|-------------|--------|----------|-----------|\n`;
    for (const f of fields.slice(0, 500)) {
      // fieldDefinition is nested
      const fd = f.fieldDefinition || {};
      const id = fd.fieldID || f.fieldID || f.fieldId || f.id || '';
      const desc = (fd.description || f.description || '').substring(0, 50);
      const fmt = fd.format !== undefined ? s(fd.format) : (f.format || '');
      const cat = f.category || '';
      const isLoan = f.isLoanDataField ? 'Yes' : '';
      md += `| ${escMd(id)} | ${escMd(desc)} | ${escMd(fmt)} | ${escMd(cat)} | ${isLoan} |\n`;
    }
    if (fields.length > 500) md += `\n*Showing 500 of ${fields.length}. Full data in pipeline-fields-v1.json.*\n`;
  } else {
    md += `Schema keys: ${Object.keys(pipelineFields).join(', ')}\n`;
  }
  write('21-pipeline-fields.md', md);
}

// ============================================================
// 22 - MISC SETTINGS (SDK Live)
// ============================================================
{
  const misc = miscSettings || {};
  let md = `# Miscellaneous Settings\n\n${LIVE_TAG}`;

  for (const [k, v] of Object.entries(misc)) {
    md += `## ${k}\n\n`;
    if (typeof v === 'object' && v) {
      for (const [kk, vv] of Object.entries(v)) {
        if (typeof vv === 'object' && vv) {
          md += `### ${kk}\n`;
          md += `\`\`\`json\n${JSON.stringify(vv, null, 2).substring(0, 1000)}\n\`\`\`\n\n`;
        } else {
          md += `- **${kk}**: ${s(vv).substring(0, 200)}\n`;
        }
      }
    } else {
      md += `${s(v).substring(0, 500)}\n`;
    }
    md += '\n';
  }
  write('22-misc-settings.md', md);
}

// ============================================================
// 23 - COVERAGE MANIFEST
// ============================================================
{
  const cov = coverageManifest || {};
  let md = `# Data Coverage Manifest\n\n`;
  md += `## Data Sources\n\n`;
  md += `### Live from BE11146040 (2026-03-02)\n`;
  md += `- **REST API v1**: Custom Fields (17,359), Personas (89 + details), Alerts (88), Organizations (74 + details), Users (53 + details), Loan Folders (24), Loan Schema, Pipeline Fields\n`;
  md += `- **REST API v3**: Custom Fields (richer format), Personas, Loan Folders\n`;
  md += `- **SDK/ExportV5**: Server Info, Company Info, License, Milestones (54), System Settings, Policy Settings, Service URLs, Triggers Config, Misc Settings\n\n`;
  md += `### Bayshore Reference (imported into BE11146040, 2026-02-21)\n`;
  md += `- **BRA data1**: Field Triggers (396), Data Entry Rules (126), Field Access Rules (58), Loan Access Rules (17), Print Form Rules (18), Documents (268), Tasks (130), Milestone Requirements (36), Custom Forms (411), Personas (90 with deep access rights)\n`;
  md += `- **BRA data2**: Input Forms with HTML (409)\n\n`;

  md += `## Not Available\n`;
  md += `- Field triggers, data entry rules, access rules: REST API returns 403 (API products not enabled)\n`;
  md += `- Documents, tasks, templates, loan programs: REST API returns 403\n`;
  md += `- Closing costs, condition sets: REST API returns 403\n`;
  md += `- These settings are available from the Bayshore reference data which was imported into BE11146040\n\n`;

  md += `## Validation\n`;
  md += `- Custom field counts closely match: REST=17,359 vs BRA=17,357 (2 field difference)\n`;
  md += `- Milestone counts match: SDK=54, BRA=54\n`;
  md += `- Alert counts match: REST=88, SDK=88\n`;
  md += `- User/org/persona counts match across sources\n`;
  md += `- This confirms Bayshore settings were imported into BE11146040\n`;

  if (Object.keys(cov).length > 0) {
    md += `\n## SDK Coverage Notes\n\n`;
    md += `\`\`\`json\n${JSON.stringify(cov, null, 2)}\n\`\`\`\n`;
  }
  write('23-coverage-manifest.md', md);
}

// ============================================================
// SUMMARY
// ============================================================
const outFiles = fs.readdirSync(OUT).filter(f => f.endsWith('.md'));
const totalKB = outFiles.reduce((s, f) => s + fs.statSync(path.join(OUT, f)).size, 0);
console.log(`\n=== Knowledge Base Built ===`);
console.log(`Files: ${outFiles.length} markdown files`);
console.log(`Size: ${Math.round(totalKB / 1024)} KB`);
console.log(`Output: ${OUT}`);
