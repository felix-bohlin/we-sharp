<script setup lang="ts">
import type { TActivityType } from '@/types/activity'

defineProps<{
  icon: TActivityType | string
}>()
</script>

<template>
  <span v-if="icon === 'ballsport'" i-mdi-soccer text-secondary />
  <span v-else-if="icon === 'cycling'" i-mdi-bike-fast text-secondary />
  <span v-else-if="icon === 'golf'" i-mdi-golf text-secondary />
  <span v-else-if="icon === 'strength'" i-mdi-arm-flex text-secondary />
  <span v-else-if="icon === 'martialarts'" i-mdi-karate text-secondary />
  <span v-else-if="icon === 'swim'" i-mdi-swim text-secondary />
  <span v-else-if="icon === 'walk'" i-mdi-walk text-secondary />
  <span v-else-if="icon === 'workout'" i-mdi-human-handsup text-secondary />
  <span v-else-if="icon === 'yoga'" i-mdi-yoga text-secondary />
  <span v-else-if="icon === 'run'" i-mdi-run-fast text-secondary />
  <span v-else i-mdi-medal text-secondary />
</template>
