#!/usr/bin/env node
/**
 * extract-live.js — Pull all accessible settings from BE11146040 via REST API
 * Saves individual JSON files per endpoint for the knowledge base.
 * 
 * Usage: node scripts/extract-live.js
 */
const path = require('path');
const fs = require('fs');
const https = require('https');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const API = 'api.elliemae.com';
const OUT = path.join(__dirname, '..', 'data', 'be11146040');

function req(opts, body) {
  return new Promise((resolve, reject) => {
    const r = https.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: d }));
    });
    r.on('error', reject);
    if (body) r.write(body);
    r.end();
  });
}

async function getToken() {
  const p = new URLSearchParams({
    grant_type: 'password',
    client_id: process.env.ICE_CLIENT_ID,
    client_secret: process.env.ICE_CLIENT_SECRET,
    username: process.env.ICE_USERNAME + '@encompass:' + process.env.ICE_INSTANCE_ID,
    password: process.env.ICE_PASSWORD
  });
  const r = await req({
    hostname: API, port: 443, path: '/oauth2/v1/token', method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(p.toString()) }
  }, p.toString());
  const tok = JSON.parse(r.body);
  if (!tok.access_token) throw new Error('Token failed: ' + r.body);
  console.log(`Token acquired (expires in ${tok.expires_in}s)`);
  return tok.access_token;
}

async function apiGet(ep, token) {
  return req({
    hostname: API, port: 443, path: ep, method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token, 'Accept': 'application/json' }
  });
}

async function fetchAndSave(ep, filename, token, label) {
  process.stdout.write(`  ${label || filename}... `);
  const r = await apiGet(ep, token);
  if (r.status !== 200) {
    console.log(`SKIP (${r.status})`);
    return null;
  }
  let data;
  try { data = JSON.parse(r.body); } catch { data = r.body; }
  const count = Array.isArray(data) ? data.length : (typeof data === 'object' ? Object.keys(data).length : '?');
  const kb = Math.round(Buffer.byteLength(r.body) / 1024);
  console.log(`OK — ${count} items, ${kb}KB`);
  
  const outPath = path.join(OUT, filename);
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');
  return data;
}

async function main() {
  console.log(`\n=== BE11146040 Live Data Extraction ===`);
  console.log(`Instance: ${process.env.ICE_INSTANCE_ID}`);
  console.log(`Output:   ${OUT}\n`);
  
  const token = await getToken();
  const manifest = {
    instance: process.env.ICE_INSTANCE_ID,
    extractDate: new Date().toISOString(),
    source: 'REST API (api.elliemae.com)',
    clientId: process.env.ICE_CLIENT_ID,
    files: {}
  };

  // ─── v1 endpoints (more permissive) ───
  console.log('── v1 Endpoints ──');
  
  const customFields = await fetchAndSave(
    '/encompass/v1/settings/loan/customFields',
    'custom-fields-v1.json', token, 'Custom Fields (v1)');
  if (customFields) manifest.files['custom-fields-v1.json'] = { count: customFields.length, endpoint: 'v1' };
  
  const personas = await fetchAndSave(
    '/encompass/v1/settings/personas',
    'personas-v1.json', token, 'Personas (v1)');
  if (personas) manifest.files['personas-v1.json'] = { count: personas.length, endpoint: 'v1' };

  const alerts = await fetchAndSave(
    '/encompass/v1/settings/loan/alerts',
    'alerts-v1.json', token, 'Alerts (v1)');
  if (alerts) manifest.files['alerts-v1.json'] = { count: alerts.length, endpoint: 'v1' };
  
  const orgs = await fetchAndSave(
    '/encompass/v1/organizations',
    'organizations-v1.json', token, 'Organizations (v1)');
  if (orgs) manifest.files['organizations-v1.json'] = { count: orgs.length, endpoint: 'v1' };
  
  const users = await fetchAndSave(
    '/encompass/v1/company/users',
    'users-v1.json', token, 'Users (v1)');
  if (users) manifest.files['users-v1.json'] = { count: users.length, endpoint: 'v1' };
  
  const folders = await fetchAndSave(
    '/encompass/v1/loanFolders',
    'loan-folders-v1.json', token, 'Loan Folders (v1)');
  if (folders) manifest.files['loan-folders-v1.json'] = { count: folders.length, endpoint: 'v1' };
  
  const schema = await fetchAndSave(
    '/encompass/v1/schema/loan',
    'loan-schema-v1.json', token, 'Loan Schema (v1)');
  if (schema) manifest.files['loan-schema-v1.json'] = { count: Object.keys(schema).length + ' top-level keys', endpoint: 'v1' };

  // ─── v3 endpoints (richer data when available) ───
  console.log('\n── v3 Endpoints (richer format) ──');
  
  const customFieldsV3 = await fetchAndSave(
    '/encompass/v3/settings/loan/customFields',
    'custom-fields-v3.json', token, 'Custom Fields (v3)');
  if (customFieldsV3) manifest.files['custom-fields-v3.json'] = { count: Array.isArray(customFieldsV3) ? customFieldsV3.length : '?', endpoint: 'v3' };
  
  const personasV3 = await fetchAndSave(
    '/encompass/v3/settings/personas',
    'personas-v3.json', token, 'Personas (v3)');
  if (personasV3) manifest.files['personas-v3.json'] = { count: Array.isArray(personasV3) ? personasV3.length : '?', endpoint: 'v3' };
  
  const foldersV3 = await fetchAndSave(
    '/encompass/v3/loanFolders',
    'loan-folders-v3.json', token, 'Loan Folders (v3)');
  if (foldersV3) manifest.files['loan-folders-v3.json'] = { count: Array.isArray(foldersV3) ? foldersV3.length : '?', endpoint: 'v3' };

  // ─── Additional discovery: try more v1 endpoints ───
  console.log('\n── Additional v1 Discovery ──');
  
  // Try roles
  const roles = await fetchAndSave(
    '/encompass/v1/company/users/roles',
    'roles-v1.json', token, 'User Roles (v1)');
  if (roles) manifest.files['roles-v1.json'] = { count: Array.isArray(roles) ? roles.length : '?', endpoint: 'v1' };
  
  // Try user groups
  const groups = await fetchAndSave(
    '/encompass/v1/company/users/groups',
    'user-groups-v1.json', token, 'User Groups (v1)');
  if (groups) manifest.files['user-groups-v1.json'] = { count: Array.isArray(groups) ? groups.length : '?', endpoint: 'v1' };
  
  // Try milestones via different paths
  await fetchAndSave('/encompass/v1/settings/loan/milestones', 'milestones-v1.json', token, 'Milestones (v1)');
  await fetchAndSave('/encompass/v1/milestones', 'milestones-alt-v1.json', token, 'Milestones alt (v1)');
  
  // Try documents
  await fetchAndSave('/encompass/v1/settings/loan/documents', 'documents-v1.json', token, 'Documents (v1)');
  await fetchAndSave('/encompass/v1/settings/documents', 'documents-alt-v1.json', token, 'Documents alt (v1)');
  
  // Settings sub-paths
  await fetchAndSave('/encompass/v1/settings/loan', 'settings-loan-v1.json', token, 'Settings/Loan index (v1)');
  await fetchAndSave('/encompass/v1/settings/company', 'settings-company-v1.json', token, 'Settings/Company (v1)');
  
  // Global settings
  await fetchAndSave('/encompass/v1/settings/loan/closingCosts', 'closing-costs-v1.json', token, 'Closing Costs (v1)');
  await fetchAndSave('/encompass/v1/settings/loan/automatedConditions', 'auto-conditions-v1.json', token, 'Auto Conditions (v1)');
  await fetchAndSave('/encompass/v1/settings/loan/documentSets', 'document-sets-v1.json', token, 'Document Sets (v1)');
  
  // Company-level settings
  await fetchAndSave('/encompass/v1/company/compensation', 'compensation-v1.json', token, 'Compensation (v1)');
  await fetchAndSave('/encompass/v1/company/licenses', 'company-licenses-v1.json', token, 'Company Licenses (v1)');
  
  // Pipeline
  await fetchAndSave('/encompass/v1/loanPipeline/fieldDefinitions', 'pipeline-fields-v1.json', token, 'Pipeline Fields (v1)');
  
  // Services
  await fetchAndSave('/encompass/v1/services', 'services-v1.json', token, 'Services (v1)');

  // ─── Try extracting individual persona details ───
  if (personas && personas.length > 0) {
    console.log(`\n── Persona Details (${personas.length} personas) ──`);
    const personaDetails = [];
    let ok = 0, fail = 0;
    for (const p of personas) {
      const id = p.id || p.entityId;
      if (!id) continue;
      const r = await apiGet(`/encompass/v1/settings/personas/${id}`, token);
      if (r.status === 200) {
        try { personaDetails.push(JSON.parse(r.body)); ok++; } catch { fail++; }
      } else { fail++; }
    }
    if (ok > 0) {
      console.log(`  Got ${ok} persona details (${fail} failed)`);
      fs.writeFileSync(path.join(OUT, 'persona-details-v1.json'), JSON.stringify(personaDetails, null, 2), 'utf8');
      manifest.files['persona-details-v1.json'] = { count: ok, endpoint: 'v1' };
    } else {
      console.log(`  No persona details accessible`);
    }
  }

  // ─── Try extracting individual user details (with roles, personas, orgs) ───
  if (users && users.length > 0 && users.length <= 100) {
    console.log(`\n── User Details (${users.length} users) ──`);
    const userDetails = [];
    let ok = 0, fail = 0;
    for (const u of users) {
      const id = u.id || u.entityId;
      if (!id) continue;
      const r = await apiGet(`/encompass/v1/company/users/${encodeURIComponent(id)}`, token);
      if (r.status === 200) {
        try { userDetails.push(JSON.parse(r.body)); ok++; } catch { fail++; }
      } else { fail++; }
    }
    if (ok > 0) {
      console.log(`  Got ${ok} user details (${fail} failed)`);
      fs.writeFileSync(path.join(OUT, 'user-details-v1.json'), JSON.stringify(userDetails, null, 2), 'utf8');
      manifest.files['user-details-v1.json'] = { count: ok, endpoint: 'v1' };
    }
  }

  // ─── Try extracting individual org details ───
  if (orgs && orgs.length > 0 && orgs.length <= 200) {
    console.log(`\n── Organization Details (${orgs.length} orgs) ──`);
    const orgDetails = [];
    let ok = 0, fail = 0;
    for (const o of orgs) {
      const id = o.id || o.entityId;
      if (!id) continue;
      const r = await apiGet(`/encompass/v1/organizations/${encodeURIComponent(id)}`, token);
      if (r.status === 200) {
        try { orgDetails.push(JSON.parse(r.body)); ok++; } catch { fail++; }
      } else { fail++; }
    }
    if (ok > 0) {
      console.log(`  Got ${ok} org details (${fail} failed)`);
      fs.writeFileSync(path.join(OUT, 'org-details-v1.json'), JSON.stringify(orgDetails, null, 2), 'utf8');
      manifest.files['org-details-v1.json'] = { count: ok, endpoint: 'v1' };
    }
  }

  // ─── Write manifest ───
  fs.writeFileSync(path.join(OUT, '_manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
  
  const totalFiles = Object.keys(manifest.files).length;
  const totalSize = fs.readdirSync(OUT).reduce((sum, f) => {
    const stat = fs.statSync(path.join(OUT, f));
    return sum + stat.size;
  }, 0);
  
  console.log(`\n=== Extraction Complete ===`);
  console.log(`Files: ${totalFiles} data files + manifest`);
  console.log(`Total: ${Math.round(totalSize / 1024)}KB`);
  console.log(`Output: ${OUT}`);
}

main().catch(err => { console.error('FATAL:', err.message); process.exit(1); });
