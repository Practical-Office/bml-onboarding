# Build-Measure-Learn Onboarding — Cursor Agent Doctrine

> **Canonical repo:** [`Practical-Office/bml-onboarding`](https://github.com/Practical-Office/bml-onboarding) — shareable Build-Measure-Learn onboarding course, reference docs, and teaching templates. Do not commit course or BML training work to `Book-IQ/bookiqv1-rc`.

## Destination

Ship and maintain a public **Build-Measure-Learn** onboarding course (GitHub Pages + reference docs) so Practical AI teammates learn a shared experiment system. BookIQ worked examples in core modules; appendix holds live board/template URLs only.

## Issue tracker

All wayfinder map tickets and course work issues live on **`Practical-Office/bml-onboarding`**. See [`docs/agents/issue-tracker.md`](docs/agents/issue-tracker.md).

Live BookIQ product experiments (#1083–#1085), the BML Experiments Project board, and the live issue template stay on **`Book-IQ/bookiqv1-rc`** — out of scope for this workspace.

## Hard rules

1. **Build-Measure-Learn** is the primary name; “Build Loop” is secondary shorthand only.
2. **BookIQ worked examples** belong in core modules (especially 2, 4, 5, 7) and `docs/reference/issues/`; appendix is live ops links + sync notes only.
3. **No Lean Startup book excerpts** — concepts + attribution only ([`docs/research/lean-startup-build-loop-teaching-points.md`](docs/research/lean-startup-build-loop-teaching-points.md)).
4. **Teaching template mirrors handoff one-way** — [`Build_Loop_Kanban_Handoff.md`](docs/reference/Build_Loop_Kanban_Handoff.md) is source of truth; live BookIQ sync is follow-on.
5. **Module 7 is sandbox** — practice issues do not pollute the live board until a lead graduates them.
6. **Do not edit BookIQ product code, ledger, or live experiment issues** from this workspace.
7. **Cursor Build chain:** `/grill-with-docs` → `/to-spec` → `/to-tickets` → `/implement` (with `/tdd` + `/code-review` inside implement). No substitutions.

## Skills

Use global Matt/Cursor skills: `/wayfinder`, `/grilling`, `/grill-with-docs`, `/research`, `/to-spec`, `/to-tickets`, `/implement`, `/tdd` as ticket type requires. `/prototype` and `/wayfinder` are optional deep-dives, not part of the Build column chain.

## Live course

**Pages:** https://practical-office.github.io/bml-onboarding/

**Local preview:** `cd docs && python3 -m http.server 4173`

## Reference layout

| Path | Purpose |
|------|---------|
| `docs/index.html` | Course hub (GitHub Pages entry) |
| `docs/module-*.html` | Modules 1–7 + appendix, next steps, certification |
| `docs/quick-reference.html` | Printable one-pager |
| `docs/course-full.html` | Printable full course |
| `docs/reference/` | Handoff, Setup, Metrics, Implementation Notes, five issue drafts |
| `docs/examples/bookiq/` | BookIQ appendix pointers |
| `scripts/create-bml-project.sh` | Board setup tooling |
| `.github/ISSUE_TEMPLATE/build-loop-experiment.md` | Teaching copy of experiment template |
| `docs/reference/Build_Loop_BookIQ_sync_note.md` | Strings for live BookIQ sync (follow-on ticket) |
