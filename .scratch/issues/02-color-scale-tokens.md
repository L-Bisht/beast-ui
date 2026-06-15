## What to build

Define the color scale tokens as CSS custom properties in `@beast-ui/system`. Create a base CSS file that establishes the full color palette with 12 shades (50–950) for each core color family: violet, blue, cyan, green, yellow, orange, red, pink, and gray/neutral.

These are raw scale values only — no semantic mapping yet. Use HSL-based values tuned for the Bold & Expressive design language (vibrant, saturated colors — not muted pastels).

## Acceptance criteria

- [x] A CSS file exports `--beast-{color}-{shade}` variables for all color families (violet, blue, cyan, green, yellow, orange, red, pink, gray) at shades 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
- [x] Colors are vibrant and saturated, matching the Bold & Expressive design language
- [x] The gray scale has enough contrast range for dark mode usage
- [x] Unit test verifies all expected token names are defined in the CSS output

## Blocked by

- Issue #1 — Scaffold pnpm monorepo
