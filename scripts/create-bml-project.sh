#!/usr/bin/env bash
# Create BML Experiments GitHub Project + attach live experiment issues.
# Requires project scopes:
#   gh auth refresh -h github.com -s project,read:project
set -euo pipefail

OWNER="Book-IQ"
TITLE="Build Loop Experiments"
REPO="Book-IQ/bookiqv1-rc"
# Live BookIQ product experiment issues (stay on bookiqv1-rc)
ISSUES=(1083 1084 1085)

echo "==> Creating project: $TITLE"
CREATE_JSON=$(gh project create --owner "$OWNER" --title "$TITLE" --format json)
PROJECT_NUMBER=$(echo "$CREATE_JSON" | jq -r .number)
PROJECT_URL=$(echo "$CREATE_JSON" | jq -r .url)
PROJECT_ID=$(gh project view "$PROJECT_NUMBER" --owner "$OWNER" --format json | jq -r .id)
echo "    #$PROJECT_NUMBER  $PROJECT_URL"
echo "    id=$PROJECT_ID"

echo "==> Creating Stage field (Backlog | Build | Measure | Learn | Done)"
# Status options are not editable via API; Stage drives the board instead.
gh project field-create "$PROJECT_NUMBER" --owner "$OWNER" \
  --name "Stage" \
  --data-type "SINGLE_SELECT" \
  --single-select-options "Backlog,Build,Measure,Learn,Done" \
  >/dev/null

FIELD_JSON=$(gh project field-list "$PROJECT_NUMBER" --owner "$OWNER" --format json)
STAGE_FIELD_ID=$(echo "$FIELD_JSON" | jq -r '.fields[] | select(.name=="Stage") | .id')
BACKLOG_OPTION_ID=$(echo "$FIELD_JSON" | jq -r '.fields[] | select(.name=="Stage") | .options[] | select(.name=="Backlog") | .id')
echo "    Stage field=$STAGE_FIELD_ID  Backlog option=$BACKLOG_OPTION_ID"

echo "==> Adding experiment issues → Stage=Backlog"
for N in "${ISSUES[@]}"; do
  ISSUE_URL="https://github.com/${REPO}/issues/${N}"
  ITEM_ID=$(gh project item-add "$PROJECT_NUMBER" --owner "$OWNER" --url "$ISSUE_URL" --format json | jq -r .id)
  gh project item-edit \
    --project-id "$PROJECT_ID" \
    --id "$ITEM_ID" \
    --field-id "$STAGE_FIELD_ID" \
    --single-select-option-id "$BACKLOG_OPTION_ID" \
    >/dev/null
  echo "    + #$N"
done

cat <<EOF

Done: $PROJECT_URL

One UI click (required for Kanban columns):
1. Open the project → … → Settings (or Board view settings)
2. Board → Group by → Stage
   (or rename built-in Status options to match Stage names)

Filter tip: show issues with label \`experiment\` only.

Run from: Practical-Office/bml-onboarding/scripts/create-bml-project.sh
Live board stays on Book-IQ; course docs live in this repo.
EOF
