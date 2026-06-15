## What to build

Create the `Toast` component and a `ToastProvider` system — brief auto-dismissing notifications at a screen edge.

`ToastProvider` wraps the app and manages a toast queue. A `useToast()` hook returns `toast()` / `toast.success()` / `toast.danger()` / `toast.warning()` functions. Toasts stack at a configurable position.

Toast props: `message`, `severity` (info/success/warning/danger), `duration` (ms, default 5000), `action` (ReactNode — optional action button), `closable`.

## Acceptance criteria

- [x] `<ToastProvider position="bottom-right">` renders a toast container
- [x] `toast("Saved!")` from the hook shows a toast that auto-dismisses after duration
- [x] `toast.success()`, `toast.danger()`, `toast.warning()` set severity
- [x] Multiple toasts stack vertically with animation
- [x] `closable` shows a close button for manual dismissal
- [x] `action` renders an action button inside the toast (e.g., "Undo")
- [x] `role="status"` and `aria-live="polite"` for screen reader announcements
- [x] Smooth enter/exit CSS animations (slide in, fade out)
- [x] Toasts pause auto-dismiss on hover
- [x] Unit tests cover show, auto-dismiss, manual close, stacking, and ARIA

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
