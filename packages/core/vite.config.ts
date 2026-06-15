import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    dts({
      // Emit .d.ts files from src/ into dist/
      include: ['src'],
      // Exclude test files from type generation
      exclude: ['src/**/*.test.tsx', 'src/**/*.test.ts', 'src/__tests__'],
      rollupTypes: true,
      outDir: 'dist',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BeastUICore',
      // ESM output only
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      // Externalize peer dependencies — never bundle React
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Single CSS file extracted as styles.css
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.some(n => n.endsWith('.css'))) {
            return 'styles.css';
          }
          return assetInfo.names?.[0] ?? 'asset';
        },
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    // Don't minify for easier debugging in lib mode
    minify: false,
    sourcemap: true,
  },
});
