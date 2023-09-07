<script setup lang="ts">
import type { TActivityId } from '@/types/activity'

defineProps<{
  icon: TActivityId | string
}>()
</script>

<template>
  <span v-if="icon === activityData.ballsport.id" :class="activityData.ballsport.icon" text-secondary />
  <span v-else-if="icon === activityData.cycling.id" :class="activityData.cycling.icon" text-secondary />
  <span v-else-if="icon === activityData.golf.id" :class="activityData.golf.icon" text-secondary />
  <span v-else-if="icon === activityData.strength.id" :class="activityData.strength.icon" text-secondary />
  <span v-else-if="icon === activityData.martialArts.id" :class="activityData.martialArts.icon" text-secondary />
  <span v-else-if="icon === activityData.swim.id" :class="activityData.swim.icon" text-secondary />
  <span v-else-if="icon === activityData.walk.id" :class="activityData.walk.icon" text-secondary />
  <span v-else-if="icon === activityData.workout.id" :class="activityData.workout.icon" text-secondary />
  <span v-else-if="icon === activityData.yoga.id" :class="activityData.yoga.icon" text-secondary />
  <span v-else-if="icon === activityData.run.id" :class="activityData.run.icon" text-secondary />
  <span v-else i-mdi-medal text-secondary />
</template>
