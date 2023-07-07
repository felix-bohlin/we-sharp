<script setup lang="ts">
import { computed } from "vue"

import Beaming from "./icons/emoji/Beaming.vue"
import Grin from "./icons/emoji/Grin.vue"
import StarStruck from "./icons/emoji/StarStruck.vue"
import Thinking from "./icons/emoji/Thinking.vue"
import UpsideDown from "./icons/emoji/UpsideDown.vue"
import WithSunGlasses from "./icons/emoji/WithSunGlasses.vue"

const props = defineProps<{
  image?: string
}>()

const randomEmoji = computed(() => {
  const emojis = [
    Beaming,
    Grin,
    StarStruck,
    Thinking,
    UpsideDown,
    WithSunGlasses,
  ]

  return emojis[Math.floor(Math.random() * emojis.length)]
})

const randomBlob = computed(() => {
  const randomNumber = Math.floor(Math.random() * 6)
  return randomNumber === 0 ? "100vmax" : `var(--radius-blob-${randomNumber})`
})

const randomGradient = computed(() => {
  const gradients = [
    1, 2, 3, 4, 5, 7, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30,
  ]

  // return random from array
  const randomGradient = Math.floor(Math.random() * gradients.length)

  return `var(--gradient-${randomGradient + 1})`
})
</script>

<template>
  <img v-if="image" :src="image" class="avatar" />

  <div v-else class="avatar">
    <component :is="randomEmoji" />
  </div>
</template>

<style scoped>
.avatar {
  /* background-color: var(--brand); */
  background-image: v-bind(randomGradient);
  border-radius: v-bind(randomBlob);
  color: var(--card-bg);
  display: grid;
  font-weight: 700;
  height: 40px;
  margin: 0;
  place-items: center;
  text-transform: uppercase;
  width: 100%;

  & svg {
    border-radius: 100vmax;
    filter: drop-shadow(0px 2px 5px var(--gray-12));
    width: var(--size-5);
  }
}
</style>
