# 5. Tactile Calm Design Identity

Date: 2026-06-15

## Status

Accepted

## Context

Beast UI's initial `CONTEXT.md` specified a "vibrant/bold" design language with a focus on high-contrast violet palettes and deep drop shadows. However, as the project evolved to support both customer-facing and business-facing applications, users found the vibrant palette too overwhelming and the heavy use of drop shadows "muddy", especially in dark mode. We needed a design language that felt premium and distinct but was more soothing for extended use and less reliant on pure shadows for structure.

## Decision

We are adopting "Tactile Calm" as the new core design identity for Beast UI.

1.  **Botanical Palette**: We have shifted from vibrant Violets/Cyans to a Moss Green and Oat/Cream palette. This maintains character but reduces eye strain.
2.  **Structural Borders over Shadows**: We have deprecated shadow-only elevation in favor of 1px structural borders for components like `Surface`, `Card`, and `Dialog`. Shadows are retained but made much subtler, serving only as secondary depth cues rather than structural boundaries.
3.  **Magnetic Press Interaction**: Interactive elements (like `Button` and `Card`) now feature a physical depression (`translateY(2px)`) accompanied by a shadow tightening on the `:active` state, ensuring a grounded, physical feel instead of a floating one.

## Consequences

*   **Positive**: The library is now much more suitable for dense, business-facing applications where eye strain is a concern, while retaining a premium feel. Dark mode layering is significantly clearer thanks to structural borders.
*   **Negative**: We had to overhaul existing system tokens in `@beast-ui/system` and override several existing CSS modules to enforce the structural borders. Components lacking proper borders in their `variants` may need updates.
