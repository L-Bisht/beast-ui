## What to build

Set up visual regression testing infrastructure using Storybook's test-runner with Playwright. Each story automatically becomes a visual regression test via screenshot comparison.

Configure a CI-friendly workflow: capture baseline screenshots, compare on subsequent runs, fail on unexpected visual changes.

## Acceptance criteria

- [x] `pnpm test:visual` runs Storybook test-runner against all stories
- [x] Screenshots are captured for each story using Playwright
- [x] Baseline screenshots are stored in the repo for comparison
- [x] Visual diff fails the test when screenshots don't match (with configurable threshold)
- [x] `--update-snapshots` flag regenerates baselines
- [x] Works in CI (headless browser)
- [x] Dark mode stories are also captured for visual comparison

## Blocked by

- Issue #39 — Storybook setup
