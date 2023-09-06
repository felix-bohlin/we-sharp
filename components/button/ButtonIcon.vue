<script setup lang="ts">
import type { TButtonSize, TButtonVariant } from '@/types/button'

defineProps<{
  icon?: string
  modifier?: 'success' | 'warning' | 'danger' | 'info'
  squared?: boolean
  size?: TButtonSize
  text?: string
  title?: string
  variant?: TButtonVariant
}>()

defineEmits(['click'])
</script>

<template>
  <button type="button" :class="[variant ?? 'text', squared ? 'squared' : '', size ?? 'md', modifier ?? 'text-secondary']" :title="title || text || ''" @click="$emit('click')">
    <div v-if="icon && !$slots.default" :class="icon" />
    <slot />
    <span v-if="text" class="hidden">{{ text }}</span>
  </button>
</template>

<style scoped>
button {
  --uno: "grid place-items-center transition-all text-xl p-0 leading-4 select-none rounded-full";

  &.filled {
    --uno: 'bg-2 ring-color-1 hover:ring-1 hover:ring-color-1-hover';

    &.success {
      --uno: 'text-green/40 bg-green/10 hover:bg-green/20 hover:ring-green/20';
    }

    &.warning {
      --uno: 'text-yellow/40 bg-yellow/10 hover:bg-yellow/20 hover:ring-yellow/20';
    }

    &.danger {
      --uno: 'text-red/40 bg-red/10 hover:bg-red/20 hover:ring-red/20';
    }

    &.info {
      --uno: 'text-blue/40 bg-blue/10 hover:bg-blue/20 hover:ring-blue/20';
    }
  }

  &.outlined {
    --uno: "bg-transparent ring-1 ring-solid ring-zinc-500 hover:bg-zinc-400/10";
  }

  &.text {
    --uno: "bg-transparent ring-0 hover:bg-2";

    &.success {
      --uno: '';
    }

    &.warning {
      --uno: 'text-yellow/40 hover:bg-yellow/30 hover:ring-yellow/30';
    }

    &.danger {
      --uno: '';
    }

    &.info {
      --uno: '';
    }
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
