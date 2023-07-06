<script setup lang="ts">
import { TActivityType } from "@/types/activity"
import Ballsport from "./icons/Ballsport.vue"
import Bike from "./icons/Bike.vue"
import Climbing from "./icons/Climbing.vue"
import Dumbell from "./icons/Dumbell.vue"
import Golf from "./icons/Golf.vue"
import MartialArts from "./icons/MartialArts.vue"
import Run from "./icons/Run.vue"
import Swim from "./icons/Swim.vue"
import Tennis from "./icons/Tennis.vue"
import Walk from "./icons/Walk.vue"
import Yoga from "./icons/Yoga.vue"

defineProps<{
  icon: TActivityType
}>()
</script>

<template>
  <Ballsport v-if="icon === 'ballsport'" />
  <Bike v-else-if="icon === 'bike'" />
  <Climbing v-else-if="icon === 'climbing'" />
  <Dumbell v-else-if="icon === 'dumbell'" />
  <Golf v-else-if="icon === 'golf'" />
  <MartialArts v-else-if="icon === 'martialArts'" />
  <Swim v-else-if="icon === 'swim'" />
  <Tennis v-else-if="icon === 'tennis'" />
  <Walk v-else-if="icon === 'walk'" />
  <Yoga v-else-if="icon === 'yoga'" />
  <Run v-else />
</template>
