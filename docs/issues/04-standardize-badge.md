## Parent

docs/prd-toast-refactor.md

## What to build

Standardize the `Badge` component's API so it officially supports the unified `variant` prop (`solid`, `outlined`, `soft`). Update the fallback colors in its CSS module to align with the Tactile Calm palette.

## Acceptance criteria

- [ ] `Badge` accepts `variant` prop with `solid`, `outlined`, `soft`.
- [ ] Fallback colors use Tactile Calm hex values.
- [ ] Tests and stories are updated to reflect the changes.

## Blocked by

- Issue 1 (Update Semantic Tokens with default role)
