## What to build

Create the `Tabs` component — a tabbed interface with keyboard navigation. Uses React Aria's `useTabList` hook.

Props: `selectedKey`, `defaultSelectedKey`, `onSelectionChange`, `orientation` (horizontal/vertical), `variant` (underline/filled/outlined).

Sub-components: `Tabs.List` (container for tab triggers), `Tabs.Tab` (individual tab trigger), `Tabs.Panel` (content panel).

## Acceptance criteria

- [x] `<Tabs>` with `Tabs.List`, `Tabs.Tab`, and `Tabs.Panel` renders a working tabbed interface
- [x] Controlled and uncontrolled selection modes work
- [x] Arrow keys navigate between tabs (left/right for horizontal, up/down for vertical)
- [x] Home/End jump to first/last tab
- [x] `role="tablist"`, `role="tab"`, `role="tabpanel"` with correct `aria-selected`, `aria-controls`, `aria-labelledby`
- [x] `variant` controls visual style of the tab triggers
- [x] Disabled tabs are skipped during keyboard navigation
- [x] Only the active panel is rendered (or all panels rendered but inactive ones hidden)
- [x] Animated underline/indicator on the active tab
- [x] Unit tests cover selection, keyboard navigation, ARIA, and disabled tabs

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
