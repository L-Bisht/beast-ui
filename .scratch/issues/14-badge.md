## What to build

Create the `Badge` component — a small overlay indicator that displays a count or dot on its child element (e.g., notification count on an icon).

Props: `content` (number or string), `variant` (dot/standard), `color` (primary/danger/warning/success), `max` (caps the displayed number, e.g., `max={99}` shows "99+"), `invisible` (hides the badge), `position` (top-right/top-left/bottom-right/bottom-left).

## Acceptance criteria

- [x] `<Badge content={5}><Icon /></Badge>` renders the child with a badge overlay showing "5"
- [x] `variant="dot"` renders a small dot with no text
- [x] `max` prop caps display (content=150, max=99 shows "99+")
- [x] `invisible` prop hides the badge while keeping the child visible
- [x] `position` prop controls badge anchor point (defaults to top-right)
- [x] `color` prop maps to `--beast-color-*` semantic tokens
- [x] Badge uses absolute positioning relative to a container wrapper
- [x] Unit tests cover count, dot, max, invisible, and position variants

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
