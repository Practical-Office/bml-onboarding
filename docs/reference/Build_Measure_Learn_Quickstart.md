# Build-Measure-Learn Quickstart

One-page reference for repo readers. Web version: [`docs/quick-reference.html`](../quick-reference.html).

## Columns (Stage)

Backlog → Build → Measure → **Learn / Validate** → Done

## Labels

`experiment` · `hypothesis` · `measure` · `learn` · `kill-candidate` · `persevere` · `pivot`

Columns own phase. Decision labels at Learn only.

## WIP

- Max **3** active in Build + Measure
- Weekly 30 min Learn review
- Zero Learn decisions for 2+ weeks = theater

## Ticket template

```markdown
## Hypothesis
## Build
## Measure
## Learn
## Acceptance Criteria
## Technical Context / References
```

Fill Measure with pass/kill thresholds, duration, sample. See [`issues/01-core-value-omi-insights.md`](issues/01-core-value-omi-insights.md).

## Build skills

`/grill-with-docs` → `/to-spec` → `/to-tickets` → `/implement` (with `/tdd` + `/code-review`)

Tiny build: `/implement` only. No `/to-issues` substitute.

## Hard truths

1. Most teams never kill — we will.
2. Learn / Validate is the most important column.
3. Vanity metrics are not enough.
4. 60 days without a kill = failed system.

## Five BookIQ tickets

| # | Experiment | Live |
|---|------------|------|
| 1 | OMI insights | #1083 |
| 2 | Human review | Backlog |
| 3 | Forecast / Runway | #1085 |
| 4 | Pricing | Backlog |
| 5 | Onboarding | #1084 |

Source: [`Build_Loop_Kanban_Handoff.md`](Build_Loop_Kanban_Handoff.md)
