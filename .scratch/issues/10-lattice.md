## What to build

Create the `Lattice` component — a CSS grid-based layout component for two-dimensional arrangements.

Props: `columns` (number or template string), `rows` (template string), `gap` (token scale), `columnGap`, `rowGap`, `areas` (grid-template-areas string). Renders a `<div>` with `display: grid`.

## Acceptance criteria

- [x] `<Lattice>` renders a grid container with `display: grid`
- [x] `columns={3}` sets `grid-template-columns: repeat(3, 1fr)`
- [x] `columns="1fr 2fr 1fr"` sets a custom template string
- [x] `gap` prop maps to `--beast-space-*` tokens
- [x] `areas` prop sets `grid-template-areas`
- [x] `columnGap` and `rowGap` allow independent axis gaps
- [x] Supports polymorphic `as` prop and ref forwarding
- [x] Unit tests cover numeric columns, template strings, and areas

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
