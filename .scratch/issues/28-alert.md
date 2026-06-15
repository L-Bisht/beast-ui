## What to build

Create the `Alert` component — an inline feedback message for contextual information.

Props: `variant` (filled/outlined/soft), `severity` (info/success/warning/danger), `title` (optional bold heading), `icon` (ReactNode — default icon per severity, or custom), `onClose` (shows close button), `closable` (boolean).

## Acceptance criteria

- [x] `<Alert severity="danger">Something went wrong</Alert>` renders an alert with danger styling
- [x] Default icons rendered per severity (info=ℹ️, success=✓, warning=⚠, danger=✕)
- [x] `icon` prop overrides the default icon; `icon={false}` hides it
- [x] `title` renders a bold heading above the message body
- [x] `onClose` renders a close button that fires the callback
- [x] `variant` controls visual style (filled background, outline, soft/translucent)
- [x] `role="alert"` for danger/warning, `role="status"` for info/success
- [x] Unit tests cover all severity × variant combinations, close behavior, and ARIA roles

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
