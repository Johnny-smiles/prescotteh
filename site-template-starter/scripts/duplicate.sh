#!/usr/bin/env bash
set -euo pipefail
# Duplicates the current project into a client-specific directory
# Usage:
#   bash site-template-starter/scripts/duplicate.sh --out ./client-foo --intake site-template-starter/intake/client.yaml --init-git

OUT=""
INTAKE=""
INIT_GIT="false"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --out) OUT="$2"; shift 2 ;;
    --intake) INTAKE="$2"; shift 2 ;;
    --init-git) INIT_GIT="true"; shift ;;
    *) echo "Unknown arg: $1" >&2; exit 1;;
  esac
done

if [[ -z "$OUT" || -z "$INTAKE" ]]; then
  echo "Usage: $0 --out ./client-<slug> --intake site-template-starter/intake/client.yaml [--init-git]"
  exit 1
fi

if [[ -d "$OUT" ]]; then
  echo "⚠️  $OUT already exists. Overwrite? (y/N)"
  read confirm
  [[ "$confirm" =~ ^[Yy]$ ]] || exit 1
  rm -rf "$OUT"
fi

echo "📦 Copying template → $OUT"
rsync -a --progress ./ "$OUT" \
  --exclude ".git" \
  --exclude "node_modules" \
  --exclude ".output" \
  --exclude ".nuxt" \
  --exclude "dist" \
  --exclude ".DS_Store"

cd "$OUT"

echo "⚙️ Running setup..."
bash site-template-starter/scripts/setup.sh "$INTAKE"

if [[ "$INIT_GIT" == "true" ]]; then
  git init -q
  git add .
  git commit -m "Initial commit for $(basename "$OUT")" -q
  echo "📘 Initialized git repository."
fi

echo "✅ Duplicate complete: $OUT"
echo "Next: cd $OUT && bash site-template-starter/scripts/codex-start.sh"
