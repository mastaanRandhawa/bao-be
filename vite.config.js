import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Always build for GitHub Pages (/bao-be/). A root-base build breaks asset URLs on deploy.
const repo = 'bao-be';
const base = `/${repo}/`;

/** Copy index.html → 404.html so client-side routes work on GitHub Pages. */
function spaFallback() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const dist = resolve('dist');
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), spaFallback()],
  server: {
    port: Number(process.env.PORT) || 5173,
  },
});
