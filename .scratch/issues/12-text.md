## What to build

Create the `Text` component — renders styled text with semantic HTML elements.

Props: `as` (h1–h6, p, span, label, etc.), `size` (xs–2xl), `weight` (normal/medium/semibold/bold), `color` (semantic token names: primary, danger, muted, on-surface), `align` (left/center/right), `truncate` (boolean — single-line ellipsis).

Default element is `<p>`. Sizes map to `--beast-font-size-*` tokens.

## Acceptance criteria

- [x] `<Text>` renders a `<p>` by default
- [x] `<Text as="h1">` renders an `<h1>` element
- [x] `size` prop maps to `--beast-font-size-*` tokens with matching line-height
- [x] `weight` prop maps to `--beast-font-weight-*` tokens
- [x] `color` prop maps to `--beast-color-*` semantic tokens
- [x] `truncate` adds `text-overflow: ellipsis`, `overflow: hidden`, `white-space: nowrap`
- [x] `align` prop sets `text-align`
- [x] Ref forwarding works correctly
- [x] Unit tests cover all prop variants

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
