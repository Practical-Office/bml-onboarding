# BML Onboarding — Session Handoff

**Date:** 2026-07-15  
**Split complete:** BML course work is now a standalone Cursor project linked to `Practical-Office/bml-onboarding`.

---

## Open this workspace

1. **Cursor profile:** `BML-onboarding` (cloned from BookIQ-team — same tools/skills)
2. **Folder:** `/Users/richardsawyers/work/p-ai/bml-onboarding`
3. **Remote:** https://github.com/Practical-Office/bml-onboarding.git

If the profile does not appear after restart, **fully quit Cursor (Cmd+Q)** — not just close the window — then run:

```bash
cd /Users/richardsawyers/work/p-ai/bml-onboarding
bash scripts/install-cursor-profile.sh
```

Reopen Cursor → **Profiles → BML-onboarding**, or open `bml-onboarding.code-workspace`.

**Why:** Cursor can overwrite `storage.json` on exit if it was still running when the profile was first created. The install script registers the profile while Cursor is quit.

---

## Wayfinder map (new tracker)

| Item | URL |
|------|-----|
| **Map** | https://github.com/Practical-Office/bml-onboarding/issues/5 |
| **Prototype skeleton (awaiting approval)** | https://github.com/Practical-Office/bml-onboarding/issues/6 |
| **Production course write (next)** | https://github.com/Practical-Office/bml-onboarding/issues/7 |

Old BookIQ tickets #1086–#1095 are **closed** with pointers to the new repo.

---

## Live course

https://practical-office.github.io/bml-onboarding/

Prototype banner still present until [#7](https://github.com/Practical-Office/bml-onboarding/issues/7) lands.

---

## What stayed on BookIQ

- Live **BML Experiments** board: https://github.com/orgs/Book-IQ/projects/1
- Product experiment issues **#1083–#1085**
- Live template: `Book-IQ/bookiqv1-rc/.github/ISSUE_TEMPLATE/bml-experiment.md`
- `docs/BML/` removed from BookIQ workspace (was untracked local copy)

---

## Recommended next steps (in order)

1. Open **BML-onboarding** profile → claim [#6](https://github.com/Practical-Office/bml-onboarding/issues/6)
2. Reply **Approved** (or list changes) on the prototype issue
3. Close #6 → claim [#7](https://github.com/Practical-Office/bml-onboarding/issues/7) for full production course prose
4. Use `/wayfinder` with map [#5](https://github.com/Practical-Office/bml-onboarding/issues/5) — one ticket per session

---

## Agent entry points in this repo

- [`AGENTS.md`](./AGENTS.md)
- [`docs/agents/issue-tracker.md`](./docs/agents/issue-tracker.md)
- [`.cursor/rules/`](./.cursor/rules/)
