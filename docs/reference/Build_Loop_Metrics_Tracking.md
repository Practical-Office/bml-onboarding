# Build Loop Metrics Tracking (Lightweight)

**Principle:** Track outcomes that change product decisions. Logins and undifferentiated clicks are vanity unless tied to insight → action → business result.

**Week-1 collection mode:** Manual sheet or issue comments is fine. Instrument events below when Build for that experiment ships — do not block Measure on a full analytics platform.

---

## Event dictionary

Use these IDs everywhere (code, sheets, issue Measure tables). Tenant-scoped; never log raw PII in event props.

### Core Value (OMI insights)

| Event ID | When | Props (minimal) | Outcome signal |
|----------|------|-----------------|----------------|
| `omi.insight.delivered` | Weekly insight email/push sent or in-app card shown | `tenant_id`, `insight_id`, `channel` (`email`\|`in_app`) | Denominator |
| `omi.insight.opened` | Email open **or** in-app insight viewed ≥3s | `tenant_id`, `insight_id`, `channel` | Engagement |
| `omi.insight.clicked` | CTA / citation / drill-down from insight | `tenant_id`, `insight_id`, `target` | Intent |
| `omi.insight.acted` | User completes a consequential action attributed to insight (e.g. mark reviewed, create review item, export, schedule follow-up) | `tenant_id`, `insight_id`, `action_type` | **Core value** |

**Derived (per tenant, per week):**

- Open rate = tenants with ≥1 `opened` / tenants with ≥1 `delivered`
- Click-through = tenants with ≥1 `clicked` / tenants with ≥1 `opened`
- Act rate = tenants with ≥1 `acted` / tenants with ≥1 `delivered` ← prefer this over opens alone

### Onboarding

| Event ID | When | Props | Outcome signal |
|----------|------|-------|----------------|
| `onboarding.started` | First authenticated session or invite accepted | `tenant_id`, `user_id` (hash ok) | Cohort start |
| `onboarding.step_completed` | Named step finished | `tenant_id`, `step` | Funnel |
| `onboarding.completed` | All required steps done | `tenant_id` | Completer cohort |
| `onboarding.abandoned` | No step progress for 7d after start, incomplete | `tenant_id`, `last_step` | Drop-off |

**Canonical steps** (adjust names in code once; keep IDs stable):

1. `invite_accepted`
2. `tenant_connected` (QBO/Plaid or books linked)
3. `first_dashboard_view`
4. `first_omi_interaction`

**Derived:**

- Completion rate = `completed` / `started` (window: 14 days)
- Engagement lift = weekly `omi.insight.acted` rate for completers vs non-completers

### Feature usage (reality check)

| Event ID | When | Props | Outcome signal |
|----------|------|-------|----------------|
| `feature.viewed` | Screen/route for a named feature opened | `tenant_id`, `feature_key` | Awareness |
| `feature.used` | Meaningful interaction (not idle view) | `tenant_id`, `feature_key`, `action` | Usage |
| `feature.returned` | Second+ `used` in a later session (≥24h) | `tenant_id`, `feature_key` | Retention of feature |

**Feature keys (initial set):**

- `omi_insights`
- `forecast`
- `runway`
- `cashflow`
- `balance_sheet`
- `transactions_review`
- `reports`

**Derived (30-day window):**

- Share of `feature.used` by `feature_key`
- Top-3 share ≥70%? (hypothesis for Feature Usage experiment)
- Return rate per feature = tenants with `returned` / tenants with `used`

### Business impact (not vanity)

| Signal | Definition | Cadence |
|--------|------------|---------|
| `biz.active_tenant_week` | Tenant with ≥1 `omi.insight.acted` **or** ≥1 `feature.used` beyond login | Weekly |
| `biz.support_burden` | # support tickets / active tenants (manual ok) | Weekly |
| `biz.renewal_intent` | Explicit renew / churn risk at day 45–60 (interview or form) | Per cohort |
| `biz.paid_conversion` | Trial → paid or paid renewal | Per cohort |

Do **not** treat `session.start` / raw `page_view` as experiment success metrics.

---

## Experiment → metrics map (this week)

| Experiment | Primary | Kill uses |
|------------|---------|-----------|
| Core Value | Weekly open + click; prefer `acted` when instrumented | <40% open+click after 4 weeks |
| Onboarding | Completion rate; engagement lift completers vs not | <50% completion **or** no engagement lift |
| Feature Usage | `feature.used` distribution + return rate | Forecast/Runway not in top usage / low return |

---

## Week-1 logging (zero infra)

Until events ship in code:

1. Create a sheet tab per experiment (or comment weekly on the GitHub issue).
2. Columns: `week`, `tenant`, `delivered`, `opened`, `clicked`, `acted`, `notes`
3. When Build lands instrumentation, keep the same event IDs and stop dual-entry.

**Owner:** whoever moves the card into Measure posts the first weekly numbers within 7 days or the card goes back to Build.

---

## Privacy / tenancy

- Always include `tenant_id` (or hash).
- No email bodies, account numbers, or OAuth tokens in event props.
- Aggregate for Learn decisions; quote customers in issues only with permission / redaction.
