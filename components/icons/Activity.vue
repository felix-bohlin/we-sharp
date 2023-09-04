<script setup lang="ts">
import type { TActivityType } from '@/types/activity'

defineProps<{
  icon: TActivityType | string
}>()
</script>

<template>
  <span v-if="icon === 'ballsport'" i-mdi-soccer />
  <span v-else-if="icon === 'cycling'" i-mdi-bike-fast />
  <span v-else-if="icon === 'golf'" i-mdi-golf />
  <span v-else-if="icon === 'gym'" i-mdi-dumbbell />
  <span v-else-if="icon === 'martialarts'" i-mdi-gymnastics />
  <span v-else-if="icon === 'swim'" i-mdi-swim />
  <span v-else-if="icon === 'walk'" i-mdi-walk />
  <span v-else-if="icon === 'yoga'" i-mdi-yoga />
  <span v-else-if="icon === 'run'" i-mdi-run-fast />
  <span v-else i-mdi-medal />
</template>
