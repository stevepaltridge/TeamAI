/* TeamAI Freshness Check
 * Run: node scripts/freshness-check.js
 * Reports how current the local clone is relative to the remote.
 */
const { execSync } = require('node:child_process');

function run(cmd) {
  return execSync(cmd, { cwd: __dirname + '/..', encoding: 'utf8' }).trim();
}

try {
  // Fetch latest refs without merging
  run('git fetch origin main --quiet');

  const localHash = run('git rev-parse HEAD');
  const remoteHash = run('git rev-parse origin/main');
  const localDate = run('git log -1 --format=%ci HEAD');
  const behind = run('git rev-list HEAD..origin/main --count');
  const branch = run('git rev-parse --abbrev-ref HEAD');

  console.log('--- TeamAI Freshness Report ---');
  console.log(`Branch:     ${branch}`);
  console.log(`Local:      ${localHash.slice(0, 8)} (${localDate})`);
  console.log(`Remote:     ${remoteHash.slice(0, 8)}`);

  if (localHash === remoteHash) {
    console.log('Status:     UP TO DATE');
  } else {
    console.log(`Status:     ${behind} commit(s) behind origin/main`);
    console.log('Action:     Run "git pull --ff-only" to update');
  }
} catch (err) {
  console.error('Freshness check failed:', err.message);
  process.exit(1);
}
