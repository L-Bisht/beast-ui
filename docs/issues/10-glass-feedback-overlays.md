---
labels: ["ready-for-agent"]
---

## Parent

[docs/issues/06-glassmorphism-refactor.md](file:///Users/bisht/Desktop/Dev/React/beast-ui/docs/issues/06-glassmorphism-refactor.md)

## What to build

Refactor `Alert`, `Progress`, `Skeleton`, `Spinner`, `Toast`, and `Tooltip` to use `variant="glass"`. Rebuild the `Tooltip` Storybook to showcase the actual component behavior and glass variant, rather than a button placeholder. Add working Storybook examples for the glass permutations for all of these feedback and overlay components.

## Acceptance criteria

- [ ] `Alert`, `Progress`, `Skeleton`, `Spinner`, `Toast`, and `Tooltip` migrated to use `variant="glass"`.
- [ ] `Tooltip.stories.tsx` rebuilt to use proper tooltips.
- [ ] Storybook entries for all components updated to demonstrate the glass variant.
- [ ] Component unit tests pass with the updated prop API.

## Blocked by

- [docs/issues/07-glass-base-primitives.md](file:///Users/bisht/Desktop/Dev/React/beast-ui/docs/issues/07-glass-base-primitives.md)
