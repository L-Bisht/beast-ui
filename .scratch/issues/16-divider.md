## What to build

Create the `Divider` component — a visual separator between content sections.

Props: `orientation` (horizontal/vertical), `variant` (solid/dashed), `color` (token name), `spacing` (token scale — adds margin on both sides).

## Acceptance criteria

- [x] `<Divider />` renders a horizontal `<hr>` by default
- [x] `orientation="vertical"` renders a vertical divider (useful inside Flex)
- [x] `variant` controls border style (solid/dashed)
- [x] `color` prop overrides the default `--beast-color-border`
- [x] `spacing` adds margin using `--beast-space-*` tokens
- [x] Correct `role="separator"` and `aria-orientation` attributes
- [x] Unit tests cover both orientations and variants

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
