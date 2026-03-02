# MortgageTech AI Instruction System — Setup Guide

## Overview

This guide explains how to set up and customize AI agent instructions for MortgageTech projects using the three-layer architecture.

---

## Layer 1: Organization Rules (Automatic)

**File:** `MortgageTech/TeamAI/.github/copilot-instructions.md`

These rules apply to every team member across every MortgageTech repo. They cover:
- Communication style and brevity expectations
- Resource limits (terminals, tool calls, session length)
- Universal process rules (read first, test individually, search before building)
- File management (never delete, never recreate)
- Code standards
- Environment notes (Windows/PowerShell, Azure SWA)

**To activate org-level instructions:**
1. Go to GitHub.com → Organization `MortgageTech` → Settings → Copilot
2. Under "Custom Instructions", point to this repo's `.github/copilot-instructions.md`
3. All org members will receive these instructions automatically

> **Note:** As of March 2026, GitHub Copilot org-level custom instructions require Copilot Business or Enterprise. On the Free/Individual plan, you can still use repo-level instructions (Layer 2).

---

## Layer 2: Project Rules (Per Repo)

**File:** `<your-project>/.github/copilot-instructions.md`

Each project repo gets its own instruction file. This covers project-specific:
- File paths and architecture
- Build/deploy commands and constraints
- Protected files (firewall zones)
- Dev environment setup
- Quick commands agents should recognize
- Routing to deeper documentation

**To set up:**
1. Copy `templates/project-template.md` to your project repo as `.github/copilot-instructions.md`
2. Fill in the template sections with your project details
3. Commit and push
4. VS Code will automatically inject it into every Copilot chat for that project

**Token budget:** Keep under 5 KB. Use routing tables to point to deeper docs instead of inlining everything.

---

## Layer 3: Personal Config (Local Only)

**File:** `claude.md` (workspace root)

Each developer has their own local config that is NOT committed to version control. This covers:
- Working memory (current task context)
- Parked work and resume keywords
- Protected files specific to your workflow
- Personal tool references
- Communication preferences
- Current focus and queue

**To set up:**
1. Copy `templates/claude-template.md` to your workspace root as `claude.md`
2. Add `claude.md` to your `.gitignore`
3. Customize with your personal preferences and current work state

---

## Token Budget Guidelines

AI agents have limited context windows. Every byte of instructions competes with code context and conversation history.

| Layer | Target Size | Injected When |
|-------|-------------|---------------|
| Org (Layer 1) | ≤3 KB | Every chat, every repo |
| Project (Layer 2) | ≤5 KB | Every chat in that project |
| Personal (Layer 3) | ≤3 KB | Every chat in that workspace |
| **Combined** | **≤8 KB ideal** | All three layers merge |

### Keeping It Lean
- State each rule ONCE — decide which layer owns it
- Use routing tables ("read X when doing Y") instead of inlining docs
- Compress notation: tables > paragraphs, terse > verbose
- If a script enforces a rule mechanically, don't restate the rule in instructions

---

## Migration from Existing Setup

If you're migrating from a single `.github/copilot-instructions.md` that has everything:

1. **Extract universal rules** → org-level (Layer 1)
2. **Keep project-specific rules** → project-level (Layer 2)
3. **Move personal state** → `claude.md` (Layer 3)
4. **Verify no duplication** across layers

---

*MortgageTech TeamAI — Instruction Guide v1.0*
