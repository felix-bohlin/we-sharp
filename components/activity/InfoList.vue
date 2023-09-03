<script setup lang="ts">
import type { TActivityDefault, TCycling, TGolf, TRun, TSwim, TWalk } from '@/types/activity'

const props = defineProps<{
  activity: TActivityDefault | TGolf | TCycling | TRun | TSwim | TWalk
}>()

const cyclingAverageSpeed = computed(() => {
  if (props.activity.type !== 'cycling')
    return

  const data = props.activity.data as TCycling['data']

  if (!data.distance || !data.duration)
    return

  const speedInKmPerHour = (data.distance / (data.duration / 60)).toFixed(1)

  const formattedSpeed = speedInKmPerHour.endsWith('.0')
    ? speedInKmPerHour.slice(0, -2)
    : speedInKmPerHour

  return formattedSpeed
})

const runAverageSpeed = computed(() => {
  if (props.activity.type !== 'run')
    return

  const data = props.activity.data as TRun['data']

  if (!data.distance || !data.duration)
    return

  const speedInMinPerKm = (data.duration / data.distance).toFixed(2)

  return speedInMinPerKm
})

const swimAverageSpeed = computed(() => {
  if (props.activity.type !== 'swim')
    return

  const data = props.activity.data as TSwim['data']

  if (!data.distance || !data.duration)
    return

  const paceInMeterPerSecond = (data.duration / data.distance).toFixed(1)

  const formattedPace = paceInMeterPerSecond.endsWith('.0')
    ? paceInMeterPerSecond.slice(0, -2)
    : paceInMeterPerSecond

  return formattedPace
})
</script>

<template>
  <dl grid="~ cols-[repeat(auto-fill,minmax(6ch,1fr))] col-span-full gap-2" m-0 list-none p-0>
    <ActivityInfoListItem term="Duration" :description="`${Math.round(activity?.data?.duration)}min`" />

    <!-- Cycling -->
    <template v-if="activity.type === 'cycling'">
      <ActivityInfoListItem v-if="activity.data.distance" term="Distance" :description="`${activity.data.distance.toFixed(1)}km`" />

      <ActivityInfoListItem v-if="activity?.data?.distance && activity.data.duration" term="Avg" :description="`${cyclingAverageSpeed}km/h`" />
    </template>

    <!-- Golf -->
    <template v-if="activity.type === 'golf'">
      <ActivityInfoListItem v-if="activity.data.holes" term="Holes" :description="activity.data.holes" />
      <ActivityInfoListItem v-if="activity.data.score" term="Score" :description="activity.data.score" />
    </template>

    <!-- Run -->
    <template v-if="activity.type === 'run'">
      <template v-if="activity.data.distance">
        <ActivityInfoListItem term="Distance" :description="`${activity.data.distance.toFixed(1)}km`" />
        <ActivityInfoListItem term="Pace" :description="`${runAverageSpeed}/km`" />
      </template>
    </template>

    <!-- Swim -->
    <template v-if="activity.type === 'swim'">
      <template v-if="activity.data.distance">
        <ActivityInfoListItem term="Distance" :description="`${activity.data.distance.toFixed(1)}km`" />
        <ActivityInfoListItem term="Pace" :description="`${swimAverageSpeed}m/s`" />
      </template>
    </template>

    <!-- Walk -->
    <template v-if="activity.type === 'walk'">
      <ActivityInfoListItem v-if="activity.data.distance" term="Distance" :description="`${activity.data.distance.toFixed(1)}km`" />
      <ActivityInfoListItem v-if="activity.data.steps" term="Steps" :description="`${activity.data.steps}`" />
    </template>

    <ActivityInfoListItem v-if="activity?.data?.weather" term="Weather">
      <IconsWeather text-xl :icon="activity.data.weather" />
    </ActivityInfoListItem>

    <ActivityInfoListItem v-if="activity?.data?.mood" term="Mood">
      <IconsMood :icon="activity.data.mood" />
    </ActivityInfoListItem>
  </dl>
</template>
