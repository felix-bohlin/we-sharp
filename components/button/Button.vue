<script setup lang="ts">
import type { TButtonSize, TButtonVariant } from '@/types/button'

defineProps<{
  size?: TButtonSize
  variant?: TButtonVariant
}>()

defineEmits(['click'])
</script>

<template>
  <button
    type="button"
    :class="[variant ?? 'text', size ?? 'md']"
    @click="$emit('click')"
  >
    <span>
      <slot name="before" />
    </span>

    <slot />

    <span pointer-events-none><slot name="after" /></span>
  </button>
</template>

<style scoped>
button {
  --uno: "grid place-items-center transition-all rounded-xl text-main select-none";

  &.filled {
    --uno: "bg-zinc-200 ring-zinc-800 hover:ring-1 @dark:bg-zinc-400/10 @dark:hover:ring-zinc-600";
  }

  &.outlined {
    --uno: "bg-transparent ring-1 ring-solid ring-zinc-600 hover:bg-zinc-400/10";
  }

  &.text {
    --uno: "bg-transparent ring-0 hover:bg-zinc-200 @dark:hover:bg-zinc-400/10";
  }

  &.sm {
    --uno: text-sm py-2 ps-3 pe-3;
  }

  &.md {
    --uno: text-base py-2 ps-4 pe-4;
  }

  &.lg {
    --uno: text-lg py-3 ps-6 pe-6;
  }
}
</style>
