## Parent

docs/prd-toast-refactor.md

## What to build

Refactor the `Toast` component to accept a `variant` prop (`solid`, `outlined`, `soft`) defaulting to `solid`, and introduce the `default` severity. Update `Toast.module.css` so that the fallback colors (used when `BeastProvider` is absent) utilize the Tactile Calm palette instead of generic Bootstrap hex codes. Update `addToast` to use `default` severity as its fallback.

## Acceptance criteria

- [ ] `Toast` accepts `variant` prop.
- [ ] `Toast` supports `default` severity.
- [ ] Fallback colors use `var(--beast-color-..., <Tactile Calm hex>)`.
- [ ] React Testing Library tests confirm the correct classes are applied.
- [ ] Storybook visual tests confirm proper rendering.

## Blocked by

- Issue 1 (Update Semantic Tokens with default role)
