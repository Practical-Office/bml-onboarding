---
title: "BML: Human review value test"
labels: [experiment]
github: backlog
---

## Hypothesis

Customers place higher trust in OMI insights when they know a human reviewed them.

## Build

A/B or cohort test: surface identical insight content with and without a visible "human-reviewed" indicator. Smallest version — badge or copy change on existing insight delivery; no new review workflow unless required for the test.

## Measure

| Metric | Target (pass) | Kill (fail) | How collected |
|--------|---------------|-------------|----------------|
| Trust / usefulness rating (human-reviewed vs pure AI) | Human-reviewed arm scores meaningfully higher | No meaningful difference in A/B | Survey or in-app rating after insight view |
| Usage / act rate (human-reviewed vs control) | Higher `omi.insight.acted` on human-reviewed arm | Flat or inverted | `omi.insight.*` events by variant |

**Duration:** 3 weeks  
**Sample:** Pilot tenants with sufficient weekly insight volume

## Learn

- **Decision:** Persevere / Pivot / Kill
- **Evidence:**
- **Next action:**

## Acceptance Criteria

- [ ] Hypothesis + kill criteria written before Build starts
- [ ] Variant assignment documented (A/B or cohort)
- [ ] Ratings + usage compared at Learn with numbers
- [ ] Decision label applied: `persevere` | `pivot` | `kill-candidate`

## Technical Context / References

- `docs/reference/Build_Loop_Metrics_Tracking.md`
- OMI insight delivery surfaces + review workflow paths (prime grill with actual folders)
