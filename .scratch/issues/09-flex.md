## What to build

Create the `Flex` component — a flex container with direction and gap. Lays out children in a single axis.

Props: `direction` (row/column/row-reverse/column-reverse), `gap` (token scale), `align` (align-items), `justify` (justify-content), `wrap` (flex-wrap). Renders a `<div>` with `display: flex` by default.

## Acceptance criteria

- [x] `<Flex>` renders a flex container with `display: flex`
- [x] `direction` prop sets `flex-direction` (defaults to `row`)
- [x] `gap` prop accepts token-scale values (1–12) mapping to `--beast-space-*`
- [x] `align` and `justify` props map to `align-items` and `justify-content`
- [x] `wrap` prop enables flex wrapping
- [x] Supports polymorphic `as` prop
- [x] `ref` forwarding works correctly
- [x] Unit tests cover all prop combinations

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
