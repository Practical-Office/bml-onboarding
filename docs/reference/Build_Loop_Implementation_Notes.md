# Build Loop Implementation Notes for Cursor

**Goal:** Functional Build Loop system live this week for first customers. No theater.

**Status:** Delivered 2026-07-15

## Delivered

| Output | Path |
|--------|------|
| Issue template | [`.github/ISSUE_TEMPLATE/build-loop-experiment.md`](../../.github/ISSUE_TEMPLATE/build-loop-experiment.md) |
| Kanban setup | [`Build_Loop_Kanban_Setup.md`](./Build_Loop_Kanban_Setup.md) |
| Metrics dictionary | [`Build_Loop_Metrics_Tracking.md`](./Build_Loop_Metrics_Tracking.md) |
| Issue exports | [`issues/`](./issues/) |
| Labels on repo | `experiment`, `persevere`, `pivot`, `kill-candidate` |

## Design choices (anti-bloat)

1. **No phase labels** (`hypothesis` / `measure` / `learn`). Project columns own phase; labels only mark type + Learn decision.
2. **3 experiments this week**, not 5. Deferred:
   - Human Review A/B — needs experiment infra; run after Core Value has signal
   - Pricing sensitivity — day 45–60; keep in Backlog until then
3. **Week-1 Measure can be a sheet.** Event IDs are defined so instrumentation does not invent new names later.
4. **Max 3 active** in Build+Measure combined.

## Success criteria check

| Criterion | How met |
|-----------|---------|
| New experiment <2 min | Template + `experiment` label + add to board |
| Hypothesis → kill path | Measure table requires pass/kill + Learn decision labels |
| Cursor skills | Documented in template + Kanban setup (grill only when Build is non-trivial) |
| Real outcomes | Metrics doc favors `acted`, completion lift, return rate, renewal — not raw logins |

## Remaining human step

Board is live: https://github.com/orgs/Book-IQ/projects/1 (#1083–#1085 in Stage=Backlog).  
One UI click: Board → Group by → **Stage**.

## First-week ticket order

1. Core Value (OMI insights) — start Measure as soon as delivery path exists
2. Onboarding completion — same cohort, parallel Measure
3. Feature usage — instrumentation Build; 30-day Measure
