---
labels: ["ready-for-agent"]
---

## Parent

[docs/issues/06-glassmorphism-refactor.md](file:///Users/bisht/Desktop/Dev/React/beast-ui/docs/issues/06-glassmorphism-refactor.md)

## What to build

Refactor `Button`, `Tag`, `Badge`, and `Avatar` components to use `variant="glass"` instead of `glass?: boolean`. Update their respective CSS modules to be "color-aware" in glass mode. This means that if a component has `color="primary"`, the glass variant should apply a translucent primary tint to the background and use a primary-derived text color to ensure readability (preventing the "horrible color on hover" bug). Update all Storybook files to include working glass examples.

## Acceptance criteria

- [ ] `Button`, `Tag`, `Badge`, and `Avatar` prop types migrated to `variant="glass"`.
- [ ] CSS modules updated to provide readable text and hover states matching the `color` prop while in glass mode.
- [ ] Storybook entries for each component showcase the `variant="glass"` option correctly.
- [ ] Component unit tests pass with the updated prop API.

## Blocked by

- [docs/issues/07-glass-base-primitives.md](file:///Users/bisht/Desktop/Dev/React/beast-ui/docs/issues/07-glass-base-primitives.md)
