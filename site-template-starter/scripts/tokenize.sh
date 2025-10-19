#!/usr/bin/env bash
set -euo pipefail

# Replace hard-coded values in repo with tokens to make the template portable.
# Run from repo root once on your original project before turning it into a template.

# Files to scan
FILES=$(git ls-files \
  'app.vue' \
  'nuxt.config.*' \
  'netlify.toml' \
  'robots.txt' \
  'site.config.*' \
  'assets/**/*.css' \
  'components/**/*.vue' \
  'pages/**/*.vue' \
  'data/**/*.ts' \
  2>/dev/null || true)

if [ -z "${FILES}" ]; then
  echo "No files found via git ls-files. Make sure you are in a git repo and files are tracked."
  exit 1
fi

ts=$(date +%Y%m%d-%H%M%S)

for f in ${FILES}; do
  cp "$f" "$f.bak-${ts}" 2>/dev/null || true
  # Phone, email, name placeholders
  sed -i '' -e 's/(763) 443-9119/{{PHONE_DISPLAY}}/g' "$f" || true
  sed -i '' -e 's/+1-763-443-9119/{{PHONE}}/g' "$f" || true
  sed -i '' -e 's/info@acadiapdr.com/{{EMAIL}}/g' "$f" || true
  sed -i '' -e 's/Acadia PDR/{{SITE_NAME}}/g' "$f" || true
  sed -i '' -e 's#https://www.acadiapdr.com#{{SITE_URL}}#g' "$f" || true

  # Address tokens
  sed -i '' -e 's/Lakeland/{{ADDRESS_CITY}}/g' "$f" || true
  sed -i '' -e 's/MN/{{ADDRESS_REGION}}/g' "$f" || true
  sed -i '' -e 's/55043/{{ADDRESS_POSTAL}}/g' "$f" || true

  # Colors / theme
  sed -i '' -e 's/#0f172a/{{PRIMARY_COLOR}}/g' "$f" || true
  sed -i '' -e 's/#1d4ed8/{{ACCENT_COLOR}}/g' "$f" || true
done

echo "Tokenization complete. Backups saved as *.bak-${ts}"
