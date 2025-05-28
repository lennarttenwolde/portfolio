import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tenwolde.dev',
  integrations: [preact(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});