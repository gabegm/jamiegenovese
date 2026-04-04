import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Populated by the GitHub Pages deploy workflow; falls back to '/' for
  // Netlify and local dev which serve from the domain root.
  site: process.env.SITE,
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  integrations: [tailwind()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
