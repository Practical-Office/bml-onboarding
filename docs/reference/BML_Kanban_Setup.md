# BML Kanban Setup (GitHub)

**Goal:** Stand up a usable Build → Measure → Learn board in under 15 minutes. No ceremony.

## What we use

| Piece | Role |
|-------|------|
| GitHub Issues | Source of truth (one issue = one experiment) |
| GitHub Project | Visual Kanban only |
| Label `experiment` | Marks BML tickets |
| Labels `persevere` / `pivot` / `kill-candidate` | Learn decision only |

**Deliberately not created:** `hypothesis`, `measure`, `learn` labels. Columns own the phase; more labels slow creation and create drift.

Issue template: [`.github/ISSUE_TEMPLATE/bml-experiment.md`](../../.github/ISSUE_TEMPLATE/bml-experiment.md)  
Metrics: [`BML_Metrics_Tracking.md`](./BML_Metrics_Tracking.md)

---

## One-time setup (~10 min)

### 1. Labels (already on `Book-IQ/bookiqv1-rc`)

```bash
gh label list | rg 'experiment|persevere|pivot|kill-candidate'
```

If missing:

```bash
gh label create experiment --description "BML experiment ticket" --color 0E8A16
gh label create persevere --description "Learn decision — keep going" --color 0E8A16
gh label create pivot --description "Learn decision — change approach" --color FBCA04
gh label create kill-candidate --description "Learn decision — kill or sunset" --color D93F0B
```

### 2. Project board (live)

**Board:** https://github.com/orgs/Book-IQ/projects/1 — **BML Experiments**

Created via `scripts/create-bml-project.sh`. Uses a custom **Stage** field (GitHub’s built-in Status options are not API-editable).

| Stage | Meaning | Rule |
|-------|---------|------|
| **Backlog** | Idea / assumption not yet building | Hypothesis + kill criteria required before leaving |
| **Build** | Shipping the smallest test | Cursor skills workflow applies here |
| **Measure** | Collecting data — do not skip | Clock starts; no new scope |
| **Learn** | Decision point | Must leave with `persevere` / `pivot` / `kill-candidate` |
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

Or use **New issue → BML Experiment** template (auto-applies `experiment`).

---

## Weekly operating rhythm (30 min max)

1. Move anything past its duration into **Learn**.
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
| Learn | Human decision; optional `/grill-with-docs` if pivoting |

### What each Build skill does

| Skill | Role |
|-------|------|
| `/grill-with-docs` | Relentless interview + ADR/glossary capture. Use before writing a spec. |
| `/to-spec` | Synthesize the conversation into a published spec (no re-interview). Confirm test seams. |
| `/to-tickets` | Break the spec into tracer-bullet vertical slices with blocking edges; publish; work the frontier. |
| `/implement` | Build one ticket; use `/tdd` at agreed seams; `/code-review`; commit. Clear context between tickets. |

Do **not** replace this with `/to-issues` + bare `/tdd`. Do **not** require full grill → spec → tickets for tiny Measure instrumentation — skip to `/implement` if the Build fits in one PR.

---

## Create an experiment in <2 minutes

1. **New issue** → template **BML Experiment**
2. Fill Hypothesis, Build, Measure table (pass/kill), Duration
3. Label is pre-set; add to **BML Experiments** → **Backlog**
4. Done

Checklist for "ready to leave Backlog":

- [ ] One-sentence hypothesis
- [ ] Kill criteria numeric
- [ ] Duration set
- [ ] Measure path named (event IDs from `BML_Metrics_Tracking.md` or "manual sheet")

---

## Anti-bloat rules

- Max **3** active experiments in Build+Measure combined (team of 3).
- Vanity metrics (raw logins, total clicks) are not success criteria alone — see metrics doc.
- Pricing / long A/B tests stay in Backlog until first-customer Core Value + Onboarding have a Learn decision.
