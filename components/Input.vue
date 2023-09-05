<script setup lang="ts">
import type { TInputType } from '~/types/input'

defineProps<{
  placeholder?: string
  type?: TInputType
}>()
</script>

<template>
  <div relative>
    <slot />
    <input :p="$slots.default ? 's-8 2' : '2'" :type="type ?? 'text'" :placeholder="placeholder" :pattern="type === 'number' ? '\d*' : ''">
  </div>
</template>
