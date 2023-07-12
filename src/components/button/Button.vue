<script setup lang="ts">
import type { TButtonVariant, TButtonSize } from "@/types/button"

defineProps<{
  size?: TButtonSize
  variant?: TButtonVariant
}>()

defineEmits(["click"])
</script>

<template>
  <button
    @click="$emit('click')"
    type="button"
    :class="`${variant ?? 'text'} ${size ?? 'medium'}`"
  >
    <span>
      <slot name="before" />
    </span>

    <slot />

    <span><slot name="after" /></span>
  </button>
</template>

<style scoped>
button {
  --uno: grid place-items-center transition-all rounded text-xl p-2
    text-zinc-800 @dark:text-zinc-200;

  &.filled {
    --uno: "bg-zinc-200 ring-zinc-800 hover:ring-1 @dark:hover:ring-zinc-600";
  }

  &.outlined {
    --uno: "bg-transparent ring-1 ring-solid ring-zinc-600 hover:bg-zinc-400/10";
  }

  &.text {
    --uno: "bg-transparent ring-0 hover:bg-zinc-200 @dark:hover:bg-zinc-400/10";
  }

  &.small {
    --uno: text-sm;
  }

  &.medium {
    --uno: text-base;
  }

  &.large {
    --uno: text-lg;
  }
}
</style>
