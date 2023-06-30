import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), image()]
});