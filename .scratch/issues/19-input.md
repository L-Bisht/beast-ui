## What to build

Create the `Input` component — a text input field with integrated label, helper text, and error state.

Props: `label`, `helperText`, `error` (string — replaces helperText when present), `size` (sm/md/lg), `variant` (outlined/filled), `startAdornment`/`endAdornment` (ReactNode for icons/buttons inside the field), `fullWidth`, `disabled`, `required`, plus all native `<input>` attributes.

Uses `useId()` (React 18+) for wiring `htmlFor`, `aria-describedby`, and `aria-errormessage`.

## Acceptance criteria

- [x] `<Input label="Email" />` renders a label + input with `htmlFor`/`id` linked via `useId()`
- [x] `helperText` renders below the input linked via `aria-describedby`
- [x] `error="Invalid"` replaces helper text, applies error color, sets `aria-invalid="true"` and `aria-errormessage`
- [x] `variant` controls visual style (outlined border vs filled background)
- [x] `startAdornment`/`endAdornment` render inside the input container
- [x] `size` controls input height and font size
- [x] `disabled` dims appearance and prevents interaction
- [x] `required` shows a required indicator on the label
- [x] All native input props (type, placeholder, onChange, value, etc.) are forwarded
- [x] Focus states use `--beast-color-primary` with a visible ring/border change
- [x] Ref forwarding to the underlying `<input>` element
- [x] Unit tests cover label wiring, error states, adornments, and ARIA attributes

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
