<script setup lang="ts">
import { format } from 'node:path'
import type { TActivity, TActivityDefault, TCycling, TGolf, TRun, TSwim, TWalk } from '@/types/activity'

const props = defineProps<{
  activity: TActivityDefault | TGolf | TCycling | TRun | TSwim | TWalk
}>()

const averageSpeed = computed(() => {
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
</script>

<template>
  <dl grid="~ cols-[repeat(auto-fill,minmax(6ch,1fr))] col-span-full gap-2" m-0 list-none p-0>
    <ActivityInfoListItem term="Duration" :description="`${activity?.data?.duration}min`" />

    <template v-if="activity.type === 'cycling'">
      <ActivityInfoListItem v-if="activity?.data?.distance" term="Distance" :description="`${activity?.data?.distance}km`" />

      <ActivityInfoListItem v-if="activity?.data?.distance && activity.data.duration" term="Avg speed" :description="`${averageSpeed}km/h`" />
    </template>

    <template v-if="activity.type === 'golf'" />
    <template v-if="activity.type === 'run'" />
    <template v-if="activity.type === 'swim'" />
    <template v-if="activity.type === 'walk'" />

    <ActivityInfoListItem v-if="activity?.data?.weather" term="Weather">
      <IconsWeather text-xl :icon="activity.data.weather" />
    </ActivityInfoListItem>

    <ActivityInfoListItem v-if="activity?.data?.mood" term="Mood">
      <IconsMood :icon="activity.data.mood" />
    </ActivityInfoListItem>
  </dl>
</template>
