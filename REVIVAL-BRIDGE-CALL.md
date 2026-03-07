<!-- @wbx-modified ClaudeOpus4.6·c4f7 | 2026-03-07 | Revival doc — Bridge Call presenter + course outline session handoff | prev: new -->
# 🔁 REVIVAL — Admin Bridge Call Presenter & Course Outline

> **Revival keyword:** `REVIVAL-BRIDGE-CALL`
> Paste that one phrase into a new chat after reboot. Your successor will find this file,
> read it, and know exactly where to pick up.

---

## 0. Successor Onboarding Checklist

**You are continuing a multi-session project for Steve Paltridge, CEO of MortgageTech. Before doing ANYTHING else:**

1. **Handshake** — Run `node scripts/agent-ping.js --new` and echo the ACK.
2. **Read rules** — `.github/copilot-instructions.md` (272 lines). Non-negotiable.
3. **Preflight** — Run `node scripts/preflight.js` before any code edit.
4. **Read this file end-to-end** — It contains everything you need.
5. **Read the diary** — `ClaudeOpus4.6.md`. The session `·c4f7` near the bottom is your most recent context.
6. **Fingerprint yourself** — After handshake, note your agent ID (from the ACK). All files you touch must be branded: `/* @wbx-modified AgentName·sessionID | date | description | prev: ref */`
7. **Understand the rules**: Edit in `working/` first for code files. Brand after editing. Test visually. Never touch `upload/`. Never delete files — archive instead. Max 3 terminals. Tiny changes, tested individually.

---

## 1. What Was Built (The Big Picture)

Steve needed a **60-minute Admin Bridge Call** for Monday March 9, 2026 — a product training session for his admin team on Microsoft Teams. Two deliverables were created:

1. **A branded HTML presenter shell** — full-screen chapter cards that Steve drives during the call, matching the MortgageTech website brand exactly
2. **A course outline / run sheet** — minute-by-minute agenda with talking points, transitions, and prep instructions

### The Strategic Context

This Bridge Call is part of a 5-phase admin training plan leading up to **ICE Experience 2026** (March 16-18). The phases:

| Phase | Date | Purpose |
|-------|------|---------|
| 1. Bridge Call | Mon Mar 9 | Product awareness — see everything |
| 2. Individual Drills | Thu Mar 12 | Hands-on with assigned product pages |
| 3. Dress Rehearsal | Fri Mar 14 | Full booth simulation |
| 4. ICE Experience | Mar 16-18 | Live tradeshow in Las Vegas |
| 5. Post-Show | Mar 19+ | Loop feedback, iterate |

### What MortgageTech Sells

The company builds admin tools for Encompass (mortgage industry LOS). Products referenced in the presentation:

| Product | Report Page | Key Pitch |
|---------|------------|-----------|
| SettingsPilot | settingspilot.html | Settings-as-code — version, diff, rollback Encompass config |
| SmartAdvisor | smartadvisor-whitepaper.html | AI sidebar that knows the loan — compliance, risk, docs |
| Dashboard | dashboard.html | Real-time pipeline visibility for the whole team |
| Products Overview | products.html | Full product catalog |
| Walkthrough | walkthrough.html | Interactive guided tour |
| Before/After | lender-before-after.html | Visual comparison of old vs new admin experience |

**Live site:** https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/

---

## 2. File Inventory

### Created Files (all branded `·c4f7`)

| File | Location | Lines | Purpose |
|------|----------|-------|---------|
| `presenter.html` | `CurrentVersions/Reports/` | 525 | 9-slide branded chapter-card presenter shell |
| `admin-bridge-call-outline.md` | `c:\Dev\` (workspace root) | 272 | 60-minute course outline / run sheet |
| `REVIVAL-BRIDGE-CALL.md` | `CurrentVersions/` | THIS FILE | Session handoff document |

### Modified Files

| File | Location | What Changed |
|------|----------|-------------|
| `ClaudeOpus4.6.md` | `CurrentVersions/` | Updated first-line signature to `·c4f7`, added full session log entry with Knowledge/Action/Gotcha |

---

## 3. Presenter Shell Architecture (`presenter.html`)

### How It Works

The presenter is a **single-file HTML application** — no dependencies, no build step, no server needed. Open it in any browser and go full-screen.

```
┌─────────────────────────────────────────────────────┐
│  [slide counter: 1/9]                               │
│                                                     │
│        Section Label (pill badge)                   │
│                                                     │
│        MAIN HEADLINE                                │
│        subtitle text                                │
│                                                     │
│        (optional bullet list)                       │
│        (optional stat grid)                         │
│        (optional link grid)                         │
│                                                     │
│  [invisible presenter notes — hover to reveal]      │
│                                                     │
│  ═══════════════ progress bar ═══════════════════   │
└─────────────────────────────────────────────────────┘
```

### Navigation Controls

| Input | Action |
|-------|--------|
| `→` / `Space` / `PageDown` | Next slide |
| `←` / `PageUp` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Toggle fullscreen |
| Click right 2/3 of screen | Next slide |
| Click left 1/3 of screen | Previous slide |
| Swipe left (touch) | Next slide |
| Swipe right (touch) | Previous slide |

### The 9 Slides

| # | Section Label | Headline | Content |
|---|--------------|----------|---------|
| 0 | ADMIN BRIDGE CALL | MortgageTech Product Training | Title card — date, tagline |
| 1 | QUICK QUESTION | Who has logged in to the Control Panel? | Poll — "Hands up or drop a ✋ in chat" |
| 2 | YOU KNOW THIS | We Rebuilt It | Before/After comparison |
| 3 | PRODUCT LINE | Here's What We Sell Now | 6-card grid: SettingsPilot, SmartAdvisor, Dashboard, Panel Bible, Walkthrough, Field Coverage |
| 4 | SETTINGS PILOT | Settings As Code | THE WOW — version/diff/rollback. Notes: "This is THE wow" |
| 5 | SMART ADVISOR | AI That Knows Your Loan | Compliance, risk, documents, proactive |
| 6 | DASHBOARD | Everyone In Real Time | Pipeline visibility, alerts, team view |
| 7 | BIG PICTURE | One System | Stat grid: 5 products, 39 pages, 1,105 fields, 11 days |
| 8 | YOUR HOMEWORK | Pick Your Favorite | Clickable link grid to 6 report pages |

### Brand System (extracted from index.html)

```css
--brand-dark:    #0a0e27    /* page background */
--brand-deep:    #111640    /* card/glass background */
--brand-accent:  #00d4ff    /* cyan — primary accent */
--brand-accent2: #7c3aed    /* purple — secondary */
--brand-hot:     #ff6b35    /* orange — CTAs */
--brand-green:   #10b981    /* success states */
--brand-gold:    #f59e0b    /* warning/highlight */
--text-primary:  #f0f4ff    /* main text */
--text-muted:    #94a3b8    /* secondary text */
--glass-bg:      rgba(255,255,255,0.05)   /* frosted panels */
--glass-border:  rgba(255,255,255,0.08)   /* frosted edges */
```

- **Font**: Inter via Google Fonts (weights 300-900)
- **Wordmark**: `Mortgage<span>Tech</span>` (text-based, no SVG logo)
- **Gradients**: cyan→purple (progress bar, accents), orange→gold, green→cyan, purple→orange
- **Glass**: `backdrop-filter: blur(20px)` with rgba backgrounds
- **Animated orbs**: 3 radial gradients (600px), CSS keyframe animation, pointerEvents:none
- **Section labels**: pill badges with glass-bg, glass-border, uppercase, letter-spacing 3px

### Technical Implementation

- **Pattern**: IIFE closure wrapping all state/handlers
- **Navigation**: `go(index)` function sets `.active` on target slide, updates progress bar width and counter text
- **Progress bar**: 6px height, cyan→purple gradient, width transitions via CSS `transition: width 0.4s`
- **Cursor auto-hide**: 2-second `setTimeout` on `mousemove`, sets `cursor: none` on body
- **Presenter notes**: `<p class="note">` elements, `opacity: 0` default, `opacity: 0.3` on hover, positioned below content
- **Responsive**: `clamp()` for font sizes, flexbox layouts, orbs use `vw` sizing

---

## 4. Course Outline Structure (`admin-bridge-call-outline.md`)

### Purpose

This is Steve's **teleprompter / run sheet** — not the slides. He reads from this document (on a second monitor or printed) while driving the presenter shell on the shared screen.

### Sections

1. **Pre-Call Setup** — Teams channel creation, tab pinning, presenter shell open
2. **Timing Breakdown** — 8 segments totaling 59 minutes:
   - Poll (3 min) — "Who has logged in?"
   - Before/After (5 min) — Show lender-before-after.html
   - Products (8 min) — Walk products.html grid
   - SettingsPilot (12 min) — THE WOW — live settingspilot.html demo
   - SmartAdvisor (8 min) — Show smartadvisor-whitepaper.html
   - Dashboard (8 min) — Show dashboard.html
   - Big Picture (10 min) — Stats, how it connects
   - Homework (5 min) — Pick a favorite page, Loop checklist by Thursday
3. **Teams Feature Leverage** — Reactions/polls, screen sharing, chat, recording
4. **Pacing Cheat Sheet** — "Ahead of time" / "On time" / "Behind" guidance
5. **What NOT to Show** — Panel Bible (too technical), Field Coverage (niche), Walkthrough (save for Thursday)
6. **Transition Scripts** — Exact phrases to move between segments
7. **Loop Checklist Homework** — Thursday deliverable: each admin fills a checklist on their assigned page

### Key Links (all prefix with base URL)

Base: `https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/`

| Page | Use In Call |
|------|-----------|
| `presenter.html` | Steve's shared screen — chapter cards |
| `lender-before-after.html` | Segment 2 — before/after comparison |
| `products.html` | Segment 3 — product grid |
| `settingspilot.html` | Segment 4 — THE WOW live demo |
| `smartadvisor-whitepaper.html` | Segment 5 — AI sidebar explanation |
| `dashboard.html` | Segment 6 — real-time pipeline |

---

## 5. What Is Deployed vs. Not

| Item | Deployed? | Location |
|------|-----------|----------|
| presenter.html | **Needs deploy** — exists in CurrentVersions/Reports/ but needs sync to upload/ and site | `CurrentVersions/Reports/presenter.html` |
| admin-bridge-call-outline.md | **Not deployed** — Steve's private run sheet | `c:\Dev\admin-bridge-call-outline.md` |
| All referenced report pages | **Already live** | https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/ |

### To Deploy presenter.html

1. Copy `CurrentVersions/Reports/presenter.html` to `CurrentVersions/upload/Reports/presenter.html`
2. Run the standard sync/deploy process (see `stage-cp.ps1` or manual Azure Static Web Apps push)
3. Verify at `https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/presenter.html`

---

## 6. What Comes Next

After the Bridge Call (March 9), the next milestones are:

1. **Individual Drills** — Thursday March 12. Each admin gets assigned a specific product page to learn deeply. They present back to Steve.
2. **Dress Rehearsal** — Friday March 14. Full booth simulation.
3. **ICE Experience** — March 16-18. Live tradeshow.

Possible follow-up work:
- Build individual drill assignment pages or checklists
- Create a booth-mode version of the presenter (auto-cycling, no keyboard needed)
- Add more slides to presenter.html for the drill sessions
- Build a Loop/checklist template for admin homework tracking

---

## 7. Session Provenance Chain

| Session ID | Date | Agent | Work Done |
|-----------|------|-------|-----------|
| `·c4f7` | 2026-03-07 | ClaudeOpus4.6 | Built presenter.html, admin-bridge-call-outline.md, signed all files, created this revival doc |

**Previous session context**: `·b26a` (SA tab redesign + website SPA architecture). See `REVIVAL-SA-TABS.md` for that thread.

**Diary file**: `CurrentVersions/ClaudeOpus4.6.md` — search for `·c4f7` for this session's log entries.

---

## 8. Signature Convention Reference

All modified files must carry a provenance signature:

**HTML files:**
```html
<!-- @wbx-modified AgentName·sessionID | YYYY-MM-DD | description | prev: ref -->
```

**Markdown files:**
```markdown
<!-- @wbx-modified AgentName·sessionID | YYYY-MM-DD | description | prev: ref -->
```

**CSS/JS files:**
```javascript
/* @wbx-modified AgentName·sessionID | YYYY-MM-DD | description | prev: ref */
```

**Diary first line:**
```
/* @wbx-modified ClaudeOpus4.6·sessionID | YYYY-MM-DD | diary: description | prev: prevID@date */
```

**Session IDs**: 4-character hex codes (e.g., `·c4f7`, `·b26a`, `·2aab`). Generate a new one for each session.

---

## 9. Infrastructure Reference

| File | Purpose |
|------|---------|
| `.github/copilot-instructions.md` | Agent rules — READ FIRST |
| `scripts/diary-timer.js` | Enforces diary updates after code changes |
| `scripts/agent-ping.js` | Session tracking / handshake |
| `scripts/preflight.js` | Pre-edit validation gate |
| `scripts/brand-check.js` | Signature verification |
| `.agent-pings.log` | Session history log |
| `.diary-watcher-heartbeat` | Diary system health check |
| `ClaudeOpus4.6.md` | Active diary (4 mandatory sections: Knowledge, Success, Gotchas, Opinions + Session Log) |
| `ClaudeOpus4.6-overflow.md` | Diary overflow when main exceeds ~150 lines |

---

*Generated by ClaudeOpus4.6·c4f7 on 2026-03-07. This file is the single source of truth for the Bridge Call presenter and course outline work stream.*
