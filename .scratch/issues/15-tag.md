## What to build

Create the `Tag` component — a compact element for labels, filters, or selections.

Props: `variant` (filled/outlined/soft), `color` (primary/danger/warning/success/info), `size` (sm/md), `onDelete` (shows a remove icon and fires callback), `icon` (leading icon), `clickable` (boolean — adds hover/focus styles).

## Acceptance criteria

- [x] `<Tag>Label</Tag>` renders a compact labeled element
- [x] `variant` prop controls visual style (filled background, outline border, soft/translucent)
- [x] `color` prop maps to semantic tokens for each variant
- [x] `onDelete` renders a close/remove icon and fires the callback on click
- [x] `icon` prop renders a leading icon inside the tag
- [x] `clickable` adds interactive hover/focus styles and `role="button"` with keyboard support
- [x] `size` prop controls padding and font size
- [x] Unit tests cover all variant/color combinations and delete interaction

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
