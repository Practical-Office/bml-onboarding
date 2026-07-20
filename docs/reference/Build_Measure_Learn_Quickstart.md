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
What do we believe will happen?

## Build
What exactly are we building? What is the smallest version we can ship to test this?

## Measure
What specific metrics or data will we collect? How will we know if the hypothesis is validated or invalidated?

## Learn
What did we actually learn? What decision are we making? (Persevere / Pivot / Kill)

## Acceptance Criteria
- [ ] ...
- [ ] ...

## Technical Context / References
@relevant-files @folders (for /grill-with-docs)
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

## Five BookIQ tickets (handoff §6)

| # | Experiment | Metrics | Live |
|---|------------|---------|------|
| 1 | Core Value — OMI insights | ≥60% open+click weekly · kill &lt;40% · 4 weeks | #1083 |
| 2 | Human Review Value | Higher trust/usage for human-reviewed vs AI · 3 weeks | Backlog |
| 3 | Feature Usage — Forecast / Runway | Top 3 features ≥70% usage · 30 days | #1085 |
| 4 | Pricing Sensitivity | Renewal at $399+/mo · day 45–60 | Backlog |
| 5 | Onboarding Completion | Completers vs non-completers · kill &lt;50% completion | #1084 |

Source: [`Build_Loop_Kanban_Handoff.md`](Build_Loop_Kanban_Handoff.md)
