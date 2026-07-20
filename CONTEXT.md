# Build-Measure-Learn (Practical AI)

Shared experiment system for Practical AI. One board holds learning bets across product and support surfaces; delivery work that is not an experiment stays off the board.

## Language

**BML Board**:
The single Practical AI Build-Measure-Learn Kanban (GitHub Project under Book-IQ for now). Cards are experiments only.
_Avoid_: team board, work board, project board (when meaning general delivery)

**Experiment**:
A ticket with a hypothesis, measure plan, and numeric pass/kill criteria. One GitHub issue = one experiment.
_Avoid_: feature ticket, chore, task

**Validated learning**:
A conclusion backed by real evidence from real clients (or the agreed measure), not opinion or vanity metrics.
_Avoid_: “we shipped,” “feels right,” internal consensus alone

**Kill**:
A Learn decision to stop or remove the bet because numeric kill criteria were hit (or clearly will be). Counted as system success, not personal failure.
_Avoid_: failure, wasted work, “we were wrong” as blame

**Theater**:
Going through Build-Measure-Learn motions without numeric criteria, real Measure, or willingness to kill.
_Avoid_: “agile,” “iteration” (when no evidence or kill path exists)

**Surface**:
Which Practical AI area an experiment targets. Values in use: BookIQ, FRS, Training.
_Avoid_: project, product (when meaning the filter field); repo name as the only classifier

**BookIQ**:
The primary customer product owners use day to day.
_Avoid_: the company, Practical AI

**FRS**:
A team-facing intake / first-step tool that feeds BookIQ; not part of owners’ everyday product use.
_Avoid_: BookIQ feature, customer product

**Training**:
Build-Measure-Learn onboarding and related teaching work (e.g. `bml-onboarding`).
_Avoid_: BookIQ, course content as an experiment by default

**Sandbox**:
Practice experiment drafting that must not sit on the live BML Board until a lead graduates it. Module 7 is the full Experiment SOP dry-run in Sandbox; a lead graduates the learner to the live BML Board.
_Avoid_: live experiment, board card; “certification” as automatic on course completion

**Experiment SOP**:
The single numbered checklist for running one experiment end-to-end on an existing BML Board: risky assumption → ticket → backlog → build → measure → learn decision (persevere / pivot / kill) → done or next loop. Module checklists are slices that reuse the same step IDs. Maps to Lean Startup Build–Measure–Learn; kill is Practical AI’s third Learn outcome.
_Avoid_: ad-hoc module tasks that are not on the SOP; treating board setup as part of the learner run

**Board orientation**:
The learner Module 3 job: open the existing BML Board, confirm Stage columns, and identify a live experiment card. Not board creation.
_Avoid_: GitHub setup (when meaning the learner path); stand up labels/project as onboarding
