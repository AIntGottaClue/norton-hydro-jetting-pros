import { defineConfig } from 'astro/config';

// GitHub Pages preview serves from /norton-hydro-jetting-pros/. Set BASE=/ for a real-domain deploy.
export default defineConfig({
  site: process.env.SITE_ORIGIN ?? 'https://aintgottaclue.github.io',
  base: process.env.BASE ?? '/norton-hydro-jetting-pros',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
