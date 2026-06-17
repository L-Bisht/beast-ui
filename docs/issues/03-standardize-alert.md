## Parent

docs/prd-toast-refactor.md

## What to build

Refactor the `Alert` component to rename the `filled` variant to `solid` for API consistency across the library. Introduce the `default` severity. Update the fallback colors in `Alert.module.css` to align with the Tactile Calm palette rather than Bootstrap hex codes.

## Acceptance criteria

- [ ] `variant="solid"` is supported instead of `filled`.
- [ ] `severity="default"` is supported.
- [ ] Fallback colors use Tactile Calm hex values.
- [ ] Tests and stories are updated to reflect the API changes.

## Blocked by

- Issue 1 (Update Semantic Tokens with default role)
