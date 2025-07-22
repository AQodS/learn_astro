// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // Replace with your actual site URL
  site: "https://this-astro-web-link.com",

  integrations: [preact()]
});