<script setup lang="ts">
import type { TWeather } from '@/types/activity'

defineProps<{
  icon?: TWeather | string
}>()
</script>

<template>
  <span v-if="icon === 'cloudy'" i-bi-cloud-fill text-secondary />
  <span v-else-if="icon === 'rainy'" i-bi-cloud-drizzle-fill text-secondary />
  <span v-else-if="icon === 'sunny'" i-bi-sun-fill text-secondary />
  <span v-else-if="icon === 'windy'" i-mdi-weather-windy text-secondary />
  <span v-else-if="icon === 'snowy'" i-bi-cloud-snow-fill text-secondary />
  <span v-else-if="icon === 'thunderstorm'" i-bi-cloud-lightning-fill text-secondary />
  <span v-else-if="icon === 'mixed'" i-bi-cloud-sun-fill text-secondary />
</template>
