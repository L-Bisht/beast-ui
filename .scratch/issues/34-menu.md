## What to build

Create the `Menu` component — a dropdown menu with keyboard navigation. Uses React Aria's `useMenu` and `useMenuItem` hooks.

Props for Menu: `trigger` (ReactNode), `open`, `onOpenChange`, `placement` (top/bottom/left/right). Sub-components: `Menu.Item` (label, icon, shortcut, disabled, onAction), `Menu.Group` (label), `Menu.Separator`.

## Acceptance criteria

- [x] Menu opens on trigger click and closes on outside click or Escape
- [x] Arrow keys navigate between items, wrapping at boundaries
- [x] Enter/Space activates the focused item
- [x] Type-ahead: typing characters focuses matching items
- [x] `Menu.Item` supports `icon`, `shortcut` (visual hint text), `disabled`, and `onAction`
- [x] `Menu.Group` renders items under a label heading
- [x] `Menu.Separator` renders a divider
- [x] `role="menu"`, `role="menuitem"`, `aria-disabled` on disabled items
- [x] Rendered in a portal with correct positioning relative to trigger
- [x] Focus returns to trigger on close
- [x] Unit tests cover keyboard navigation, type-ahead, disabled items, and ARIA

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
