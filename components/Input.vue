<script setup lang="ts">
import type { TInputType } from '~/types/input'

defineProps<{
  placeholder?: string
  preIcon?: string
  type?: TInputType
}>()
</script>

<template>
  <div relative>
    <div v-if="preIcon" :class="preIcon" absolute bottom-0 left-2 top="1/2" un-translate="y-[-50%]" />
    <input :p="preIcon ? 's-8 2' : '2'" :type="type ?? 'text'" :placeholder="placeholder" :inputmode="type === 'number' ? 'decimal' : 'none'">
  </div>
</template>
