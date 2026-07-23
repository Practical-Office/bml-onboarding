# Build-Measure-Learn (Practical AI)

Shared experiment system for Practical AI. Learning bets run on the BML Board; Bug and Update work stay on Team Work (project 2). See the [Dev SOPs hub](https://practical-office.github.io/dev-sops/) for all three loops.

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

**Cert prep**:
Module 7 packages certification evidence — draft ticket, SOP walkthrough, and Build skill chain plan — for lead review before any live board move. Homework F (next steps) is one self-chosen live experiment through Build on the BML Board.
_Avoid_: sandbox issue on the live board; cert as automatic on course completion without lead review

**Experiment SOP**:
The single numbered checklist for running one experiment end-to-end on an existing BML Board: risky assumption → ticket → backlog → build → measure → learn decision (persevere / pivot / kill) → done or next loop. Module checklists are slices that reuse the same step IDs. Maps to Lean Startup Build–Measure–Learn; kill is Practical AI’s third Learn outcome.
_Avoid_: ad-hoc module tasks that are not on the SOP; treating board setup as part of the learner run

**Board orientation**:
The learner Module 3 job: confirm Stage columns and identify one experiment bet. Default path uses teaching drafts (`reference/issues/index.html`) and the board mock; Book-IQ members may open the live BML Board via appendix. Not board creation.
_Avoid_: GitHub setup (when meaning the learner path); stand up labels/project as onboarding

**Team Work**:
Practical Office GitHub Project 2 — intake board for per-teammate **Bug**, **Update**, and **BML** ticket types. Bug and Update cards stay here; BML cards move to the BML Board after intake.
_Avoid_: BML Board (when meaning experiment-only kanban); using Team Work for full Measure/Learn

**Update**:
Known-good change where the outcome is already decided. Uses the Update skill chain and acceptance verify — not Measure / Learn / kill. Course: `Practical-Office/update-sop`.
_Avoid_: experiment, feature bet; running fake BML on decided work

**Ticket Type** (Team Work):
Exactly one of `Bug` | `Update` | `BML` on every new Team Work card.
_Avoid_: `Build` as a label (Build is a BML column name); `experiment` as the intake label string

**Promotion**:
When an Update reveals a risky assumption → relabel **BML**, rewrite as experiment, move to BML Board.
_Avoid_: keeping a bet as an Update to skip Measure

**Dev SOPs hub**:
Index at `Practical-Office/dev-sops` linking Bug, Update, and BML courses. **Owns** the canonical Skills browser (`skills.html` + full write-ups) and Preflight+Run checklists (`checklists.html`). Courses link to the hub for skills — they do not duplicate skill pages locally.
_Avoid_: duplicating skill reference or checklists inside course repos
