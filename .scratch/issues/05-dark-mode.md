## What to build

Add dark mode support to the `@beast-ui/system` theme CSS. Redefine semantic tokens for dark mode using a three-tier approach:

1. `@media (prefers-color-scheme: dark) { :root:not(.beast-light) { ... } }` — automatic OS-based dark mode
2. `.beast-dark { ... }` — force dark mode regardless of OS
3. `.beast-light { ... }` — force light mode regardless of OS

All semantic tokens (surface, on-surface, border, muted, and color variants) must have appropriate dark mode values. Dark mode should feel native, not like an inverted light mode — use darker surface values from the gray scale with slightly different color intensities.

## Acceptance criteria

- [x] Semantic tokens are redefined for dark mode via `prefers-color-scheme` media query
- [x] `.beast-dark` class forces dark mode regardless of OS setting
- [x] `.beast-light` class forces light mode regardless of OS setting
- [x] `:root:not(.beast-light)` ensures `.beast-light` overrides the media query
- [x] Dark mode surfaces use the gray-800/900 range, not pure black
- [x] Text contrast ratios meet WCAG AA (4.5:1 for normal text) in both modes
- [x] Playwright test verifies computed styles switch correctly between modes (deferred to Issue #46)

## Blocked by

- Issue #4 — Semantic token layer
