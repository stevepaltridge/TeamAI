# MortgageTech Website Deployment Runbook

> **Status:** verified
> **Last updated:** 2026-03-12
> **Author:** S-20260312-12 (ClaudeOpus4.6)
> **Tags:** deployment, SWA, website, Azure

## Architecture

Three Azure Static Web Apps serve MortgageTech:

| SWA Name | Hostname | Purpose |
|----------|----------|----------|
| mortgage-pilot | brave-sky-03ebd8d0f.2.azurestaticapps.net | Production (mtgtech.com) |
| mortgagetech-website | proud-grass-0258fef10.1.azurestaticapps.net | Backup |
| urla-workbook | victorious-stone-0c72f0f10.6.azurestaticapps.net | URLA Workbook only |

## Source Layout

```
C:\Dev\CurrentVersions\website\
  upload/          # 29 HTML + site-nav.js + staticwebapp.config.json + assets/
  _deploy-staging/ # Copy of upload/ used by swa deploy
  .deploy-token    # mortgage-pilot SWA deployment token (119 chars)
```

## Deploy Steps

1. **Clear ReadOnly attributes** (OneDrive sets these):
   ```powershell
   Get-ChildItem C:\Dev\CurrentVersions\website\upload\*.html |
     Set-ItemProperty -Name IsReadOnly -Value $false
   ```

2. **Copy to staging**:
   ```powershell
   Copy-Item -Path .\upload\* -Destination .\_deploy-staging\ -Recurse -Force
   ```

3. **Deploy** (must cd into website dir first!):
   ```powershell
   cd C:\Dev\CurrentVersions\website
   swa deploy .\_deploy-staging\ --deployment-token (Get-Content .deploy-token) --env production
   ```

4. **Verify**: Look for the deploy URL in output. Exit code 1 does NOT mean failure.

## Common Problems

| Problem | Cause | Fix |
|---------|-------|-----|
| EPERM on $Recycle.Bin | swa CLI scanning from C:\ root | cd into website dir first |
| Access denied on file write | OneDrive ReadOnly attribute | Set-ItemProperty -IsReadOnly $false |
| Exit code 1 but deploy worked | swa CLI bug | Verify by deploy URL in output |
| String Replace() fails | LF vs CRLF mismatch | Use \r\n on Windows files |
| File encoding BOM | WriteAllText default | Use UTF8Encoding($false) for JSON |

## Email Standard

All public-facing emails: `ShowMe@MortgageTech.com`. Prior variants (mail@, info@, steve@, steve.p@) are deprecated. Preserve mailto: subject parameters when replacing.

## victorious-stone References

URLA-Workbook-Security-Whitepaper.html intentionally references victorious-stone (the workbook SWA). Not a bug.

## Session Branding

Every edit session brands touched files:
- JS script blocks: `/* S-YYYYMMDD-NN | ClaudeOpus4.6 | date | description */`
- HTML (no script): `<!-- S-YYYYMMDD-NN | ClaudeOpus4.6 | date | description -->` after DOCTYPE
