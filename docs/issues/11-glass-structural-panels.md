---
labels: ["ready-for-agent"]
---

## Parent

[docs/issues/06-glassmorphism-refactor.md](file:///Users/bisht/Desktop/Dev/React/beast-ui/docs/issues/06-glassmorphism-refactor.md)

## What to build

Refactor `Card`, `Collapsible`, `Drawer`, `Menu`, and `Tabs` to use the `variant="glass"` prop, enforcing consistency across the library's structural elements. Fix the CSS for `Menu` so that text maintains contrast and is fully readable when rendered over a frosted background. Add or fix missing Storybook properties and permutations.

## Acceptance criteria

- [ ] `Card`, `Collapsible`, `Drawer`, `Menu`, and `Tabs` migrated to support `variant="glass"`.
- [ ] `Menu` text visibility issues resolved in glass mode.
- [ ] Storybook entries for all five components updated to demonstrate the glass variant.
- [ ] Component unit tests pass with the updated prop API.

## Blocked by

- [docs/issues/07-glass-base-primitives.md](file:///Users/bisht/Desktop/Dev/React/beast-ui/docs/issues/07-glass-base-primitives.md)
