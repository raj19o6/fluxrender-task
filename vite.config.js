import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    minify: 'esbuild',
    sourcemap: false, // Ensures source code remains private and unreadable
    cssMinify: true,
    target: 'es2015',
    esbuild: {
      drop: ['console', 'debugger'], // Drops development logs and debug code
      legalComments: 'none'
    }
  }
});
