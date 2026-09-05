// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/*
 * Deployment target: GitHub Pages.
 *
 * Project pages are served from a subfolder, so the build needs a base path:
 *   https://cedriccliattjr.github.io/cedric-cliatt-jr-website/
 *
 * If you later point a custom domain at this site (or rename the repo to
 * cedriccliattjr.github.io), set these two env vars in the workflow instead of
 * editing this file:
 *   SITE_URL=https://your-domain.com
 *   SITE_BASE=/
 */
const SITE_URL = process.env.SITE_URL ?? 'https://cedriccliattjr.github.io';
const SITE_BASE = process.env.SITE_BASE ?? '/cedric-cliatt-jr-website';

export default defineConfig({
  site: SITE_URL,
  base: SITE_BASE,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  // Generates sitemap-index.xml at build time, referenced from robots.txt.
  integrations: [sitemap()],
});
