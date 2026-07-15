# Build Loop ↔ BookIQ live sync note

**Purpose:** Strings and paths the live `Book-IQ/bookiqv1-rc` repo should adopt when syncing naming from this teaching repo. **Do not edit BookIQ from this workspace** — use a dedicated follow-on ticket on `bookiqv1-rc`.

**Teaching canonical (this repo):** [`build-loop-experiment.md`](../../.github/ISSUE_TEMPLATE/build-loop-experiment.md)  
**Live canonical (runtime):** `Book-IQ/bookiqv1-rc/.github/ISSUE_TEMPLATE/bml-experiment.md` (filename may stay until renamed in BookIQ)

Sync direction: **one-way** from live → teaching for body structure; teaching → live for **Build Loop** user-facing naming when approved.

---

## Issue template

| Location | Current (live) | Target (Build Loop) |
|----------|----------------|---------------------|
| Template `name` | `BML Experiment` | `Build Loop Experiment` |
| Default `title` prefix | `BML: ` | `Build Loop: ` |
| Template filename | `bml-experiment.md` | `build-loop-experiment.md` (optional; update all links if renamed) |
| Cursor workflow block | Verify `/to-spec` → `/to-tickets` → `/implement` chain | Match teaching template (2026-07-15) |

---

## GitHub Project board

| Location | Current (live) | Target (Build Loop) |
|----------|----------------|---------------------|
| Project title | `BML Experiments` | `Build Loop Experiments` |
| `scripts/create-bml-project.sh` `TITLE` | `BML Experiments` | `Build Loop Experiments` |

Column names **unchanged:** Backlog, Build, Measure, Learn, Done.

---

## Labels

| Label | Description target |
|-------|-------------------|
| `experiment` | `Build Loop experiment ticket` (was `BML experiment ticket`) |

Decision labels unchanged: `persevere`, `pivot`, `kill-candidate`.

---

## Issue titles (open product experiments)

| Issue | Current title prefix | Target |
|-------|---------------------|--------|
| #1083 | `BML: Core Value — …` | `Build Loop: Core Value — …` |
| #1084 | `BML: Onboarding …` | `Build Loop: Onboarding …` |
| #1085 | `BML: Feature usage …` | `Build Loop: Feature usage …` |

---

## Docs on BookIQ (if mirrored)

| Legacy path | Teaching path in `bml-onboarding` |
|-------------|-----------------------------------|
| `docs/BML/BML_Kanban_Handoff.md` | `docs/reference/Build_Loop_Kanban_Handoff.md` |
| `BML_Kanban_Setup.md` | `Build_Loop_Kanban_Setup.md` |
| `BML_Metrics_Tracking.md` | `Build_Loop_Metrics_Tracking.md` |
| `BML_Implementation_Notes.md` | `Build_Loop_Implementation_Notes.md` |

---

## What stays the same

- Repo URL: `Practical-Office/bml-onboarding` (GitHub name unchanged)
- Kanban column names: Build, Measure, Learn
- Label slugs: `experiment`, `persevere`, `pivot`, `kill-candidate`
- Lean Startup attribution; **kill** as Practical AI third Learn outcome

---

## Verification after live sync

```bash
# On bookiqv1-rc after changes
gh label list | rg experiment
gh issue view 1083 --json title
# Template picker shows "Build Loop Experiment"
```

Teaching mirror comment to update after live pull:

```html
<!-- last-synced: YYYY-MM-DD from bookiqv1-rc -->
```
