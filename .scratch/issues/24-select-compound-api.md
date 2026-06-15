## What to build

Extend the Select component with a **compound component API** for full structural control. Expose sub-components on the `Select` namespace:

- `Select.Root` — context provider, manages open/close and selection state
- `Select.Trigger` — the clickable trigger element
- `Select.Value` — displays the selected value or placeholder
- `Select.Content` — the dropdown container (portal)
- `Select.Item` — individual option (accepts children for custom rendering)
- `Select.Group` — groups options with a label
- `Select.Separator` — visual divider between groups

The compound API shares the same React Aria foundation as the props API.

## Acceptance criteria

- [x] `<Select.Root>` + sub-components render a fully functional select
- [x] `<Select.Item>` accepts arbitrary children for custom option rendering (icons, descriptions, etc.)
- [x] `<Select.Group label="Group">` wraps items with a group heading
- [x] `<Select.Separator />` renders a divider between groups
- [x] All a11y behavior from the props API is preserved (keyboard nav, ARIA attributes)
- [x] Controlled and uncontrolled modes work via `Select.Root` props
- [x] TypeScript types enforce valid children (only Select.* components inside Select.Root)
- [x] Unit tests cover compound API usage, custom item rendering, and groups

## Blocked by

- Issue #23 — Select props API
