## What to build

Create the `Select` component's **props-based API** — the simple, high-level interface for single-value selection.

Props: `label`, `options` (array of `{ value: string, label: string, disabled?: boolean }`), `value`, `defaultValue`, `onChange`, `placeholder`, `helperText`, `error`, `size` (sm/md/lg), `disabled`, `required`, `fullWidth`.

Uses React Aria's `useSelect` hook for accessibility (aria-expanded, aria-activedescendant, keyboard navigation, screen reader announcements). Uses `useId()` for label wiring.

## Acceptance criteria

- [x] `<Select label="Country" options={countries} />` renders a trigger showing selected value + dropdown
- [x] Controlled and uncontrolled modes work
- [x] Clicking the trigger opens a dropdown listbox
- [x] Keyboard: Enter/Space opens, arrow keys navigate, Enter selects, Escape closes
- [x] `placeholder` shows when no value is selected
- [x] `error` applies error styling and ARIA attributes
- [x] `disabled` prevents interaction
- [x] Options with `disabled: true` are non-selectable but visible
- [x] React Aria provides `aria-expanded`, `aria-activedescendant`, `role="listbox"`, `role="option"`
- [x] Dropdown renders in a portal to avoid overflow clipping
- [x] Focus returns to trigger after selection
- [x] Unit tests cover selection, keyboard navigation, disabled options, and ARIA

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
