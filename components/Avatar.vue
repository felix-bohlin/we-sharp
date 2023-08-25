<script setup lang="ts">
import Beaming from '@/components/icons/emoji/Beaming.vue'
import Grin from '@/components/icons/emoji/Grin.vue'
import StarStruck from '@/components/icons/emoji/StarStruck.vue'
import Thinking from '@/components/icons/emoji/Thinking.vue'
import UpsideDown from '@/components/icons/emoji/UpsideDown.vue'
import WithSunglasses from '@/components/icons/emoji/WithSunglasses.vue'

defineProps<{
  image?: string
}>()

const randomEmoji = computed(() => {
  const emojis = [
    Beaming,
    Grin,
    StarStruck,
    Thinking,
    UpsideDown,
    WithSunglasses,
  ]

  return emojis[Math.floor(Math.random() * emojis.length)]
})

const randomBlob = computed(() => {
  const blobs = [
    '30% 70% 70% 30% / 53% 30% 70% 47%',
    '53% 47% 34% 66% / 63% 46% 54% 37%',
    '37% 63% 56% 44% / 49% 56% 44% 51%',
    '63% 37% 37% 63% / 43% 37% 63% 57%',
    '49% 51% 48% 52% / 57% 44% 56% 43%',
  ]

  return blobs[Math.floor(Math.random() * blobs.length)]
})

const randomGradient = computed(() => {
  // gradients are imported in App.vue from Open-Props.
  const gradients = [
    1, 2, 3, 4, 5, 7, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30,
  ]

  return `var(--gradient-${Math.floor(Math.random() * gradients.length) + 1})`
})
</script>

<template>
  <img
    v-if="image"
    :src="image"
    class="blob grid place-items-center aspect-square m-0 font-bold w-full"
  >

  <div
    v-else
    class="blob grid place-items-center aspect-square m-0 font-bold w-full"
  >
    <component
      :is="randomEmoji"
      class="aspect-square rounded-full h-[80%] w-[80%] drop-shadow"
    />
  </div>
</template>

<style scoped>
.blob {
  background-image: v-bind(randomGradient);
  border-radius: v-bind(randomBlob);
}
</style>
