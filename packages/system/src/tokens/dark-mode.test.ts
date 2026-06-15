import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(resolve(__dirname, './dark-mode.css'), 'utf8');

// Tokens that must be redefined in dark mode (all semantic tokens)
const ROLE_VARIANTS = ['primary', 'secondary', 'danger', 'warning', 'success', 'info']
  .flatMap(role => [`--beast-color-${role}`, `--beast-color-${role}-light`, `--beast-color-${role}-dark`]);

const SURFACE_TOKENS = [
  '--beast-color-surface',
  '--beast-color-on-surface',
  '--beast-color-surface-variant',
  '--beast-color-border',
  '--beast-color-muted',
];

const ALL_SEMANTIC = [...ROLE_VARIANTS, ...SURFACE_TOKENS];

// ── Tests ────────────────────────────────────────────────────────────────────

describe('dark mode token layer', () => {
  it('contains the @media prefers-color-scheme: dark block with :root:not(.beast-light)', () => {
    expect(css).toContain('prefers-color-scheme: dark');
    expect(css).toContain(':root:not(.beast-light)');
  });

  it('contains a .beast-dark class for forced dark mode', () => {
    expect(css).toContain('.beast-dark');
  });

  it('contains a .beast-light class for forced light mode', () => {
    expect(css).toContain('.beast-light');
  });

  it('redefines all semantic tokens inside the dark mode block', () => {
    // Extract the dark-mode block (between first @media ... { and its closing })
    const mediaMatch = /@media\s*\(prefers-color-scheme:\s*dark\)[^{]*\{([\s\S]+)/.exec(css);
    expect(mediaMatch, 'Could not find @media dark block').toBeTruthy();
    if (!mediaMatch) {
      throw new Error('Could not find @media dark block');
    }
    const darkBlock = mediaMatch[1];

    const missing = ALL_SEMANTIC.filter(t => !darkBlock.includes(t));
    expect(missing, `Missing in dark @media block:\n${missing.join('\n')}`).toHaveLength(0);
  });

  it('dark surface tokens reference gray-800 or gray-900 scale tokens (not pure black)', () => {
    // Surface in dark mode must pull from gray-800 or gray-900, never a literal black
    const surfaceDecl = css.match(/--beast-color-surface\s*:\s*([^;]+);/g) ?? [];
    // There will be multiple (light + dark), find ones referencing dark gray
    const hasDarkGray = surfaceDecl.some(
      d => d.includes('beast-gray-800') || d.includes('beast-gray-900'),
    );
    expect(hasDarkGray, 'Dark surface must reference gray-800 or gray-900').toBe(true);
  });

  it('.beast-dark class redefines all semantic tokens for forced dark', () => {
    const beastDarkMatch = /\.beast-dark\s*\{([\s\S]*?)\}/.exec(css);
    expect(beastDarkMatch, 'Could not find .beast-dark block').toBeTruthy();
    if (!beastDarkMatch) {
      throw new Error('Could not find .beast-dark block');
    }
    const darkBlock = beastDarkMatch[1];

    const missing = ALL_SEMANTIC.filter(t => !darkBlock.includes(t));
    expect(missing, `Missing in .beast-dark:\n${missing.join('\n')}`).toHaveLength(0);
  });
});
