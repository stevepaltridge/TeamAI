# MortgageTech Website Architecture

> **Status:** verified
> **Last updated:** 2026-03-13
> **Author:** S-20260313-01 (ClaudeOpus4.6)
> **Tags:** website, architecture, SWA, site-nav, routing, product-pages

## Question

How is the MortgageTech website structured, and how does navigation work?

## Short Answer

The website is 24 static HTML pages hosted on Azure Static Web Apps. An `index.html` shell manages tab-based navigation via `site-nav.js`, which injects responsive nav markup, handles iframe-based page switching with fade transitions, and syncs state via postMessage.

## Architecture Overview

```
Azure Static Web Apps
|
+-- mortgage-pilot (PRODUCTION)
|   brave-sky-03ebd8d0f.2.azurestaticapps.net
|   Custom domain: mtgtech.com
|
+-- mortgagetech-website (BACKUP)
|   proud-grass-0258fef10.1.azurestaticapps.net
|
+-- urla-workbook (SEPARATE - workbook only)
    victorious-stone-0c72f0f10.6.azurestaticapps.net
```

The workbook lives on its own SWA intentionally. References to `victorious-stone` in the Security Whitepaper are correct, not stale links.

## Source Layout

```
C:\Dev\CurrentVersions\website\
  upload/                  <-- Deploy source (everything here goes to SWA)
    index.html             <-- Shell: tabs + iframe switching
    home.html              <-- Landing page content
    site-nav.js            <-- Navigation engine (injected at runtime)
    staticwebapp.config.json  <-- SWA routing rules
    assets/                <-- Images, fonts
    *.html                 <-- 24 total page files
  _deploy-staging/         <-- Copy of upload/ used by swa deploy
  .deploy-token            <-- SWA deployment token (119 chars)
```

## Page Inventory

### Core Product & Marketing

| File | Purpose |
|------|---------|
| home.html | Landing page with hero, features, social proof |
| intelligence.html | AI/intelligence capabilities overview |
| products.html | Product lineup and comparison |
| pricing.html | Pricing tiers and per-loan model |
| smartadvisor.html | SmartAdvisor product deep-dive |
| usertouches.html | User touches / engagement metrics |
| settingspilot.html | SettingsPilot product page |
| docs.html | Documentation and resources hub |

### Trade Show Flyers

| File | Purpose |
|------|---------|
| tradeshow-flyer.html | Primary trade show flyer (dark theme) |
| tradeshow-flyer-2.html | Secondary flyer variant |

### Whitepapers & Compliance

| File | Purpose |
|------|---------|
| URLA-Workbook-Security-Whitepaper.html | Workbook security deep-dive |
| smartadvisor-whitepaper.html | SmartAdvisor technical whitepaper |
| smartadvisor-privacy-sox.html | Privacy and SOX compliance |
| messaging-compliance.html | Messaging/communication compliance |
| ice-compliance.html | ICE platform compliance |
| security-audit.html | Security audit documentation |
| accessibility.html | Accessibility statement |
| dark-mode.html | Dark mode feature documentation |

### Commercial / Terms

| File | Purpose |
|------|---------|
| per-loan-model.html | Per-loan pricing model explanation |
| per-loan-whitepaper.html | Per-loan model technical whitepaper |
| sms-opt-in.html | SMS opt-in terms |

### Shell & Legacy

| File | Purpose |
|------|---------|
| index.html | Tab/iframe shell (current) |
| index-original.html | Original shell backup |
| index-backup.html | Additional shell backup |

## site-nav.js: The Navigation Engine

This is the brain of the website. It's a self-invoking module that dynamically injects all navigation.

### What It Does

1. **Iframe detection** -- Skips nav injection when running inside an iframe (embedded contexts)
2. **Current page detection** -- Reads the URL to determine the active page and sets the active nav highlight
3. **Dynamic asset injection** -- Injects Google Fonts link, base style reset, and full nav CSS at runtime
4. **Responsive breakpoints** -- Three stages:
   - **Full nav** at 1100px+ width
   - **Compact nav** at 900-1100px
   - **Hamburger menu** below 900px (overlay)
5. **Nav markup generation** -- Builds menu items and CTA button entirely in JavaScript
6. **Index shell behavior** (when on index.html):
   - Tab/iframe switching with CSS fade transitions
   - Active state synchronization between tabs and iframe content
   - postMessage-based communication for height adjustment and navigation
   - Link interception to handle navigation within the iframe context

### Why JavaScript-Injected?

Because there's no build step (no React, no bundler). The nav is the only shared component across 24 static HTML files. Injecting it from a single JS file means updating navigation once updates it everywhere.

## Routing (staticwebapp.config.json)

Azure SWA uses this for route rewrites, custom headers, and fallback behavior. The file lives in the upload root and deploys with everything else.

## Brand Standards

- **Brand color:** #C7802F (orange) -- NOT blue
- **Contact email:** ShowMe@MortgageTech.com (all other variants deprecated)
- **Session branding:** Every edit session brands touched files with `S-YYYYMMDD-NN` in comments

## Common Mistakes

- Editing `index-original.html` or `index-backup.html` instead of `index.html`
- Forgetting that the workbook SWA (`victorious-stone`) is intentionally separate
- Running `swa deploy` from `C:\` root instead of the website directory (causes EPERM)
- Using blue instead of orange (#C7802F) for brand elements
- Not clearing OneDrive ReadOnly attributes before editing files

## Related Articles

- [Azure SWA Deployment](./azure-swa-deployment.md)
- [Website Deployment Runbook](../docs/website-deployment-runbook.md)
