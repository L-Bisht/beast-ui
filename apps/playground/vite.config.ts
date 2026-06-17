/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { 
      enforce: 'pre', 
      ...mdx({ 
        providerImportSource: '@mdx-js/react',
        jsxImportSource: 'react'
      }) 
    } as any,
    react({ include: /\.(jsx|tsx|mdx)$/ }) as any
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
})
