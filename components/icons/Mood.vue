<script setup lang="ts">
import type { TMood } from '~/types/activity'

defineProps<{
  icon: TMood
}>()
</script>

<template>
  <span v-if="icon === 'terrible'" text-secondary i-mdi-emoticon-dead />
  <span v-else-if="icon === 'bad'" text-secondary i-mdi-emoticon-confused />
  <span v-else-if="icon === 'neutral'" text-secondary i-mdi-emoticon-neutral />
  <span v-else-if="icon === 'good'" text-secondary i-mdi-emoticon-happy />
  <span v-else-if="icon === 'great'" text-secondary i-mdi-emoticon-cool />
</template>
