<script setup lang="ts">
import type { TWeather } from '@/types/activity'

defineProps<{
  icon?: TWeather | string
}>()
</script>

<template>
  <span v-if="icon === 'cloudy'" text-secondary i-bi-cloud-fill />
  <span v-else-if="icon === 'rainy'" text-secondary i-bi-cloud-drizzle-fill />
  <span v-else-if="icon === 'sunny'" text-secondary i-bi-sun-fill />
  <span v-else-if="icon === 'windy'" text-secondary i-mdi-weather-windy />
  <span v-else-if="icon === 'snowy'" text-secondary i-bi-cloud-snow-fill />
  <span v-else-if="icon === 'thunderstorm'" text-secondary i-bi-cloud-lightning-fill />
  <span v-else-if="icon === 'mixed'" text-secondary i-bi-cloud-sun-fill />
</template>
