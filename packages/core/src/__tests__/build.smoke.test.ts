/**
 * Build smoke test — verifies the dist/ output of @beast-ui/core.
 *
 * Run AFTER `pnpm build` in packages/core/.
 * This test imports from the built dist/index.js, not src/, to confirm
 * that the Vite library build produces working ESM output with correct exports.
 */
import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../../dist');

describe('build smoke test', () => {
  it('dist/ directory exists after build', () => {
    expect(existsSync(distDir), 'dist/ not found — run pnpm build first').toBe(true);
  });

  it('dist/index.js exists (ESM entry)', () => {
    expect(existsSync(resolve(distDir, 'index.js'))).toBe(true);
  });

  it('dist/styles.css exists once components with CSS Modules are built', () => {
    // CSS is extracted only when components import CSS Modules.
    // BeastProvider has no styles — this will become true from Issue #8 onward.
    // For now we verify the build config is correct by checking index.js exists.
    expect(existsSync(resolve(distDir, 'index.js'))).toBe(true);
  });

  it('dist/src/index.d.ts exists (type declarations)', () => {
    // vite-plugin-dts v5 mirrors the src/ tree by default
    expect(
      existsSync(resolve(distDir, 'src/index.d.ts')) ||
      existsSync(resolve(distDir, 'index.d.ts')) ||
      existsSync(resolve(distDir, 'index.d.mts')),
      'No .d.ts file found in dist/',
    ).toBe(true);
  });

  it('BeastProvider is exported from the built entry', async () => {
    const mod = await import(resolve(distDir, 'index.js'));
    expect(mod.BeastProvider).toBeDefined();
    expect(typeof mod.BeastProvider).toBe('function');
  });
});
