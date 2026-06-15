# CSS Modules + CSS Custom Properties for styling

We chose CSS Modules with CSS Custom Properties over runtime CSS-in-JS (Emotion/Styled-Components), zero-runtime CSS-in-JS (Vanilla Extract/Panda CSS), and Tailwind-based approaches.

Runtime CSS-in-JS adds 8-12KB gzipped, breaks React Server Components, and complicates SSR. Zero-runtime CSS-in-JS requires consumers to install build plugins. Tailwind couples consumers to a specific utility framework. CSS Modules require no consumer-side build configuration, carry zero runtime cost, work in every rendering mode (CSR, SSR, RSC), and let consumers override styles with plain CSS. The trade-off is losing ergonomic APIs like the `sx` prop, but we gain universal compatibility and a styling approach that won't need migration as React evolves.
