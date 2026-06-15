## What to build

Create the `Skeleton` component — placeholder shapes that mimic content layout while loading.

Props: `variant` (text/circular/rectangular), `width`, `height`, `lines` (number — for text variant, renders multiple lines with the last one shorter), `animation` (pulse/wave/none).

## Acceptance criteria

- [x] `<Skeleton variant="text" />` renders a text-height rectangle
- [x] `<Skeleton variant="circular" width={40} height={40} />` renders a circle (for avatar placeholders)
- [x] `<Skeleton variant="rectangular" height={200} />` renders a rectangle (for image placeholders)
- [x] `lines={3}` renders 3 text skeletons with the last one at ~60% width
- [x] `animation="pulse"` — CSS opacity pulse animation (default)
- [x] `animation="wave"` — CSS shimmer/wave animation
- [x] `animation="none"` — static, no animation
- [x] `aria-hidden="true"` since skeletons are decorative
- [x] Unit tests cover all variants and animation modes

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
