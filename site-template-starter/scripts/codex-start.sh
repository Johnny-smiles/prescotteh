#!/usr/bin/env bash
set -euo pipefail

# ─────────────────────────────────────────────
# Parse flags
# ─────────────────────────────────────────────
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
  echo "Usage: $0 --slug <folder-slug> --intake <path/to/client.yaml>"
  exit 1
fi

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

cd "$OUT_DIR"

# ─────────────────────────────────────────────
# Step 2 — Switch to Node 20
# ─────────────────────────────────────────────
echo ""
echo "🔄 Switching to Node 20..."
if command -v nvm >/dev/null 2>&1; then
  nvm use 20
  echo "✅ Using Node $(node --version)"
else
  echo "⚠️  nvm not found - using current Node $(node --version)"
  echo "   💡 Install nvm and Node 20 for best compatibility"
fi

# ─────────────────────────────────────────────
# Step 3 — Skip dependency installation (Codex will handle content generation)
# ─────────────────────────────────────────────
echo ""
echo "ℹ️  Skipping dependency installation - Codex will generate content without build verification"

# ─────────────────────────────────────────────
# Step 4 — Prepare Codex interactive instruction
# ─────────────────────────────────────────────
INSTRUCTION=$(
  cat <<'EOF'
Use site-template-starter/codex.md as the runbook and site-template-starter/intake/client.yaml as intake.
Run site-template-starter/scripts/setup.sh using intake values - this applies client branding (colors, fonts) to tailwind.config.js and site.config.ts.
Verify branding was applied: check tailwind.config.js has client colors (brand-primary, brand-accent, brand-dark, brand-light) and fonts.
Apply creative styling variations: adjust button styles, spacing, border radius, or component layouts to make this site visually distinct.
Pick a hero and services layout from site-template-starter/catalog/sections.json that differs from previous builds.
Generate Home + 3 Service pages from prompts/home.md and prompts/service.md, plus FAQs from prompts/faq.md.
Add LocalBusiness JSON-LD on Home and Service JSON-LD on each service page.
Update nav/footer links, ensure public/logo.png is referenced, then commit changes.
EOF
)

# ─────────────────────────────────────────────
# Step 5 — Launch Codex CLI interactively
# ─────────────────────────────────────────────
echo ""
echo "🤖 Launching Codex CLI (interactive)..."
echo "────────────────────────────────────────────"
echo "Codex will now:"
echo "  📖 Read runbook and intake"
echo "  🎨 Apply client branding (colors, fonts)"
echo "  📝 Generate content pages"
echo "  🔗 Update navigation and links"
echo "  💾 Commit changes"
echo ""
echo "Watch for progress updates below..."
echo "────────────────────────────────────────────"
sleep 2

# Run Codex with verbose output and unbuffered output
echo "Starting Codex generation..."
codex --verbose <<< "/run \"$INSTRUCTION\"" 2>&1 | tee codex-output.log

# ─────────────────────────────────────────────
# Step 6 — Wrap up
# ─────────────────────────────────────────────
echo ""
echo "✅ Codex site generation complete!"
echo "────────────────────────────────────────────"
echo "Next steps:"
echo "  cd $OUT_DIR"
echo "  npm install"
echo "  npm run watch"
echo ""
echo "To re-open Codex later:"
echo "  cd $OUT_DIR"
echo "  codex"
echo "  /run \"$INSTRUCTION\""
echo "────────────────────────────────────────────"
