#!/usr/bin/env node
/**
 * test-api-write.js — Test if we can create/update custom fields via REST API
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const https = require('https');

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

async function main() {
  // Auth
  const p = new URLSearchParams({
    grant_type: 'password',
    client_id: process.env.ICE_CLIENT_ID,
    client_secret: process.env.ICE_CLIENT_SECRET,
    username: process.env.ICE_USERNAME + '@encompass:' + process.env.ICE_INSTANCE_ID,
    password: process.env.ICE_PASSWORD
  });
  const tr = await req({
    hostname: 'api.elliemae.com', port: 443, path: '/oauth2/v1/token', method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(p.toString()) }
  }, p.toString());
  const tok = JSON.parse(tr.body).access_token;
  if (!tok) { console.log('Auth failed'); return; }
  console.log('Authenticated OK');

  // 1. PATCH existing custom field (harmless — same description)
  const testPatch = JSON.stringify({ description: 'Lock Snapshot - Indicate Review' });
  const r1 = await req({
    hostname: 'api.elliemae.com', port: 443,
    path: '/encompass/v1/settings/loan/customFields/CX.LOCKSNAPCHECKALL',
    method: 'PATCH',
    headers: {
      'Authorization': 'Bearer ' + tok,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(testPatch)
    }
  }, testPatch);
  console.log('PATCH existing field ->', r1.status, ':', r1.body.substring(0, 300));

  // 2. POST new custom field — the terminal status flag
  const calc = [
    'Iif([1393] = "Loan Originated"',
    ' OR [1393] = "Application approved but not accepted"',
    ' OR [1393] = "Application denied"',
    ' OR [1393] = "Application withdrawn"',
    ' OR [1393] = "File Closed for incompleteness"',
    ' OR [1393] = "Loan purchased by your institution"',
    ' OR [1393] = "Preapproval request denied by financial institution"',
    ' OR [1393] = "Preapproval request approved but not accepted"',
    ', "Y", "")'
  ].join('');

  const newField = JSON.stringify({
    id: 'CX.PSO.TERMINAL.STATUS',
    description: 'Terminal HMDA Status Flag (Y if loan in terminal status)',
    format: 'STRING',
    maxLength: 1,
    calculation: calc
  });

  console.log('\nNew field payload:', newField.substring(0, 200), '...');

  const r2 = await req({
    hostname: 'api.elliemae.com', port: 443,
    path: '/encompass/v1/settings/loan/customFields',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + tok,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(newField)
    }
  }, newField);
  console.log('POST new field ->', r2.status, ':', r2.body.substring(0, 400));

  // If POST succeeded, verify it exists
  if (r2.status >= 200 && r2.status < 300) {
    const r3 = await req({
      hostname: 'api.elliemae.com', port: 443,
      path: '/encompass/v1/settings/loan/customFields/CX.PSO.TERMINAL.STATUS',
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + tok, 'Accept': 'application/json' }
    });
    console.log('\nVerify new field ->', r3.status, ':', r3.body.substring(0, 400));
  }
}

main().catch(e => console.error(e.message));
