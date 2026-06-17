## Parent

docs/prd-toast-refactor.md

## What to build

Refactor the `Button` component to ensure its `variant` prop completely aligns with `solid`, `outlined`, `soft`. Update any fallback CSS colors to strictly follow the Tactile Calm palette, removing any remaining Bootstrap-like hex codes.

## Acceptance criteria

- [ ] `Button` correctly implements the unified `variant` prop.
- [ ] Fallback colors use Tactile Calm hex values.
- [ ] Tests and stories are updated.

## Blocked by

- Issue 1 (Update Semantic Tokens with default role)
