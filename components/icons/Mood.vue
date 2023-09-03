<script setup lang="ts">
import type { TMood } from '~/types/activity'

defineProps<{
  icon: TMood
}>()
</script>

<template>
  <span v-if="icon === 'terrible'" i-mdi-emoticon-dead />
  <span v-else-if="icon === 'bad'" i-mdi-emoticon-confused />
  <span v-else-if="icon === 'neutral'" i-mdi-emoticon-neutral />
  <span v-else-if="icon === 'good'" i-mdi-emoticon-happy />
  <span v-else-if="icon === 'great'" i-mdi-emoticon-cool />
</template>
