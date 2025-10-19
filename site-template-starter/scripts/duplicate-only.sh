#!/usr/bin/env bash
set -euo pipefail

# Duplicate template into a separate directory (not inside template)
# Usage: bash site-template-starter/scripts/duplicate-only.sh --slug prescotteh --intake site-template-starter/intake/client.yaml

SLUG=""
INTAKE=""

while [[ "$#" -gt 0 ]]; do
  case "$1" in
    --slug) SLUG="$2"; shift 2 ;;
    --intake) INTAKE="$2"; shift 2 ;;
    *) echo "Unknown parameter: $1" && exit 1 ;;
  esac
done

if [[ -z "$SLUG" || -z "$INTAKE" ]]; then
  echo "Usage: $0 --slug <slug> --intake <path/to/client.yaml>"
  exit 1
fi

# Create output directory outside the template
OUT_DIR="../client-$SLUG"
echo ""
echo "🔁 Duplicating template → $OUT_DIR"

# ─────────────────────────────────────────────
# Step 1 — Duplicate template
# ─────────────────────────────────────────────
bash site-template-starter/scripts/duplicate.sh \
  --out "$OUT_DIR" \
  --intake "$INTAKE" \
  --init-git

echo ""
echo "✅ Duplication complete!"
echo "────────────────────────────────────────────"
echo "Next steps:"
echo "  cd ../client-$SLUG"
echo "  codex"
echo "  /run \"[your codex instruction]\""
echo "────────────────────────────────────────────"
