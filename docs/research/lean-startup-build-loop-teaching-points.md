# Research: Lean Startup teaching points for Build Loop course Modules 1–2

**Ticket:** Research Lean Startup teaching points for Build Loop course modules (wayfinder map child)  
**Parent map:** Wayfinder: Build Loop Mastery onboarding course (Practical-Office/bml-onboarding)  
**Repo:** [`docs/research/lean-startup-build-loop-teaching-points.md`](./lean-startup-build-loop-teaching-points.md) in `Practical-Office/bml-onboarding`  
**Date:** 2026-07-15  
**Question:** Which Lean Startup ideas (Eric Ries) should Modules 1–2 of a Practical Office Build Loop onboarding course teach — at concept level only, no substantial book excerpts — so the course grounds Build–Measure–Learn, validated learning, and persevere/pivot/kill without copyright risk?

---

## Verdict

Teach **concept-level** Lean Startup vocabulary from Ries’s publicly described methodology: the **Build–Measure–Learn** loop, **validated learning** as the unit of progress, **MVP** as the smallest build that starts learning, **actionable vs vanity metrics**, and the **pivot vs persevere** decision. Treat **kill** as Practical AI’s explicit third Learn outcome (stop the experiment / drop the bet), not as a Ries book term. Attribute the methodology; do not paste book chapters, long site prose, or third-party “full book summary” text into the course.

---

## Recommended teaching points (Modules 1–2)

### Module 1 — Why Build Loop (concepts)

Ground the course in these ideas, in plain language, with short attribution (see below):

| Teaching point | What to say (concept-level) | Why it belongs in Module 1 |
|---|---|---|
| Startups / new products under uncertainty | New products are built under **extreme uncertainty**; the hard questions are “Should we build this?” and “Can we build a sustainable business around it?” — not only “Can we ship it?” | Frames Build Loop as learning under uncertainty, not feature factory speed. |
| Validated learning | Progress is **validated learning**: empirically showing you learned something true about customers / the business by running real-world experiments — not shipping volume or activity theater. | Primary “why” for the whole Kanban. |
| Build–Measure–Learn loop | Fundamental activity: turn ideas into products, **measure** how customers respond, **learn** whether to change course or continue; optimize for **faster cycles** through that loop. | Names the three columns Build / Measure / Learn. |
| MVP (minimum viable product) | The **simplest version** that lets the team **start learning** about core assumptions with real users, with least effort — not “half a product” for its own sake. | Sets expectation for Build: experiment-sized, not roadmap-sized. |
| Leap-of-faith / risky assumptions | Explicitly name the **riskiest assumptions** the experiment will test (value, growth, willingness to pay, etc.). | Ties tickets to hypotheses, not feature wishlists. |

**Sources (Module 1):** [theleanstartup.com/principles](https://theleanstartup.com/principles); [ericries.co](https://www.ericries.co/) (MVP, validated learning definitions); [Wikipedia: Lean startup](https://en.wikipedia.org/wiki/Lean_startup).

### Module 2 — Measure and Learn decisions (concepts)

| Teaching point | What to say (concept-level) | Why it belongs in Module 2 |
|---|---|---|
| Actionable metrics vs vanity metrics | Prefer metrics that support a **decision** and show cause–effect; avoid vanity totals that look good but do not change what you do next. | Matches Practical AI’s anti-theater Measure rules. |
| Innovation accounting (light touch) | Hold the team accountable with **startup-appropriate measures**: baselines from an MVP, tune toward ideal, then decide. Do not deep-dive Ries’s full accounting system in M1–2. | Enough to justify “pass / kill criteria” on tickets; defer depth. |
| Pivot | A **structured course correction**: change strategy (new hypothesis about product / strategy / growth) while keeping vision; one foot anchored. | Maps to Learn label `pivot`. |
| Persevere | Continue the current strategy when learning shows the drivers are moving. | Maps to Learn label `persevere`. |
| Kill (Practical AI extension) | **Stop** the experiment or drop the bet when criteria say the hypothesis failed — explicit third outcome on the Build Loop board. Ries’s public principles emphasize **pivot or persevere**; “kill” is our ops clarity, not a claimed Ries trademark term. | Maps to `kill-candidate` / kill path; avoids false attribution. |
| Theater vs real Build Loop | If Learn rarely produces **persevere / pivot / kill**, the loop is theater (shipping without deciding). | Aligns with BookIQ Build Loop handoff hard truths. |

**Sources (Module 2):** [theleanstartup.com/principles](https://theleanstartup.com/principles) (actionable metrics, pivot as structural course correction, pivot or persevere); [ericries.co](https://www.ericries.co/) (pivot, innovation accounting, vanity metrics contrast); [Wikipedia: Lean startup](https://en.wikipedia.org/wiki/Lean_startup) (MVP, actionable vs vanity metrics, Build–Measure–Learn phases).

### Explicitly defer out of Modules 1–2

Keep these for later modules or appendices (or skip unless needed): Five Whys deep dive, engines of growth taxonomy, full pivot-type catalogs, Business Model / Lean Canvas templates, continuous deployment as a Lean Startup “principle,” Steve Blank’s four customer-development steps in detail. Mention Blank only as historical precursor if asked — Modules 1–2 stay Ries-loop focused.

---

## Phrases / long excerpts to avoid (copyright hygiene)

Safe approach for a public course: **teach the ideas in your own words**, cite Ries / Lean Startup, link to official methodology pages. Do **not**:

1. **Copy substantial passages** from *The Lean Startup* (Crown Business, 2011) — chapters, multi-paragraph explanations, case narratives (e.g. long Zappos / Groupon retellings lifted from the book), diagrams reproduced from the book.
2. **Paste long blocks** from [theleanstartup.com](https://theleanstartup.com/) or [ericries.co](https://www.ericries.co/) into the README as course body text (short attributed quotes are different from republishing site copy).
3. **Mirror “complete book summary” sites** or pirated PDFs — do not scrape, quote, or link those as teaching material.
4. **Reproduce proprietary courseware** from Lean Startup Co. paid courses.
5. **Use long distinctive phrase strings** that read as book prose. Prefer ordinary paraphrases of the public concepts (Build Loop, MVP, validated learning, pivot/persevere).

**Allowed:** concept names and short standard labels (Build–Measure–Learn, validated learning, MVP, pivot, persevere, vanity metrics); one-line attribution; links to official pages and Wikipedia; Practical AI’s own Kanban language (including **kill**).

This is not legal advice; when in doubt, paraphrase shorter and attribute.

---

## Suggested short attribution line (for course README)

Use something like:

> Concepts such as Build–Measure–Learn, validated learning, MVP, and pivot/persevere are from Eric Ries’s Lean Startup methodology. See [theleanstartup.com/principles](https://theleanstartup.com/principles). This course teaches those ideas at a high level and does not reproduce book text. Practical AI’s Build Loop Kanban adds an explicit **kill** outcome alongside pivot and persevere.

Optional shorter variant:

> Lean Startup concepts (Build–Measure–Learn, validated learning, MVP, pivot/persevere) © ideas associated with Eric Ries — summarized here with attribution; not a substitute for the book.

---

## Mapping to Practical AI’s Build Loop Kanban

| Lean Startup concept | Practical AI Build Loop Kanban / ops |
|---|---|
| Ideas / risky assumptions | **Backlog** — experiment ideas; hypothesis on the issue template |
| Build (→ MVP) | **Build** column — smallest shippable experiment to test the hypothesis |
| Measure (actionable metrics) | **Measure** column — predefined metrics, pass/kill criteria; prefer value/behavior metrics over vanity (logins, raw clicks) |
| Learn + validated learning | **Learn / Validate** column — write what was learned; require a decision |
| Persevere | Label / decision **`persevere`** — keep investing on current path |
| Pivot | Label / decision **`pivot`** — change hypothesis/strategy; new or revised experiment |
| (Practical AI) Kill | Label / path **`kill-candidate`** / kill — stop; archive learning so theater does not continue |
| Anti-theater | Handoff principle: if Learn does not regularly yield kill/change/pivot, the system is broken |

**Column reminder (from BookIQ Build Loop handoff):** Backlog → Build → Measure → Learn / Validate → Done.

---

## Sources consulted (high-trust)

| Source | Role |
|---|---|
| [The Lean Startup — Methodology / Principles](https://theleanstartup.com/principles) | Primary public summary of Build–Measure–Learn, MVP, validated learning, actionable metrics, pivot/persevere |
| [Eric Ries — ericries.co](https://www.ericries.co/) | Author’s short definitions: MVP, pivot, validated learning, innovation accounting |
| [Wikipedia: Lean startup](https://en.wikipedia.org/wiki/Lean_startup) | Overview of MVP, vanity vs actionable metrics, Build–Measure–Learn, pivot |
| [Wikipedia: The Lean Startup (book)](https://en.wikipedia.org/wiki/The_Lean_Startup) | Book identification / movement context only |
| [`Build_Loop_Kanban_Handoff.md`](../reference/Build_Loop_Kanban_Handoff.md) + Implementation Notes | Local mapping target (Kanban columns, labels, kill path) — not a Ries primary source |

**Not used as teaching copy:** archive.org / pirate book PDFs; commercial “complete book summary” blogs.

---

## Resolution summary for #1088

Modules 1–2 should teach: uncertainty + **validated learning**, the **Build–Measure–Learn** loop, **MVP**, **actionable vs vanity metrics**, and **pivot / persevere**, with **kill** as Practical AI’s third Learn outcome. Attribute Ries; paraphrase only; map 1:1 onto Backlog/Build/Measure/Learn and persevere/pivot/kill labels.
