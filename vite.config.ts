import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',                     // simulate browser for React
    globals: true,                             // allow describe/it/expect globally
    setupFiles: './src/test/setup.ts',         // your test setup file
    include: [
      'src/tests/**/*.{test,spec}.{ts,tsx}',  // your main test folder
      'src/test/**/*.{test,spec}.{ts,tsx}'    // include example.test.ts
    ],
    exclude: ['src/stories/**', '**/*.stories.*'], // exclude story files
  },
})
