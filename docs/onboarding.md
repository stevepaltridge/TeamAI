# Team Onboarding Guide

Welcome to the team! This document covers the essentials to get you up and running.

---

## 1. Set Up Your Development Environment

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) (latest stable)
- [Git](https://git-scm.com/)

### Clone the TeamIA repo

```bash
git clone https://github.com/stevepaltridge/TeamIA.git
cd TeamIA
code .
```

When VSCode opens, accept the prompt to install **Recommended Extensions**. These are listed in `.vscode/extensions.json` and ensure everyone has the same tools.

---

## 2. VSCode Settings

Shared settings live in `.vscode/settings.json` and are applied automatically when you open the repo in VSCode. Key conventions:

| Setting | Value | Why |
|---|---|---|
| `editor.formatOnSave` | `true` | Consistent formatting without manual effort |
| `editor.tabSize` | `2` | Standard indentation for the team |
| `files.trimTrailingWhitespace` | `true` | Clean diffs |
| `files.insertFinalNewline` | `true` | POSIX compliance |

---

## 3. Working with Docs

All team documentation lives in the `docs/` folder as Markdown (`.md`) files.

- Use the **Markdown All in One** extension for previewing and editing.
- Keep filenames lowercase with hyphens (e.g. `my-guide.md`).
- Add a top-level `#` heading matching the filename topic.

---

## 4. Working with Projects

Project templates are stored in the `projects/` folder. See `projects/README.md` for instructions on how to use or add a template.

---

## 5. Contributing

1. Pull the latest changes: `git pull`
2. Create a feature branch: `git checkout -b your-name/topic`
3. Make your changes and commit with a clear message.
4. Open a Pull Request on GitHub and request a review.
