## What to build

Create the `Switch` component — a toggle switch for binary on/off states.

Props: `checked`, `defaultChecked`, `onChange`, `label` (string or ReactNode), `disabled`, `size` (sm/md/lg), `color` (primary/success).

Uses `role="switch"` and `aria-checked`. Manual ARIA.

## Acceptance criteria

- [x] `<Switch label="Dark mode" />` renders a toggle switch with label
- [x] Controlled and uncontrolled modes work
- [x] `role="switch"` and `aria-checked` set correctly
- [x] Keyboard: Space toggles the switch
- [x] Smooth CSS transition for the thumb sliding between positions
- [x] `disabled` dims the switch and prevents interaction
- [x] `size` controls switch dimensions
- [x] `color` changes the "on" state track color
- [x] Focus ring on keyboard focus only
- [x] Unit tests cover toggle, disabled, keyboard, and ARIA attributes

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
