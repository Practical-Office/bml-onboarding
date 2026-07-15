#!/usr/bin/env bash
# Install or repair the BML-onboarding Cursor profile.
# IMPORTANT: Fully quit Cursor first (Cmd+Q). Verify no Cursor processes remain.
set -euo pipefail

PROFILE_NAME="BML-onboarding"
PROFILE_LOCATION="7a4e2b91"
WORKSPACE_URI="file:///Users/richardsawyers/work/p-ai/bml-onboarding"
SOURCE_PROFILE="-1bc377cb"  # BookIQ-team

CURSOR_USER="$HOME/Library/Application Support/Cursor/User"
STORAGE_JSON="$CURSOR_USER/globalStorage/storage.json"
PROFILE_DIR="$CURSOR_USER/profiles/$PROFILE_LOCATION"
SOURCE_DIR="$CURSOR_USER/profiles/$SOURCE_PROFILE"

if pgrep -x "Cursor" >/dev/null 2>&1 || pgrep -f "Cursor.app" >/dev/null 2>&1; then
  echo "ERROR: Cursor is still running. Quit with Cmd+Q, then rerun:"
  echo "  bash scripts/install-cursor-profile.sh"
  exit 1
fi

if [[ ! -f "$STORAGE_JSON" ]]; then
  echo "ERROR: storage.json not found at $STORAGE_JSON"
  exit 1
fi

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "ERROR: Source profile BookIQ-team not found at $SOURCE_DIR"
  exit 1
fi

echo "==> Creating profile directory: $PROFILE_DIR"
mkdir -p "$PROFILE_DIR/globalStorage" "$PROFILE_DIR/snippets"
cp "$SOURCE_DIR/settings.json" "$PROFILE_DIR/settings.json"
if [[ -d "$SOURCE_DIR/snippets" ]]; then
  cp -R "$SOURCE_DIR/snippets/." "$PROFILE_DIR/snippets/" 2>/dev/null || true
fi

echo "==> Registering profile in storage.json"
python3 <<PY
import json
from pathlib import Path

storage_path = Path("$STORAGE_JSON")
data = json.loads(storage_path.read_text())

profiles = data.setdefault("userDataProfiles", [])
if not any(p.get("location") == "$PROFILE_LOCATION" for p in profiles):
    profiles.append({
        "location": "$PROFILE_LOCATION",
        "name": "$PROFILE_NAME",
        "useDefaultFlags": {
            "settings": False,
            "keybindings": True,
            "extensions": True,
            "tasks": True,
            "mcp": True,
            "snippets": False,
        },
    })
    print("    Added profile entry")
else:
    print("    Profile entry already present")

assoc = data.setdefault("profileAssociations", {})
workspaces = assoc.setdefault("workspaces", {})
workspaces["$WORKSPACE_URI"] = "$PROFILE_LOCATION"
print("    Associated workspace")

storage_path.write_text(json.dumps(data, indent=4) + "\n")
PY

echo ""
echo "Done. Open Cursor and either:"
echo "  1. File → Open Folder → /Users/richardsawyers/work/p-ai/bml-onboarding"
echo "  2. Profiles → BML-onboarding"
echo "  3. Cmd+Shift+P → 'Profiles: Switch Profile' → BML-onboarding"
