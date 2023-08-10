<script setup lang="ts">
import type { TButtonSize, TButtonVariant } from '@/types/button'

defineProps<{
  rounded?: boolean
  size?: TButtonSize
  text?: string
  variant?: TButtonVariant
}>()

defineEmits(['click'])
</script>

<template>
  <button type="button" :class="[variant ?? 'text', rounded ? 'rounded' : '', size ?? 'md']" @click="$emit('click')">
    <slot />
    <span v-if="text" class="hidden">{{ text }}</span>
  </button>
</template>

<style scoped>
button {
  --uno: "grid place-items-center transition-all rounded text-xl p-0 text-main leading-4";

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
    --uno: h-[26.25px] w-[30px];
  }

  &.md {
    --uno: h-[35px] w-[40px];
  }

  &.rounded {
    --uno: rounded-full;

    &.sm {
      --uno: h-[30px] w-[30px];
    }

    &.md {
      --uno: h-[40px] w-[40px];
    }
  }
}
</style>
