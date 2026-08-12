#!/bin/sh
# Render tools/og-card.html to site/assets/og-card.png at exactly 1200x630.
# Uses headless Chrome, which is already on the machine — no npm, no build step.
set -e

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/site/assets/og-card.png"

[ -x "$CHROME" ] || { echo "Chrome not found at $CHROME" >&2; exit 1; }

"$CHROME" \
  --headless \
  --disable-gpu \
  --hide-scrollbars \
  --force-device-scale-factor=1 \
  --window-size=1200,630 \
  --screenshot="$OUT" \
  --allow-file-access-from-files \
  "file://$ROOT/tools/og-card.html" >/dev/null 2>&1

sips -g pixelWidth -g pixelHeight "$OUT"
ls -lh "$OUT"
