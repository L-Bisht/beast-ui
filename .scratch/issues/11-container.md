## What to build

Create the `Container` component — a max-width centered content wrapper for page layouts.

Props: `maxWidth` (sm/md/lg/xl/full or custom value), `padding` (token scale, defaults to responsive horizontal padding). Centers itself with `margin: 0 auto`.

## Acceptance criteria

- [x] `<Container>` renders a centered `<div>` with `margin: 0 auto`
- [x] `maxWidth` prop maps to predefined breakpoint values (sm=640px, md=768px, lg=1024px, xl=1280px, full=100%)
- [x] Default horizontal padding prevents content from touching viewport edges
- [x] `maxWidth` accepts custom string/number values for escape hatch
- [x] Supports polymorphic `as` prop and ref forwarding
- [x] Unit tests verify max-width and centering behavior

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
