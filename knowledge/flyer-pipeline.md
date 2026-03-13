# Trade Show Flyer Pipeline: HTML to PDF

> **Status:** verified
> **Last updated:** 2026-03-13
> **Author:** S-20260313-01 (ClaudeOpus4.6)
> **Tags:** flyers, PDF, print-CSS, Edge, trade-show, dark-theme

## Question

How are MortgageTech trade show flyers created, maintained, and exported to PDF?

## Short Answer

Flyers are self-contained dark-theme HTML files with embedded print CSS. They're designed for letter-size output. Export to PDF uses the browser's Print dialog (Ctrl+P) or Edge headless `--print-to-pdf`. The HTML source is the single source of truth -- PDFs are disposable output.

## The Flyer System

### Source Files

Flyers live in the website upload directory alongside product pages:

| File | Description |
|------|-----------|
| `tradeshow-flyer.html` | Primary trade show flyer |
| `tradeshow-flyer-2.html` | Secondary variant |

Additional flyer PDFs in the TeamAI `docs/` directory:

| File | Topic |
|------|-----------|
| Admin-On-Demand.html/.pdf | Admin services flyer |
| Encompass-Web-Migration.html/.pdf | Web migration flyer |
| Encompass-Web-PowerUsers.html/.pdf | Power users audience flyer |
| Fractional-Admin.html/.pdf | Fractional admin services |
| Jackpot-ROI.html/.pdf | ROI/value proposition flyer |
| Modern-Encompass-Simplified.html/.pdf | Product simplification flyer |

### Design Principles

1. **Dark theme** -- All flyers use dark backgrounds with light text (brand-forward, visually striking at trade shows)
2. **Self-contained** -- No external CSS files, no build process. Everything is inline or embedded `<style>` blocks.
3. **Letter-size target** -- Designed for 8.5" x 11" output at 96 DPI
4. **One source of truth** -- HTML is the master. PDF is regenerated whenever the HTML changes.

## Print CSS Architecture

Every flyer includes a `@media print` block and page setup:

```css
@page {
  size: letter;
  margin: 0;
}

@media print {
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  
  /* Hide the site navigation bar in print output */
  .site-nav, #site-nav {
    display: none !important;
  }
}
```

Key rules:
- `print-color-adjust: exact` forces the browser to print background colors (browsers strip them by default)
- Site navigation is hidden in print so only the flyer content appears
- `@page { size: letter; margin: 0; }` gives edge-to-edge content with no browser-added margins

## Generating PDFs

### Method 1: Browser Print Dialog (Interactive)

1. Open the flyer HTML in Edge or Chrome
2. Press **Ctrl+P**
3. Set destination to **Save as PDF**
4. Set margins to **None**
5. Check **Background graphics** (critical for dark theme)
6. Save

### Method 2: Edge Headless (Command Line)

```powershell
# Single flyer
msedge --headless --disable-gpu --print-to-pdf="Flyer-Output.pdf" --no-margins .\tradeshow-flyer.html

# With specific paper size
msedge --headless --disable-gpu --print-to-pdf="Flyer.pdf" --no-margins --print-to-pdf-no-header .\tradeshow-flyer.html
```

### Method 3: Playwright Script (Automated/Batch)

```javascript
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge' });
  const page = await browser.newPage();
  await page.goto('file:///C:/Dev/CurrentVersions/website/upload/tradeshow-flyer.html');
  await page.pdf({
    path: 'tradeshow-flyer.pdf',
    format: 'Letter',
    printBackground: true,    // CRITICAL for dark theme
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  await browser.close();
})();
```

The workspace already has Playwright-based scripts for Edge rendering:
- `scripts/edge-font-check.js` -- font rendering verification
- `scripts/dpi-zoom-check.js` -- DPI/zoom fidelity checks
- `scripts/label-zoom-check.js` -- label positioning at various zoom levels

## Updating a Flyer

### Workflow

1. **Edit the HTML** -- All content and styling is in the single HTML file
2. **Preview in browser** -- Open locally, check both screen and print preview (Ctrl+P)
3. **Regenerate PDF** -- Use any of the three methods above
4. **Deploy HTML to SWA** -- The HTML version is also hosted on the website
5. **Push PDF to TeamAI docs/** -- For offline distribution

### What NOT to Do

- Don't edit the PDF directly (it's a generated artifact)
- Don't remove the print CSS section from the HTML
- Don't change `print-color-adjust` -- dark backgrounds vanish without it
- Don't add external stylesheet dependencies -- flyers must remain self-contained
- Don't use emoji in flyer content (UTF-8 encoding issues)

## Common Mistakes

- Forgetting to check "Background graphics" in the print dialog (produces white backgrounds)
- Not setting margins to None (adds unwanted white borders)
- Missing `print-color-adjust: exact` (browser strips dark backgrounds)
- Editing the PDF instead of the source HTML
- Testing only in screen mode without checking print preview

## Related Articles

- [Website Architecture](./website-architecture.md)
- [Azure SWA Deployment](./azure-swa-deployment.md)
