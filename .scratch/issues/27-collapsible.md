## What to build

Create the `Collapsible` component — a single expand/collapse unit. Consumers compose multiples for accordion behavior.

Props: `open`, `defaultOpen`, `onOpenChange`, `trigger` (ReactNode or render function), `disabled`.

Animate height smoothly on open/close using CSS transitions (not JS animation libraries).

## Acceptance criteria

- [x] `<Collapsible trigger={<Button>Toggle</Button>}>Content</Collapsible>` shows/hides content
- [x] Controlled (`open` + `onOpenChange`) and uncontrolled (`defaultOpen`) modes work
- [x] Smooth CSS height animation on expand/collapse (animate from 0 to auto height)
- [x] `disabled` prevents toggle and dims the trigger
- [x] `aria-expanded` on trigger, `aria-controls` linking to content
- [x] Content is not in DOM when collapsed (or `display: none` for performance)
- [x] Keyboard: Enter/Space on trigger toggles
- [x] Unit tests cover expand/collapse, controlled mode, disabled state, and ARIA

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
