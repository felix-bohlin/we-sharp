<script setup lang="ts">
import type { TActivityType } from '@/types/activity'

defineProps<{
  icon: TActivityType | string
}>()
</script>

<template>
  <span v-if="icon === 'ballsport'" text-secondary i-mdi-soccer />
  <span v-else-if="icon === 'cycling'" text-secondary i-mdi-bike-fast />
  <span v-else-if="icon === 'golf'" text-secondary i-mdi-golf />
  <span v-else-if="icon === 'strength'" text-secondary i-mdi-arm-flex />
  <span v-else-if="icon === 'martialarts'" text-secondary i-mdi-karate />
  <span v-else-if="icon === 'swim'" text-secondary i-mdi-swim />
  <span v-else-if="icon === 'walk'" text-secondary i-mdi-walk />
  <span v-else-if="icon === 'workout'" text-secondary i-mdi-human-handsup />
  <span v-else-if="icon === 'yoga'" text-secondary i-mdi-yoga />
  <span v-else-if="icon === 'run'" text-secondary i-mdi-run-fast />
  <span v-else text-secondary i-mdi-medal />
</template>
