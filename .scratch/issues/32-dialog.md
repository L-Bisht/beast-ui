## What to build

Create the `Dialog` component — a modal overlay for focused interactions. Uses React Aria's `useDialog` and `useModal` hooks for focus trapping, Escape-to-close, and aria attributes.

Props: `open`, `onClose`, `title`, `description`, `size` (sm/md/lg/fullscreen), `closeOnOverlayClick` (boolean, default true), `closeOnEscape` (boolean, default true).

## Acceptance criteria

- [x] `<Dialog open={true} onClose={...} title="Confirm">` renders a modal overlay
- [x] Focus is trapped inside the dialog when open
- [x] First focusable element receives focus on open
- [x] Focus returns to the trigger element on close
- [x] Escape key closes the dialog (when `closeOnEscape` is true)
- [x] Clicking the backdrop/overlay closes the dialog (when `closeOnOverlayClick` is true)
- [x] `role="dialog"`, `aria-modal="true"`, `aria-labelledby` (from title), `aria-describedby` (from description)
- [x] Body scroll is locked when dialog is open
- [x] `size` controls max-width of the dialog panel
- [x] Rendered in a portal
- [x] Smooth open/close CSS animation (fade in + scale up)
- [x] Unit tests cover focus trap, Escape, overlay click, and ARIA attributes

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
