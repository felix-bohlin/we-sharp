<script setup lang="ts">
import type { TButtonSize, TButtonVariant } from '@/types/button'

defineProps<{
  icon?: string
  squared?: boolean
  size?: TButtonSize
  text?: string
  title?: string
  variant?: TButtonVariant
}>()

defineEmits(['click'])
</script>

<template>
  <button type="button" text-secondary :class="[variant ?? 'text', squared ? 'squared' : '', size ?? 'md']" :title="title || text || ''" @click="$emit('click')">
    <div v-if="icon && !$slots.default" :class="icon" />
    <slot />
    <span v-if="text" class="hidden">{{ text }}</span>
  </button>
</template>

<style scoped>
button {
  --uno: "grid place-items-center transition-all  text-xl p-0 leading-4 select-none rounded-full";

  &.filled {
    --uno: "bg-2 ring-color-1 hover:ring-1 hover:ring-color-1-hover";
  }

  &.outlined {
    --uno: "bg-transparent ring-1 ring-solid ring-zinc-500 hover:bg-zinc-400/10";
  }

  &.text {
    --uno: "bg-transparent ring-0 hover:bg-2";
  }

  &.sm {
    --uno: h-[30px] w-[30px];
  }

  &.md {
    --uno: h-[40px] w-[40px];
  }

  &.squared {
    --uno: rounded-xl;

    &.sm {
      --uno: h-[26.25px] w-[30px];
    }

    &.md {
      --uno: h-[35px] w-[40px];
    }

  }
}
</style>
