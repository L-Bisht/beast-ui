## Problem Statement

Consumers of Beast UI currently experience visual inconsistencies across status-related components (Toast, Alert, Badge, Button). Specifically, the `Toast` component defaults to an `info` severity rather than a neutral state, and the fallback colors for these components rely on bright, generic Bootstrap-style hex codes (e.g., `#007bff`) rather than the project's established "Tactile Calm" (Botanical/Moss) design language. Furthermore, the `Toast` component lacks the `variant` prop (`solid`, `outlined`, `soft`) that is present in other components like `Alert`, leading to an inconsistent API and aesthetic across the library.

## Solution

We will standardize the status components across the Beast UI core library by introducing a `default` severity for neutral messages and implementing a unified `variant` API (`solid`, `outlined`, `soft`) across all relevant components. Additionally, we will update the fallback CSS values in the component modules to utilize the Tactile Calm color palette, ensuring components look premium and cohesive even when used without the `BeastProvider`.

## User Stories

1. As a consumer, I want to use a `default` severity for Toasts, so that I can display neutral notifications without implying a specific informational or alert status.
2. As a consumer, I want to apply a `variant="solid"` prop to my Toasts, so that the notification pops with a filled background color.
3. As a consumer, I want to apply a `variant="outlined"` prop to my Toasts, so that I can use a more subtle border-based design that matches other components.
4. As a consumer, I want to apply a `variant="soft"` prop to my Toasts, so that I can have a low-emphasis notification style consistent with Alerts.
5. As a consumer, I want the default fallback colors of all components to match the Botanical/Moss "Tactile Calm" palette, so that my application looks cohesive and premium even without setting up a custom theme provider.
6. As a consumer, I want the `Badge` and `Button` components to support the exact same `variant` options (`solid`, `outlined`, `soft`), so that I don't have to guess which API each component uses.
7. As a developer maintaining Beast UI, I want the semantic tokens in `@beast-ui/system` to include a mapping for the `default` role, so that neutral states are consistently themed across the library.

## Implementation Decisions

- **Color System Update**: Modify the semantic tokens (`@beast-ui/system/src/tokens/semantic.css`) to add a `default` color role mapped to a neutral/muted tone.
- **Component Refactoring**: 
  - Update `Toast.tsx` and `Toast.module.css` to accept and render `variant` (`solid`, `outlined`, `soft`). Default the variant to `solid`.
  - Add `default` severity to `Toast` and `Alert`. Update the `addToast` default behavior to use `severity: 'default'` instead of `info`.
  - Standardize `Alert.tsx` to use `solid` instead of `filled` for API consistency, updating `Alert.module.css` accordingly.
  - Apply the new Tactile Calm fallback hex codes (from `semantic.css`) directly into the `.module.css` files of `Toast`, `Alert`, `Badge`, and `Button`, replacing any Bootstrap-style hexes.
- **API Contracts**: 
  - Components with status states will share a common prop interface: `severity?: 'default' | 'info' | 'success' | 'warning' | 'danger'` and `variant?: 'solid' | 'outlined' | 'soft'`.

## Testing Decisions

- **Testing Philosophy**: Tests should only verify external behavior (component props mapping to correct DOM structure and classes) and not internal CSS implementation details.
- **Modules Tested**: `Toast.test.tsx`, `Alert.test.tsx`, `Badge.test.tsx`, `Button.test.tsx`.
- **Approach**: Utilize React Testing Library to assert that passing different combinations of `severity` and `variant` correctly applies the associated CSS module classes. Storybook stories will be updated and used as the primary testing seam for visual verification of the new fallback colors and variants.

## Out of Scope

- Introducing new components.
- Changing the JavaScript-based theme injection logic inside `BeastProvider`.
- Overhauling the animation timings or layout structures (e.g., flex gaps, paddings) of the existing components.

## Further Notes

- The decision to default `Toast` to a `solid` variant was made to ensure temporary notifications remain highly visible and contrast effectively against the rest of the application UI.
