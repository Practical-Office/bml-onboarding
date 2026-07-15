# Build-Measure-Learn Kanban Setup (GitHub)

**Goal:** Stand up a usable Build → Measure → Learn board in under 15 minutes. No ceremony.

## What we use

| Piece | Role |
|-------|------|
| GitHub Issues | Source of truth (one issue = one experiment) |
| GitHub Project | Visual Kanban only |
| Label `experiment` | Marks every BML experiment ticket |
| Labels `hypothesis`, `measure`, `learn` | Optional filters — **columns own phase** |
| Labels `persevere` / `pivot` / `kill-candidate` | Learn decision only |

Issue template: [`.github/ISSUE_TEMPLATE/build-loop-experiment.md`](../../.github/ISSUE_TEMPLATE/build-loop-experiment.md)  
Metrics: [`Build_Loop_Metrics_Tracking.md`](./Build_Loop_Metrics_Tracking.md)

---

## One-time setup (~10 min)

### 1. Labels

```bash
gh label list | rg 'experiment|hypothesis|measure|learn|persevere|pivot|kill-candidate'
```

If missing:

```bash
gh label create experiment --description "Build-Measure-Learn experiment ticket" --color 0E8A16
gh label create hypothesis --description "Optional filter — phase is the column" --color C5DEF5
gh label create measure --description "Optional filter — phase is the column" --color FEF2C0
gh label create learn --description "Optional filter — phase is the column" --color D4C5F9
gh label create persevere --description "Learn decision — keep going" --color 0E8A16
gh label create pivot --description "Learn decision — change approach" --color FBCA04
gh label create kill-candidate --description "Learn decision — kill or sunset" --color D93F0B
```

### 2. Project board (live)

**Board:** https://github.com/orgs/Book-IQ/projects/1 — **Build-Measure-Learn Experiments** (title may show legacy name until BookIQ sync; see [`Build_Loop_BookIQ_sync_note.md`](./Build_Loop_BookIQ_sync_note.md))

Created via `scripts/create-bml-project.sh`. Uses a custom **Stage** field (GitHub’s built-in Status options are not API-editable).

| Stage | Meaning | Rule |
|-------|---------|------|
| **Backlog** | Idea / assumption not yet building | Hypothesis + kill criteria required before leaving |
| **Build** | Shipping the smallest test | Cursor skills workflow applies here |
| **Measure** | Collecting data — do not skip | Clock starts; no new scope |
| **Learn / Validate** | Decision point | Must leave with `persevere` / `pivot` / `kill-candidate` |
| **Done** | Decision recorded + next action filed | Archive when stale |

**One-time UI click:** Board view → Group by → **Stage**  
**Filter tip:** `label:experiment`

To recreate later: `bash scripts/create-bml-project.sh` (after `gh auth refresh -s project,read:project`).

### 3. Wire Issues → Project

When creating an experiment:

```bash
gh issue create --title "BML: …" --label experiment --body-file path/to/body.md
# Then add to project via UI, or:
gh project item-add <PROJECT_NUMBER> --owner Book-IQ --url <ISSUE_URL>
```

Or use **New issue → Build-Measure-Learn Experiment** template (auto-applies `experiment`).

---

## Weekly operating rhythm (30 min max)

1. Move anything past its duration into **Learn / Validate**.
2. For each Learn card: write Decision + Evidence on the issue; apply one decision label; move to **Done**.
3. If Learn has zero decisions for 2+ weeks → the system is theater; fix that before shipping more features.

---

## Cursor skills map

| Column | Skill / action |
|--------|----------------|
| Backlog → Build | `/grill-with-docs` on the issue (primes folders + sharpens the plan) |
| Build (non-trivial) | `/to-spec` → `/to-tickets` → `/implement` (one ticket at a time; `/implement` runs `/tdd` + `/code-review`) |
| Build (tiny) | `/implement` directly (optional light grill first) |
| Measure | No code unless instrumentation is broken — update the issue with weekly numbers |
| Learn / Validate | Human decision; optional `/grill-with-docs` if pivoting |

Do **not** substitute `/to-issues` + bare `/tdd` for this chain. Do **not** require full grill → spec → tickets for tiny Measure instrumentation — skip to `/implement` if the Build fits in one PR.

---

## Create an experiment in <2 minutes

1. **New issue** → template **Build-Measure-Learn Experiment**
2. Fill Hypothesis, Build, Measure (include pass/kill thresholds), Duration
3. Label is pre-set; add to project → **Backlog**
4. Done

Checklist for "ready to leave Backlog":

- [ ] One-sentence hypothesis
- [ ] Kill criteria numeric
- [ ] Duration set
- [ ] Measure path named (event IDs from `Build_Loop_Metrics_Tracking.md` or "manual sheet")

---

## Anti-bloat rules

- Max **3** active experiments in Build+Measure combined (team of 3).
- Vanity metrics (raw logins, total clicks) are not success criteria alone — see metrics doc.
- All **5** handoff tickets are teaching examples; week-1 live priority may still be 3 (see Implementation Notes).
