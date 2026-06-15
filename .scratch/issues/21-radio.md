## What to build

Create the `Radio` component — a radio input for single-selection within a group.

Provide both `Radio` (individual) and `RadioGroup` (container that manages selection state). Props for Radio: `label`, `value`, `disabled`. Props for RadioGroup: `name`, `value`, `defaultValue`, `onChange`, `orientation` (horizontal/vertical), `error`, `label`.

Uses `useId()` for label wiring. Manual ARIA — `role="radiogroup"`, `aria-labelledby`.

## Acceptance criteria

- [x] `<RadioGroup><Radio value="a" label="Option A" /><Radio value="b" label="Option B" /></RadioGroup>` renders a radio group
- [x] Controlled and uncontrolled selection modes work
- [x] Arrow keys navigate between radio options (up/down for vertical, left/right for horizontal)
- [x] `disabled` on RadioGroup disables all children; on Radio disables only that option
- [x] `error` adds error styling to the group with `aria-invalid`
- [x] Custom styled radio (hidden native input with CSS visual)
- [x] Focus ring on keyboard focus only
- [x] `orientation` controls layout direction
- [x] Unit tests cover selection, keyboard navigation, disabled, and error states

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
