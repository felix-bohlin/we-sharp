<script setup lang="ts">
import type { TWeather } from '@/types/activity'

defineProps<{
  icon?: TWeather | string
}>()
</script>

<template>
  <span v-if="icon === 'cloudy'" i-fluent-weather-cloudy-24-regular />
  <span v-else-if="icon === 'rainy'" i-fluent-weather-rain-24-regular />
  <span v-else-if="icon === 'sunny'" i-fluent-weather-sunny-24-regular />
  <span v-else-if="icon === 'windy'" i-fluent-weather-squalls-24-regular />
  <span v-else-if="icon === 'snowy'" i-fluent-weather-snow-24-regular />
  <span v-else-if="icon === 'thunderstorm'" i-fluent-weather-thunderstorm-24-regular />
  <span v-else-if="icon === 'mixed'" i-fluent-weather-partly-cloudy-day-24-regular />
</template>
