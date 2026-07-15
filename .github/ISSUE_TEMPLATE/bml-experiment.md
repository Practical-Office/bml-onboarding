---
name: BML Experiment
about: Build → Measure → Learn experiment. Hypothesis in, kill/pivot/persevere out.
title: "BML: "
labels: ["experiment"]
---

<!-- last-synced: 2026-07-15 from bookiqv1-rc -->

## Hypothesis

One sentence. What customer behavior do we believe will happen?

## Build (smallest test)

What is the thinnest thing we ship to test this? Not the full feature.

## Measure

| Metric | Target (pass) | Kill (fail) | How collected |
|--------|---------------|-------------|----------------|
|        |               |             |                |

**Duration:** ___ days / weeks  
**Sample:** ___ customers / tenants

## Learn (fill only when deciding)

- **Decision:** Persevere / Pivot / Kill
- **Evidence:** (numbers + 1–2 customer quotes if any)
- **Next action:** (one concrete follow-up)

## Acceptance Criteria

- [ ] Hypothesis + kill criteria written before Build starts
- [ ] Instrumentation or manual log path exists before Measure starts
- [ ] Learn decision recorded with evidence (not vibes)
- [ ] Decision label applied: `persevere` | `pivot` | `kill-candidate`

## Cursor workflow (when in Build)

1. `/grill-with-docs` — prime with this issue + relevant folders
2. Spec only if Build is non-trivial
3. `/to-issues` or implement directly if slice is tiny
4. `/tdd` → `/code-review`

## Technical Context / References

<!-- @paths for grilling — keep short -->
