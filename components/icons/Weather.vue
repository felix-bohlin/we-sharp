<script setup lang="ts">
import type { TWeather } from '@/types/activity'

defineProps<{
  icon?: TWeather | string
}>()
</script>

<template>
  <span v-if="icon === 'cloudy'" i-mdi-weather-cloudy />
  <span v-else-if="icon === 'rainy'" i-mdi-weather-rainy />
  <span v-else-if="icon === 'sunny'" i-mdi-weather-sunny />
  <span v-else-if="icon === 'windy'" i-mdi-weather-windy />
  <span v-else-if="icon === 'snowy'" i-mdi-weather-snowy />
  <span v-else-if="icon === 'thunderstorm'" i-mdi-weather-lightning />
  <span v-else-if="icon === 'mixed'" i-mdi-weather-partly-cloudy />
  <span v-else i-mdi-weather-partly-cloudy />
</template>
