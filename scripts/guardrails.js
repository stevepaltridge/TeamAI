#!/usr/bin/env node
/* ================================================================
   GUARDRAILS.JS — Mechanical protection for stable code
   ================================================================
   Commands:
     node scripts/guardrails.js status     Show all golden files + integrity
     node scripts/guardrails.js check      Verify NO golden file changed (CI/pre-commit)
     node scripts/guardrails.js lock <f>   Mark file as show-ready (records SHA)
     node scripts/guardrails.js unlock <f> <reason>  Temporarily allow edits
     node scripts/guardrails.js diff       Show what changed in golden files
     node scripts/guardrails.js scan       Auto-discover + hash all key files
     node scripts/guardrails.js brief      One-line summary for agent pre-flight

   Deploy gate (blocks git push + swa deploy):
     node scripts/guardrails.js deploy-lock          Re-lock after deploy
     node scripts/guardrails.js deploy-unlock <why>  Unlock (user auth required)
     node scripts/guardrails.js deploy-check         Check lock state (for hooks)
     node scripts/guardrails.js deploy-status        Show lock state
     node scripts/guardrails.js deploy-tag [note]    Tag HEAD as a deploy snapshot (immutable)
     node scripts/guardrails.js deploy-rollback [tag] Restore upload/ from a deploy tag
     node scripts/guardrails.js deploy-history       List all deploy tags
     node scripts/guardrails.js install-push-hook    Install git pre-push hook

   Cache-buster enforcement (prevents stale CSS/JS in Simple Browser):
     node scripts/guardrails.js cache-check          Audit stale ?v= stamps
     node scripts/guardrails.js cache-bust           Auto-bump stale ?v= to today

   Exit codes: 0 = all clear, 1 = golden file tampered, 2 = usage error
   ================================================================ */
/* @wbx-modified ClaudeOpus4.6·a7e2 | 2026-03-05 | Harden cache-bust: fix regex lastIndex leak, suffix overflow past z, dead code, write error handling, brief truncation | prev: ClaudeOpus4.6·dfc3@2026-03-05 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const MANIFEST = path.join(ROOT, 'guardrails.json');
const LOG_FILE = path.join(ROOT, 'guardrails.log');
const DEPLOY_LOCK = path.join(ROOT, 'deploy.lock');

// ── Helpers ─────────────────────────────────────────────────────

function sha256(filePath) {
    try {
        const buf = fs.readFileSync(filePath);
        return crypto.createHash('sha256').update(buf).digest('hex').substring(0, 16);
    } catch { return null; }
}

function readManifest() {
    try {
        return JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
    } catch {
        console.error('ERROR: Cannot read guardrails.json');
        process.exit(2);
    }
}

function writeManifest(data) {
    data._meta.updated = new Date().toISOString();
    fs.writeFileSync(MANIFEST, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function log(msg) {
    const ts = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const line = `[${ts}] ${msg}\n`;
    fs.appendFileSync(LOG_FILE, line, 'utf8');
}

function relPath(abs) {
    return path.relative(ROOT, abs).replace(/\\/g, '/');
}

function absPath(rel) {
    return path.resolve(ROOT, rel);
}

function fileExists(p) {
    try { fs.accessSync(p); return true; } catch { return false; }
}

// ── LOCK: Mark a file as show-ready ─────────────────────────────

function lockFile(filePath, note) {
    const data = readManifest();
    const rel = relPath(path.resolve(ROOT, filePath));
    const abs = absPath(rel);

    if (!fileExists(abs)) {
        console.error(`File not found: ${rel}`);
        process.exit(2);
    }

    const hash = sha256(abs);
    const stat = fs.statSync(abs);

    data.files[rel] = {
        status: 'show-ready',
        sha256: hash,
        locked: new Date().toISOString(),
        size: stat.size,
        note: note || '',
        unlocked: false
    };

    writeManifest(data);
    log(`LOCK ${rel} sha=${hash} ${note || ''}`);
    console.log(`🔒 LOCKED: ${rel} (${hash})`);
}

// ── UNLOCK: Temporarily allow edits ──────────────────────────────

function unlockFile(filePath, reason) {
    const data = readManifest();
    const rel = relPath(path.resolve(ROOT, filePath));

    if (!data.files[rel]) {
        console.error(`Not in manifest: ${rel}`);
        process.exit(2);
    }

    if (!reason) {
        console.error('UNLOCK requires a reason. Usage: unlock <file> <reason>');
        process.exit(2);
    }

    data.files[rel].unlocked = true;
    data.files[rel].unlockReason = reason;
    data.files[rel].unlockTime = new Date().toISOString();
    writeManifest(data);
    log(`UNLOCK ${rel} reason="${reason}"`);
    console.log(`🔓 UNLOCKED: ${rel} — reason: ${reason}`);
    console.log(`   Re-lock after editing: node scripts/guardrails.js lock ${rel}`);
}

// ── CHECK: Verify all tracked files are untouched ────────────────

function check() {
    const data = readManifest();
    const files = data.files;
    const keys = Object.keys(files);

    if (keys.length === 0) {
        console.log('⚠️  No files in guardrails manifest. Run: node scripts/guardrails.js scan');
        return 0;
    }

    let violations = 0;
    let ok = 0;
    let unlocked = 0;
    let missing = 0;
    let silverOk = 0;
    let silverChanged = 0;

    for (const rel of keys) {
        const entry = files[rel];
        const isSilver = entry.status === 'silver';
        if (entry.status !== 'show-ready' && !isSilver) continue;

        const abs = absPath(rel);
        if (!fileExists(abs)) {
            console.log(`❌ MISSING: ${rel}`);
            missing++;
            if (!isSilver) violations++;
            continue;
        }

        if (entry.unlocked) {
            const tier = isSilver ? '(S)' : '';
            console.log(`🔓 UNLOCKED${tier}: ${rel} (edits allowed — ${entry.unlockReason})`);
            unlocked++;
            continue;
        }

        const currentHash = sha256(abs);
        if (currentHash !== entry.sha256) {
            if (isSilver) {
                console.log(`⚠️  SILVER CHANGED: ${rel}`);
                console.log(`   Expected: ${entry.sha256}`);
                console.log(`   Current:  ${currentHash}`);
                silverChanged++;
                log(`SILVER CHANGE ${rel} expected=${entry.sha256} actual=${currentHash}`);
            } else {
                console.log(`🚨 TAMPERED: ${rel}`);
                console.log(`   Expected: ${entry.sha256}`);
                console.log(`   Current:  ${currentHash}`);
                console.log(`   Locked:   ${entry.locked}`);
                violations++;
                log(`TAMPER DETECTED ${rel} expected=${entry.sha256} actual=${currentHash}`);
            }
        } else {
            if (isSilver) silverOk++;
            else ok++;
        }
    }

    console.log('');
    if (silverChanged > 0) {
        console.log(`⚠️  ${silverChanged} silver file(s) changed — review recommended`);
        console.log('   Use: node scripts/guardrails.js silver-lock <file> to re-lock after review');
    }
    if (violations > 0) {
        console.log(`🚨 ${violations} VIOLATION(S) — golden files were changed!`);
        console.log('   Fix: revert the file, or unlock it first with a reason.');
        return 1;
    }

    let msg = `✅ All clear: ${ok} golden, ${unlocked} unlocked, ${missing} missing`;
    if (silverOk + silverChanged > 0) msg += `, ${silverOk} silver`;
    console.log(msg);
    return 0;
}

// ── STATUS: Full dashboard ───────────────────────────────────────

function status() {
    const data = readManifest();
    const files = data.files;
    const keys = Object.keys(files).sort();

    console.log('');
    console.log('┌─────────────────────────────────────────────────────────────┐');
    console.log('│  GUARDRAILS STATUS                                          │');
    console.log('│  ' + new Date().toISOString() + '                           │');
    console.log('└─────────────────────────────────────────────────────────────┘');
    console.log('');

    if (keys.length === 0) {
        console.log('  (no files tracked yet — run: node scripts/guardrails.js scan)');
        return;
    }

    let showReady = 0, inProgress = 0, tampered = 0;
    let silverOk = 0, silverChanged = 0;

    for (const rel of keys) {
        const entry = files[rel];
        const abs = absPath(rel);
        const exists = fileExists(abs);
        const currentHash = exists ? sha256(abs) : null;
        const hashMatch = currentHash === entry.sha256;
        const isSilver = entry.status === 'silver';
        let icon;

        if (!exists) {
            icon = '❌ MISSING';
        } else if (entry.unlocked) {
            icon = isSilver ? '🔓 UNLOCKED(S)' : '🔓 UNLOCKED';
        } else if (isSilver && hashMatch) {
            icon = '🥈 SILVER';
            silverOk++;
        } else if (isSilver && !hashMatch) {
            icon = '⚠️  CHANGED(S)';
            silverChanged++;
        } else if (entry.status === 'show-ready' && hashMatch) {
            icon = '🟢 STABLE';
            showReady++;
        } else if (entry.status === 'show-ready' && !hashMatch) {
            icon = '🚨 TAMPERED';
            tampered++;
        } else {
            icon = '🟡 IN-PROGRESS';
            inProgress++;
        }

        const note = entry.note ? ` — ${entry.note}` : '';
        console.log(`  ${icon}  ${rel}${note}`);
    }

    console.log('');
    let summary = `  Summary: ${showReady} golden, ${inProgress} in-progress, ${tampered} tampered`;
    if (silverOk + silverChanged > 0) summary += `, ${silverOk} silver`;
    if (silverChanged > 0) summary += ` (⚠️ ${silverChanged} changed)`;
    console.log(summary);
    console.log('');
}

// ── BRIEF: One-line for agent pre-flight ─────────────────────────

function brief() {
    const data = readManifest();
    const keys = Object.keys(data.files);
    let stable = 0, tampered = 0, unlocked = 0;
    let silverOk = 0, silverChanged = 0, silverUnlocked = 0;

    for (const rel of keys) {
        const entry = data.files[rel];
        if (entry.status === 'silver') {
            if (entry.unlocked) { silverUnlocked++; continue; }
            const abs = absPath(rel);
            const hash = fileExists(abs) ? sha256(abs) : null;
            if (hash === entry.sha256) silverOk++;
            else silverChanged++;
            continue;
        }
        if (entry.status !== 'show-ready') continue;
        if (entry.unlocked) { unlocked++; continue; }
        const abs = absPath(rel);
        const hash = fileExists(abs) ? sha256(abs) : null;
        if (hash === entry.sha256) stable++;
        else tampered++;
    }

    if (tampered > 0) {
        console.log(`🚨 GUARDRAILS: ${tampered} golden file(s) TAMPERED — run 'node scripts/guardrails.js status' NOW`);
        process.exit(1);
    }
    console.log(`✅ GUARDRAILS: ${stable} golden, ${unlocked} unlocked, 0 tampered`);
    if (silverOk + silverChanged + silverUnlocked > 0) {
        let smsg = `🥈 SILVER: ${silverOk} locked`;
        if (silverUnlocked > 0) smsg += `, ${silverUnlocked} unlocked`;
        if (silverChanged > 0) smsg += `, ⚠️ ${silverChanged} changed`;
        console.log(smsg);
    }

    // Deploy lock status
    const dl = readDeployLock();
    if (dl.locked) {
        console.log(`🔒 DEPLOY: LOCKED — push/deploy blocked`);
    } else {
        console.log(`🔓 DEPLOY: UNLOCKED — push/deploy permitted (re-lock after deploy!)`);
    }

    // Cache-buster audit (only if workbook exists)
    const staleV = cacheBustAudit();
    if (staleV === null) {
        // No workbook — skip cache section silently
    } else if (staleV.length > 0) {
        const uniqueNames = [...new Set(staleV.map(s => s.file))];
        const preview = uniqueNames.length <= 5
            ? uniqueNames.join(', ')
            : uniqueNames.slice(0, 5).join(', ') + ` (+${uniqueNames.length - 5} more)`;
        console.log(`⚠️  CACHE: ${staleV.length} stale ?v= stamp(s) — ${preview}`);
        console.log(`   Fix: node scripts/guardrails.js cache-bust`);
    } else {
        console.log(`✅ CACHE: All ?v= stamps current`);
    }

    // Brand status (run brand-check brief inline)
    try {
        const brandResult = require('child_process').execSync(
            'node scripts/brand-check.js brief',
            { cwd: ROOT, encoding: 'utf8', timeout: 5000, stdio: ['pipe', 'pipe', 'pipe'] }
        ).trim();
        if (brandResult) console.log(brandResult);
    } catch { /* brand-check not installed yet — skip */ }
}

// ── DIFF: Show git diff for any changed golden files ─────────────

function diff() {
    const data = readManifest();
    const keys = Object.keys(data.files);
    let found = false;

    for (const rel of keys) {
        const entry = data.files[rel];
        if (entry.status !== 'show-ready' || entry.unlocked) continue;
        const abs = absPath(rel);
        const hash = fileExists(abs) ? sha256(abs) : null;
        if (hash !== entry.sha256) {
            found = true;
            console.log(`\n── ${rel} ──`);
            try {
                const out = execSync(`git diff -- "${rel}"`, { cwd: ROOT, encoding: 'utf8' });
                console.log(out || '  (no git diff — file may be untracked)');
            } catch { console.log('  (git diff failed)'); }
        }
    }

    if (!found) console.log('No golden files have changed.');
}

// ── SCAN: Auto-discover key files and hash them ──────────────────

function scan() {
    const data = readManifest();

    // Key categories to auto-discover
    const patterns = [
        { glob: 'T*.html', note: 'T-panel HTML' },
        { glob: 'tform-base.css', note: 'Base CSS framework' },
        { glob: 'tform-dark-mode.css', note: 'Dark mode CSS' },
        { glob: 'URLA_Workbook.html', note: 'Main workbook shell' },
        { glob: 'URLA_Workbook.js', note: 'Main workbook logic' },
        { glob: 'URLA_Workbook.css', note: 'Workbook styles' },
        { glob: 'responsive-gap.js', note: 'Per-iframe gap slider responder' },
        { glob: 'encompassBridge.js', note: 'Encompass SSF bridge' },
        { glob: 'field-formatters.js', note: 'Field formatting' },
        { glob: 'fieldLockManager.js', note: 'Field lock system' },
        { glob: 'panel-init.js', note: 'Panel initialization' },
        { glob: 'country-list.js', note: 'Country dropdown data' },
        { glob: 'fonts.css', note: 'Font definitions' },
        { glob: 'staticwebapp.config.json', note: 'Azure SWA routing' },
        { glob: 'index.html', note: 'Azure SWA entry point' },
        { glob: 'perf-harness.js', note: 'In-page performance tester' },
    ];

    let added = 0;
    let existing = 0;

    for (const p of patterns) {
        // Simple glob: if it has *, scan directory
        if (p.glob.includes('*')) {
            const prefix = p.glob.replace('*', '');
            const files = fs.readdirSync(ROOT).filter(f => {
                if (prefix.endsWith('.html')) {
                    return f.startsWith(prefix.replace('.html', '')) && f.endsWith('.html');
                }
                return f.startsWith(prefix.charAt(0)) && f.match(/^T\d+A\d+\.html$/);
            });
            for (const f of files) {
                const rel = f;
                if (data.files[rel]) { existing++; continue; }
                const abs = path.join(ROOT, f);
                const hash = sha256(abs);
                const stat = fs.statSync(abs);
                data.files[rel] = {
                    status: 'show-ready',
                    sha256: hash,
                    locked: new Date().toISOString(),
                    size: stat.size,
                    note: p.note,
                    unlocked: false
                };
                added++;
                console.log(`  + ${rel} (${hash})`);
            }
        } else {
            const rel = p.glob;
            if (data.files[rel]) { existing++; continue; }
            const abs = path.join(ROOT, p.glob);
            if (!fileExists(abs)) continue;
            const hash = sha256(abs);
            const stat = fs.statSync(abs);
            data.files[rel] = {
                status: 'show-ready',
                sha256: hash,
                locked: new Date().toISOString(),
                size: stat.size,
                note: p.note,
                unlocked: false
            };
            added++;
            console.log(`  + ${rel} (${hash})`);
        }
    }

    writeManifest(data);
    log(`SCAN added=${added} existing=${existing}`);
    console.log(`\nScan complete: ${added} added, ${existing} already tracked`);
    console.log('Review with: node scripts/guardrails.js status');
}

// ── CACHE-BUST: Detect & fix stale ?v= stamps in URLA_Workbook.html ─

const WORKBOOK_HTML = path.join(ROOT, 'URLA_Workbook.html');
// Matches: href="file.css?v=20260227a" or src="file.js?v=20260305b"
const CACHE_BUST_RE = /(?:href|src)="([^"?]+)\?v=(\d{8})([a-z]?)"/g;

/**
 * Audit: parse HTML for ?v= refs, compare against file mtime.
 * Returns array of { file, vDate, vSuffix, mtime, mtimeStr, fullMatch }
 * for every STALE reference (file modified after its ?v= date).
 * Returns null if URLA_Workbook.html does not exist (no workbook = no audit).
 */
function cacheBustAudit() {
    if (!fileExists(WORKBOOK_HTML)) return null;
    const html = fs.readFileSync(WORKBOOK_HTML, 'utf8');
    CACHE_BUST_RE.lastIndex = 0; // safety: reset global regex state
    const stale = [];
    let m;
    while ((m = CACHE_BUST_RE.exec(html)) !== null) {
        const file = m[1];          // e.g. "StatusPanel.css"
        const vDateStr = m[2];      // e.g. "20260305"
        const vSuffix = m[3] || ''; // e.g. "a"
        const abs = path.join(ROOT, file);
        if (!fileExists(abs)) continue; // external or missing — skip
        const mtime = fs.statSync(abs).mtime;
        // Parse vDate: "20260305" → Date(2026, 2, 5)  (month is 0-indexed)
        const y = parseInt(vDateStr.substring(0, 4));
        const mo = parseInt(vDateStr.substring(4, 6)) - 1;
        const d = parseInt(vDateStr.substring(6, 8));
        const vDate = new Date(y, mo, d, 23, 59, 59); // end of that day
        if (mtime > vDate) {
            const mtimeStr = mtime.toISOString().substring(0, 10);
            stale.push({ file, vDate: vDateStr, vSuffix, mtime, mtimeStr, fullMatch: m[0] });
        }
    }
    return stale;
}

/**
 * cache-check: Show stale cache busters without fixing.
 */
function cacheBustCheck() {
    const stale = cacheBustAudit();
    if (stale === null) {
        console.log('ℹ️  CACHE: No URLA_Workbook.html found — cache-bust audit not applicable');
        return;
    }
    if (stale.length === 0) {
        console.log('✅ CACHE: All ?v= stamps are current');
        return;
    }
    console.log(`⚠️  CACHE: ${stale.length} stale version stamp(s):\n`);
    for (const s of stale) {
        console.log(`  ${s.file}  ?v=${s.vDate}${s.vSuffix}  (file modified ${s.mtimeStr})`);
    }
    console.log(`\nFix with: node scripts/guardrails.js cache-bust`);
}

/**
 * cache-bust: Auto-bump all stale ?v= stamps to today's date.
 */
function cacheBustFix() {
    const stale = cacheBustAudit();
    if (stale === null) {
        console.error('🚫 URLA_Workbook.html not found — nothing to fix');
        process.exit(2);
    }
    if (stale.length === 0) {
        console.log('✅ CACHE: All ?v= stamps are already current — nothing to bump');
        return;
    }
    let html = fs.readFileSync(WORKBOOK_HTML, 'utf8');
    const today = new Date();
    const pad = n => String(n).padStart(2, '0');
    const todayStr = `${today.getFullYear()}${pad(today.getMonth() + 1)}${pad(today.getDate())}`;

    // For each stale entry, build the replacement
    let bumped = 0;
    for (const s of stale) {
        // Find highest suffix already used for this date+file in the (evolving) HTML
        const suffixRe = new RegExp(`(?:href|src)="${s.file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\?v=${todayStr}([a-z]?)"`, 'g');
        let maxSuffix = '';
        let sm;
        while ((sm = suffixRe.exec(html)) !== null) {
            if (sm[1] > maxSuffix) maxSuffix = sm[1];
        }
        let newSuffix;
        if (maxSuffix === '') {
            newSuffix = 'a';
        } else if (maxSuffix >= 'z') {
            // Overflow: 26 bumps in one day — switch to numeric suffix
            newSuffix = 'z' + Date.now().toString(36).slice(-3);
        } else {
            newSuffix = String.fromCharCode(maxSuffix.charCodeAt(0) + 1);
        }
        const oldRef = `${s.file}?v=${s.vDate}${s.vSuffix}`;
        const newRef = `${s.file}?v=${todayStr}${newSuffix}`;
        html = html.replace(oldRef, newRef);
        console.log(`  🔄 ${s.file}  ?v=${s.vDate}${s.vSuffix} → ?v=${todayStr}${newSuffix}`);
        bumped++;
    }
    try {
        fs.writeFileSync(WORKBOOK_HTML, html, 'utf8');
    } catch (e) {
        console.error(`\n🚫 Failed to write URLA_Workbook.html: ${e.message}`);
        console.error('   Is the file read-only or locked by another process?');
        process.exit(1);
    }
    log(`CACHE-BUST bumped=${bumped} date=${todayStr}`);
    console.log(`\n✅ Bumped ${bumped} cache buster(s) in URLA_Workbook.html`);
}

// ── SILVER TIER — Near-production protection ─────────────────────
// Silver files are tracked + hashed like golden, but don't block commits.
// Agents MUST unlock before editing. Changes are logged + warned.
// Workflow: silver-add → unlock → edit → silver-lock
// To promote to golden: lock <file> (overrides tier to show-ready)

function silverAdd(filePath, note) {
    const data = readManifest();
    const rel = relPath(path.resolve(ROOT, filePath));
    const abs = absPath(rel);

    if (!fileExists(abs)) {
        console.error(`File not found: ${rel}`);
        process.exit(2);
    }

    // Don't downgrade golden to silver
    if (data.files[rel] && data.files[rel].status === 'show-ready') {
        console.error(`${rel} is already GOLDEN (show-ready). Cannot downgrade to silver.`);
        console.error('To manage golden files, use lock/unlock commands.');
        process.exit(2);
    }

    const hash = sha256(abs);
    const stat = fs.statSync(abs);

    data.files[rel] = {
        status: 'silver',
        sha256: hash,
        locked: new Date().toISOString(),
        size: stat.size,
        note: note || '',
        unlocked: false
    };

    writeManifest(data);
    log(`SILVER-ADD ${rel} sha=${hash} ${note || ''}`);
    console.log(`🥈 SILVER: ${rel} (${hash})`);
}

function silverLock(filePath) {
    const data = readManifest();
    const rel = relPath(path.resolve(ROOT, filePath));
    const abs = absPath(rel);

    if (!fileExists(abs)) {
        console.error(`File not found: ${rel}`);
        process.exit(2);
    }

    if (!data.files[rel]) {
        console.error(`Not in manifest: ${rel}. Use silver-add first.`);
        process.exit(2);
    }

    if (data.files[rel].status !== 'silver') {
        console.error(`${rel} is not silver-tier (status: ${data.files[rel].status}). Use 'lock' for golden files.`);
        process.exit(2);
    }

    const hash = sha256(abs);
    const stat = fs.statSync(abs);

    data.files[rel].sha256 = hash;
    data.files[rel].locked = new Date().toISOString();
    data.files[rel].size = stat.size;
    data.files[rel].unlocked = false;
    delete data.files[rel].unlockReason;
    delete data.files[rel].unlockTime;

    writeManifest(data);
    log(`SILVER-LOCK ${rel} sha=${hash}`);
    console.log(`🥈 SILVER RE-LOCKED: ${rel} (${hash})`);
}

function silverList() {
    const data = readManifest();
    const silver = Object.entries(data.files)
        .filter(([, e]) => e.status === 'silver')
        .sort(([a], [b]) => a.localeCompare(b));

    if (silver.length === 0) {
        console.log('No silver-tier files registered.');
        return;
    }

    console.log(`\n🥈 Silver-Tier Files (${silver.length}):\n`);
    for (const [rel, entry] of silver) {
        const abs = absPath(rel);
        const exists = fileExists(abs);
        const hash = exists ? sha256(abs) : null;
        const match = hash === entry.sha256;
        const icon = !exists ? '❌' : entry.unlocked ? '🔓' : match ? '🥈' : '⚠️';
        const note = entry.note ? ` — ${entry.note}` : '';
        console.log(`  ${icon} ${rel}${note}`);
    }
    console.log('');
}

// ── DEPLOY LOCK — Mechanical gate for push/deploy ─────────────────

function readDeployLock() {
    try {
        return JSON.parse(fs.readFileSync(DEPLOY_LOCK, 'utf8'));
    } catch {
        // If file is missing or corrupt, treat as LOCKED (fail-safe)
        return { locked: true, reason: 'deploy.lock missing or corrupt — fail-safe LOCKED' };
    }
}

function writeDeployLock(data) {
    fs.writeFileSync(DEPLOY_LOCK, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function deployLock() {
    const data = readDeployLock();
    if (data.locked) {
        console.log('🔒 Deploy is already LOCKED.');
        return;
    }
    data.locked = true;
    data.reason = 'Re-locked after deploy';
    data.lockedBy = 'guardrails';
    data.lockedAt = new Date().toISOString();
    delete data.unlockedBy;
    delete data.unlockedAt;
    delete data.unlockReason;
    writeDeployLock(data);
    log('DEPLOY-LOCK: re-locked');
    console.log('🔒 Deploy LOCKED. Push and deploy are now blocked.');
}

function deployUnlock(reason) {
    if (!reason || reason.trim().length === 0) {
        console.error('ERROR: You must provide a reason to unlock deploy.');
        console.error('Usage: node scripts/guardrails.js deploy-unlock "<reason>"');
        process.exit(2);
    }
    const data = readDeployLock();
    data.locked = false;
    data.unlockReason = reason;
    data.unlockedBy = 'user';
    data.unlockedAt = new Date().toISOString();
    writeDeployLock(data);
    log(`DEPLOY-UNLOCK: ${reason}`);
    console.log(`🔓 Deploy UNLOCKED: ${reason}`);
    console.log('   You may now push and deploy. Re-lock after: node scripts/guardrails.js deploy-lock');
}

function deployCheck() {
    // Returns 0 if unlocked (deploy allowed), 1 if locked (blocked)
    const data = readDeployLock();
    if (data.locked) {
        console.error('🚫 DEPLOY BLOCKED: deploy.lock is LOCKED.');
        console.error(`   Reason: ${data.reason || 'no reason'}`);
        console.error('');
        console.error('   Only the user can unlock:');
        console.error('   node scripts/guardrails.js deploy-unlock "<reason>"');
        return 1;
    }
    console.log('✅ Deploy is UNLOCKED — push/deploy permitted.');
    return 0;
}

function deployStatus() {
    const data = readDeployLock();
    if (data.locked) {
        console.log(`🔒 DEPLOY: LOCKED (${data.reason || 'no reason'})`);
    } else {
        console.log(`🔓 DEPLOY: UNLOCKED by ${data.unlockedBy || '?'} — ${data.unlockReason || '?'}`);
    }
}

// ── GIT PRE-COMMIT HOOK INSTALLER ────────────────────────────────

function installHook() {
    const hookDir = path.join(ROOT, '.git', 'hooks');
    const hookFile = path.join(hookDir, 'pre-commit');

    if (!fs.existsSync(hookDir)) {
        console.error('No .git/hooks directory found');
        process.exit(2);
    }

    const hookContent = `#!/bin/sh
# Guardrails pre-commit hook — blocks commits that tamper with golden files
node scripts/guardrails.js check
if [ $? -ne 0 ]; then
    echo ""
    echo "COMMIT BLOCKED: Golden files were modified without unlock."
    echo "To proceed: node scripts/guardrails.js unlock <file> \\"<reason>\\""
    echo "Then re-lock after: node scripts/guardrails.js lock <file>"
    echo ""
    exit 1
fi
`;

    fs.writeFileSync(hookFile, hookContent, { mode: 0o755 });
    console.log('✅ Git pre-commit hook installed');
    console.log('   Commits touching golden files will be blocked unless unlocked first.');
    log('HOOK installed pre-commit');
}

// ── GIT PRE-PUSH HOOK INSTALLER ──────────────────────────────────

// ── DEPLOY TAGGING — Immutable pre-deploy snapshots ──────────────

function deployTag(note) {
    // Create an immutable git tag before every deploy
    const now = new Date();
    const ts = now.toISOString().replace(/[T:]/g, '-').replace(/\..+/, '').slice(0, 16);
    // Format: deploy-20260226-1430
    const tagName = `deploy-${ts}`;
    const message = note
        ? `Pre-deploy snapshot: ${note}`
        : 'Pre-deploy snapshot';

    try {
        // Must have a clean-enough state to tag (HEAD must exist)
        execSync('git rev-parse HEAD', { cwd: ROOT, stdio: 'pipe' });
    } catch {
        console.error('🚫 Cannot tag: no git HEAD found.');
        process.exit(2);
    }

    try {
        execSync(`git tag -a "${tagName}" -m "${message.replace(/"/g, '\\"')}"`, {
            cwd: ROOT, stdio: 'pipe'
        });
    } catch (e) {
        console.error(`🚫 Failed to create tag: ${e.message}`);
        process.exit(1);
    }

    log(`DEPLOY-TAG: ${tagName} — ${message}`);
    console.log(`🏷️  Tag created: ${tagName}`);
    console.log(`   Message: ${message}`);
    console.log(`   Commit: ${execSync('git rev-parse --short HEAD', { cwd: ROOT, encoding: 'utf8' }).trim()}`);
    console.log('');
    console.log('   This tag is IMMUTABLE — it points to this exact commit forever.');
    console.log('   To rollback later: node scripts/guardrails.js deploy-rollback ' + tagName);
    return tagName;
}

function deployHistory() {
    let tags;
    try {
        tags = execSync('git tag -l "deploy-*" --sort=-creatordate', {
            cwd: ROOT, encoding: 'utf8'
        }).trim();
    } catch {
        tags = '';
    }

    if (!tags) {
        console.log('No deploy tags found.');
        console.log('Create one: node scripts/guardrails.js deploy-tag "description"');
        return;
    }

    console.log('📦 Deploy Tags (newest first):');
    console.log('─'.repeat(60));
    const tagList = tags.split('\n').filter(Boolean);
    for (const tag of tagList) {
        try {
            const info = execSync(`git tag -l "${tag}" --format="%(creatordate:short) %(subject)"`, {
                cwd: ROOT, encoding: 'utf8'
            }).trim();
            const commit = execSync(`git rev-list -1 --abbrev-commit "${tag}"`, {
                cwd: ROOT, encoding: 'utf8'
            }).trim();
            console.log(`  ${tag}  [${commit}]  ${info}`);
        } catch {
            console.log(`  ${tag}`);
        }
    }
    console.log('─'.repeat(60));
    console.log(`${tagList.length} deploy tag(s)`);
    console.log('');
    console.log('Rollback: node scripts/guardrails.js deploy-rollback <tag>');
}

function deployRollback(tagName) {
    if (!tagName) {
        // Show available tags and ask
        console.error('Usage: node scripts/guardrails.js deploy-rollback <tag>');
        console.error('');
        deployHistory();
        process.exit(2);
    }

    // Verify tag exists
    try {
        execSync(`git rev-parse "${tagName}"`, { cwd: ROOT, stdio: 'pipe' });
    } catch {
        console.error(`🚫 Tag "${tagName}" not found.`);
        console.error('');
        deployHistory();
        process.exit(1);
    }

    const commit = execSync(`git rev-list -1 --abbrev-commit "${tagName}"`, {
        cwd: ROOT, encoding: 'utf8'
    }).trim();

    console.log(`🔄 Rolling back upload/ to tag: ${tagName} (commit ${commit})`);
    console.log('');

    // Get list of files that existed in upload/ at that tag
    let files;
    try {
        files = execSync(`git ls-tree -r --name-only "${tagName}" -- upload/`, {
            cwd: ROOT, encoding: 'utf8'
        }).trim().split('\n').filter(Boolean);
    } catch {
        console.error(`🚫 Could not read upload/ from tag "${tagName}".`);
        process.exit(1);
    }

    if (files.length === 0) {
        console.error(`🚫 No files found in upload/ at tag "${tagName}".`);
        process.exit(1);
    }

    // Restore each file from the tagged commit
    let restored = 0;
    let errors = 0;
    for (const file of files) {
        try {
            execSync(`git checkout "${tagName}" -- "${file}"`, { cwd: ROOT, stdio: 'pipe' });
            restored++;
        } catch (e) {
            console.error(`  ❌ Failed: ${file} — ${e.message}`);
            errors++;
        }
    }

    log(`DEPLOY-ROLLBACK: ${tagName} — restored ${restored} files to upload/`);
    console.log(`✅ Restored ${restored} files from ${tagName}`);
    if (errors > 0) console.log(`⚠️  ${errors} files failed`);
    console.log('');
    console.log('upload/ now matches the exact state at that deploy tag.');
    console.log('You can now re-deploy: swa deploy ./upload --env production');
}

// ── GIT PRE-PUSH HOOK INSTALLER ──────────────────────────────────

function installPushHook() {
    const hookDir = path.join(ROOT, '.git', 'hooks');
    const hookFile = path.join(hookDir, 'pre-push');

    if (!fs.existsSync(hookDir)) {
        console.error('No .git/hooks directory found');
        process.exit(2);
    }

    const hookContent = `#!/bin/sh
# Deploy lock pre-push hook — blocks git push unless deploy is explicitly unlocked
node scripts/guardrails.js deploy-check
if [ $? -ne 0 ]; then
    echo ""
    echo "PUSH BLOCKED: deploy.lock is LOCKED."
    echo "Only the user can unlock: node scripts/guardrails.js deploy-unlock \\"<reason>\\""
    echo ""
    exit 1
fi
`;

    fs.writeFileSync(hookFile, hookContent, { mode: 0o755 });
    console.log('✅ Git pre-push hook installed');
    console.log('   Pushes will be blocked unless deploy.lock is unlocked first.');
    log('HOOK installed pre-push');
}

// ── MAIN ─────────────────────────────────────────────────────────

const [,, cmd, ...args] = process.argv;

switch (cmd) {
    case 'lock':
        if (!args[0]) { console.error('Usage: lock <file> [note]'); process.exit(2); }
        lockFile(args[0], args.slice(1).join(' '));
        break;
    case 'unlock':
        if (!args[0]) { console.error('Usage: unlock <file> <reason>'); process.exit(2); }
        unlockFile(args[0], args.slice(1).join(' '));
        break;
    case 'check':
        process.exit(check());
        break;
    case 'status':
        status();
        break;
    case 'brief':
        brief();
        break;
    case 'diff':
        diff();
        break;
    case 'scan':
        scan();
        break;
    case 'silver-add':
        if (!args[0]) { console.error('Usage: silver-add <file> [note]'); process.exit(2); }
        silverAdd(args[0], args.slice(1).join(' '));
        break;
    case 'silver-lock':
        if (!args[0]) { console.error('Usage: silver-lock <file>'); process.exit(2); }
        silverLock(args[0]);
        break;
    case 'silver-list':
        silverList();
        break;
    case 'install-hook':
        installHook();
        break;
    case 'install-push-hook':
        installPushHook();
        break;
    case 'deploy-lock':
        deployLock();
        break;
    case 'deploy-unlock':
        if (!args[0]) { console.error('Usage: deploy-unlock "<reason>"'); process.exit(2); }
        deployUnlock(args.join(' '));
        break;
    case 'deploy-check':
        process.exit(deployCheck());
        break;
    case 'deploy-status':
        deployStatus();
        break;
    case 'deploy-tag':
        deployTag(args.join(' '));
        break;
    case 'deploy-history':
        deployHistory();
        break;
    case 'deploy-rollback':
        deployRollback(args[0]);
        break;
    case 'brand-check':
        try {
            const bc = require('child_process').execSync(
                'node scripts/brand-check.js check',
                { cwd: ROOT, encoding: 'utf8', stdio: 'inherit', timeout: 10000 }
            );
        } catch (e) { process.exit(e.status || 1); }
        break;
    case 'cache-bust':
        cacheBustFix();
        break;
    case 'cache-check':
        cacheBustCheck();
        break;
    case 'brand-status':
        try {
            require('child_process').execSync(
                'node scripts/brand-check.js status',
                { cwd: ROOT, encoding: 'utf8', stdio: 'inherit', timeout: 10000 }
            );
        } catch {}
        break;
    case 'firewall':
    case 'firewall-status':
        try {
            require('child_process').execSync(
                'node scripts/firewall-check.js --status',
                { cwd: ROOT, encoding: 'utf8', stdio: 'inherit', timeout: 5000 }
            );
        } catch (e) { process.exit(e.status || 1); }
        break;
    case 'firewall-check':
        if (!args[0]) {
            // Check all recent files
            try {
                require('child_process').execSync(
                    'node scripts/firewall-check.js --check-all',
                    { cwd: ROOT, encoding: 'utf8', stdio: 'inherit', timeout: 5000 }
                );
            } catch (e) { process.exit(e.status || 1); }
        } else {
            // Check specific file
            try {
                require('child_process').execSync(
                    `node scripts/firewall-check.js "${args[0]}"`,
                    { cwd: ROOT, encoding: 'utf8', stdio: 'inherit', timeout: 5000 }
                );
            } catch (e) { process.exit(e.status || 1); }
        }
        break;
    default:
        console.log('Usage: node scripts/guardrails.js <command>');
        console.log('');
        console.log('Commands:');
        console.log('  status        Full dashboard of all tracked files');
        console.log('  check         Verify golden files are untouched (for CI/hooks)');
        console.log('  brief         One-line summary for agent pre-flight');
        console.log('  lock <file>   Mark file as show-ready (records SHA)');
        console.log('  unlock <f> <reason>  Allow edits to a golden file');
        console.log('  diff          Show git diff for any changed golden files');
        console.log('  scan          Auto-discover and hash key project files');
        console.log('  install-hook  Install git pre-commit guardrail hook');
        console.log('');
        console.log('Silver tier (near-production protection):');
        console.log('  silver-add <file> [note]  Register file as silver-tier');
        console.log('  silver-lock <file>        Re-lock a silver file after editing');
        console.log('  silver-list               List all silver-tier files');
        console.log('  (unlock/lock work for silver too — lock promotes to golden)');
        console.log('');
        console.log('  deploy-lock          Lock deploys (default state)');
        console.log('  deploy-unlock <why>  Unlock deploys (user authorization required)');
        console.log('  deploy-check         Check if deploy is allowed (for hooks/scripts)');
        console.log('  deploy-status        Show current deploy lock state');
        console.log('  deploy-tag [note]    Tag HEAD as immutable deploy snapshot');
        console.log('  deploy-history       List all deploy tags');
        console.log('  deploy-rollback <tag> Restore upload/ from a deploy tag');
        console.log('  install-push-hook    Install git pre-push deploy-lock hook');
        console.log('');
        console.log('Agent firewall (ABSOLUTE — Steve-only zones):');
        console.log('  firewall             Show all firewall zones');
        console.log('  firewall-check       Check recent git diff for violations');
        console.log('  firewall-check <f>   Check if a specific file is firewalled');
        console.log('');
        console.log('Cache-buster enforcement:');
        console.log('  cache-check          Show stale ?v= stamps (audit only)');
        console.log('  cache-bust           Auto-bump all stale ?v= stamps to today');
        break;
}
