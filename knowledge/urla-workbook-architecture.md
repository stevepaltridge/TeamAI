# URLA Workbook: T-Panel Architecture

> **Status:** verified
> **Last updated:** 2026-03-13
> **Author:** S-20260313-01 (ClaudeOpus4.6)
> **Tags:** URLA, workbook, T-panel, layout, CSS, dark-mode, colgroup, 800px

## Question

How does the URLA Workbook render loan application forms, and what are the layout rules?

## Short Answer

The Workbook is a tabbed shell (`URLA_Workbook.html`) that loads individual form panels (T1A1.html through T6A12.html) inside accordions. Each panel is 800px wide, uses absolute positioning for pixel-precise Encompass form fidelity, and shares CSS variables from `tform-base.css`. Dark mode is applied via localStorage-driven class injection before first paint.

## How It All Fits Together

```
URLA_Workbook.html          <-- Shell: tabs + accordions
  |-- tform-base.css        <-- Shared variables, typography, colgroup rules
  |-- tform-dark-mode.css   <-- Dark mode overrides
  |-- tform-theme-init.js   <-- Early theme bootstrap (no flash)
  |
  +-- Tab 1: Origination
  |     |-- T1A1.html        Section 1a: Borrower Info
  |     |-- T1A2.html        Section 1b: Current Address
  |     |-- ...              (T1A1 through T1A10)
  +-- Tab 2: 1003 Page 2
  |     |-- T2A1.html through T2A9
  +-- Tab 3: 1003 Page 3
  |     |-- T3A1.html through T3A5
  +-- Tab 4: 1003 Page 4
  |     |-- T4A1.html through T4A7
  +-- Tab 5: 1003 Page 5
  |     |-- T5A1.html through T5A8
  +-- Tab 6: Lender
        |-- T6A1.html through T6A12
```

## Panel Naming Convention

`T{tab}A{accordion}` -- Tab number + Accordion number within that tab.

| Prefix | Tab | Content |
|--------|-----|---------|
| T1 | Origination | Borrower info, addresses, employment |
| T2 | 1003 Page 2 | Assets, liabilities, RE owned |
| T3 | 1003 Page 3 | Transaction details, declarations |
| T4 | 1003 Page 4 | Declarations continued, demographics |
| T5 | 1003 Page 5 | Loan terms, qualifying data |
| T6 | Lender | Lender-specific fields, conditions |

Legacy snapshot files use `_bef_T{tab}A{accordion}.html` naming ("before" snapshots for comparison).

## The 800px Width Constraint

Every panel container is exactly **800px wide**. This is not arbitrary:

1. **Encompass Web compatibility** -- ICE's web forms render in a fixed viewport. 800px matches their rendering width.
2. **Print fidelity** -- 800px fits cleanly inside a letter-size page at 96 DPI with standard margins.
3. **Pixel-perfect positioning** -- Because every label and input uses absolute pixel coordinates, a fixed container width ensures nothing shifts.

The constraint is enforced at the panel level via inline styles or scoped CSS on the `.panel` wrapper.

## Layout Systems (Two Generations)

The workbook evolved through two layout approaches. Both coexist.

### Generation 1: Absolute Positioning

Used in most current panels. Every element gets explicit `left`, `top`, `width`, `height` in pixels:

```css
.label-borrowerName {
  position: absolute;
  left: 20px;
  top: 45px;
  width: 180px;
}
.input-borrowerName {
  position: absolute;
  left: 200px;
  top: 42px;
  width: 280px;
  height: 22px;
}
```

**Why absolute?** Encompass desktop forms use absolute coordinates. Matching them pixel-for-pixel means you can overlay the workbook on a screenshot to verify accuracy.

### Generation 2: Colgroup Table Layout

The canonical architecture documented in `CANONICAL_5COL_LAYOUT.md` and enforced by `tform-base.css`:

```html
<table class="form-table">
  <colgroup>
    <col style="width:20px">   <!-- left gutter -->
    <col style="width:180px">  <!-- labels -->
    <col style="width:280px">  <!-- inputs -->
    <col style="width:280px">  <!-- extended/second column -->
    <col style="width:20px">   <!-- right gutter -->
  </colgroup>
  ...
</table>
```

Rules:
- `table-layout: fixed` -- columns respect colgroup widths exactly
- 20px gutter columns on left and right
- **Never override column widths with CSS** -- only change colgroup attributes
- Content flows within the established column grid

## CSS Variables (tform-base.css)

Shared variables control the entire visual system. Edit these, not individual panels.

### Typography & Sizing

| Variable | Purpose |
|----------|---------|
| `--font-family` | System font stack |
| `--input-height` | Standard input height |
| `--input-radius` | Border radius on inputs |
| `--row-gap` | Vertical spacing between rows |
| `--label-gap` | Space between label and input |
| `--gutter-width` | Left/right gutter (20px) |

### Colors

| Variable | Purpose |
|----------|---------|
| `--label-color` | Label text color |
| `--header-color` | Section header color |
| `--input-color` | Input text color |
| `--border-color` | Input border color |
| `--focus-orange` | Focus ring color (brand orange #C7802F) |
| `--vr-color` | Vertical rule divider color |

## Dark Mode

Three moving parts:

### 1. tform-theme-init.js (Early Bootstrap)

Runs before the page paints. Reads localStorage keys scoped to the current panel:
- Checks for saved theme preference
- Applies `dark` or `high-contrast` class to `<html>` and `<body>` immediately
- Prevents the "flash of light theme" that would otherwise occur

### 2. tform-dark-mode.css (Variable Overrides)

When `.dark` class is present, overrides all color variables:
- Input backgrounds go dark
- Borders lighten
- Focus glow changes to orange on dark
- Checkbox/radio accent colors adjust
- Table backgrounds and alternating rows adapt

### 3. User Toggle

The shell provides a theme toggle. Selection persists in localStorage per scope key, so different panels can theoretically have independent themes (though in practice they're synchronized).

## Iron Rules for Working on Panels

1. **CSS-only changes.** Never remove HTML elements, QR codes, or structural sections.
2. **Backup before editing.** Always.
3. **800px is sacred.** Don't change the panel width.
4. **Test both themes.** Every CSS change must look correct in light and dark mode.
5. **Colgroup widths are the truth.** Never override them with CSS `width` properties.
6. **Snapshot first.** If changing a panel, create a `_bef_` snapshot for comparison.

## Related Articles

- [Encompass SDK Architecture](./encompass-dev/sdk-architecture.md)
- [Custom Forms Reference](./encompass-settings/16-custom-forms.md)
- [Field Reference](./field-reference.md)
