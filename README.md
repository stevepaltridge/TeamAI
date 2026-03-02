# TeamIA

A shared repository for the team to collaborate and stay in sync. This repo contains:

- **VSCode Settings** – Shared editor configuration for consistent formatting, behavior, and recommended extensions.
- **Docs** – Markdown reference files, guides, and notes for the team.
- **Projects** – Starter templates and project scaffolds for common work.

---

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/stevepaltridge/TeamIA.git
   ```
2. Open the folder in [Visual Studio Code](https://code.visualstudio.com/).
3. When prompted, **install the recommended extensions** (or run **Extensions: Show Recommended Extensions** from the Command Palette).
4. Your editor will automatically pick up the shared settings from `.vscode/settings.json`.

---

## Repository Structure

```
TeamIA/
├── .vscode/
│   ├── settings.json       # Shared VSCode editor settings
│   └── extensions.json     # Recommended VSCode extensions
├── docs/                   # Markdown documentation & notes
│   └── onboarding.md       # Team onboarding guide
├── projects/               # Project templates & starters
│   └── README.md           # How to use project templates
└── README.md               # This file
```

---

## Contributing

1. Create a branch, make your changes, and open a Pull Request.
2. Add new docs to the `docs/` folder and new project templates under `projects/`.
3. Update `.vscode/settings.json` or `.vscode/extensions.json` if you want to propose a shared editor change — discuss with the team first.