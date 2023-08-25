<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBottom from '@/components/nav/NavBottom.vue'
import '@/styles/default-theme.css'

// import fs from 'fs-extra'
// import { theme } from '@/scripts/generate-theme'

// fs.writeFile('styles/default-theme.css', `:root {\n${Object.entries(theme).map((([key, value]) => `--${key}: ${value};`)).join('\n')}\n}\n`, { encoding: 'utf-8' })
</script>

<template>
  <RouterView />

  <NavBottom />
</template>

<style>
@layer normalize,
base,
components;

@import "../node_modules/modern-normalize/modern-normalize.css" layer(normalize);
@import "../node_modules/open-props/gradients.min.css" layer(base);
@import "../node_modules/open-props/animations.min.css" layer(base);

@layer normalize {
  :where(p, ul, ol, dl, h6) {
    font-size: inherit;
  }

  :focus-visible {
    --uno: "outline outline-2 outline-offset-2 outline-amber-500";
  }
}

@layer base {

  html:has(dialog[open]) {
    height: 100vh;
    overflow: hidden;
  }

  :where(a),
  :is(h1, h2, h3, h4, h5, h6, p):has(a) {
    --uno: "text-primary hover:text-primary-active";
  }

}

input,
textarea {
  --uno: "input-base";
}

textarea {
  min-height: 4rem;
}
</style>
