# Deploy — GitHub Pages

**Site:** https://practical-office.github.io/bml-onboarding/

## Prerequisites

- Repo: `Practical-Office/bml-onboarding`
- Site source: `/docs` folder on `main`

## One-time GitHub Pages setup

1. Repo **Settings** → **Pages**
2. **Build and deployment** → Source: **Deploy from a branch**
3. Branch: **main** · Folder: **/docs**
4. Save — first deploy may take 1–3 minutes

## Verify deploy

```bash
# After push to main
curl -sI https://practical-office.github.io/bml-onboarding/ | head -5
```

Open in browser:

- Hub: https://practical-office.github.io/bml-onboarding/
- Quick ref: https://practical-office.github.io/bml-onboarding/quick-reference.html
- Module 1: https://practical-office.github.io/bml-onboarding/module-1.html

## Local preview

```bash
cd docs && python3 -m http.server 4173
# http://localhost:4173/
```

## What triggers redeploy

Any push to `main` that changes files under `docs/` (or Pages config).

## Printable PDF

1. Open https://practical-office.github.io/bml-onboarding/course-full.html
2. Browser **Print** → **Save as PDF**

## Troubleshooting

| Issue | Fix |
|-------|-----|
| 404 on new page | Confirm file is under `docs/` and pushed to `main` |
| Stale content | Hard refresh; Pages build can lag ~1 min |
| Broken asset path | Use relative paths from `docs/` (e.g. `css/build-loop.css`) |
| Custom domain | Optional — configure in Pages settings + DNS CNAME |

## Board screenshot (manual)

Replace `docs/assets/diagrams/board-placeholder.svg` with a PNG of the live board when available. Keep filename or update `<img src>` in `module-3.html`.
