---
title: "BML: Core Value — OMI weekly insights engagement"
labels: [experiment]
github: https://github.com/Book-IQ/bookiqv1-rc/issues/1083
---

## Hypothesis

Customers will actively read and act on OMI’s weekly insights (not just glance at the dashboard).

## Build

Ship (or confirm) weekly insight delivery + a measurable open/click path for pilot tenants. Prefer existing email/in-app insight surface; add only the minimum events from `docs/reference/Build_Loop_Metrics_Tracking.md` (`omi.insight.*`). No new insight product work beyond instrumentation and a clear CTA.

## Measure

| Metric | Target (pass) | Kill (fail) | How collected |
|--------|---------------|-------------|----------------|
| Weekly open + click-through (≥1 open and ≥1 click per tenant per week) | ≥60% of pilot tenants | <40% after 4 weeks | `omi.insight.opened` / `clicked` (sheet until wired) |
| Act rate (optional stretch) | Rising week-over-week | Flat/zero acts with high opens | `omi.insight.acted` |

**Duration:** 4 weeks  
**Sample:** All first-customer / pilot tenants onboarded this cohort

## Learn

- **Decision:** Persevere / Pivot / Kill
- **Evidence:**
- **Next action:**

## Acceptance Criteria

- [ ] Hypothesis + kill criteria written before Build starts
- [ ] Instrumentation or manual weekly log exists before Measure starts
- [ ] Learn decision recorded with evidence after 4 weeks (or earlier if clearly dead)
- [ ] Decision label applied: `persevere` | `pivot` | `kill-candidate`

## Technical Context / References

- `docs/reference/Build_Loop_Metrics_Tracking.md`
- OMI / insight delivery + Voyager surfaces (prime grill with actual folders when starting Build)
