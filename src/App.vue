<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <RouterView />
</template>

<style>
@layer normalize, setup, themes, components;

@import "../node_modules/modern-normalize/modern-normalize.css" layer(normalize);
@import "../node_modules/open-props/normalize.min.css" layer(normalize);
@import "../node_modules/open-props/animations.min.css" layer(open-props);
@import "../node_modules/open-props/aspects.min.css" layer(setup);
@import "../node_modules/open-props/borders.min.css" layer(setup);
@import "../node_modules/open-props/colors.min.css" layer(setup);
@import "../node_modules/open-props/colors-hsl.min.css" layer(setup);
@import "../node_modules/open-props/fonts.min.css" layer(setup);
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
}

@layer themes {
  /* Light mode/default */
  :root {
    --brand-light: var(--violet-6);

    --text-1-light: var(--gray-8);
    --text-2-light: var(--gray-7);

    --surface-1-light: var(--gray-0);
    --surface-2-light: var(--gray-1);
    --surface-3-light: var(--gray-2);
    --surface-4-light: var(--gray-3);
  }

  :root {
    --brand: var(--brand-light);

    --text-1: var(--text-1-light);
    --text-2: var(--text-2-light);

    --surface-1: var(--surface-1-light);
    --surface-2: var(--surface-2-light);
    --surface-3: var(--surface-3-light);
    --surface-4: var(--surface-4-light);
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    :root {
      --brand-dark: var(--violet-3);

      --text-1-dark: var(--gray-3);
      --text-2-dark: var(--gray-5);

      --surface-1-dark: var(--gray-12);
      --surface-2-dark: var(--gray-11);
      --surface-3-dark: var(--gray-10);
      --surface-4-dark: var(--gray-9);
    }
    :root {
      --brand: var(--brand-dark);

      --text-1: var(--text-1-dark);
      --text-2: var(--text-2-dark);

      --surface-1: var(--surface-1-dark);
      --surface-2: var(--surface-2-dark);
      --surface-3: var(--surface-3-dark);
      --surface-4: var(--surface-4-dark);
    }
  }
}
</style>
