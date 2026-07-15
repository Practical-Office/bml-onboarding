---
title: "BML: Pricing sensitivity test"
labels: [experiment]
github: backlog
---

## Hypothesis

Customers are willing to pay $399+/month after the first 60 days.

## Build

No new pricing UI unless required. Prepare renewal conversation script + feedback capture at day 45–60 for pilot cohort. Document current price, contract terms, and objection categories before Measure starts.

## Measure

| Metric | Target (pass) | Kill (fail) | How collected |
|--------|---------------|-------------|----------------|
| Renewal rate at day 45–60 | Majority renew without heavy discounting | Multiple customers push back hard on price | CRM / billing + issue log |
| Price objection themes | Manageable; value cited as reason to stay | Price cited as primary churn driver | Structured feedback on issue |

**Duration:** 45–60 days from cohort start  
**Sample:** First-customer / pilot tenants approaching renewal window

## Learn

- **Decision:** Persevere / Pivot / Kill
- **Evidence:**
- **Next action:** (e.g. hold price, adjust packaging, pilot lower tier)

## Acceptance Criteria

- [ ] Renewal window + sample defined before Measure
- [ ] Feedback captured per tenant (not vibes)
- [ ] Learn decision with renewal numbers + quotes
- [ ] Decision label applied: `persevere` | `pivot` | `kill-candidate`

## Technical Context / References

- `docs/reference/Build_Loop_Metrics_Tracking.md` (retention / renewal section)
- Billing / subscription paths (prime grill when Build needs instrumentation)
