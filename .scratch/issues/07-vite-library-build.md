## What to build

Configure `@beast-ui/core` for Vite library mode builds. Set up `vite.config.ts` with library mode targeting ESM output, `vite-plugin-dts` for `.d.ts` generation, and CSS Module extraction.

Define the `package.json` `exports` field so consumers can do:
- `import { Button } from '@beast-ui/core'`
- `import '@beast-ui/core/styles.css'`

Ensure React and ReactDOM are externalized (peer dependencies, not bundled).

## Acceptance criteria

- [x] `pnpm build` in `packages/core/` produces ESM output in `dist/`
- [x] `.d.ts` files are generated alongside JS output (via vite-plugin-dts v5)
- [x] CSS Modules are extracted to a single `styles.css` file in `dist/` (emitted from Issue #8 onward when components have styles)
- [x] React and ReactDOM are externalized, not bundled
- [x] `package.json` `exports` field maps `.` to the JS entry and `./styles.css` to the CSS
- [x] A smoke test imports the built package and verifies exports exist
- [x] `@beast-ui/system` is listed as a peer dependency

## Blocked by

- Issue #1 — Scaffold pnpm monorepo
