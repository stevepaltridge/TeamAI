/**
 * Fix CX.LOCKSNAPCHECKALL - Bug: duplicate LOCKSNAPLOAN11, missing LOCKSNAPLOAN20
 * 
 * The lock snapshot "check all" field aggregates warnings from all LOCKSNAP
 * comparison fields. A copy-paste error causes LOCKSNAPLOAN11 (Warn Int Rate) 
 * to be checked twice while LOCKSNAPLOAN20 (Warn Margin) is never checked.
 * 
 * This means margin changes between lock snapshots are silently ignored.
 * 
 * Fix: Remove the duplicate LOCKSNAPLOAN11 reference, add LOCKSNAPLOAN20 after 19.
 */

const https = require('https');
require('dotenv').config();

function apiRequest(method, path, token, body) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: 'api.elliemae.com',
      path: path,
      method: method,
      headers: {}
    };
    
    if (token) opts.headers['Authorization'] = 'Bearer ' + token;
    
    let data;
    if (body) {
      data = JSON.stringify(body);
      opts.headers['Content-Type'] = 'application/json';
      opts.headers['Content-Length'] = Buffer.byteLength(data);
    }
    
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, body: d }));
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

async function getToken() {
  const qualifiedUsername = `${process.env.ICE_USERNAME}@encompass:${process.env.ICE_INSTANCE_ID}`;
  const body = 'grant_type=password'
    + '&username=' + encodeURIComponent(qualifiedUsername)
    + '&password=' + encodeURIComponent(process.env.ICE_PASSWORD)
    + '&client_id=' + encodeURIComponent(process.env.ICE_CLIENT_ID)
    + '&client_secret=' + encodeURIComponent(process.env.ICE_CLIENT_SECRET);
  
  const result = await new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.elliemae.com',
      path: '/oauth2/v1/token',
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(JSON.parse(d)));
    });
    req.on('error', reject);
    req.end(body);
  });
  
  return result.access_token;
}

async function main() {
  console.log('=== CX.LOCKSNAPCHECKALL Bug Fix ===\n');
  
  // 1. Auth
  const token = await getToken();
  console.log('Authenticated.\n');
  
  // The original (buggy) calculation from our data extraction before the test PATCH cleared it.
  // Bug: [CX.LOCKSNAPLOAN11] appears twice, [CX.LOCKSNAPLOAN20] (Warn Margin) is missing.
  // A previous test PATCH inadvertently cleared the calculation - we restore it with the fix.
  const originalBuggyCalc = 'Iif([CX.LOCKSNAPPROG11]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG12]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG13]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG14]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG15]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG16]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG17]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG18]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN11]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN11]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN12]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN13]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN14]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN15]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN16]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN17]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN18]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN19]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROP11]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROP12]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROP13]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROP14]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROF18]="SHORT FUNDS","REVIEW DIFFERENCES","VALID")';
  
  // The FIXED calculation:
  // 1. Remove duplicate LOCKSNAPLOAN11
  // 2. Add LOCKSNAPLOAN20 (Warn Margin) after LOCKSNAPLOAN19 (Warn DTI)
  const fixedCalc = 'Iif([CX.LOCKSNAPPROG11]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG12]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG13]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG14]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG15]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG16]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG17]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG18]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN11]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN12]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN13]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN14]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN15]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN16]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN17]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN18]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN19]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPLOAN20]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROP11]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROP12]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROP13]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROP14]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROF18]="SHORT FUNDS","REVIEW DIFFERENCES","VALID")';
  
  // 2. Verify the fix is correct before applying
  console.log('=== Calculation Diff ===');
  console.log('ORIGINAL (buggy):');
  console.log(originalBuggyCalc);
  console.log('\nFIXED:');
  console.log(fixedCalc);
  
  const orig11 = (originalBuggyCalc.match(/LOCKSNAPLOAN11/g) || []).length;
  const orig20 = (originalBuggyCalc.match(/LOCKSNAPLOAN20/g) || []).length;
  const fix11 = (fixedCalc.match(/LOCKSNAPLOAN11/g) || []).length;
  const fix20 = (fixedCalc.match(/LOCKSNAPLOAN20/g) || []).length;
  
  console.log('\nDiagnostic:');
  console.log('  Original: LOCKSNAPLOAN11 x' + orig11 + ', LOCKSNAPLOAN20 x' + orig20);
  console.log('  Fixed:    LOCKSNAPLOAN11 x' + fix11 + ', LOCKSNAPLOAN20 x' + fix20);
  
  // Verify all LOCKSNAPLOAN 11-20 are covered exactly once
  for (let i = 11; i <= 20; i++) {
    const re = new RegExp('LOCKSNAPLOAN' + i, 'g');
    const count = (fixedCalc.match(re) || []).length;
    if (count !== 1) {
      console.log('ERROR: LOCKSNAPLOAN' + i + ' appears ' + count + ' times (expected 1). Aborting.');
      return;
    }
  }
  console.log('  All LOCKSNAPLOAN 11-20: each appears exactly once. GOOD.');
  
  // 3. Check current state on the server
  const fieldPath = '/encompass/v1/settings/loan/customFields/CX.LOCKSNAPCHECKALL';
  const current = await apiRequest('GET', fieldPath, token);
  if (current.status !== 200) {
    console.log('ERROR: Could not read field. Status:', current.status);
    return;
  }
  const currentField = JSON.parse(current.body);
  console.log('\nCurrent server state:');
  console.log('  calculation:', JSON.stringify(currentField.calculation));
  console.log('  isCalculatedField:', currentField.isCalculatedField);
  
  // 4. Apply the PATCH
  console.log('\n=== Applying PATCH ===');
  const patchResult = await apiRequest('PATCH', fieldPath, token, {
    description: currentField.description || 'Lock Snapshot - Indicate Review',
    format: 'STRING',
    maxLength: 15,
    calculation: fixedCalc
  });
  
  console.log('PATCH status:', patchResult.status);
  
  if (patchResult.status === 204) {
    // 5. Verify
    console.log('\n=== Verification GET ===');
    const after = await apiRequest('GET', fieldPath, token);
    const afterField = JSON.parse(after.body);
    
    console.log('Saved calculation:');
    console.log(afterField.calculation);
    console.log('isCalculatedField:', afterField.isCalculatedField);
    
    const v11 = (afterField.calculation.match(/LOCKSNAPLOAN11/g) || []).length;
    const v20 = (afterField.calculation.match(/LOCKSNAPLOAN20/g) || []).length;
    
    console.log('\nFinal verification:');
    console.log('  LOCKSNAPLOAN11:', v11, '(expected 1)');
    console.log('  LOCKSNAPLOAN20:', v20, '(expected 1)');
    
    if (v11 === 1 && v20 === 1) {
      console.log('\n  FIX APPLIED AND VERIFIED SUCCESSFULLY!');
      console.log('\n  What changed:');
      console.log('  - Removed duplicate [CX.LOCKSNAPLOAN11] reference');
      console.log('  - Added missing [CX.LOCKSNAPLOAN20] (Warn Margin)');
      console.log('  - Lock snapshot margin comparisons are now properly checked');
    } else {
      console.log('\n  WARNING: Verification mismatch. Manual review recommended.');
    }
  } else {
    console.log('PATCH failed:', patchResult.body);
  }
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
