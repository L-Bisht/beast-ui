## What to build

Create the `Drawer` component — a panel that slides in from any edge. Uses React Aria for focus trapping.

Props: `open`, `onClose`, `anchor` (left/right/top/bottom), `size` (sm/md/lg or custom width/height), `closeOnOverlayClick`, `closeOnEscape`, `title`.

## Acceptance criteria

- [x] `<Drawer open={true} anchor="left">` slides in from the left edge
- [x] All four anchors (left/right/top/bottom) work with correct slide animation direction
- [x] Focus trap active when open
- [x] Escape closes, overlay click closes (configurable)
- [x] `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- [x] Body scroll locked when open
- [x] `size` controls width (left/right anchors) or height (top/bottom anchors)
- [x] Rendered in a portal
- [x] Smooth CSS slide + fade animation
- [x] Unit tests cover all anchors, focus trap, close behaviors, and ARIA

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
