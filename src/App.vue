<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <RouterView />
</template>

<style>
@layer normalize, setup, components;

@import "../node_modules/modern-normalize/modern-normalize.css" layer(normalize);
@import "../node_modules/open-props/normalize.min.css" layer(normalize);

@import "../node_modules/open-props/gradients.min.css" layer(setup);

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
</style>
