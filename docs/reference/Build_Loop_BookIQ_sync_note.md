# Build-Measure-Learn ↔ BookIQ live sync note

**Purpose:** Strings and paths the live `Book-IQ/bookiqv1-rc` repo should adopt when syncing from this teaching repo. **Do not edit BookIQ from this workspace** — use a dedicated follow-on ticket on `bookiqv1-rc`.

**Teaching canonical (this repo):** [`build-loop-experiment.md`](../../.github/ISSUE_TEMPLATE/build-loop-experiment.md) — mirrors [`Build_Loop_Kanban_Handoff.md`](./Build_Loop_Kanban_Handoff.md)  
**Live canonical (runtime):** `Book-IQ/bookiqv1-rc/.github/ISSUE_TEMPLATE/bml-experiment.md`

Sync direction: **one-way** teaching mirrors handoff; live BookIQ pull is follow-on.

---

## Issue template

| Location | Current (live) | Target (BML) |
|----------|----------------|--------------|
| Template `name` | `BML Experiment` | `Build-Measure-Learn Experiment` |
| Default `title` prefix | `BML: ` | `BML: ` (unchanged) |
| Body sections | May differ | Hypothesis / Build / Measure / Learn / ACs / Technical Context |
| Cursor workflow | Verify chain | grill-with-docs → to-spec → to-tickets → implement |

---

## GitHub Project board

| Location | Current (live) | Target |
|----------|----------------|--------|
| Project title | `BML Experiments` | `Build-Measure-Learn Experiments` |
| Stage column | `Learn` | `Learn / Validate` |

Column names otherwise unchanged: Backlog, Build, Measure, Done.

---

## Labels (all 7)

`experiment`, `hypothesis`, `measure`, `learn`, `kill-candidate`, `persevere`, `pivot`

Phase labels optional; columns own phase.

---

## Verification after live sync

```bash
gh label list | rg 'experiment|hypothesis|measure|learn'
gh issue view 1083 --json title
```

Teaching mirror comment:

```html
<!-- last-synced: YYYY-MM-DD from bookiqv1-rc -->
```
