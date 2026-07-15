# Build-Measure-Learn + GitHub Kanban System Handoff

**For:** New Chat Agent / Team Member  
**Context:** Practical AI – BookIQ Product  
**Date:** July 2025

---

## 1. Project Overview

**Company:** Practical AI (p-ai.net)  
**Product:** BookIQ (bookiq.io) – AI-powered financial platform with OMI (virtual CFO). It pulls real-time accounting data, provides insights, forecasts, and includes human oversight.

**Current Situation:**  
We are onboarding our first customers this week. We want to implement a real **Build → Measure → Learn** loop (Lean Startup) instead of just shipping features and hoping they work.

**Team Size:** Small (Founder + 1 Senior Dev + 1 Junior Dev)

---

## 2. Build-Measure-Learn Goals

The goal is **not** to build features faster. The goal is to run disciplined experiments that test risky assumptions about whether customers will actually get value from BookIQ.

**Core Risky Assumptions We Need to Test:**
- Customers will actively read and act on OMI’s insights (not just glance at the dashboard).
- The human-reviewed aspect adds meaningful value vs pure AI.
- Customers will continue paying after the novelty wears off (30–60 days).
- Specific features (Forecasts, Runway, etc.) are actually being used and valued.

**Key Principle:**  
If the "Learn" step does not regularly result in killing, changing, or pivoting features based on real data, we are not doing Build-Measure-Learn — we are just doing theater.

---

## 3. Kanban Structure (GitHub Issues + Projects)

We will use **GitHub Issues** as the source of truth and **GitHub Projects** as the visual Kanban board.

### Recommended Columns:
- **Backlog** — Ideas and assumptions to test
- **Build** — Actively building the experiment
- **Measure** — Collecting data (this phase should be taken seriously)
- **Learn / Validate** — Decision point (Persevere, Pivot, or Kill)
- **Done**

### Labels to Create:
- `experiment` (core label for all Build Loop experiment tickets)
- `hypothesis`
- `measure`
- `learn`
- `kill-candidate`
- `persevere`
- `pivot`

---

## 4. Ticket Template

Every experiment ticket should follow this structure so the team can immediately use the Cursor skills workflow once it reaches the **Build** column.

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

---

## 5. Recommended Workflow (Cursor + Skills)

We use Matt Pocock’s skills in this order for non-trivial Builds:

1. `/grill-with-docs` — prime with the issue + folders; sharpen assumptions (runs grilling + domain modeling)
2. `/to-spec` — synthesize the conversation into a published spec (problem, stories, implementation + testing decisions); confirm seams — does **not** re-interview
3. `/to-tickets` — break the spec into tracer-bullet vertical-slice tickets with blockers; quiz on granularity; publish
4. `/implement` — one unblocked ticket at a time; uses `/tdd` at seams, then `/code-review`, then commits

Tiny Builds: skip to `/implement` (optional light grill). Do **not** substitute `/to-issues` + bare `/tdd` for this chain — `/implement` already owns TDD and review.

**Important:**  
Do **not** jump straight to building on non-trivial work. Experiment quality depends on grilling and a clear spec before tickets.

---

## 6. Initial High-Impact Tickets (First 30–60 Days)

These are the experiments we should run with our first customers:

### Ticket 1: Core Value Test
**Hypothesis:** Customers will actively read and act on OMI’s weekly insights.  
**Success Metric:** ≥60% of customers open the weekly insight email and click through at least once per week.  
**Duration:** 4 weeks  
**Kill Criteria:** <40% engagement after 4 weeks.

### Ticket 2: Human Review Value Test
**Hypothesis:** Customers place higher trust in insights when they know a human reviewed them.  
**Success Metric:** Higher trust/usage ratings for human-reviewed vs pure AI insights.  
**Duration:** 3 weeks  
**Kill Criteria:** No meaningful difference in A/B test.

### Ticket 3: Feature Usage Reality Check
**Hypothesis:** Forecast & Runway tools are the most valuable features.  
**Success Metric:** Track actual usage; top 3 features should account for ≥70% of total usage.  
**Duration:** 30 days

### Ticket 4: Pricing Sensitivity Test
**Hypothesis:** Customers are willing to pay $399+/month after the first 60 days.  
**Success Metric:** Renewal rate + feedback at day 45–60.  
**Kill Criteria:** Strong pushback on pricing from multiple customers.

### Ticket 5: Onboarding Completion Impact
**Hypothesis:** Customers who complete full onboarding will have significantly higher engagement.  
**Success Metric:** Compare engagement between completers vs non-completers.  
**Kill Criteria:** <50% onboarding completion rate.

---

## 7. Key Principles (Hard Truths)

- Most teams say they do Build-Measure-Learn but never actually kill anything. We will kill things.
- Vanity metrics (logins, feature clicks) are not enough. We care about whether customers are making better financial decisions because of BookIQ.
- The "Learn" column is the most important column. If we are not making real decisions there, the whole system is broken.
- Start small. One good experiment is worth more than five half-baked features.

---

## Next Steps for New Agent

Please review this document and then help me:
1. Refine or expand the initial 5 tickets.
2. Create the actual GitHub Issue template.
3. Set up the GitHub Projects board and labels.
4. Prepare the first set of tickets we should create this week for our new customers.

---

*This document was created to hand off context from a previous conversation. Please treat it as the current source of truth for the Build-Measure-Learn system at Practical AI.*