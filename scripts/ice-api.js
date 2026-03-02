#!/usr/bin/env node
/**
 * ice-api.js — Encompass REST API proxy via OAuth2.
 *
 * Authenticates with Encompass API using client credentials + user login,
 * then executes API queries. The agent calls this; it NEVER sees .env creds.
 *
 * Usage:
 *   node scripts/ice-api.js token              → Get access token (for debugging)
 *   node scripts/ice-api.js get <endpoint>      → GET any API endpoint
 *   node scripts/ice-api.js settings <path>     → Query company settings
 *   node scripts/ice-api.js field <fieldId>     → Look up field definition
 *   node scripts/ice-api.js folders             → List loan folders
 *   node scripts/ice-api.js rules <type>        → List business rules of type
 *   node scripts/ice-api.js schema <entity>     → Get entity schema
 *
 * Environment (.env in repo root):
 *   ICE_INSTANCE_ID, ICE_USERNAME, ICE_PASSWORD, ICE_CLIENT_ID, ICE_CLIENT_SECRET
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const https = require('https');

const API_BASE = 'api.elliemae.com';
const TOKEN_PATH = '/oauth2/v1/token';

// ─── Helpers ─────────────────────────────────────────────

function httpsRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, headers: res.headers, body: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, headers: res.headers, body: data });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function getToken() {
  const { ICE_INSTANCE_ID, ICE_USERNAME, ICE_PASSWORD, ICE_CLIENT_ID, ICE_CLIENT_SECRET } = process.env;
  if (!ICE_CLIENT_ID || !ICE_CLIENT_SECRET) {
    throw new Error('Missing OAuth credentials. Copy .env.template to .env and fill in values.');
  }
  if (!ICE_INSTANCE_ID || !ICE_USERNAME || !ICE_PASSWORD) {
    throw new Error('Missing Encompass login credentials in .env.');
  }

  const params = new URLSearchParams({
    grant_type: 'password',
    client_id: ICE_CLIENT_ID,
    client_secret: ICE_CLIENT_SECRET,
    username: `${ICE_USERNAME}@encompass:${ICE_INSTANCE_ID}`,
    password: ICE_PASSWORD
  });

  const res = await httpsRequest({
    hostname: API_BASE,
    port: 443,
    path: TOKEN_PATH,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(params.toString())
    }
  }, params.toString());

  if (res.status !== 200) {
    throw new Error(`Token request failed (${res.status}): ${JSON.stringify(res.body)}`);
  }
  return res.body.access_token;
}

async function apiGet(endpoint, token) {
  // Ensure leading slash
  if (!endpoint.startsWith('/')) endpoint = '/' + endpoint;
  // Default to v3 API if no version prefix
  if (!endpoint.startsWith('/encompass/')) {
    endpoint = '/encompass/v3' + endpoint;
  }

  const res = await httpsRequest({
    hostname: API_BASE,
    port: 443,
    path: endpoint,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    }
  });

  if (res.status === 401) throw new Error('Token expired or invalid.');
  if (res.status === 403) throw new Error(`Forbidden: ${endpoint} — check user permissions.`);
  if (res.status === 404) throw new Error(`Not found: ${endpoint}`);
  if (res.status >= 400) throw new Error(`API error (${res.status}): ${JSON.stringify(res.body)}`);

  return res.body;
}

// ─── Commands ────────────────────────────────────────────

const commands = {
  async token() {
    const t = await getToken();
    console.log('Token acquired successfully. Length:', t.length);
    // Don't print the actual token — it's a credential
  },

  async get(args) {
    const endpoint = args[0];
    if (!endpoint) { console.error('Usage: ice-api.js get <endpoint>'); process.exit(1); }
    const token = await getToken();
    const data = await apiGet(endpoint, token);
    console.log(JSON.stringify(data, null, 2));
  },

  async folders() {
    const token = await getToken();
    const data = await apiGet('/loanFolders', token);
    console.log('Loan Folders:');
    if (Array.isArray(data)) {
      data.forEach(f => console.log(`  ${f.name || f.folderName}${f.description ? ' — ' + f.description : ''}`));
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  },

  async field(args) {
    const fieldId = args[0];
    if (!fieldId) { console.error('Usage: ice-api.js field <fieldId>'); process.exit(1); }
    const token = await getToken();
    const data = await apiGet(`/settings/loan/fieldDefinitions/${fieldId}`, token);
    console.log(JSON.stringify(data, null, 2));
  },

  async settings(args) {
    const settingsPath = args[0] || '';
    const token = await getToken();
    const data = await apiGet(`/settings/${settingsPath}`, token);
    console.log(JSON.stringify(data, null, 2));
  },

  async rules(args) {
    const ruleType = args[0];
    if (!ruleType) {
      console.log('Available rule types: loanFolderRules, fieldTriggerRules, inputFormSets, personaAccessRights');
      console.log('Usage: ice-api.js rules <type>');
      return;
    }
    const token = await getToken();
    const data = await apiGet(`/settings/${ruleType}`, token);
    console.log(JSON.stringify(data, null, 2));
  },

  async schema(args) {
    const entity = args[0];
    if (!entity) { console.error('Usage: ice-api.js schema <entity>'); process.exit(1); }
    const token = await getToken();
    const data = await apiGet(`/schema/${entity}`, token);
    console.log(JSON.stringify(data, null, 2));
  }
};

// ─── Main ────────────────────────────────────────────────

async function main() {
  const cmd = process.argv[2];
  const args = process.argv.slice(3);

  if (!cmd || !commands[cmd]) {
    console.log('Encompass API Proxy — available commands:');
    console.log('  token              Verify authentication');
    console.log('  get <endpoint>     GET any API endpoint');
    console.log('  folders            List loan folders');
    console.log('  field <id>         Look up field definition');
    console.log('  settings [path]    Query company settings');
    console.log('  rules <type>       List business rules');
    console.log('  schema <entity>    Get entity schema');
    process.exit(0);
  }

  try {
    await commands[cmd](args);
  } catch (err) {
    console.error(`[ice-api] Error: ${err.message}`);
    process.exit(1);
  }
}

main();
