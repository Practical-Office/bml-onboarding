---
title: "BML: Onboarding completion vs engagement"
labels: [experiment]
github: https://github.com/Book-IQ/bookiqv1-rc/issues/1084
---

## Hypothesis

Customers who complete full onboarding will have significantly higher engagement (insight acts / meaningful feature use) than those who do not.

## Build

Define the required onboarding steps (`invite_accepted` → `tenant_connected` → `first_dashboard_view` → `first_omi_interaction`). Instrument `onboarding.*` events (or a manual checklist per tenant). Do **not** redesign onboarding UX until Measure shows completion <50% or no engagement lift.

## Measure

| Metric | Target (pass) | Kill (fail) | How collected |
|--------|---------------|-------------|----------------|
| Onboarding completion within 14 days | ≥50% of started | <50% | `onboarding.completed` / `started` |
| Engagement lift | Completers meaningfully higher on weekly `omi.insight.acted` or `feature.used` vs non-completers | No difference | Cohort compare in sheet/issue |

**Duration:** 3–4 weeks (overlap with Core Value cohort)  
**Sample:** Same first-customer cohort

## Learn

- **Decision:** Persevere / Pivot / Kill
- **Evidence:**
- **Next action:**

## Acceptance Criteria

- [ ] Canonical steps listed and agreed before Build
- [ ] Per-tenant completion status tracked (events or sheet)
- [ ] Engagement compare posted at Learn
- [ ] Decision label applied: `persevere` | `pivot` | `kill-candidate`

## Technical Context / References

- `docs/reference/Build_Loop_Metrics_Tracking.md` (Onboarding section)
- Invite / admin onboarding paths in backend + frontend
