<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <div
    bg="white @dark:zinc-800"
    shadow="md @dark: lg"
    p="y-4 s-6 e-6"
    class="rounded"
    :class="class"
  >
    <slot />
  </div>
</template>
