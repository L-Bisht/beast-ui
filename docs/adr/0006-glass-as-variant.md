# 6. Glassmorphism as a Variant

Date: 2026-06-17

## Status

Accepted

## Context

Initially, Beast UI components supported glassmorphism via a boolean `glass` prop (e.g. `glass={true}`). This led to architectural confusion, particularly regarding how `glass` should interact with the `variant` prop on control components (like `Button`, `Input`). For instance, a `variant="solid"` button with `glass={true}` would result in conflicting background colors and poor text contrast. Furthermore, structural components (like `Surface`, `Card`, `Dialog`) lacked a `variant` prop altogether, relying implicitly on default styles and elevations.

## Decision

We are refactoring the library to treat glassmorphism exclusively as a state of the `variant` prop (i.e., `variant="glass"`).

1. **Mutually Exclusive Variants**: `glass` is now a primary visual style alongside `solid`, `outlined`, `soft`, etc. It cannot be combined orthogonally with other backgrounds.
2. **Universal Variant Prop**: We are introducing the `variant` prop to structural components (`Surface`, `Card`, `Dialog`, etc.) with `variant="solid" | "glass"`, ensuring API consistency across the entire library.
3. **Color-Aware Glass**: For components supporting the `color` prop (like `Button`), the `glass` variant will use translucent backgrounds tinted with the corresponding color, and the text will match the color to ensure readability against whatever is behind the glass.

## Consequences

*   **Positive**: A unified, predictable API for glassmorphism across all 20+ components. Developers no longer need to guess how `glass={true}` interacts with other visual states. Text readability is guaranteed by the color-aware CSS.
*   **Negative**: Breaking change for existing consumers who used `glass={true}`. Requires a massive refactoring effort across `core` components, tests, and storybook files to convert the boolean prop to the `variant` enum and update CSS modules.
