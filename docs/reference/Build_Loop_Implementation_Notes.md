# Build-Measure-Learn Implementation Notes for Cursor

**Goal:** Functional BML system live for first customers. No theater.

**Status:** Delivered 2026-07-15; fidelity pass 2026-07-15 (review001 + handoff alignment)

## Delivered

| Output | Path |
|--------|------|
| Issue template | [`.github/ISSUE_TEMPLATE/build-loop-experiment.md`](../../.github/ISSUE_TEMPLATE/build-loop-experiment.md) — exact handoff sections |
| Kanban setup | [`Build_Loop_Kanban_Setup.md`](./Build_Loop_Kanban_Setup.md) |
| Metrics dictionary | [`Build_Loop_Metrics_Tracking.md`](./Build_Loop_Metrics_Tracking.md) |
| Issue exports (all 5) | [`issues/`](./issues/) |
| Labels | `experiment`, `hypothesis`, `measure`, `learn`, `persevere`, `pivot`, `kill-candidate` |

## Design choices (anti-bloat)

1. **Columns own phase.** Stage field: Backlog → Build → Measure → **Learn / Validate** → Done. Phase labels exist for optional filtering only.
2. **All 5 handoff tickets** documented as teaching examples in course + `issues/`. Week-1 **live** priority remains 3:
   - Core Value (OMI insights) — #1083
   - Onboarding completion — #1084
   - Feature usage — #1085
   - Human Review A/B — Backlog until Core Value has signal
   - Pricing sensitivity — Backlog until day 45–60
3. **Week-1 Measure can be a sheet.** Event IDs are defined so instrumentation does not invent new names later.
4. **Max 3 active** in Build+Measure combined.

## Success criteria check

| Criterion | How met |
|-----------|---------|
| New experiment <2 min | Template + `experiment` label + add to board |
| Hypothesis → kill path | Measure requires pass/kill + Learn decision labels |
| Cursor skills | grill-with-docs → to-spec → to-tickets → implement (no chain deviations) |
| Real outcomes | Metrics doc favors `acted`, completion lift, return rate, renewal — not raw logins |

## Remaining human step

Board is live: https://github.com/orgs/Book-IQ/projects/1 (#1083–#1085).  
One UI click: Board → Group by → **Stage**.

## First-week ticket order (live board)

1. Core Value (OMI insights) — start Measure as soon as delivery path exists
2. Onboarding completion — same cohort, parallel Measure
3. Feature usage — instrumentation Build; 30-day Measure
