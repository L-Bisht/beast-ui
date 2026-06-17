---
labels: ["ready-for-agent"]
---

## Parent

[docs/issues/06-glassmorphism-refactor.md](file:///Users/bisht/Desktop/Dev/React/beast-ui/docs/issues/06-glassmorphism-refactor.md)

## What to build

Modify the foundational `Surface` and `Frame` components to accept `variant="solid" | "glass"`, replacing the old `glass?: boolean` prop. This is the base tracer bullet that all other glassmorphism updates rely on. The components should output the `.beast-surface-glass` or `.beast-frame-glass` classes strictly when the `variant` is set to "glass". The `glaze` prop should continue functioning to configure frost and tint.

## Acceptance criteria

- [ ] `SurfaceOwnProps` and `FrameOwnProps` use `variant?: 'solid' | 'glass'` instead of `glass?: boolean`.
- [ ] `Surface` and `Frame` conditionally apply the glass CSS classes based on the `variant` prop.
- [ ] Existing core unit tests for `Surface` and `Frame` pass, updating them to test the new variant prop signature instead of the boolean flag.

## Blocked by

None - can start immediately
