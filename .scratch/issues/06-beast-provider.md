## What to build

Create the `BeastProvider` React component in `@beast-ui/system`. It accepts a `theme` JS object and converts it into CSS custom properties set as inline styles on a wrapper `<div>`.

The provider is a **write-only convenience layer** — it sets CSS variables, components never read from React Context for styling. It should also accept a `colorMode` prop (`"light" | "dark" | "system"`) that applies the appropriate `.beast-light` or `.beast-dark` class.

The theme object shape should mirror the semantic token structure:
```ts
{
  color?: {
    primary?: string;
    danger?: string;
    surface?: string;
    // ...
  };
  space?: Record<string, string>;
  radius?: Record<string, string>;
}
```

## Acceptance criteria

- [x] `<BeastProvider>` renders a `<div>` with CSS custom properties as inline `style`
- [x] Theme object keys are converted to `--beast-*` CSS variable names
- [x] `colorMode="dark"` applies `.beast-dark` class to the wrapper
- [x] `colorMode="light"` applies `.beast-light` class to the wrapper
- [x] `colorMode="system"` (default) applies no class (OS preference takes over)
- [x] Nested `BeastProvider` correctly scopes overrides to its subtree
- [x] TypeScript types are exported for the theme object shape
- [x] Unit tests verify CSS variable output for various theme configurations

## Blocked by

- Issue #4 — Semantic token layer
