import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(resolve(__dirname, './semantic.css'), 'utf8');

// ── Expected tokens ──────────────────────────────────────────────────────────

const ROLE_COLORS = [
  'primary', 'secondary', 'danger', 'warning', 'success', 'info', 'default',
] as const;

const SURFACE_TOKENS = [
  '--beast-color-surface',
  '--beast-color-on-surface',
  '--beast-color-surface-variant',
  '--beast-color-border',
  '--beast-color-muted',
] as const;

// ── Tests ────────────────────────────────────────────────────────────────────

describe('semantic token layer', () => {
  it('defines base, -light, and -dark variants for every role color', () => {
    const missing: string[] = [];

    for (const role of ROLE_COLORS) {
      for (const variant of ['', '-light', '-dark'] as const) {
        const token = `--beast-color-${role}${variant}`;
        if (!css.includes(token)) missing.push(token);
      }
    }

    expect(missing, `Missing tokens:\n${missing.join('\n')}`).toHaveLength(0);
  });

  it('defines all surface / on-surface / border / muted tokens', () => {
    const missing = SURFACE_TOKENS.filter(t => !css.includes(t));
    expect(missing, `Missing tokens:\n${missing.join('\n')}`).toHaveLength(0);
  });

  it('every semantic token resolves via var() reference to a scale token', () => {
    // Grab every --beast-color-* declaration value
    const declarations = [
      ...css.matchAll(/--beast-color-[a-z-]+\s*:\s*([^;]+);/g),
    ];
    expect(declarations.length).toBeGreaterThan(0);

    const nonVar = declarations.filter(([, value]) => !value.trim().startsWith('var('));
    expect(
      nonVar.map(([decl]) => decl),
      `Tokens not using var() references:\n${nonVar.map(([d]) => d).join('\n')}`,
    ).toHaveLength(0);
  });

  it('semantic var() references point to known beast scale tokens', () => {
    // Every var(--beast-...) inside the semantic file should reference a
    // scale token (--beast-{color}-{shade}), not a hardcoded value
    const varRefs = [...css.matchAll(/var\((--beast-[a-z-]+-\d+)\)/g)].map(
      m => m[1],
    );
    expect(varRefs.length).toBeGreaterThan(0);

    // All refs should match the pattern --beast-{word}-{number}
    for (const ref of varRefs) {
      expect(ref).toMatch(/^--beast-[a-z]+-\d+$/);
    }
  });
});
