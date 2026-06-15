## What to build

Create the `Card` component — a high-level content container built on Surface.

Props: `variant` (elevated/outlined), `padding` (token scale or none), `clickable` (adds hover styles, cursor pointer), `header` (ReactNode), `footer` (ReactNode), `media` (image src — renders a full-width image at top).

Card should use Surface internally for the base elevation/background.

## Acceptance criteria

- [x] `<Card>` renders a Surface with default elevation and padding
- [x] `variant="outlined"` uses border instead of shadow
- [x] `clickable` adds hover elevation change and cursor pointer
- [x] `header` renders a top section with padding
- [x] `footer` renders a bottom section with top border
- [x] `media` renders a full-bleed image at the top of the card
- [x] Card content (children) renders in the body area with padding
- [x] Unit tests cover variants, clickable state, and content slots

## Blocked by

- Issue #25 — Surface component
