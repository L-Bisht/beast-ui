## What to build

Create the `Breadcrumb` component — navigation showing the current page's location in a hierarchy.

Props: `separator` (ReactNode, defaults to "/"), `maxItems` (collapses middle items with "..." when exceeded).

Sub-component: `Breadcrumb.Item` — accepts `href` (renders as link) or no href (renders as text for current page).

## Acceptance criteria

- [x] `<Breadcrumb><Breadcrumb.Item href="/">Home</Breadcrumb.Item><Breadcrumb.Item>Current</Breadcrumb.Item></Breadcrumb>` renders breadcrumb trail
- [x] `separator` prop customizes the divider between items
- [x] Last item renders as text (current page), not a link
- [x] `maxItems` collapses middle items with an ellipsis button that expands on click
- [x] `<nav aria-label="Breadcrumb">` wrapper with `<ol>` list structure
- [x] Current page item has `aria-current="page"`
- [x] Unit tests cover rendering, separator, collapse, and ARIA

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
