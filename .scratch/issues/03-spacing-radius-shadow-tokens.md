## What to build

Define spacing, border-radius, box-shadow, and typography tokens as CSS custom properties in `@beast-ui/system`.

- **Spacing**: `--beast-space-1` through `--beast-space-12` using a consistent scale (e.g., 4px base with multipliers)
- **Radius**: `--beast-radius-sm`, `--beast-radius-md`, `--beast-radius-lg`, `--beast-radius-full`
- **Shadow**: `--beast-shadow-sm`, `--beast-shadow-md`, `--beast-shadow-lg`
- **Typography**: `--beast-font-family`, `--beast-font-size-xs` through `--beast-font-size-2xl`, `--beast-font-weight-normal/medium/semibold/bold`, `--beast-line-height-tight/normal/relaxed`

Shadows should feel bold (not the wispy Material-style elevation) — slightly colored shadows that add depth.

## Acceptance criteria

- [x] All spacing tokens `--beast-space-{1-12}` defined with a consistent mathematical scale
- [x] Radius tokens defined at 4 levels + full (pill)
- [x] Shadow tokens defined at 3 levels with slightly colored shadows (not pure black)
- [x] Typography tokens for family, size (6 levels), weight (4 levels), and line-height (3 levels)
- [x] Unit test verifies all expected token names exist

## Blocked by

- Issue #1 — Scaffold pnpm monorepo
