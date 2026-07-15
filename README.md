# BML Onboarding

Shareable **Build–Measure–Learn (BML) Mastery** onboarding course for Practical AI teammates.

**Live course (GitHub Pages):** https://practical-office.github.io/bml-onboarding/

Branding matches BookIQ product chrome (dark sidebar, light canvas, `#FCBB48` accent) with **Practical AI** as the primary mark.

## What’s in this repo

```text
bml-onboarding/
├── README.md
├── docs/
│   ├── index.html            ← course UI (GitHub Pages entry)
│   ├── css/bml.css           ← BookIQ / Practical AI tokens
│   ├── js/bml.js             ← nav + localStorage progress
│   ├── assets/               ← favicon + Practical AI mark
│   ├── reference/            ← Handoff, Setup, Metrics, Notes, week-1 issues
│   ├── how-to/ · videos/ · examples/
├── scripts/
└── .github/ISSUE_TEMPLATE/bml-experiment.md
```

## Local preview

From the repo root:

```bash
cd docs
python3 -m http.server 4173
```

Open http://localhost:4173/

Progress checklists persist in `localStorage` (`bml-mastery-progress-v1`). Use **Reset progress** in the top bar to clear.

## Deploy (GitHub Pages)

Pages is configured for branch `main`, folder `/docs`.

```bash
cd "/path/to/bml-onboarding"
git checkout main
git pull origin main
git status
git add docs/ .github/ISSUE_TEMPLATE/bml-experiment.md README.md
git commit -m "$(cat <<'EOF'
Redesign BML Mastery course to Practical AI / BookIQ product chrome.

Replace Jekyll markdown with a branded static index.html, sidebar nav,
localStorage progress, and reference docs for GitHub Pages.
EOF
)"
git push origin main
```

After push, wait 1–2 minutes, then verify:

- https://practical-office.github.io/bml-onboarding/
- Settings → Pages → latest deployment is green (`gh api repos/Practical-Office/bml-onboarding/pages`)

## Contributing

Keep Modules 1–6 product-portable. BookIQ-specific links belong in the appendix and `docs/reference/`.

**Agent / Cursor:** See [`AGENTS.md`](./AGENTS.md) and [`HANDOFF.md`](./HANDOFF.md). Issues: `Practical-Office/bml-onboarding` ([`docs/agents/issue-tracker.md`](./docs/agents/issue-tracker.md)).
