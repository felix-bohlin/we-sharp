<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <div :class="class">
    <slot />
  </div>
</template>

<style scoped>
div {
  --card-bg: hsl(var(--gray-9-hsl) / 70%);

  @media (prefers-color-scheme: light) {
    --card-bg: var(--surface-1);
  }

  background-color: var(--card-bg);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-2);

  padding-block: var(--size-3);
  padding-inline: var(--size-5);
}
</style>
