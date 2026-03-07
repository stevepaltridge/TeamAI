# ============================================================================
# TeamAI Developer Setup — MtgTechTeam
# Run as Administrator on a fresh Windows 10/11 machine
#
# What it does:
#   1. Installs Git, Node.js LTS, VS Code (via winget)
#   2. Installs VS Code extensions (Copilot, Azure Functions, Live Server, GitDoc)
#   3. Clones the TeamAI repo from Azure DevOps
#   4. Installs npm dependencies
#   5. Opens VS Code on the workspace
#
# Usage:
#   Right-click → Run with PowerShell (as Admin)
#   — or —
#   powershell -ExecutionPolicy Bypass -File teamai-setup.ps1
#
# Author: MortgageTech · MtgTechTeam
# ============================================================================

#Requires -RunAsAdministrator
$ErrorActionPreference = "Stop"

# --- Configuration -----------------------------------------------------------
$RepoUrl    = "https://MtgTechTeam@dev.azure.com/MtgTechTeam/TeamAI/_git/TeamAI"
$CloneDir   = "$env:USERPROFILE\Dev\TeamAI"
$LogFile    = "$env:TEMP\teamai-setup-$(Get-Date -Format 'yyyyMMdd-HHmmss').log"

# VS Code extensions to install
$Extensions = @(
    "GitHub.copilot"
    "GitHub.copilot-chat"
    "ms-azuretools.vscode-azurefunctions"
    "ritwickdey.LiveServer"
    "vsls-contrib.gitdoc"
    "ms-playwright.playwright"
)

# --- Helpers -----------------------------------------------------------------
function Write-Step { 
    param([string]$Msg)
    $ts = Get-Date -Format "HH:mm:ss"
    $line = "[$ts] $Msg"
    Write-Host "`n$line" -ForegroundColor Cyan
    Add-Content -Path $LogFile -Value $line
}

function Write-OK {
    param([string]$Msg)
    Write-Host "  OK: $Msg" -ForegroundColor Green
    Add-Content -Path $LogFile -Value "  OK: $Msg"
}

function Write-Warn {
    param([string]$Msg)
    Write-Host "  WARN: $Msg" -ForegroundColor Yellow
    Add-Content -Path $LogFile -Value "  WARN: $Msg"
}

function Write-Fail {
    param([string]$Msg)
    Write-Host "  FAIL: $Msg" -ForegroundColor Red
    Add-Content -Path $LogFile -Value "  FAIL: $Msg"
}

function Test-Command {
    param([string]$Cmd)
    return [bool](Get-Command $Cmd -ErrorAction SilentlyContinue)
}

function Refresh-Path {
    # Reload PATH from registry so newly-installed tools are visible
    $machine = [Environment]::GetEnvironmentVariable("Path", "Machine")
    $user    = [Environment]::GetEnvironmentVariable("Path", "User")
    $env:Path = "$machine;$user"
}

# --- Banner ------------------------------------------------------------------
Clear-Host
Write-Host ""
Write-Host "  ========================================" -ForegroundColor Magenta
Write-Host "    TeamAI Developer Setup · MtgTechTeam  " -ForegroundColor Magenta
Write-Host "  ========================================" -ForegroundColor Magenta
Write-Host ""
Write-Host "  Log: $LogFile" -ForegroundColor DarkGray
Write-Host ""

# --- Step 1: winget ----------------------------------------------------------
Write-Step "Checking winget..."
if (Test-Command "winget") {
    Write-OK "winget found"
} else {
    Write-Fail "winget not found. Windows 10 1809+ or Windows 11 required."
    Write-Fail "Install App Installer from the Microsoft Store, then re-run."
    Read-Host "Press Enter to exit"
    exit 1
}

# --- Step 2: Git -------------------------------------------------------------
Write-Step "Checking Git..."
if (Test-Command "git") {
    $gitVer = (git --version) -replace 'git version ',''
    Write-OK "Git $gitVer already installed"
} else {
    Write-Step "Installing Git..."
    winget install --id Git.Git -e --accept-package-agreements --accept-source-agreements --silent
    Refresh-Path
    if (Test-Command "git") {
        Write-OK "Git installed"
    } else {
        Write-Fail "Git install failed. Install manually: https://git-scm.com"
        Read-Host "Press Enter to exit"
        exit 1
    }
}

# --- Step 3: Node.js LTS ----------------------------------------------------
Write-Step "Checking Node.js..."
if (Test-Command "node") {
    $nodeVer = (node --version)
    Write-OK "Node.js $nodeVer already installed"
} else {
    Write-Step "Installing Node.js LTS..."
    winget install --id OpenJS.NodeJS.LTS -e --accept-package-agreements --accept-source-agreements --silent
    Refresh-Path
    if (Test-Command "node") {
        Write-OK "Node.js installed: $(node --version)"
    } else {
        Write-Fail "Node.js install failed. Install manually: https://nodejs.org"
        Read-Host "Press Enter to exit"
        exit 1
    }
}

# --- Step 4: VS Code --------------------------------------------------------
Write-Step "Checking VS Code..."
$codePath = Get-Command "code" -ErrorAction SilentlyContinue
if ($codePath) {
    Write-OK "VS Code already installed"
} else {
    Write-Step "Installing VS Code..."
    winget install --id Microsoft.VisualStudioCode -e --accept-package-agreements --accept-source-agreements --silent --override "/VERYSILENT /MERGETASKS=!runcode,addcontextmenufiles,addcontextmenufolders,associatewithfiles,addtopath"
    Refresh-Path
    # VS Code installer may need a moment
    Start-Sleep -Seconds 5
    Refresh-Path
    if (Test-Command "code") {
        Write-OK "VS Code installed"
    } else {
        # Try common install paths
        $tryPaths = @(
            "$env:LOCALAPPDATA\Programs\Microsoft VS Code\bin\code.cmd"
            "$env:ProgramFiles\Microsoft VS Code\bin\code.cmd"
        )
        $found = $false
        foreach ($p in $tryPaths) {
            if (Test-Path $p) {
                $env:Path += ";$(Split-Path $p)"
                $found = $true
                Write-OK "VS Code found at $p"
                break
            }
        }
        if (-not $found) {
            Write-Fail "VS Code install may need a restart. Continuing..."
        }
    }
}

# --- Step 5: VS Code extensions ---------------------------------------------
Write-Step "Installing VS Code extensions..."
if (Test-Command "code") {
    foreach ($ext in $Extensions) {
        Write-Host "  Installing $ext..." -ForegroundColor DarkGray -NoNewline
        $result = code --install-extension $ext --force 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host " done" -ForegroundColor Green
        } else {
            Write-Host " skipped" -ForegroundColor Yellow
        }
    }
    Write-OK "Extensions installed"
} else {
    Write-Warn "VS Code CLI not available — extensions must be installed manually after restart"
}

# --- Step 6: Clone repo -----------------------------------------------------
Write-Step "Cloning TeamAI repo..."
if (Test-Path "$CloneDir\.git") {
    Write-OK "Repo already exists at $CloneDir"
    Push-Location $CloneDir
    git pull origin main 2>&1 | Out-Null
    Write-OK "Pulled latest"
    Pop-Location
} else {
    # Ensure parent directory exists
    $parentDir = Split-Path $CloneDir
    if (-not (Test-Path $parentDir)) {
        New-Item -Path $parentDir -ItemType Directory -Force | Out-Null
    }
    
    Write-Host "  You may be prompted to sign in to Azure DevOps..." -ForegroundColor Yellow
    Write-Host "  Use your @mortgagetech.com credentials." -ForegroundColor Yellow
    Write-Host ""
    
    git clone $RepoUrl $CloneDir 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Fail "Clone failed. Check your Azure DevOps access."
        Write-Fail "URL: $RepoUrl"
        Read-Host "Press Enter to exit"
        exit 1
    }
    Write-OK "Cloned to $CloneDir"
}

# --- Step 7: npm install -----------------------------------------------------
Write-Step "Installing npm dependencies..."
Push-Location $CloneDir
if (Test-Path "package.json") {
    npm install 2>&1 | Out-Null
    Write-OK "npm dependencies installed"
} else {
    Write-Warn "No package.json found — skipping npm install"
}

# Install Playwright browsers
Write-Step "Installing Playwright browsers..."
npx playwright install chromium 2>&1 | Out-Null
Write-OK "Playwright chromium installed"
Pop-Location

# --- Step 8: API dependencies ------------------------------------------------
Write-Step "Installing API dependencies..."
if (Test-Path "$CloneDir\api\package.json") {
    Push-Location "$CloneDir\api"
    npm install 2>&1 | Out-Null
    Write-OK "API dependencies installed"
    Pop-Location
} else {
    Write-Warn "No api/package.json — skipping"
}

# --- Step 9: Git config (optional) ------------------------------------------
Write-Step "Checking git user config..."
$gitUser = git config --global user.name 2>$null
$gitEmail = git config --global user.email 2>$null
if (-not $gitUser -or -not $gitEmail) {
    Write-Warn "Git user.name or user.email not set."
    Write-Host ""
    $name = Read-Host "  Enter your name (e.g. Jane Smith)"
    $email = Read-Host "  Enter your email (e.g. jane@mortgagetech.com)"
    if ($name) { git config --global user.name $name }
    if ($email) { git config --global user.email $email }
    Write-OK "Git identity set: $name <$email>"
} else {
    Write-OK "Git identity: $gitUser <$gitEmail>"
}

# --- Step 10: Configure VS Code user settings --------------------------------
Write-Step "Configuring Copilot org instructions..."
$vsCodeUserSettings = "$env:APPDATA\Code\User\settings.json"
if (Test-Path $vsCodeUserSettings) {
    $raw = Get-Content $vsCodeUserSettings -Raw
    if ($raw -match 'copilot-instructions\.md') {
        Write-OK "Copilot instruction path already configured"
    } else {
        # Inject the instruction file reference into existing settings
        $instructionPath = ($CloneDir -replace '\\','/') + "/.github/copilot-instructions.md"
        $injection = "`"github.copilot.chat.codeGeneration.instructions`": [{`"file`": `"$instructionPath`"}]"
        # Insert before the closing brace
        $raw = $raw.TrimEnd()
        if ($raw -match '\}$') {
            $raw = $raw.Substring(0, $raw.Length - 1).TrimEnd()
            if ($raw[-1] -ne ',' -and $raw[-1] -ne '{') { $raw += ',' }
            $raw += "`n    $injection`n}"
            Set-Content $vsCodeUserSettings -Value $raw -Encoding UTF8
            Write-OK "Added Copilot instruction path to VS Code settings"
        } else {
            Write-Warn "Could not auto-inject — add manually per onboarding guide"
        }
    }
} else {
    # Create settings file from scratch
    $instructionPath = ($CloneDir -replace '\\','/') + "/.github/copilot-instructions.md"
    $newSettings = @"
{
    "github.copilot.chat.codeGeneration.instructions": [
        {
            "file": "$instructionPath"
        }
    ]
}
"@
    $settingsDir = Split-Path $vsCodeUserSettings
    if (-not (Test-Path $settingsDir)) { New-Item -Path $settingsDir -ItemType Directory -Force | Out-Null }
    Set-Content $vsCodeUserSettings -Value $newSettings -Encoding UTF8
    Write-OK "Created VS Code settings with Copilot instruction path"
}

# --- Step 11: Configure MS365 MCP server ------------------------------------
Write-Step "Configuring MS365 MCP server for knowledge search..."
$mcpConfigPath = "$env:APPDATA\Code\User\mcp.json"
if (Test-Path $mcpConfigPath) {
    $mcpRaw = Get-Content $mcpConfigPath -Raw
    if ($mcpRaw -match 'ms-365-mcp-server') {
        Write-OK "MS365 MCP server already configured"
    } else {
        # Try to inject into existing servers block
        Write-Warn "MCP config exists but ms365 not found — adding manually"
        $mcpObj = $mcpRaw | ConvertFrom-Json
        if (-not $mcpObj.servers) { $mcpObj | Add-Member -Type NoteProperty -Name "servers" -Value ([pscustomobject]@{}) }
        $ms365 = [pscustomobject]@{
            type = "stdio"
            command = "npx"
            args = @("-y", "@softeria/ms-365-mcp-server", "--org-mode")
        }
        $mcpObj.servers | Add-Member -Type NoteProperty -Name "ms365" -Value $ms365
        $mcpObj | ConvertTo-Json -Depth 10 | Set-Content $mcpConfigPath -Encoding UTF8
        Write-OK "Added MS365 MCP server to existing config"
    }
} else {
    $mcpConfig = @"
{
    "servers": {
        "ms365": {
            "type": "stdio",
            "command": "npx",
            "args": ["-y", "@softeria/ms-365-mcp-server", "--org-mode"]
        }
    }
}
"@
    $mcpDir = Split-Path $mcpConfigPath
    if (-not (Test-Path $mcpDir)) { New-Item -Path $mcpDir -ItemType Directory -Force | Out-Null }
    Set-Content $mcpConfigPath -Value $mcpConfig -Encoding UTF8
    Write-OK "Created MCP config with MS365 server"
}
Write-Host "  Note: On first use, VS Code will prompt you to sign in with your" -ForegroundColor Yellow
Write-Host "  @mortgagetech.com Microsoft account for SharePoint/OneDrive search." -ForegroundColor Yellow

# --- Step 12: Open VS Code --------------------------------------------------
Write-Step "Opening VS Code..."
if (Test-Command "code") {
    code $CloneDir
    Write-OK "VS Code opened on $CloneDir"
} else {
    Write-Warn "VS Code CLI not in PATH — open VS Code manually and open folder: $CloneDir"
}

# --- Done --------------------------------------------------------------------
Write-Host ""
Write-Host "  ========================================" -ForegroundColor Green
Write-Host "    Setup complete!                       " -ForegroundColor Green
Write-Host "  ========================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Workspace: $CloneDir" -ForegroundColor White
Write-Host "  Log:       $LogFile" -ForegroundColor DarkGray
Write-Host ""
Write-Host "  Next steps:" -ForegroundColor White
Write-Host "    1. VS Code should be open with the TeamAI workspace" -ForegroundColor White
Write-Host "    2. Sign in to GitHub Copilot (bottom-left icon)" -ForegroundColor White
Write-Host "    3. You're ready to go!" -ForegroundColor White
Write-Host ""
Read-Host "Press Enter to close"
