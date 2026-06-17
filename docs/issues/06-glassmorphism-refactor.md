---
labels: ["ready-for-agent"]
---

# PRD: Refactoring Glassmorphism to a Variant

## Problem Statement

Currently, the `glass` property in Beast UI is implemented as a boolean modifier (`glass={true}`) across various components. This architecture causes conflict with existing component variants. For example, applying `glass={true}` to a Button with `variant="solid"` results in unpredictable background colors and poor text contrast on hover, making the text unreadable. Furthermore, structural components (like Surface, Card, Dialog) do not possess a `variant` prop at all, creating an inconsistent API where `glass` is a boolean on some components and competes with variants on others. Storybook examples for many components (Alert, Progress, Skeleton, Spinner, Toast, Avatar, Badge, Tag, Tooltip, Tabs, Input, Radio, Select, Switch, Card, Collapsible, Drawer, Menu) are either missing glass permutations or displaying broken UI.

## Solution

We will refactor the API so that "glass" is treated exclusively as a state of the `variant` prop (`variant="glass"`). This ensures it is mutually exclusive with other variants (like `solid`, `outlined`, `soft`). We will introduce the `variant` prop to structural components to maintain library-wide API consistency. Additionally, we will update the CSS modules for interactive components (like Button, Input) to be "color-aware" in glass mode, ensuring text readability is maintained against translucent backgrounds. Finally, Storybook examples will be created or fixed for all 20 affected components.

## User Stories

1. As a Consumer, I want to use `variant="glass"` on a Button, so that it receives a translucent background without conflicting with a `solid` background color.
2. As a Consumer, I want the text inside a `variant="glass"` Button to remain perfectly readable on hover, so that my users are not confused by disappearing text.
3. As a Consumer, I want to apply `variant="glass"` to an Input, so that it receives modern styling with a structural border and frosted background.
4. As a Consumer, I want a unified API where both interactive controls (e.g., Button) and structural elements (e.g., Surface, Card) use the `variant` prop to trigger glassmorphism, so that I don't have to memorize component-specific APIs.
5. As a Consumer, I want to see working `glass` variant examples in Storybook for the Alert component, so that I can preview its appearance before using it.
6. As a Consumer, I want to see working `glass` variant examples in Storybook for the Progress component, so that I know how the track and indicator render under glass.
7. As a Consumer, I want to see working `glass` variant examples in Storybook for the Skeleton component, so that I can visualize loading states on complex backgrounds.
8. As a Consumer, I want to see working `glass` variant examples in Storybook for the Spinner component, so that I can use it in glass-heavy UIs.
9. As a Consumer, I want to see working `glass` variant examples in Storybook for the Toast component, so that I can render floating notifications with frosted glass effects.
10. As a Consumer, I want to see working `glass` variant examples in Storybook for the Avatar, Badge, and Tag components, so that my metadata and user icons blend nicely into the app background.
11. As a Consumer, I want the Tooltip Storybook to display an actual Tooltip component (rather than a plain button), so that I understand how the Tooltip API and glass variant work.
12. As a Consumer, I want to apply `variant="glass"` to Tabs, Radio, Select, and Switch components, so that my forms and navigation elements adhere to the Tactile Calm design language.
13. As a Consumer, I want Card, Collapsible, and Drawer components to support `variant="glass"`, so that my application's structural panels can utilize glassmorphism natively.
14. As a Consumer, I want the Menu component's text to be visible in glass mode, so that dropdown options are accessible and readable.
15. As a Consumer, I want `glaze={{ frost: 'md', tint: 'light' }}` to continue working alongside `variant="glass"`, so that I can customize the exact blur and opacity of the glassmorphism.

## Implementation Decisions

- **API Modification**: The `glass?: boolean` prop will be removed from `Frame`, `Surface`, and all 20 child components. It will be replaced with `variant?: 'solid' | 'glass'` (or appended to existing variant enums).
- **CSS Strategy (Color-Awareness)**: For components with a `color` prop (e.g. Button, Tag), the `glass` variant will use translucent backgrounds tinted with the corresponding `color` token, and the text will match the color to ensure readability against whatever is behind the glass.
- **Architectural Rules**: Glassmorphism is now defined as a mutually exclusive variant in `CONTEXT.md`. This is supported by ADR `0006-glass-as-variant.md`.
- **Component Scope**: The 20 components targeted for updates and Storybook fixes are: Alert, Progress, Skeleton, Spinner, Toast, Avatar, Badge, Tag, Tooltip, Tabs, Button, Input, Radio, Select, Switch, Card, Collapsible, Surface, Drawer, Menu.

## Testing Decisions

- **Seam**: We will test at the component API seam using React Testing Library (`packages/core/src/*/*.test.tsx`). Tests that previously passed `glass={true}` will be updated to pass `variant="glass"`.
- **Criteria**: The component tests will assert that the appropriate structural classes (e.g., `beast-surface-glass`) and inline style tokens for `glaze` (frost/tint) are applied to the DOM nodes. Implementation details (like the exact RGB value of a tint) will not be asserted in JS.
- **Visual Validation**: Storybook will be the visual testing seam. We will add/update Storybook stories for all 20 components to verify text readability, hover states (Magnetic Press), and integration with the Botanical/Moss color palettes.

## Out of Scope

- Refactoring components not listed in the 20 targeted components.
- Changing the default typography or spacing scales.
- Replacing the underlying `Frame` or `Surface` abstraction layers entirely.

## Further Notes

- The decision to move to `variant="glass"` is documented in `docs/adr/0006-glass-as-variant.md`.
- The design language remains "Tactile Calm," meaning we will still rely on 1px structural borders alongside the glass blur, rather than muddy drop shadows.
