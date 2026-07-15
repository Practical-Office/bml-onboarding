# Issue tracker: GitHub

All issues for this project live as **GitHub Issues** on **`Practical-Office/bml-onboarding`**. Use the `gh` CLI for all skill-driven issue operations.

## Conventions

- **Create an issue**: `gh issue create --repo Practical-Office/bml-onboarding --title "..." --body "..."`
- **Read an issue**: `gh issue view <number> --repo Practical-Office/bml-onboarding --comments`
- **List issues**: `gh issue list --repo Practical-Office/bml-onboarding --state open`
- **Comment**: `gh issue comment <number> --repo Practical-Office/bml-onboarding --body "..."`
- **Labels**: `gh issue edit <number> --repo Practical-Office/bml-onboarding --add-label "..."`
- **Close**: `gh issue close <number> --repo Practical-Office/bml-onboarding --comment "..."`

Infer the repo from `git remote -v` when run inside this clone (`Practical-Office/bml-onboarding`).

## Wayfinder map

The canonical wayfinder map is a single issue labelled `wayfinder:map`. Child tickets use `wayfinder:task`, `wayfinder:prototype`, `wayfinder:research`, or `wayfinder:grilling`.

Refer to tickets **by linked title**, not bare issue numbers, in map narration and handoffs.

## Live BookIQ experiments (separate tracker)

Product experiment issues and the live Build Loop board remain on **`Book-IQ/bookiqv1-rc`**. Do not move or close those from this repo's agent sessions unless explicitly scoped.

## When a skill says "publish to the issue tracker"

Create or update a GitHub issue on `Practical-Office/bml-onboarding`.
