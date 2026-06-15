## What to build

Initialize a pnpm monorepo workspace with the following package structure:

- `packages/system/` — `@beast-ui/system`
- `packages/core/` — `@beast-ui/core`
- `packages/icons/` — `@beast-ui/icons` (empty scaffold)
- `packages/lab/` — `@beast-ui/lab` (empty scaffold)

Set up the root `pnpm-workspace.yaml`, root `package.json` with shared dev dependencies (TypeScript, Vitest, ESLint), and per-package `package.json` files with correct `name`, `peerDependencies`, and `exports` fields. Configure TypeScript project references so packages can reference each other.

Move the existing Vite app scaffold out of the root into a `playground/` or `apps/playground/` directory.

## Acceptance criteria

- [x] `pnpm install` succeeds from root with no phantom dependency warnings
- [x] Each package under `packages/` has a `package.json` with the correct `@beast-ui/*` scoped name
- [x] `@beast-ui/core` declares `@beast-ui/system` as a peer dependency
- [x] TypeScript project references resolve across packages
- [x] Root `package.json` has shared `devDependencies` (typescript, vitest, eslint)
- [x] `pnpm-workspace.yaml` lists `packages/*` and `apps/*` globs

## Blocked by

None — can start immediately
