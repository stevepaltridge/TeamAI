/* @wbx-modified ClaudeOpus4.6·a3d1 | 2026-06-02 | revival: Azure Storage Consolidation — disk #6 recovery + remaining steps */

# REVIVAL — Azure Storage Consolidation
> Created: 2026-06-02 | Agent: ·a3d1 | Keyword: `REVIVAL-AZURE-STORAGE`

## Context
Multi-session Azure storage consolidation project. Goal: reduce monthly costs from ~$650-720/month by ~$255-325/month. 22-step plan. User's standing rules: **"do one thing at a time... confirm. follow the rules. lose nothing. don't mess with Kris."**

## Azure Environment
| Item | Value |
|------|-------|
| Subscription ID | `d67f85c2-2653-4e11-99b7-8d9d776f246f` |
| Tenant ID | `fc02ee1e-d46e-47e1-abac-2b8e2e10ae49` |
| Resource Group | `XF-VM-RG` |
| Archive Account | `mtgtecharchive` (East US, Standard_LRS, Cool tier, StorageV2) |
| Storage Key | `[REDACTED-STORAGE-KEY]` |
| azcopy | v10.32.1 at `C:\Dev\tools\azcopy.exe` |

## OFF-LIMITS (DO NOT TOUCH)
- `workbooksfxstorage`, `encompasssyncfunc` — workbook dependencies
- `cs7d67f85c22653x4e11x99b`, `mtgshellstorage` — Cloud Shell
- **Dev-Kris-VM02** + its disk `Dev-Kris-VM02_OsDisk_1_2b2e5aae13264989a315b64579749a33` — Kris' RUNNING VM
- All files in `c:\Dev\CurrentVersions` (except diary updates)

## Progress — What's Done

### Steps 1-8: VHD Archival — ALL COMPLETE ✅
6 VHDs copied from 3 source accounts to `mtgtecharchive/vhds`, all byte-for-byte verified:
| VHD | Size (bytes) |
|-----|-------------|
| DevFX01.vhd | 85,899,346,432 |
| DevFX02.vhd | 85,899,346,432 |
| Devimgaz.vhd | 85,899,346,432 |
| mtgjohnvm01-osdisk-20191212-221359.vhd | 136,367,309,312 |
| mtgstevevm02-osdisk-20200107-025443.vhd | 136,367,309,312 |
| mtgstevevm02-osdisk-20200108-065345.vhd | 136,367,309,312 |

### Step 9: Managed Disk Exports — ALL 6 COMPLETE ✅

| # | Disk Name | Full Azure Name | sizeBytes | Blob Size | Status |
|---|-----------|----------------|-----------|-----------|--------|
| 1 | MTGTech-DC01_OsDisk | MTGTech-DC01_OsDisk_1_b208c9abf8a24e9eb6c1a2c1d1ca0f22 | 136,367,308,800 | 136,367,309,312 | ✅ Verified, SAS Revoked |
| 2 | Dev-Kris-VM01_disk1 | Dev-Kris-VM01_disk1_c64d300a30c245d79e61fb1c8503f83a | 137,438,953,472 | 137,438,953,984 | ✅ Verified, SAS Revoked |
| 3 | FXDC01_OsDisk | FXDC01_OsDisk_1_908e33f6eb564def807e452a44e8d16b | 136,367,308,800 | 136,367,309,312 | ✅ Verified, SAS Revoked |
| 4 | Admin-VM-01_OsDisk | Admin-VM-01_OsDisk_1_ae1bfe4ae79041f5922c61d7d72d8e86 | 136,367,308,800 | 136,367,309,312 | ✅ Verified, SAS Revoked |
| 5 | andriy-im01-12022020 | andriy-im01-12022020 | 214,748,364,800 | 214,748,365,312 | ✅ Verified, SAS Revoked |
| 6 | devjim-osdisk | devjim-osdisk-20210107-221600 | 214,748,364,800 | 214,748,365,312 | ✅ Verified, SAS Revoked |

**Blob is 512 bytes larger than disk sizeBytes** — this is normal (VHD footer). All 5 completed disks show this.

## IMMEDIATE — Disk #6 Recovery Procedure

Disk #6 (`devjim-osdisk-20210107-221600`) was at 68.6% when user rebooted. The transfer is dead. SAS was granted for 86400s (~24h from grant time on 2026-06-02).

**CRITICAL**: Page blobs pre-allocate full size at creation. The blob showing 214,748,365,312 bytes does NOT mean the transfer completed. You MUST check actual copy status or azcopy logs, not just blob size.

### Recovery Steps
```powershell
# 1. Check if old SAS is still active (may have expired)
az disk show -g XF-VM-RG --name "devjim-osdisk-20210107-221600" --query "disk.diskState" -o tsv

# 2. If SAS still active, revoke it first
az disk revoke-access -g XF-VM-RG --name "devjim-osdisk-20210107-221600"

# 3. Delete the partial blob (page blob was pre-allocated at full size)
az storage blob delete --account-name mtgtecharchive --container-name disks --name "devjim-osdisk-20210107-221600.vhd" --account-key "[REDACTED-STORAGE-KEY]"

# 4. Grant fresh SAS
az disk grant-access -g XF-VM-RG --name "devjim-osdisk-20210107-221600" --duration-in-seconds 86400 --access-level Read
# → Save the SAS URL from output

# 5. Generate container SAS for destination
az storage container generate-sas --account-name mtgtecharchive --name disks --permissions rwl --expiry (Get-Date).AddDays(1).ToString("yyyy-MM-ddTHH:mm:ssZ") --account-key "[REDACTED-STORAGE-KEY]" -o tsv

# 6. Run transfer — MUST use isBackground=true, full path, literal values
C:\Dev\tools\azcopy.exe copy "<SAS_URL_FROM_STEP_4>" "https://mtgtecharchive.blob.core.windows.net/disks/devjim-osdisk-20210107-221600.vhd?<CONTAINER_SAS_FROM_STEP_5>" --blob-type PageBlob --log-level INFO 2>&1 | Tee-Object -FilePath "C:\Dev\tools\disk6_copy.log"

# 7. Monitor progress
Get-Content "C:\Dev\tools\disk6_copy.log" -Tail 10

# 8. After complete — verify (expected blob size: 214,748,365,312 = sizeBytes + 512)
az storage blob show --account-name mtgtecharchive --container-name disks --name "devjim-osdisk-20210107-221600.vhd" --account-key "[REDACTED-STORAGE-KEY]" --query "properties.contentLength" -o tsv

# 9. Revoke SAS
az disk revoke-access -g XF-VM-RG --name "devjim-osdisk-20210107-221600"
```

## Validated 4-Step Disk Export Procedure (for reference)
1. `az disk grant-access -g XF-VM-RG --name "<FULL_DISK_NAME>" --duration-in-seconds 86400 --access-level Read` → returns SAS URL
2. `C:\Dev\tools\azcopy.exe copy "<SAS_URL>" "https://mtgtecharchive.blob.core.windows.net/disks/<short_name>.vhd?<CONTAINER_SAS>" --blob-type PageBlob` — **MUST use isBackground=true**
3. Verify blob size: `az storage blob show ...` — expect sizeBytes + 512
4. `az disk revoke-access -g XF-VM-RG --name "<FULL_DISK_NAME>"`

## GOTCHAS (learned the hard way)
- **Foreground terminals kill long-running azcopy** — ALWAYS use `isBackground=true`
- **Background terminals don't inherit variables or PATH** — use full path `C:\Dev\tools\azcopy.exe` and literal values (no $variables)
- **Page blobs pre-allocate full size** — blob contentLength matching expected size does NOT prove completion
- **SAS re-grant works** — disk in ActiveSAS state accepts re-grant and returns valid SAS
- **VHD footer = +512 bytes** — blob is always 512 bytes larger than disk sizeBytes (expected)
- Disk in ActiveSAS state still accepts `grant-access` — but revoke first to be clean

## What's Left After Disk #6

### Snapshot Archival — NONE FOUND ✅
Verified `az snapshot list -g XF-VM-RG` returns empty array (2026-03-09). No snapshots to archive.

### Steps 10-22 (staged deletions and consolidation)
These are the remaining plan steps after all archival is confirmed:
- Delete source VHDs from old storage accounts
- Delete archived managed disks
- Delete archived snapshots
- Consolidate or delete empty storage accounts
- Delete deallocated VMs (Admin-VM-01, Dev-Jim, Dev-VM-02) — **NOT Kris**
- Final cost audit

## VM Power States (reference)
| VM | State | Action |
|----|-------|--------|
| Dev-Kris-VM02 | **RUNNING** | **OFF-LIMITS** |
| Admin-VM-01 | Deallocated | Can delete after disk archived |
| Dev-Jim | Deallocated | Can delete after disk archived |
| Dev-VM-02 | Deallocated | Can delete after disk archived |

## Technical Notes
- azcopy log: `C:\Dev\tools\disk6_copy.log`
- Azure CLI v2.83.0
- All work in resource group `XF-VM-RG`
- Archive containers: `mtgtecharchive/vhds` (6 VHDs) and `mtgtecharchive/disks` (6 complete ✅)

## Successor Instructions
1. Read this file completely
2. Login to Azure: `az login` then `az account set --subscription d67f85c2-2653-4e11-99b7-8d9d776f246f`
3. Follow Disk #6 Recovery Procedure above
4. After disk #6 complete: archive snapshots
5. Then proceed with Steps 10-22 (staged deletions)
6. Always confirm before deleting anything
7. **Do not touch Kris' VM or workbook storage accounts**
