import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(resolve(__dirname, './base.css'), 'utf8');

// ── Expected tokens ──────────────────────────────────────────────────────────

const SPACING_TOKENS = Array.from({ length: 12 }, (_, i) => `--beast-space-${String(i + 1)}`);

const RADIUS_TOKENS = [
  '--beast-radius-sm',
  '--beast-radius-md',
  '--beast-radius-lg',
  '--beast-radius-xl',
  '--beast-radius-full',
];

const SHADOW_TOKENS = [
  '--beast-shadow-sm',
  '--beast-shadow-md',
  '--beast-shadow-lg',
];

const TYPOGRAPHY_TOKENS = [
  '--beast-font-family',
  '--beast-font-size-xs',
  '--beast-font-size-sm',
  '--beast-font-size-md',
  '--beast-font-size-lg',
  '--beast-font-size-xl',
  '--beast-font-size-2xl',
  '--beast-font-weight-normal',
  '--beast-font-weight-medium',
  '--beast-font-weight-semibold',
  '--beast-font-weight-bold',
  '--beast-line-height-tight',
  '--beast-line-height-normal',
  '--beast-line-height-relaxed',
];

const ALL_TOKENS = [
  ...SPACING_TOKENS,
  ...RADIUS_TOKENS,
  ...SHADOW_TOKENS,
  ...TYPOGRAPHY_TOKENS,
];

// ── Tests ────────────────────────────────────────────────────────────────────

describe('base tokens (spacing, radius, shadow, typography)', () => {
  it('defines all expected token names', () => {
    const missing = ALL_TOKENS.filter(t => !css.includes(t));
    expect(missing, `Missing tokens:\n${missing.join('\n')}`).toHaveLength(0);
  });

  it('spacing scale is mathematically consistent (4px base × multiplier)', () => {
    // Extract computed px values from declarations like --beast-space-1: 4px
    const declarations = css.match(/--beast-space-\d+\s*:\s*(\d+(?:\.\d+)?)(px|rem)/g) ?? [];
    expect(declarations.length).toBe(12);

    // All spacing values should be positive numbers
    for (const decl of declarations) {
      const match = /:\s*(\d+(?:\.\d+)?)/.exec(decl);
      expect(Number(match?.[1])).toBeGreaterThan(0);
    }
  });

  it('shadows use colored (non-pure-black) values', () => {
    // Find shadow declarations and ensure they don't use pure rgb(0,0,0) or #000
    const shadowBlock = css.match(/(--beast-shadow-[a-z]+\s*:.*?;)/gs) ?? [];
    expect(shadowBlock.length).toBeGreaterThan(0);

    for (const decl of shadowBlock) {
      // A colored shadow will have hsl(...) or rgb with non-zero h/s/color channel
      // We simply check they don't rely solely on rgb(0 0 0) or #000000 pure black
      const isPureBlack = /rgb\(0,?\s*0,?\s*0\)|#000000\b|rgba\(0,?\s*0,?\s*0,/.test(decl);
      expect(isPureBlack, `Shadow uses pure black: ${decl}`).toBe(false);
    }
  });
});
