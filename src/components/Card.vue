<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <div
    class="bg-zinc-50 @dark:bg-zinc-900 shadow-md py-4 ps-6 pe-6 rounded-2xl"
    :class="class"
  >
    <slot />
  </div>
</template>
