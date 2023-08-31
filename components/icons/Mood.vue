<script setup lang="ts">
import type { TMood } from '~/types/activity'

defineProps<{
  icon: TMood
}>()
</script>

<template>
  <span v-if="icon === 'horrible'" i-fluent-emoji-sad-24-regular />
  <span v-else-if="icon === 'bad'" i-fluent-emoji-sad-slight-24-regular />
  <span v-else-if="icon === 'neutral'" i-fluent-emoji-meh-24-regular />
  <span v-else-if="icon === 'good'" i-fluent-emoji-24-regular />
  <span v-else-if="icon === 'great'" i-fluent-emoji-sparkle-24-regular />
</template>
