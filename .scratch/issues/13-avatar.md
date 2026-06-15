## What to build

Create the `Avatar` component — displays a user image, initials fallback, or icon in a circular/rounded container.

Props: `src` (image URL), `alt`, `name` (used for initials fallback when no src or src fails), `size` (sm/md/lg/xl), `variant` (circular/rounded), `fallback` (ReactNode for custom fallback).

## Acceptance criteria

- [x] `<Avatar src="..." alt="...">` renders an `<img>` inside a styled container
- [x] When `src` fails to load, displays initials from `name` prop (first letters of first+last name)
- [x] When no `src` and no `name`, renders a default person icon
- [x] `size` prop controls dimensions (sm=32px, md=40px, lg=48px, xl=64px)
- [x] `variant="circular"` (default) renders a circle, `"rounded"` uses `--beast-radius-md`
- [x] `fallback` prop allows custom fallback content
- [x] Uses `--beast-color-*` tokens for fallback background colors
- [x] Unit tests cover image load, fallback, and initials generation

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
