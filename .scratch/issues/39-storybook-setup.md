## What to build

Set up Storybook in the monorepo. Configure it to load components from `@beast-ui/core` with the `@beast-ui/system` theme CSS applied globally. Enable hot reload for component development.

Use Storybook 8+ with the Vite builder. Configure it to resolve monorepo package imports.

## Acceptance criteria

- [x] `pnpm storybook` (or `pnpm dev` in the storybook package) starts Storybook
- [x] Storybook loads `@beast-ui/system` theme CSS globally (components render with tokens)
- [x] At least one component story (Button) renders correctly as proof
- [x] Hot module reload works — editing a component's CSS Module or TSX updates the story
- [x] Dark mode can be toggled in Storybook (toolbar addon or global decorator)
- [x] Storybook resolves `@beast-ui/*` imports from the monorepo workspace

## Blocked by

- Issue #18 — Button component (need at least one component for proof)
