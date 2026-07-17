# Build-Measure-Learn Onboarding

Shareable **Build-Measure-Learn** onboarding course for Practical AI teammates. *Build Loop* is shorthand only.

**Live course (GitHub Pages):** https://practical-office.github.io/bml-onboarding/

Branding matches BookIQ product chrome (dark sidebar, light canvas, `#FCBB48` accent) with **Practical AI** as the primary mark.

## What’s in this repo

```text
bml-onboarding/
├── README.md
├── docs/
│   ├── index.html            ← course hub (GitHub Pages entry)
│   ├── module-1.html … module-7.html
│   ├── quick-reference.html  ← printable one-pager
│   ├── appendix.html · next-steps.html · certification.html
│   ├── course-full.html      ← printable full course (Save as PDF)
│   ├── css/build-loop.css    ← BookIQ / Practical AI tokens
│   ├── js/build-loop.js      ← nav + localStorage progress
│   ├── assets/               ← favicon + diagrams
│   ├── reference/            ← Handoff, Setup, Metrics, Notes, five issue drafts
│   ├── how-to/ · videos/ · examples/
├── scripts/
└── .github/ISSUE_TEMPLATE/build-loop-experiment.md
```

## Local preview

From the repo root:

```bash
cd docs
python3 -m http.server 4173
```

Open http://localhost:4173/

Progress checklists persist in `localStorage` (`bml-onboarding-progress-v2`). Use **Reset progress** in the top bar to clear.

## Deploy (GitHub Pages)

See [`docs/reference/DEPLOY.md`](docs/reference/DEPLOY.md).

## Contributing

Modules 1–7 may use BookIQ worked examples for transfer to real work. Live board URLs and sync notes belong in the appendix and `docs/reference/`.

**Agent / Cursor:** See [`AGENTS.md`](./AGENTS.md) and [`HANDOFF.md`](./HANDOFF.md). Issues: `Practical-Office/bml-onboarding` ([`docs/agents/issue-tracker.md`](./docs/agents/issue-tracker.md)).

## New hire path (with Bug Handling)

Recommended order for Practical AI onboarding:

1. Matt skills Setup (`npx skills@latest add mattpocock/skills`)
2. **BML course** (this repo) — Modules 1–2 minimum for Build Loop vocabulary
3. **[Bug Handling course](https://practical-office.github.io/bug-handling-sop/)** — full Five-Module path + Evidence Pack
4. Homework F — 1–2 real bugs on product backlog (`Book-IQ/bookiqv1-rc`)
5. Track progress via [Team Work](https://github.com/orgs/Practical-Office/projects/2) and [Bug Report](https://github.com/orgs/Practical-Office/projects/1) boards

New-hire checklist issue template: [bug-handling-sop](https://github.com/Practical-Office/bug-handling-sop/issues/new/choose).
