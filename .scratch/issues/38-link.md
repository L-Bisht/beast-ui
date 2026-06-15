## What to build

Create the `Link` component — a styled anchor element that can integrate with client-side routers.

Props: `href`, `external` (boolean — adds `target="_blank"` + `rel="noopener noreferrer"`), `color` (primary/on-surface/inherit), `underline` (always/hover/none), `as` (polymorphic — for router link integration, e.g., `as={NextLink}`), `disabled`.

## Acceptance criteria

- [x] `<Link href="/about">About</Link>` renders a styled `<a>` element
- [x] `external` adds `target="_blank"` and `rel="noopener noreferrer"`
- [x] `color` maps to design tokens
- [x] `underline` controls text-decoration behavior (always, on hover, never)
- [x] `as` prop allows passing a router component (e.g., Next.js Link)
- [x] `disabled` dims the link, removes `href`, and sets `aria-disabled`
- [x] Focus styles visible on keyboard focus
- [x] Unit tests cover external, underline modes, disabled, and polymorphic rendering

## Blocked by

- Issue #4 — Semantic token layer
- Issue #7 — Vite library build config
