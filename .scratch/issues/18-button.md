## What to build

Create the `Button` component — the primary interactive element. Merges the traditional "icon button" concept via an `icon` prop.

Props: `variant` (filled/outlined/soft/ghost), `color` (primary/danger/warning/success), `size` (sm/md/lg), `icon` (ReactNode — renders icon-only when no children, icon+label when children present), `iconPosition` (start/end), `loading` (shows Spinner and disables interaction), `disabled`, `fullWidth`, `as` (polymorphic — button/a).

## Acceptance criteria

- [x] `<Button>Click</Button>` renders a `<button>` with default filled/primary styles
- [x] `variant` × `color` combinations produce correct visual styles using design tokens
- [x] `size` controls padding, font-size, min-height
- [x] `<Button icon={<Search />} />` renders icon-only with equal padding (square)
- [x] `<Button icon={<Search />}>Search</Button>` renders icon + label
- [x] `iconPosition="end"` places icon after text
- [x] `loading` shows a Spinner, sets `aria-busy="true"`, disables clicks
- [x] `disabled` sets `aria-disabled`, removes from tab order, dims appearance
- [x] `as="a"` renders an anchor tag with button styling
- [x] `fullWidth` stretches to container width
- [x] Bold & Expressive hover/active transitions (scale, shadow changes)
- [x] Ref forwarding works correctly
- [x] Unit tests cover all variant/color/size combinations, icon modes, loading, and disabled states

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
