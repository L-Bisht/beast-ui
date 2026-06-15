## What to build

Set up Playwright for integration testing of complex interactive components (Dialog focus traps, Menu keyboard navigation, Select screen reader behavior, etc.).

Configure Playwright to render components in a real browser and test end-to-end interaction flows that Vitest + jsdom cannot cover (real focus management, computed styles, screen reader live regions).

## Acceptance criteria

- [x] `pnpm test:integration` runs Playwright tests
- [x] A test helper renders individual Beast UI components in a minimal page
- [x] At least one proof-of-concept test (e.g., Dialog focus trap with Tab key cycling)
- [x] Tests can assert computed CSS values (for design token validation)
- [x] Tests can simulate keyboard interactions (Tab, Escape, Arrow keys)
- [x] Works in CI (headless Chromium)

## Blocked by

- Issue #7 — Vite library build config
