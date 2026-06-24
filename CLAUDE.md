# CLAUDE.md

## Shortcuts
- "fe" = invoke the `frontend-design` skill

## Rules
- **ALWAYS consult fe before making any UI/layout changes** — do not implement visual changes without fe sign-off first

## Project
- Next.js app with next-intl for translations (en + de)
- All copy lives in `messages/en.json` and `messages/de.json`
- Hardcoded counts in components (e.g. `teamCount`, `clientsCount`) must be updated manually when adding/removing items in JSON
- Brand: dark/black background (`bg-brand-black`), white text, minimal aesthetic
