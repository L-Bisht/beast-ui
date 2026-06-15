## What to build

Create the `Surface` component — an elevated container with background and shadow. The base primitive for cards and panels.

Props: `elevation` (0/1/2/3 — maps to shadow tokens), `radius` (sm/md/lg), `padding` (token scale), `border` (boolean — adds subtle border), `as` (polymorphic).

## Acceptance criteria

- [x] `<Surface>` renders a `<div>` with `--beast-color-surface` background
- [x] `elevation` maps to `--beast-shadow-*` tokens (0=no shadow)
- [x] `radius` maps to `--beast-radius-*` tokens
- [x] `padding` maps to `--beast-space-*` tokens
- [x] `border` adds a `1px solid var(--beast-color-border)` border
- [x] Works correctly in both light and dark modes
- [x] Polymorphic `as` prop and ref forwarding
- [x] Unit tests cover elevation, radius, and border variants

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
