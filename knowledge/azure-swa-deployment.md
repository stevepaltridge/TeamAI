# Azure Static Web Apps: Deployment Operations

> **Status:** verified
> **Last updated:** 2026-03-12
> **Author:** S-20260312-12 (ClaudeOpus4.6)
> **Tags:** Azure, SWA, deployment, PowerShell

## Question

How do I deploy files to Azure Static Web Apps using the SWA CLI from PowerShell?

## Short Answer

Use `swa deploy <staging-dir> --deployment-token <token> --env production` from the project directory. Always cd into the project directory first; never run from a parent drive root.

## Detailed Explanation

### Prerequisites
- Azure SWA CLI installed (`npm install -g @azure/static-web-apps-cli`)
- A deployment token (stored securely, e.g., in a `.deploy-token` file)

### Deploy Command
```powershell
cd C:\Dev\CurrentVersions\website
swa deploy .\_deploy-staging\ --deployment-token (Get-Content .deploy-token) --env production
```

### Post-Deploy Verification
Do NOT rely on exit code. The CLI sometimes returns exit code 1 even on success. Instead, look for the deployment URL string in the terminal output.

### File Handling on OneDrive-Synced Folders
OneDrive sets ReadOnly attributes on files. Before editing:
```powershell
Get-ChildItem *.html | Set-ItemProperty -Name IsReadOnly -Value $false
```

For writing JSON without BOM:
```powershell
$enc = [System.Text.UTF8Encoding]::new($false)
[System.IO.File]::WriteAllText($path, $content, $enc)
```

### CRLF Line Endings
Windows files use CRLF (\r\n). PowerShell `.Replace()` must match the actual line ending:
```powershell
# WRONG (fails silently):
$content.Replace("<!DOCTYPE html>`n", "new content")

# CORRECT:
$content.Replace("<!DOCTYPE html>`r`n", "new content")
```

## Common Mistakes

- Running swa deploy from C:\ root causes EPERM on system directories
- Forgetting to clear ReadOnly attributes before file writes
- Using `\n` instead of `\r\n` in string replacements on Windows
- Trusting exit code instead of verifying deploy URL in output
- Writing JSON with BOM (breaks staticwebapp.config.json)

## Related Articles

- [Website Deployment Runbook](../docs/website-deployment-runbook.md)
