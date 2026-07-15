---
title: "Build Loop: Feature usage reality check (Forecast / Runway)"
labels: [experiment]
github: https://github.com/Book-IQ/bookiqv1-rc/issues/1085
---

## Hypothesis

Forecast and Runway are among the most valuable features for first customers (they will show up in top usage, not just marketing claims).

## Build (smallest test)

Tag existing routes/actions with `feature.viewed` / `feature.used` / `feature.returned` for keys: `forecast`, `runway`, plus baselines `omi_insights`, `cashflow`, `transactions_review`. No new Forecast/Runway features — measurement only.

## Measure

| Metric | Target (pass) | Kill (fail) | How collected |
|--------|---------------|-------------|----------------|
| Top-3 features by `feature.used` share | Top 3 ≥70% of usage; Forecast and/or Runway in top tier if hypothesis holds | Forecast & Runway low usage **and** low `feature.returned` | Event counts / sheet |
| Return rate (Forecast, Runway) | Clear repeat use | One-and-done curiosity only | `feature.returned` |

**Duration:** 30 days  
**Sample:** Pilot tenants with access to these surfaces

## Learn (fill only when deciding)

- **Decision:** Persevere / Pivot / Kill
- **Evidence:**
- **Next action:** (e.g. double-down, simplify, or kill roadmap emphasis)

## Acceptance Criteria

- [ ] Feature keys documented before Measure
- [ ] Weekly usage tally on the issue or sheet
- [ ] Learn decision: keep investing / pivot messaging / kill emphasis
- [ ] Decision label applied: `persevere` | `pivot` | `kill-candidate`

## Cursor workflow (when in Build)

1. `/grill-with-docs` — Voyager routes for forecast/runway/cashflow
2. `/to-spec` — if Build is non-trivial
3. `/to-tickets` — if the Build splits into multiple slices
4. `/implement` — thin client/API usage events only; one ticket at a time (`/tdd` + `/code-review` inside)

## Technical Context / References

- `docs/reference/Build_Loop_Metrics_Tracking.md` (Feature usage section)
- Forecast / Runway / cashflow UI entry points
