<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <RouterView />
</template>

<style>
@layer normalize, setup, base, components;

@import "../node_modules/modern-normalize/modern-normalize.css" layer(normalize);
@import "../node_modules/open-props/normalize.min.css" layer(normalize);
@import "../node_modules/open-props/animations.min.css" layer(open-props);
@import "../node_modules/open-props/aspects.min.css" layer(setup);
@import "../node_modules/open-props/borders.min.css" layer(setup);
@import "../node_modules/open-props/colors.min.css" layer(setup);
@import "../node_modules/open-props/colors-hsl.min.css" layer(setup);
@import "../node_modules/open-props/easings.min.css" layer(setup);
/* @import "../node_modules/open-props/fonts.min.css" layer(setup); */
@import "../node_modules/open-props/gradients.min.css" layer(setup);
@import "../node_modules/open-props/shadows.min.css" layer(setup);
@import "../node_modules/open-props/sizes.min.css" layer(setup);

@layer normalize {
  :where(p, ul, ol, dl, h6) {
    font-size: inherit;
  }

  :where(a) {
    margin: 0;
    padding: 0;
  }

  :focus-visible {
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 2px;
  }
}

@layer base {
  @media (prefers-color-scheme: light) {
    body {
      background:
        linear-gradient(90deg, var(--surface-1) 21px, transparent 1%) center,
        linear-gradient(var(--surface-1) 21px, transparent 1%) center,
        gray;
      background-size: 22px 22px;
    }
  }
}
</style>
