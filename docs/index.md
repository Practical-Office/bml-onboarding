---
title: BML Mastery — Practical AI Team Onboarding
layout: default
---

> **PROTOTYPE SKELETON** — Structure and tone review only. Placeholders marked `[…]`. Full prose lands in ticket [#1092](https://github.com/Book-IQ/bookiqv1-rc/issues/1092).

![Status](https://img.shields.io/badge/status-prototype-orange) ![Audience](https://img.shields.io/badge/audience-Practical%20AI%20teammates-blue) ![Lean](https://img.shields.io/badge/framework-Build--Measure--Learn-green)

# Build-Measure-Learn (BML) Mastery

**Practical AI Team Onboarding** — learn the system, run real experiments, make kill/pivot/persevere decisions from data.

---

**Navigate:** [Module 1](#module-1-introduction) · [2](#module-2-the-bml-loop) · [3](#module-3-github-setup) · [4](#module-4-ticket-template) · [5](#module-5-first-experiment) · [6](#module-6-operating-the-board) · [7](#module-7-your-first-project) · [BookIQ Appendix](#appendix-bookiq-worked-example) · [Certification](#certification-checklist)

---

## Repo layout

This course lives in [`Practical-Office/bml-onboarding`](https://github.com/Practical-Office/bml-onboarding):

```text
bml-onboarding/
├── README.md                 → pointer to this course (Pages URL)
├── docs/
│   ├── index.md              → you are here (full course)
│   ├── reference/            → Handoff, Setup, Metrics, Implementation Notes
│   ├── how-to/               → future step-by-step guides
│   ├── videos/               → future video embeds
│   └── examples/bookiq/      → BookIQ-specific pointers
├── scripts/                  → board setup tooling
└── .github/ISSUE_TEMPLATE/   → teaching copy of experiment template
```

**Share this course:** https://practical-office.github.io/bml-onboarding/

---

## Table of contents

| # | Module | Time |
|---|--------|------|
| 1 | [Introduction](#module-1-introduction) | ~10 min |
| 2 | [The BML Loop](#module-2-the-bml-loop) | ~15 min |
| 3 | [GitHub Setup](#module-3-github-setup) | ~15 min |
| 4 | [Using the BML Ticket Template](#module-4-ticket-template) | ~10 min |
| 5 | [Creating & Running Your First Experiment](#module-5-first-experiment) | ~25 min |
| 6 | [Operating the Board](#module-6-operating-the-board) | ~15 min |
| 7 | [Your First Project](#module-7-your-first-project) | ~30 min |
| — | [BookIQ Appendix](#appendix-bookiq-worked-example) | reference |
| — | [Certification](#certification-checklist) | submit |

**Origin doc:** [BML Kanban Handoff](reference/BML_Kanban_Handoff.md) — conceptual source; live ops rules in [Implementation Notes](reference/BML_Implementation_Notes.md).

---

## Module 1: Introduction {#module-1-introduction}

### Why BML for BookIQ (and any product)

> The goal is **not** to ship features faster. The goal is to run disciplined experiments that test whether customers actually get value.

**BookIQ context:** AI-powered financial platform with OMI (virtual CFO). We are testing whether customers read, trust, and act on insights — not whether we can build more dashboards.

**Lean Startup lens:** *Validated learning* — progress is measured by what you learn about risky assumptions, not by lines of code shipped.

### Risky assumptions we must test

| Assumption | Why it’s risky |
|------------|----------------|
| Customers act on OMI insights | Core value hypothesis |
| Human review adds trust | Differentiator vs pure AI |
| Customers renew after 60 days | Revenue survival |
| Forecast / Runway are top features | Roadmap bets |

### Expected outcomes

After this course you will:

- Create a BML experiment issue in under 2 minutes
- Move tickets through Build → Measure → Learn with clear kill criteria
- Use Cursor skills on Build without skipping hypothesis work
- Submit a sandbox experiment for lead review

### Module 1 — progress checklist

- [ ] I understand BML is about learning, not feature velocity
- [ ] I can name at least one risky assumption for our product
- [ ] I know the Learn phase must produce Persevere / Pivot / Kill decisions

### Module 1 — self-check

1. What is the difference between shipping features and running BML experiments?
2. What happens if Learn never results in killing or pivoting anything?

*[Answers in full course version]*

---

## Module 2: The BML Loop {#module-2-the-bml-loop}

### The loop

```text
     ┌─────────┐
     │  BUILD  │  Ship the smallest test
     └────┬────┘
          ▼
     ┌─────────┐
     │ MEASURE │  Collect data against pass/kill thresholds
     └────┬────┘
          ▼
     ┌─────────┐
     │  LEARN  │  Persevere · Pivot · Kill
     └────┬────┘
          │
          └──────► next experiment
```

### Phases (what each means)

| Phase | You are… | Exit criteria |
|-------|----------|---------------|
| **Build** | Shipping the *thinnest* test | Instrumentation or manual log path exists |
| **Measure** | Clock running; no new scope | Duration complete; numbers recorded |
| **Learn** | Deciding with evidence | Label: `persevere` / `pivot` / `kill-candidate` |

### Pitfalls (hard truths)

> If Learn does not regularly kill, change, or pivot features, you are doing **theater**, not BML.

- **Vanity metrics** — logins and clicks without “acted on insight” signal
- **Skipping Measure** — deciding on vibes before the clock runs
- **Building the full feature** — experiment scope too large to learn fast
- **No kill criteria** — hypothesis unfalsifiable

### Module 2 — progress checklist

- [ ] I can draw the three phases and what exits each
- [ ] I know why vanity metrics are insufficient
- [ ] I understand Persevere / Pivot / Kill as Learn outputs

### Module 2 — self-check

1. Why is Measure a separate phase instead of “check analytics whenever”?
2. What makes an experiment falsifiable?

---

## Module 3: GitHub Setup {#module-3-github-setup}

### What you need

| Piece | Role |
|-------|------|
| GitHub Issues | One issue = one experiment (source of truth) |
| GitHub Project | Visual Kanban (columns = phase) |
| Label `experiment` | Marks every BML ticket |
| Labels `persevere` / `pivot` / `kill-candidate` | Learn decision only |

> **Live rule:** We do **not** use `hypothesis` / `measure` / `learn` labels. Columns own the phase.

### Step-by-step

1. **Create labels** — `[PLACEHOLDER: gh label create commands]`
2. **Create or open Project board** — columns: Backlog · Build · Measure · Learn · Done
3. **Wire issue template** — [bml-experiment.md](https://github.com/Practical-Office/bml-onboarding/blob/main/.github/ISSUE_TEMPLATE/bml-experiment.md) (teaching copy)
4. **Group board by Stage** — one-time UI click

**Detailed setup:** [BML Kanban Setup](reference/BML_Kanban_Setup.md)

### Module 3 — progress checklist

- [ ] I know where Issues vs Project board fit
- [ ] I can list the five board columns
- [ ] I know which four labels we use

### Module 3 — self-check

1. Why don’t we use phase labels when we have phase columns?
2. What is the source of truth — the board or the issue?

---

## Module 4: Using the BML Ticket Template {#module-4-ticket-template}

### Full template

```markdown
## Hypothesis
One sentence. What customer behavior do we believe will happen?

## Build (smallest test)
What is the thinnest thing we ship to test this?

## Measure
| Metric | Target (pass) | Kill (fail) | How collected |
|--------|---------------|-------------|----------------|
|        |               |             |                |

**Duration:** ___ days / weeks
**Sample:** ___ customers / tenants

## Learn (fill only when deciding)
- **Decision:** Persevere / Pivot / Kill
- **Evidence:** (numbers + quotes)
- **Next action:** (one concrete follow-up)

## Acceptance Criteria
- [ ] Hypothesis + kill criteria before Build
- [ ] Instrumentation before Measure
- [ ] Learn decision with evidence
- [ ] Decision label applied
```

### How to fill each section

| Section | Rule |
|---------|------|
| **Hypothesis** | One sentence; falsifiable customer behavior |
| **Build** | Smallest test — not the full feature |
| **Measure** | Pass *and* kill thresholds; how collected |
| **Learn** | Fill only at decision time — numbers, not vibes |

**Metrics dictionary:** [BML Metrics Tracking](reference/BML_Metrics_Tracking.md)

### Module 4 — progress checklist

- [ ] I can write a one-sentence hypothesis
- [ ] I always define kill criteria before Build
- [ ] I know Learn is filled only when deciding

### Module 4 — self-check

1. What’s wrong with a hypothesis that says “users will like the feature”?
2. When do you apply `kill-candidate`?

---

## Module 5: Creating & Running Your First Experiment {#module-5-first-experiment}

### Walkthrough: Core Value Test (portable pattern)

> **Hypothesis:** Customers will actively read and act on weekly insights.  
> **Pass:** ≥60% open + click through weekly. **Kill:** <40% after 4 weeks.

**Steps:**

1. Create issue from template → label `experiment`
2. Add to board → **Backlog**
3. Move to **Build** when hypothesis + kill criteria are written
4. **Cursor workflow (Build only):**
   - `/grill-with-docs` — prime with issue + context
   - Spec only if non-trivial
   - `/to-issues` or direct implement if tiny slice
   - `/tdd` → `/code-review`
5. Move to **Measure** — clock starts; no new scope
6. Move to **Learn** — record decision + label

> **Agent note:** Cursor helps on Build. Humans own Measure and Learn decisions.

### Module 5 — progress checklist

- [ ] I can trace Core Value Test through all five columns
- [ ] I know when to invoke Cursor skills
- [ ] I will not add scope during Measure

### Module 5 — self-check

1. Why grill before build on non-trivial experiments?
2. What triggers moving from Build to Measure?

---

## Module 6: Operating the Board {#module-6-operating-the-board}

### Moving tickets

| From → To | Gate |
|-----------|------|
| Backlog → Build | Hypothesis + kill criteria written |
| Build → Measure | Instrumentation or manual log exists |
| Measure → Learn | Duration complete; numbers in issue |
| Learn → Done | Decision label + next action filed |

### Measurement discipline

- Max **3 active** experiments in Build + Measure combined
- Week-1 Measure can be a spreadsheet — event IDs defined in [Metrics doc](reference/BML_Metrics_Tracking.md)
- Record numbers in the issue body at Learn

### Learn-phase decisions

| Label | Meaning |
|-------|---------|
| `persevere` | Hypothesis supported — continue / expand |
| `pivot` | Signal mixed — change approach, new experiment |
| `kill-candidate` | Hypothesis failed — sunset or stop |

### Weekly cadence

| When | What |
|------|------|
| Monday | Review board; unblock Measure |
| Wednesday | Check active experiments still in scope |
| Friday | Anything in Learn gets a decision or explicit defer |

### Module 6 — progress checklist

- [ ] I know the gates between columns
- [ ] I understand the 3-active limit
- [ ] I can run the weekly review ritual

### Module 6 — self-check

1. Can you move to Learn without kill/pass numbers? Why not?
2. What do you do when an experiment is in Learn for two weeks with no decision?

---

## Module 7: Your First Project {#module-7-your-first-project}

### Mandatory exercise

Create your **real first BML issue** — as a **sandbox** (do not add to live board until a lead graduates it).

**Requirements:**

1. Use the experiment template completely
2. Hypothesis + pass/kill metrics filled
3. Label `experiment` applied
4. Issue stays in draft/sandbox until lead promotes it

### Submission

Post your issue URL as a comment on this repo’s Discussions (or link channel your lead specifies):

```text
BML Module 7 submission
Issue: https://github.com/YOUR-ORG/YOUR-REPO/issues/NNN
Hypothesis (one line): …
```

**BookIQ teammates:** sandbox on `Book-IQ/bookiqv1-rc`; lead graduates to [BML Experiments board](https://github.com/orgs/Book-IQ/projects/1).

### Module 7 — progress checklist

- [ ] Sandbox issue created with full template
- [ ] Pass and kill thresholds defined
- [ ] Submission link posted for lead review

### Module 7 — self-check

1. Why sandbox before adding to the live board?
2. What must a lead check before graduating your issue?

---

## Appendix: BookIQ worked example {#appendix-bookiq-worked-example}

Portable course above; this appendix is **BookIQ-specific**.

| Resource | Link |
|----------|------|
| Live BML board | [Book-IQ Projects #1](https://github.com/orgs/Book-IQ/projects/1) |
| Live issue template | [bookiqv1-rc template](https://github.com/Book-IQ/bookiqv1-rc/blob/main/.github/ISSUE_TEMPLATE/bml-experiment.md) |
| Week-1 experiments | [Core Value](reference/issues/01-core-value-omi-insights.md) · [Onboarding](reference/issues/02-onboarding-completion-impact.md) · [Feature usage](reference/issues/03-feature-usage-reality-check.md) |
| Handoff (origin) | [BML Kanban Handoff](reference/BML_Kanban_Handoff.md) |

> Teaching template syncs one-way from live BookIQ template. See [Implementation Notes](reference/BML_Implementation_Notes.md).

---

## Next steps {#next-steps}

1. Complete Module 7 sandbox submission
2. Get lead sign-off on certification checklist below
3. Graduate sandbox issue to live board when approved
4. Join weekly BML review
5. Browse [how-to/](how-to/) and [videos/](videos/) as they publish

**Forking for another product:** Swap appendix links; keep Modules 1–6 portable.

---

## Certification checklist {#certification-checklist}

Sign off when all are true:

- [ ] Completed all module progress checklists
- [ ] Answered self-check questions (discussed with lead if unsure)
- [ ] Created sandbox BML experiment issue with pass/kill metrics
- [ ] Posted submission link for review
- [ ] Lead approved graduation to live board (or confirmed sandbox-only practice complete)
- [ ] I will kill or pivot when data says so — not theater

**Certified by:** `[lead name]` · **Date:** `[YYYY-MM-DD]`

---

*Prototype skeleton for [Prototype course README skeleton (#1091)](https://github.com/Book-IQ/bookiqv1-rc/issues/1091). Concepts from Eric Ries, **The Lean Startup** — attribution only, no excerpts.*
