<script setup lang="ts">
import type { TMood } from '~/types/activity'

defineProps<{
  icon: TMood
}>()
</script>

<template>
  <span v-if="icon === 'terrible'" i-mdi-emoticon-dead class="text-red/40" />
  <span v-else-if="icon === 'bad'" i-mdi-emoticon-confused class="text-yellow/40" />
  <span v-else-if="icon === 'neutral'" i-mdi-emoticon-neutral class="text-secondary" />
  <span v-else-if="icon === 'good'" i-mdi-emoticon-happy class="text-blue/40" />
  <span v-else-if="icon === 'great'" i-mdi-emoticon-cool class="text-green/40" />
</template>
