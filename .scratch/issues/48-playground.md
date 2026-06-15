## What to build

Create a playground app within the monorepo for manual testing during development. This is where developers can compose Beast UI components together in real page layouts to verify they work in combination.

Use the existing Vite scaffold (currently at root) moved into `apps/playground/`. Import from `@beast-ui/core` and `@beast-ui/system` workspace packages.

## Acceptance criteria

- [x] `pnpm --filter playground dev` starts the playground Vite dev server
- [x] Playground imports `@beast-ui/system` theme CSS and `@beast-ui/core` components
- [x] A demo page composes multiple components (Button, Input, Card, Flex layout)
- [x] Hot reload works — editing a component in `packages/core/` updates the playground
- [x] Dark mode toggle works in the playground (using `.beast-dark` class)

## Blocked by

- Issue #18 — Button component
- Issue #8 — Frame component
