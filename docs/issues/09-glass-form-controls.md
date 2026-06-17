---
labels: ["ready-for-agent"]
---

## Parent

[docs/issues/06-glassmorphism-refactor.md](file:///Users/bisht/Desktop/Dev/React/beast-ui/docs/issues/06-glassmorphism-refactor.md)

## What to build

Refactor `Input`, `Radio`, `Select`, and `Switch` components to accept `variant="glass"` (or add "glass" to existing variant enums), replacing the `glass?: boolean` prop. Specifically update the `Input` component's CSS module to include a modern structural border when in glass mode. Ensure Storybook examples display working glass permutations for all four form controls.

## Acceptance criteria

- [ ] `Input`, `Radio`, `Select`, and `Switch` migrated to use `variant="glass"`.
- [ ] `Input.module.css` updated to include structural borders in glass mode.
- [ ] Storybook entries for each component updated to demonstrate the glass variant.
- [ ] Component unit tests pass with the updated prop API.

## Blocked by

- [docs/issues/07-glass-base-primitives.md](file:///Users/bisht/Desktop/Dev/React/beast-ui/docs/issues/07-glass-base-primitives.md)
