<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <div
    class="bg-white @dark:bg-zinc-800 shadow-md @dark: shadow-lg py-4 ps-6 pe-6 rounded"
    :class="class"
  >
    <slot />
  </div>
</template>
