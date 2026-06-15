## What to build

Create the `Frame` component — the lowest-level layout primitive in Beast UI. A generic styled container that renders any HTML element via a polymorphic `as` prop (defaults to `<div>`).

Supports `padding`, `margin`, `display`, `position`, `overflow` props that map to CSS Module styles using design tokens. All standard HTML attributes are forwarded.

## Acceptance criteria

- [x] `<Frame>` renders a `<div>` by default
- [x] `as` prop changes the rendered element (`<Frame as="section">`)
- [x] `padding`, `margin` props accept token-scale values (1–12) or raw CSS values
- [x] All standard HTML div attributes are forwarded (className, id, style, data-*, aria-*)
- [x] Consumer `className` is merged with internal CSS Module classes, not replaced
- [x] CSS Module file uses only `--beast-*` design tokens for values
- [x] `ref` forwarding works correctly
- [x] Unit tests cover all props and element rendering

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
