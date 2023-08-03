<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@layer normalize,
base,
components;

@import "../node_modules/modern-normalize/modern-normalize.css" layer(normalize);
@import "../node_modules/open-props/gradients.min.css" layer(base);

@layer normalize {
  :where(p, ul, ol, dl, h6) {
    font-size: inherit;
  }

  :focus-visible {
    --uno: "outline outline-2 outline-offset-2 outline-amber-500";
  }
}

@layer base {

  :where(a),
  :is(h1, h2, h3, h4, h5, h6, p):has(a) {
    --uno: "text-amber-500 hover:text-amber-700";
  }

}

input,
textarea {
  --uno: "ring-zinc-400 @dark:ring-zinc-700 ring-1 bg-slate-50 @dark:bg-zinc-900 text-inherit rounded";
}

textarea {
  min-height: 4rem;
}
</style>
