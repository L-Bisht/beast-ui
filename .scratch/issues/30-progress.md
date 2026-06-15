## What to build

Create the `Progress` component — a bar indicating completion or progress.

Props: `value` (0–100, or undefined for indeterminate), `max` (default 100), `size` (sm/md/lg — controls bar height), `color` (primary/success/warning/danger), `label` (accessible label), `showValue` (boolean — renders percentage text).

## Acceptance criteria

- [x] `<Progress value={60} />` renders a progress bar at 60%
- [x] `value={undefined}` renders an indeterminate animation (sliding or pulsing bar)
- [x] `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` set correctly
- [x] `aria-label` set from `label` prop
- [x] `size` controls bar height
- [x] `color` maps to design tokens for the fill color
- [x] `showValue` renders the percentage as text next to the bar
- [x] Smooth CSS transition when `value` changes
- [x] Unit tests cover determinate, indeterminate, and ARIA attributes

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
