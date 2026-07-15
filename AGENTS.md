# BML Onboarding — Cursor Agent Doctrine

> **Canonical repo:** [`Practical-Office/bml-onboarding`](https://github.com/Practical-Office/bml-onboarding) — shareable Build–Measure–Learn (BML) Mastery course, reference docs, and teaching templates. Do not commit course or BML training work to `Book-IQ/bookiqv1-rc`.

## Destination

Ship and maintain a public BML Mastery onboarding course (GitHub Pages + reference docs) so Practical AI teammates learn a shared experiment system. Portable core modules + BookIQ appendix.

## Issue tracker

All wayfinder map tickets and course work issues live on **`Practical-Office/bml-onboarding`**. See [`docs/agents/issue-tracker.md`](docs/agents/issue-tracker.md).

Live BookIQ product experiments (#1083–#1085), the BML Experiments Project board, and the live issue template stay on **`Book-IQ/bookiqv1-rc`** — out of scope for this workspace.

## Hard rules

1. **Modules 1–6 are portable** — no BookIQ-only assumptions in core course prose.
2. **BookIQ specifics** belong in `docs/examples/bookiq/` and the course appendix only.
3. **No Lean Startup book excerpts** — concepts + attribution only ([`docs/research/lean-startup-bml-teaching-points.md`](docs/research/lean-startup-bml-teaching-points.md)).
4. **Teaching template mirrors live BookIQ template one-way** — `bookiqv1-rc` is canonical; teaching copy carries `<!-- last-synced: YYYY-MM-DD from bookiqv1-rc -->`.
5. **Module 7 is sandbox** — practice issues do not pollute the live board until a lead graduates them.
6. **Do not edit BookIQ product code, ledger, or live experiment issues** from this workspace.

## Skills

Use global Matt/Cursor skills: `/wayfinder`, `/grilling`, `/grill-with-docs`, `/research`, `/prototype`, `/to-spec`, `/to-tickets`, `/implement`, `/tdd` as ticket type requires.

## Live course

**Pages:** https://practical-office.github.io/bml-onboarding/

**Local preview:** `cd docs && python3 -m http.server 4173`

## Reference layout

| Path | Purpose |
|------|---------|
| `docs/index.html` | Full course (GitHub Pages entry) |
| `docs/reference/` | Handoff, Setup, Metrics, Implementation Notes, week-1 issue drafts |
| `docs/examples/bookiq/` | BookIQ appendix pointers |
| `scripts/create-bml-project.sh` | Board setup tooling |
| `.github/ISSUE_TEMPLATE/bml-experiment.md` | Teaching copy of experiment template |
