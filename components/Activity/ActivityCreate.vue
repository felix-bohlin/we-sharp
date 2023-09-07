<script setup lang="ts">
import type { TActivityId } from '~/types/activity'

const props = defineProps<{
  activeType: TActivityId | null
}>()

const activitySuffix = computed(() => activityData[props.activeType || 'default'].newActivityTitle)

const title = computed(() => {
  const hour = new Date().getHours()

  let timeOfDay = ''

  if (hour >= 5 && hour < 11)
    timeOfDay = 'Morning'

  else if (hour >= 11 && hour < 14)
    timeOfDay = 'Lunch'

  else if (hour >= 14 && hour < 17)
    timeOfDay = 'Afternoon'

  else if (hour >= 18 && hour < 22)
    timeOfDay = 'Evening'

  else
    timeOfDay = 'Night'

  return `${timeOfDay} ${activitySuffix.value}`
})
</script>

<template>
  <TextField
    placeholder="Title"
    :value="title"
  />
  <TextField type="number" placeholder="Duration (minutes)" pre-icon="i-mdi-clock" />

  <h2 mt-3>
    Optional stats
  </h2>

  <textarea placeholder="How'd it go?" />

  <!-- Cycling | Run | Swim | Walk -->
  <div v-if="activeType === activityData.cycling.id || activeType === activityData.run.id || activeType === activityData.swim.id || activeType === activityData.walk.id">
    <TextField type="number" placeholder="Distance (km)" pre-icon="i-mdi-ruler" />
  </div>

  <!-- Golf -->
  <div v-if="activeType === activityData.golf.id" grid gap-4>
    <TextField pre-icon="i-mdi-golf" type="number" placeholder="Holes played" />
    <TextField pre-icon="i-mdi-list-box" type="number" placeholder="Score" />
  </div>

  <!-- Walk -->
  <div v-if="activeType === activityData.walk.id">
    <TextField pre-icon="i-mdi-shoe-print" type="number" placeholder="Steps" />
  </div>

  <!-- Mood -->
  <div>
    <h3 opacity-75>
      How did your activity feel?
    </h3>
    <div mt-1 flex gap-2>
      <!-- <label relative class="h-[30px] w-[30px]">
            <input type="radio" name="mood" value="terrible" absolute h-0 w-0 opacity-0>
            <IconsMood block text-xl icon="terrible" />
          </label>
          <label>
            <input type="radio" name="mood" value="bad">
          </label> -->
      <ButtonIcon modifier="danger" variant="filled" title="Terrible!">
        <IconsMood icon="terrible" />
      </ButtonIcon>

      <ButtonIcon modifier="warning" variant="filled" title="Not so good">
        <IconsMood icon="bad" />
      </ButtonIcon>

      <ButtonIcon variant="filled" title="Ok">
        <IconsMood icon="neutral" />
      </ButtonIcon>

      <ButtonIcon modifier="info" variant="filled" title="Good">
        <IconsMood icon="good" />
      </ButtonIcon>

      <ButtonIcon modifier="success" variant="filled" title="Super!">
        <IconsMood icon="great" />
      </ButtonIcon>
    </div>
  </div>
</template>
