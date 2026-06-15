## What to build

Configure Changesets for the monorepo. Set up the versioning and publishing pipeline so that packages can be versioned independently and published to npm.

## Acceptance criteria

- [x] `pnpm changeset` prompts to select affected packages and write a changeset entry
- [x] `pnpm changeset version` bumps versions and updates changelogs per package
- [x] `pnpm changeset publish` publishes changed packages to npm
- [x] `.changeset/config.json` is configured for the `@beast-ui` scope
- [x] Linked versioning is configured between `@beast-ui/system` and `@beast-ui/core` (they version together)
- [x] `@beast-ui/icons` and `@beast-ui/lab` version independently
- [x] Pre-release mode (`0.1.0-alpha.x`) is configured for initial development
- [x] A `CHANGELOG.md` is generated per package on version bump

## Blocked by

- Issue #1 — Scaffold pnpm monorepo
