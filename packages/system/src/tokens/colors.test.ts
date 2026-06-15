import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(resolve(__dirname, './colors.css'), 'utf8');

const COLOR_FAMILIES = [
  'violet', 'blue', 'cyan', 'green',
  'yellow', 'orange', 'red', 'pink', 'gray',
] as const;

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

describe('color scale tokens', () => {
  it('defines every --beast-{color}-{shade} custom property', () => {
    const missing: string[] = [];

    for (const color of COLOR_FAMILIES) {
      for (const shade of SHADES) {
        const token = `--beast-${color}-${String(shade)}`;
        if (!css.includes(token)) {
          missing.push(token);
        }
      }
    }

    expect(missing, `Missing tokens:\n${missing.join('\n')}`).toHaveLength(0);
  });

  it('uses HSL color values (not hex or rgb)', () => {
    // Ensure the design language constraint is honoured — vibrant HSL values
    const tokenDeclarations = css.match(/--beast-[a-z]+-\d+\s*:\s*([^;]+)/g) ?? [];
    expect(tokenDeclarations.length).toBeGreaterThan(0);

    const nonHsl = tokenDeclarations.filter(d => !d.includes('hsl'));
    expect(nonHsl, `Non-HSL declarations found:\n${nonHsl.join('\n')}`).toHaveLength(0);
  });
});
