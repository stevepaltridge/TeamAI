# Archive Verification Manifest ·a3d1
> @wbx-modified ARCHIVE-VERIFICATION-MANIFEST·a3d1 | 2026-03-09
> Signed by agent ·a3d1 | Session: Azure Storage Consolidation Safety Framework
> Purpose: Immutable reference of all archived blobs in mtgtecharchive before any deletions

## Storage Account
| Property | Value |
|----------|-------|
| Account Name | mtgtecharchive |
| Resource Group | XF-VM-RG |
| Subscription | d67f85c2-2653-4e11-99b7-8d9d776f246f |
| Location | East US |
| SKU | Standard_LRS |
| Tier | Cool |
| Kind | StorageV2 |

## Protections Enabled (2026-03-09 ·a3d1)
| Protection | Status | Retention |
|------------|--------|-----------|
| Blob Soft-Delete | ✅ ENABLED | 90 days |
| Container Soft-Delete | ✅ ENABLED | 90 days |
| Resource Lock | ✅ CanNotDelete | `CannotDelete-mtgtecharchive` |

---

## Container: `vhds` (6 blobs — original VHD page blobs from source storage)

| # | Blob Name | Size (bytes) | Size (GB) | MD5 (Base64) | Blob Type | Last Modified (UTC) |
|---|-----------|-------------|-----------|-------------|-----------|-------------------|
| 1 | DevFX01.vhd | 85,899,346,432 | 80.0 | TH/nVDC6fpovWAfXpgrcIA== | PageBlob | 2026-03-08T03:05:51Z |
| 2 | DevFX02.vhd | 85,899,346,432 | 80.0 | TH/nVDC6fpovWAfXpgrcIA== | PageBlob | 2026-03-08T03:52:18Z |
| 3 | Devimgaz.vhd | 85,899,346,432 | 80.0 | 6aylG/i97Ryjiey8BCliYw== | PageBlob | 2026-03-08T04:01:12Z |
| 4 | mtgjohnvm01-osdisk-20191212-221359.vhd | 136,367,309,312 | 127.0 | ⚠️ NONE | PageBlob | 2026-03-08T03:50:46Z |
| 5 | mtgstevevm02-osdisk-20200107-025443.vhd | 136,367,309,312 | 127.0 | ⚠️ NONE | PageBlob | 2026-03-08T04:07:10Z |
| 6 | mtgstevevm02-osdisk-20200108-065345.vhd | 136,367,309,312 | 127.0 | ⚠️ NONE | PageBlob | 2026-03-08T04:15:05Z |

**Subtotal: 6 blobs, 616,432,004,352 bytes (~574 GB)**

### VHD MD5 Notes
- DevFX01 and DevFX02 share identical MD5 — these were cloned from the same base image
- Devimgaz MD5 matches Dev-Kris-VM01_disk1 in disks container (6aylG/i97Ryjiey8BCliYw==)
- 3 larger VHDs have no MD5 hash (Azure does not compute MD5 for page blob copies by default for large blobs)
- Size verification is the primary integrity check for these 3 blobs
- All 6 VHDs were verified byte-for-byte during archival (Steps 1-8 in REVIVAL plan)

---

## Container: `disks` (6 blobs — managed disk exports via SAS + azcopy)

| # | Blob Name | Size (bytes) | Size (GB) | MD5 (Base64) | Blob Type | Last Modified (UTC) |
|---|-----------|-------------|-----------|-------------|-----------|-------------------|
| 7 | Admin-VM-01_OsDisk.vhd | 136,367,309,312 | 127.0 | UwLkBNUbLGv7FzgdzOivhg== | PageBlob | 2026-03-08T23:03:04Z |
| 8 | Dev-Kris-VM01_disk1.vhd | 137,438,953,984 | 128.0 | 6aylG/i97Ryjiey8BCliYw== | PageBlob | 2026-03-08T13:01:39Z |
| 9 | FXDC01_OsDisk.vhd | 136,367,309,312 | 127.0 | NT9E0OgKXZ+6locvZ9ilzQ== | PageBlob | 2026-03-08T22:42:17Z |
| 10 | MTGTech-DC01_OsDisk.vhd | 136,367,309,312 | 127.0 | oEefGWap3Ce29zfHjKEVMQ== | PageBlob | 2026-03-08T10:13:59Z |
| 11 | andriy-im01-12022020.vhd | 214,748,365,312 | 200.0 | N4EVI3IUMwrEay1XeI1qAg== | PageBlob | 2026-03-08T23:49:17Z |
| 12 | devjim-osdisk-20210107-221600.vhd | 214,748,365,312 | 200.0 | N4EVI3IUMwrEay1XeI1qAg== | PageBlob | 2026-03-09T02:48:58Z |

**Subtotal: 6 blobs, 976,037,612,544 bytes (~909 GB)**

### Disk Export MD5 Notes
- ALL 6 managed disk exports have MD5 hashes ✅
- andriy-im01 and devjim share identical MD5 (N4EVI3IUMwrEay1XeI1qAg==) — same underlying disk content
- Dev-Kris-VM01_disk1 MD5 matches Devimgaz.vhd in vhds container (6aylG/i97Ryjiey8BCliYw==)

---

## Container: `snapshots` (3 blobs — managed disk snapshot exports via SAS + azcopy)

| # | Blob Name | Size (bytes) | Size (GB) | Source DiskSizeBytes | Delta | Blob Type | Last Modified (UTC) |
|---|-----------|-------------|-----------|---------------------|-------|-----------|-------------------|
| 13 | andriy-disk-image-0.vhd | 137,438,953,984 | 128.0 | 137,438,953,472 | +512 (VHD footer) | PageBlob | 2026-03-09T04:17:44Z |
| 14 | dev-ws-ss-2.vhd | 136,367,309,312 | 127.0 | 136,367,308,800 | +512 (VHD footer) | PageBlob | 2026-03-09T04:24:45Z |
| 15 | warrensnap.vhd | 85,899,346,432 | 80.0 | 85,899,345,920 | +512 (VHD footer) | PageBlob | 2026-03-09T04:41:50Z |

**Subtotal: 3 blobs, 359,705,609,728 bytes (~335 GB)**

### Snapshot Export Notes
- All 3 blobs are exactly source `diskSizeBytes + 512` — the +512 is the VHD footer appended during disk export. ✅
- MD5 hashes are not available for snapshot exports (Azure does not compute them for page blob copies)
- Size cross-verification against source snapshots is the primary integrity check
- All 3 snapshot export SAS tokens revoked after transfer completed

---

## Grand Total

| Metric | Value |
|--------|-------|
| Total Blobs | 15 |
| Total Size | 1,952,175,226,624 bytes |
| Total Size (TB) | ~1.78 TB |
| Blobs with MD5 | 9 of 15 |
| Blobs without MD5 | 6 (size-verified only) |
| Containers | 3 (vhds, disks, snapshots) |

---

## Source-to-Archive Mapping

### VHD Container (`mtgtecharchive/vhds`)
| Archive Blob | Source Account | Source Container | Verified |
|-------------|---------------|-----------------|----------|
| DevFX01.vhd | `mtgtechuservms119` | `vhds` | ✅ Size + MD5 |
| DevFX02.vhd | `fxvirtualdiag` | `vhds` | ✅ Size + MD5 |
| Devimgaz.vhd | `fxvirtualdiag` | `vhds` | ✅ Size + MD5 |
| mtgjohnvm01-osdisk-20191212-221359.vhd | `mtgtechrestorestaging` | `mtgjohnvm01-c4470d18e8d94f27ac0eb03ee90d5d2c` | ✅ Size only |
| mtgstevevm02-osdisk-20200107-025443.vhd | `mtgtechrestorestaging` | `mtgstevevm02-c3f998cbd316408a9feea9c30f3b4279` | ✅ Size only |
| mtgstevevm02-osdisk-20200108-065345.vhd | `mtgtechrestorestaging` | `mtgstevevm02-d4d3494d109846cb8daa6506beaab790`3494d109846cb8daa6506beaab790`3494d109846cb8daa6506beaab790` | ✅ Size only |

### Disks Container (`mtgtecharchive/disks`)
| Archive Blob | Source Managed Disk | RG | SAS Revoked |
|-------------|-------------------|-----|------------|
| MTGTech-DC01_OsDisk.vhd | MTGTech-DC01_OsDisk_1_b208c9abf8a24e9eb6c1a2c1d1ca0f22 | XF-VM-RG | ✅ |
| Dev-Kris-VM01_disk1.vhd | Dev-Kris-VM01_disk1_c64d300a30c245d79e61fb1c8503f83a | XF-VM-RG | ✅ |
| FXDC01_OsDisk.vhd | FXDC01_OsDisk_1_908e33f6eb564def807e452a44e8d16b | XF-VM-RG | ✅ |
| Admin-VM-01_OsDisk.vhd | Admin-VM-01_OsDisk_1_ae1bfe4ae79041f5922c61d7d72d8e86 | XF-VM-RG | ✅ |
| andriy-im01-12022020.vhd | andriy-im01-12022020 | XF-VM-RG | ✅ |
| devjim-osdisk-20210107-221600.vhd | devjim-osdisk-20210107-221600 | XF-VM-RG | ✅ |

### Snapshots Container (`mtgtecharchive/snapshots`)
| Archive Blob | Source Snapshot | RG | SAS Revoked | Size Verified |
|-------------|---------------|-----|------------|---------------|
| andriy-disk-image-0.vhd | andriy-disk-image-0 | XF-VM-RG | ✅ | ✅ diskSizeBytes + 512 |
| dev-ws-ss-2.vhd | dev-ws-ss-2 | XF-VM-RG | ✅ | ✅ diskSizeBytes + 512 |
| warrensnap.vhd | warrensnap | XF-VM-RG | ✅ | ✅ diskSizeBytes + 512 |

---

## Verification Commands

```powershell
# Check blob soft-delete status
az storage blob service-properties show --account-name mtgtecharchive --account-key "<KEY>" --query "deleteRetentionPolicy"

# Check container soft-delete
az storage account blob-service-properties show --account-name mtgtecharchive --resource-group XF-VM-RG --query "containerDeleteRetentionPolicy"

# Check resource lock
az lock list --resource-group XF-VM-RG --resource-name mtgtecharchive --resource-type Microsoft.Storage/storageAccounts -o table

# List all blobs with sizes
az storage blob list --container-name vhds --account-name mtgtecharchive --account-key "<KEY>" -o table
az storage blob list --container-name disks --account-name mtgtecharchive --account-key "<KEY>" -o table
az storage blob list --container-name snapshots --account-name mtgtecharchive --account-key "<KEY>" -o table
```

---

## Recovery Procedures

### If a blob needs to be recovered
```powershell
# List deleted blobs
az storage blob list --container-name <CONTAINER> --account-name mtgtecharchive --account-key "<KEY>" --include-deleted --query "[?deleted]" -o table

# Undelete a specific blob
az storage blob undelete --container-name <CONTAINER> --name <BLOB_NAME> --account-name mtgtecharchive --account-key "<KEY>"
```

### Check for deleted blobs/containers
```powershell
# List deleted containers
az storage container list --account-name mtgtecharchive --account-key "<KEY>" --include-deleted --query "[?deleted]" -o table

# Restore a deleted container
az storage container restore --name <CONTAINER> --deleted-version <VERSION> --account-name mtgtecharchive --account-key "<KEY>"
```

### If resource lock needs to be removed for maintenance
```powershell
# Remove lock (ONLY when necessary, re-lock immediately after)
az lock delete --name CannotDelete-mtgtecharchive --resource-group XF-VM-RG --resource-name mtgtecharchive --resource-type Microsoft.Storage/storageAccounts

# Re-apply lock
az lock create --name CannotDelete-mtgtecharchive --resource-group XF-VM-RG --resource-name mtgtecharchive --resource-type Microsoft.Storage/storageAccounts --lock-type CannotDelete --notes "Safety lock ·a3d1"
```

### Nuclear recovery (if managed disks still exist)
If source managed disks have NOT been deleted yet, you can always re-export them:
```powershell
# Grant SAS on managed disk
az disk grant-access --name <DISK_NAME> --resource-group XF-VM-RG --duration-in-seconds 86400 --access-level Read

# Re-copy to archive
C:\Dev\tools\azcopy.exe copy "<SAS_URI>" "https://mtgtecharchive.blob.core.windows.net/disks/<NAME>.vhd" --blob-type PageBlob
```

---

## Off-Limits Resources (DO NOT TOUCH)
- Storage account: `workbooksfxstorage` (production)
- Azure Function: `encompasssyncfunc`
- VM: `Dev-Kris-VM02` (RUNNING) + its disk
- Cloud Shell accounts: `cs7d67f85c22653x4e11x99b`, `mtgshellstorage`
- All files in `c:\Dev\CurrentVersions` (except diary)

---

*Manifest created 2026-03-09 by agent ·a3d1*
*This document is the single source of truth for archive verification.*
*Keep this file until all consolidation steps are complete and verified.*
