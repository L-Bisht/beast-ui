## What to build

Create the `Tooltip` component — shows contextual text on hover/focus of a trigger element.

Props: `content` (string or ReactNode), `position` (top/bottom/left/right), `delay` (ms before showing), `arrow` (boolean). Uses `aria-describedby` for accessibility. No React Aria needed — this is manual a11y (simple enough).

## Acceptance criteria

- [x] `<Tooltip content="Help text"><Button>Hover me</Button></Tooltip>` shows tooltip on hover/focus
- [x] Tooltip appears after `delay` ms (default 200ms)
- [x] Tooltip hides on mouse leave and blur
- [x] `position` prop controls placement (top/bottom/left/right)
- [x] `arrow` prop shows/hides a directional arrow
- [x] `aria-describedby` links trigger to tooltip content for screen readers
- [x] Tooltip is rendered in a portal to avoid overflow clipping
- [x] Tooltip repositions if it would overflow the viewport
- [x] Unit tests cover show/hide behavior, keyboard focus trigger, and ARIA attributes

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
