<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <div
    bg-surface-1
    shadow="md @dark: lg"
    p="y-3 s-4 e-4 @sm:y-4 @sm:s-6 @sm:e-6"
    class="rounded-xl"
    :class="class"
  >
    <slot />
  </div>
</template>
