<script setup lang="ts">
import type { TButtonVariant } from '@/types/button'

defineProps<{
  text?: string
  variant?: TButtonVariant
}>()

defineEmits(['click'])
</script>

<template>
  <button type="button" :class="variant ?? 'text'" @click="$emit('click')">
    <slot />
    <span v-if="text" class="hidden">{{ text }}</span>
  </button>
</template>

<style scoped>
button {
  --uno: grid place-items-center transition-all w-[40px] h-[35px] rounded text-xl p-0 text-zinc-800 @dark: text-zinc-200 leading-4;

  &.filled {
    --uno: "bg-zinc-200 ring-zinc-800 hover:ring-1 @dark:bg-zinc-400/10 @dark:hover:ring-zinc-600";
  }

  &.outlined {
    --uno: "bg-transparent ring-1 ring-solid ring-zinc-600 hover:bg-zinc-400/10";
  }

  &.text {
    --uno: "bg-transparent ring-0 hover:bg-zinc-200 @dark:hover:bg-zinc-400/10";
  }
}
</style>
