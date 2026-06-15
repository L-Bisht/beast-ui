## What to build

Create the `Checkbox` component — a togglable check input with label.

Props: `label` (string or ReactNode), `checked`, `defaultChecked`, `indeterminate`, `onChange`, `disabled`, `size` (sm/md), `color` (primary/danger/success), `error` (string).

Uses `useId()` for label wiring. Manual ARIA — no React Aria needed.

## Acceptance criteria

- [x] `<Checkbox label="Agree" />` renders a styled checkbox with label
- [x] Controlled (`checked` + `onChange`) and uncontrolled (`defaultChecked`) modes work
- [x] `indeterminate` shows a dash/minus state via the DOM property
- [x] `disabled` dims the checkbox and prevents interaction
- [x] `error` adds error styling and `aria-invalid`
- [x] Custom styled checkbox (hidden native input with CSS visual replacement)
- [x] Keyboard accessible — Space toggles the checkbox
- [x] Focus ring visible on keyboard focus (not on click)
- [x] Unit tests cover checked, unchecked, indeterminate, disabled, and error states

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
