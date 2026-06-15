## What to build

Create the semantic token layer in `@beast-ui/system` that maps meaningful names to scale values. This is the layer components actually consume.

- `--beast-color-primary` → maps to a violet scale value
- `--beast-color-secondary` → maps to a blue/cyan scale value
- `--beast-color-danger` → maps to red
- `--beast-color-warning` → maps to yellow/orange
- `--beast-color-success` → maps to green
- `--beast-color-info` → maps to blue
- `--beast-color-surface` → background color
- `--beast-color-on-surface` → text color on surface
- `--beast-color-surface-variant` → secondary surface (cards, panels)
- `--beast-color-border` → default border color
- `--beast-color-muted` → de-emphasized text

Each semantic color should also have `-light` and `-dark` variants for hover/active states.

## Acceptance criteria

- [x] Semantic tokens reference scale tokens via `var(--beast-{color}-{shade})`
- [x] All semantic color tokens have base, `-light`, and `-dark` variants
- [x] Surface/on-surface tokens provide correct contrast in light mode
- [x] Consumers can retheme by overriding semantic tokens without touching scale tokens
- [x] Unit test verifies semantic tokens resolve correctly

## Blocked by

- Issue #2 — Color scale tokens
- Issue #3 — Spacing, radius, shadow, typography tokens
