import React from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

/** Shape of the theme object accepted by BeastProvider. */
export interface BeastTheme {
  /** Overrides for `--beast-color-*` semantic tokens. */
  color?: Record<string, string>;
  /** Overrides for `--beast-space-*` tokens. */
  space?: Record<string, string>;
  /** Overrides for `--beast-radius-*` tokens. */
  radius?: Record<string, string>;
}

export type ColorMode = 'light' | 'dark' | 'system';

export interface BeastProviderProps {
  /** Theme object — keys map to CSS custom property overrides. */
  theme?: BeastTheme;
  /**
   * Color mode:
   * - `"system"` (default) — no class applied; OS `prefers-color-scheme` controls it.
   * - `"dark"` — applies `.beast-dark` to the wrapper div.
   * - `"light"` — applies `.beast-light` to the wrapper div.
   */
  colorMode?: ColorMode;
  children?: React.ReactNode;
  /** Forwarded to the wrapper div (e.g. data-testid). */
  [key: string]: unknown;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Converts a BeastTheme object into a flat `React.CSSProperties`-compatible
 * record of `--beast-*` CSS custom properties.
 */
function themeToVars(theme: BeastTheme): Record<string, string> {
  const vars: Record<string, string> = {};

  for (const [key, value] of Object.entries(theme.color ?? {})) {
    vars[`--beast-color-${key}`] = value;
  }
  for (const [key, value] of Object.entries(theme.space ?? {})) {
    vars[`--beast-space-${key}`] = value;
  }
  for (const [key, value] of Object.entries(theme.radius ?? {})) {
    vars[`--beast-radius-${key}`] = value;
  }

  return vars;
}

/** Maps a ColorMode to the corresponding CSS class name (or undefined). */
function colorModeClass(mode: ColorMode | undefined): string | undefined {
  if (mode === 'dark') return 'beast-dark';
  if (mode === 'light') return 'beast-light';
  return undefined;
}

// ── Component ─────────────────────────────────────────────────────────────────

/**
 * BeastProvider — optional theme & color-mode wrapper.
 *
 * Converts a `theme` JS object into CSS custom properties set as inline styles
 * on a wrapper `<div>`. Components consume `var(--beast-*)` directly from CSS;
 * they never read from React Context for styling.
 *
 * Can be nested — inner providers scope their overrides to their own subtree.
 */
export function BeastProvider({
  theme,
  colorMode,
  children,
  ...rest
}: BeastProviderProps): React.ReactElement {
  const cssVars = theme ? themeToVars(theme) : {};
  const modeClass = colorModeClass(colorMode);

  return (
    <div
      {...rest}
      className={modeClass}
      // Cast required: React's CSSProperties doesn't index CSS custom props
      style={cssVars}
    >
      {children}
    </div>
  );
}
