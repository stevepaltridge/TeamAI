<!-- @wbx-modified ClaudeOpus4.6·c4f7 | 2026-03-07 | Bridge Call course outline: 60-min timed agenda, 8 segments, Teams setup, transition scripts, Loop checklist | new file -->

# MortgageTech Admin Bridge Call — Course Outline
## Monday March 9, 2026 · 60 Minutes · Microsoft Teams

---

## Pre-Call Setup (Do Sunday night or Monday morning)

### Teams Channel
Create a **private channel** in your MortgageTech team called **`Product Training`**.  
Pin these tabs to it before the call:

| Tab Name | URL |
|----------|-----|
| 🏠 Home | https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/index.html |
| 📦 Products | https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/products.html |
| 🤖 SmartAdvisor | https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/walkthrough.html |
| ⚙️ SettingsPilot | https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/settingspilot.html |
| 📊 Dashboard | https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/dashboard.html |
| 📄 DocPilot | https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/docs.html |

**Why**: After the call, the links live forever in the channel. No one has to dig through chat history. They can revisit anything.

### Teams Meeting Settings
- **Turn on Recording** — anyone who misses it gets the replay  
- **Turn on Transcription** — Copilot in Teams will generate meeting notes automatically  
- **Turn on Meeting Chat** — you'll be dropping links here throughout  

### Pre-Call Message (Post in channel 1 hour before)
> Hey team — today's call is a walkthrough of the new product line. You don't need to prep anything. I'm going to show you what we've been building and how it connects to the work you already do. Bring questions. I'll be dropping clickable links in the meeting chat as we go so you can follow along on your own screen if you want.

---

## The Hour

---

### 0:00–0:05 · THE OPENER — "Quick Question"
**What you do**: Launch a **Teams Poll** the moment everyone joins.

> **Poll Question**: "What takes you the most time in Encompass admin work?"  
> - Configuring business rules  
> - Tracking down field IDs  
> - Managing settings across environments  
> - Answering loan officer questions  
> - Document/condition setup  

**Why this works**: It gets them talking immediately. It frames the entire hour around *their* pain. And you're going to show them a product that addresses every single one of those answers.

**Say**: *"I'm going to show you why every one of those answers is about to change."*

**Teams tip**: Create the poll in advance using the **Polls app** in the meeting toolbar. Results show live — let them react.

---

### 0:05–0:12 · THE HOOK — "You Know This. We Rebuilt It."
**Screen share**: [lender-before-after.html](https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/lender-before-after.html)

**Drop in chat**:
```
👉 Follow along: https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/lender-before-after.html
```

**What to do**:
1. Start on the T5A7 panel (it loads by default — biggest change, +29 fields)
2. Point at the **Before** side — *"This is what we had."*
3. Point at the **After** side — *"This is what we built. 29 new fields, all bound, all positioned to the pixel."*
4. Click through T5A2, T5A4, T5A8, T5A9 — let them see it's not one panel, it's systematic
5. Hit the stat: *"155 fields → 232 fields. 97% coverage on the Lender tab alone."*

**Why this works**: They recognize the forms instantly. This is their world. The before/after is visceral — they can SEE the work. You're not explaining a concept, you're showing proof.

**Say**: *"And this is just the Lender tab. Let me show you the whole thing."*

---

### 0:12–0:22 · THE PRODUCT SUITE — "Here's What We Sell Now"
**Screen share**: [products.html](https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/products.html)

**Drop in chat**:
```
👉 Full product catalog: https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/products.html
```

**Walk through each product block** (2 min each, tops):

| Product | What to say | What they'll recognize |
|---------|------------|----------------------|
| **URLA Workbook** | *"48 panels, 831+ fields, runs in the browser. No plugins, no installs."* | They've built input forms. They know what field binding means. |
| **SmartAdvisor AI** | *"An AI sidebar that reads the loan and tells you what's wrong, what's missing, what to do next."* | They answer these questions manually for LOs every day. |
| **eFolder / DocPilot** | *"Documents and conditions, inline. No tab switching."* | They configure eFolder categories and condition sets. |
| **Role-Based Views** | *"The workbook shows different things to different roles — automatically."* | They build persona-based custom forms today. |

**Do NOT go deep on any single product yet.** This is the 30,000-foot pass. Speed builds energy.

**Say**: *"You built forms that do X. We turned that into a product that does X at scale, in the browser, with AI on top. Let me show you the one that's going to blow your mind."*

---

### 0:22–0:35 · THE WOW — SettingsPilot Live Tour
**Screen share**: [settingspilot.html](https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/settingspilot.html)

**Drop in chat**:
```
👉 SettingsPilot: https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/settingspilot.html
```

**This is the admin killer feature.** Every admin in the room has spent years managing business rules through the Encompass GUI. Show them what it looks like when you put that into a real interface.

**Walk through** (spend time here — this is the emotional peak):

1. **The Toggle Board** (2 min) — *"Every business rule, one screen. Web, Desktop, Both, Off. You can see your entire rule inventory."*  
2. **Rule Detail** — click into a rule row — *"Visual builder. WHEN/THEN/AND/ELSE. No scripting required to read it."*  
3. **The VBS → JS pane** — *"We wrote a transpiler. It reads your VBScript and converts it to JavaScript. Automatically."*  
4. **Diff View** — *"Prod vs Stage vs UAT. See exactly what's different between your environments."*  
5. **Audit Log** — *"Who changed what, when. Full trail."*  
6. **AI Insights** — *"The system reads your rules and tells you which ones are broken, redundant, or unused."*

**Pause here.** Let them react. Ask: *"How long does it take you to do an environment diff today?"*

**Teams tip**: Use **Reactions** — tell them to hit 🔥 or 😮 if something surprises them. Keeps energy up without people talking over each other.

---

### 0:35–0:45 · THE AI LAYER — SmartAdvisor Deep Dive
**Screen share**: [walkthrough.html](https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/walkthrough.html)

**Drop in chat**:
```
👉 SmartAdvisor walkthrough: https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/walkthrough.html
```

**Key beats**:

1. **The Mockup** (2 min) — Scroll to the panel mockup. Point out the card types: compliance alerts, SOP checklists, conditions summary, handoff readiness score, closing forecast. *"All of this generates automatically from the loan data. No one types it."*

2. **The 6 Roles** (3 min) — Scroll to the role profiles. *"It changes what it shows based on who you are. A processor sees conditions and docs. An underwriter sees risk and DTI. A closer sees funding and compliance."*  
   - **Ask**: *"Which of these roles calls you the most? That's the role SmartAdvisor helps first."*

3. **How It Works** (2 min) — The 4-step flow. Keep it simple: Open loan → role detected → loan scanned → insights appear. *"Two seconds. That's how long it takes."*

4. **Privacy** (1 min) — *"Zero PII sent to AI. Server-side keys. SOX, GLBA, SOC 2 compliant. This was designed for regulated environments from day one."*

---

### 0:45–0:52 · THE LIVE DEMO — UserTouches Dashboard
**Screen share**: [dashboard.html](https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/dashboard.html)

**Drop in chat**:
```
👉 Live dashboard: https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/dashboard.html
```

**This is the fun one.** Click **"Launch Demo Mode"** and let the data stream in live.

**What to point out**:
1. **KPI strip** lights up — saves today, avg session time, accumulated hours, events  
2. **Pipeline by Role** — chips populate showing who's in what loans  
3. **Role Hours bar chart** — *"You can see exactly which role is spending the most time. The crosshatch means they haven't saved."*  
4. **Bottleneck alerts** — *"If a role is eating more than 35% of total time, or a loan goes unsaved for 30 minutes, it flags automatically."*  
5. **Session Log** — filter by role, watch events stream in real-time

**Say**: *"This is running on SignalR WebSockets. In production, it's real users on real loans. What you're seeing now is simulated but the architecture is the same."*

**Teams tip**: This is the visual payoff. Let the animations run for 30 seconds in silence. Let them watch data move.

---

### 0:52–0:57 · THE CLOSER — "This Is All One System"
**Screen share**: [index.html](https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/index.html)

Go back to the home page. Scroll to the **System Intelligence** section (Extract → Decode → Act).

**Say**: *"Everything I just showed you is connected. The workbook captures the data. SmartAdvisor reads it. SettingsPilot manages the rules. The dashboard shows who's touching what. DocPilot handles the documents. It's one system. And all of it runs in the browser, inside Encompass, with zero installs."*

Scroll to the **pricing section**: *"And we sell it per loan. $5 to $15 depending on volume. Every feature included at every tier."*

Scroll to the **company story**: *"We've been doing this for 30 years. 173 lenders. You already know how to do this work — now we're packaging it."*

---

### 0:57–1:00 · WRAP & HOMEWORK
**Drop the full link set in chat**:

```
📌 BOOKMARK THESE — Product Training Links

🏠 Home Page:        https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/index.html
📦 Products:         https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/products.html
🤖 SmartAdvisor:     https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/walkthrough.html
⚙️ SettingsPilot:    https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/settingspilot.html
📊 Dashboard:        https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/dashboard.html
📄 DocPilot:         https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/docs.html
🔬 Panel Bible:      https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/panel-bible.html
🔒 Security:         https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/security-audit.html
📋 Tradeshow Flyer:  https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/tradeshow-flyer.html
```

**Create a Teams Loop checklist** (paste directly in chat — it becomes a live shared checklist):

> ✅ Homework before Thursday's drill session:
> - [ ] Click through SettingsPilot — spend 10 minutes exploring the tabs
> - [ ] Open the Dashboard and launch demo mode — watch it for a minute
> - [ ] Read the SmartAdvisor walkthrough — expand the drill-down sections
> - [ ] Write down 2 questions you'd want a lender to ask you at the booth

**Say**: *"Thursday we're doing 30-minute one-on-ones. I want each of you to be able to explain one product to a stranger. Pick the one that excites you most. That's your product at the booth."*

---

## Leveraging Teams Throughout

| Teams Feature | How to Use It |
|--------------|---------------|
| **Teams Polls** | Opening question. Mid-session pulse check ("Rate your excitement 1-5"). |
| **Meeting Chat** | Drop every link as you go. They click along on their own screens. Links persist in chat history. |
| **Recording + Transcription** | Record the call. Anyone absent gets the replay. Copilot auto-generates meeting notes. |
| **Reactions** (🔥 😮 ❤️ 👏) | Tell them to react instead of unmuting. Keeps energy high without crosstalk. |
| **Loop Components** | Paste the homework checklist as a Loop component — it's a shared live checklist everyone can tick off. |
| **Private Channel + Tabs** | All 6 key links pinned as tabs in the Product Training channel. One-click access forever. |
| **Raise Hand** | For Q&A — keeps it orderly when multiple people want to talk. |
| **Screen Share + Give Control** | In the Thursday drill sessions, give THEM screen share and have them walk you through a page. |
| **Planner / Tasks** | After the call, create tasks: "Pick your booth product by Wednesday EOD." Assigned individually. Shows in their To Do. |
| **Meeting Notes tab** | Post-meeting, the auto-generated notes appear in the channel. Pin them. |
| **Whiteboard** | Optional: in the Thursday drill, use Whiteboard to map "Which product → Which admin" for booth assignments. |

---

## Pacing Cheat Sheet

| Time | Section | Energy Level | Your Job |
|------|---------|-------------|----------|
| 0:00 | Poll | 🟢 Warm up | Get them talking |
| 0:05 | Before/After | 🟡 Recognition | Show something they know |
| 0:12 | Product Suite | 🟡 Context | Give the map |
| 0:22 | SettingsPilot | 🔴 Peak | This is the WOW |
| 0:35 | SmartAdvisor | 🟠 Sustain | AI layer, roles |
| 0:45 | Dashboard | 🔴 Peak #2 | Live data, visual payoff |
| 0:52 | Big Picture | 🟡 Synthesis | Connect the dots |
| 0:57 | Homework | 🟢 Close | Clear next steps |

---

## What NOT to Show in This Call

Save these for later sessions. They're important but they'll dilute the first hour:

| Page | Why Not Now |
|------|------------|
| [panel-bible.html](https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/panel-bible.html) | Too technical for Session 1. Save for "How We Build" deep dive. |
| [field-coverage-comparison.html](https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/field-coverage-comparison.html) | Slide deck format — better as pre-read or Session 2 opener. |
| [smartadvisor-whitepaper.html](https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/smartadvisor-whitepaper.html) | Reference doc. Link it, don't present it. |
| [smartadvisor-privacy-sox.html](https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/smartadvisor-privacy-sox.html) | Compliance detail. Mention it exists; don't open it. |
| [per-loan-model.html](https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/per-loan-model.html) | Pricing detail. The index.html pricing scroll is enough. |
| [emid-binding.html](https://victorious-stone-0c72f0f10.6.azurestaticapps.net/Reports/emid-binding.html) | Developer-level. Session 3+ material. |
| Chaos monkey / continuity reports | Operations. Not relevant to admin onboarding. |

---

## One-Line Script for Each Transition

Use these exact lines to move between sections without losing momentum:

- **Poll → Before/After**: *"Every one of those answers is a problem we solved. Let me show you the first one."*
- **Before/After → Products**: *"That was one tab. Here's everything."*
- **Products → SettingsPilot**: *"Now let me show you the one that's going to change your life."*
- **SettingsPilot → SmartAdvisor**: *"That handles the rules side. Now let me show you what happens on the loan side."*
- **SmartAdvisor → Dashboard**: *"SmartAdvisor helps one loan at a time. This shows you ALL of them at once."*
- **Dashboard → Big Picture**: *"Let me zoom out and show you how all of this connects."*
- **Big Picture → Homework**: *"I need you to pick a favorite. You've got until Thursday."*
