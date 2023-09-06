<script setup lang="ts">
import type { TActivityType } from '~/types/activity'

defineProps<{
  activeType: TActivityType | null
}>()
</script>

<template>
  <TextField
    placeholder="Title"
  />
  <textarea placeholder="How'd it go?" />

  <h2 mt-3>
    Activity stats
  </h2>
  <TextField type="number" placeholder="Duration (minutes)" pre-icon="i-mdi-clock" />
  <div v-if="activeType === 'cycling' || activeType === 'run' || activeType === 'swim' || activeType === 'walk'">
    <TextField type="number" placeholder="Distance (km)" pre-icon="i-mdi-ruler" />
  </div>

  <div v-if="activeType === 'golf'" grid gap-4>
    <TextField pre-icon="i-mdi-golf" type="number" placeholder="Holes played" />
    <TextField pre-icon="i-mdi-list-box" type="number" placeholder="Score" />
  </div>

  <div v-if="activeType === 'walk'">
    <TextField pre-icon="i-mdi-shoe-print" type="number" placeholder="Steps" />
  </div>

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
