## What to build

Create the `Spinner` component — a circular loading indicator.

Props: `size` (sm/md/lg or number for custom), `color` (primary/on-surface/inherit), `label` (visually hidden accessible label, defaults to "Loading").

Uses CSS animation (not JS) for the spinning motion.

## Acceptance criteria

- [x] `<Spinner />` renders a spinning circular indicator
- [x] `size` controls dimensions (sm=16px, md=24px, lg=40px, or custom number)
- [x] `color` maps to design tokens; `inherit` uses current text color
- [x] Visually hidden `<span>` with `label` text for screen readers (`role="status"`)
- [x] Pure CSS `@keyframes` animation (no JS animation library)
- [x] Unit tests verify ARIA label and size rendering

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
