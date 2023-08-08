<script setup lang="ts">
import { invoke, useEventListener } from '@vueuse/core'
import { ref } from 'vue'

const { showDrawer = true } = defineProps<{
  showDrawer: boolean
}>()

const emit = defineEmits(['onClose'])

const drawerElement = ref<HTMLDivElement>()

// Pull down to close
// https://github.com/elk-zone/elk/pull/2290/files
const { dragging, dragDistance } = invoke(() => {
  const triggerDistance = 120
  let scrollTop = 0
  let beforeTouchPointY = 0
  const dragDistance = ref(0)
  const dragging = ref(false)

  useEventListener(drawerElement, 'scroll', (e: Event) => {
    scrollTop = (e.target as HTMLDivElement).scrollTop
    // Prevent the page from scrolling when the drawer is being dragged.
    if (dragDistance.value > 0)
      (e.target as HTMLDivElement).scrollTop = 0
  }, { passive: true })

  useEventListener(drawerElement, 'touchstart', (e: TouchEvent) => {
    if (!showDrawer)
      return
    beforeTouchPointY = e.touches[0].pageY
    dragDistance.value = 0
  }, { passive: true })

  useEventListener(drawerElement, 'touchmove', (e: TouchEvent) => {
    if (!showDrawer)
      return
    // Do not move the entire drawer when its contents are not scrolled to the top.
    if (scrollTop > 0 && dragDistance.value <= 0) {
      dragging.value = false
      beforeTouchPointY = e.touches[0].pageY
      return
    }
    const { pageY } = e.touches[0]
    // Calculate the drag distance.
    dragDistance.value += pageY - beforeTouchPointY
    if (dragDistance.value < 0)
      dragDistance.value = 0
    beforeTouchPointY = pageY
    // Marked as dragging.
    if (dragDistance.value > 1)
      dragging.value = true
    // Prevent the page from scrolling when the drawer is being dragged.
    if (dragDistance.value > 0) {
      if (e?.cancelable && e?.preventDefault)
        e.preventDefault()
      e?.stopPropagation()
    }
  }, { passive: true })

  useEventListener(drawerElement, 'touchend', () => {
    if (!showDrawer)
      return

    // Close the drawer when the drag distance exceeds the trigger distance.
    if (dragDistance.value >= triggerDistance)
      emit('onClose')

    dragging.value = false
  }, { passive: true })

  return {
    dragDistance,
    dragging,
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-250 ease-out"
      enter-from-class="opacity-0 children:(translate-y-full)"
      enter-to-class="opacity-100 children:(translate-y-0)"
      leave-active-class="transition duration-250 ease-in"
      leave-from-class="opacity-100 children:(translate-y-0)"
      leave-to-class="opacity-0 children:(translate-y-full)"
    >
      <div v-show="showDrawer" fixed inset-0>
        <div
          absolute inset-0 z-0 bg-transparent backdrop-blur-sm cursor-pointer of-y-scroll of-x-hidden scrollbar-hide overscroll-none
          @click="$emit('onClose')"
        />
        <div
          ref="drawerElement"
          absolute rounded-t-xl bg="zinc-50 @dark:zinc-800" shadow="md @dark:xl" z-10 transition-top
          :style="{
            bottom: 0,
            left: 0,
            right: 0,
            top: showDrawer ? '20dvh' : '100%',
            transform: dragging ? `translateY(${dragDistance}px)` : '',
          }"
          :class="{
            'duration-0': dragging,
            'duration-250': !dragging,
          }"
          transition="transform ease-in"
          class="before:content-[''] before:w-[min(20cqw,100px)] before:h-1.5 before:bg-zinc-100 before:@dark:bg-zinc-400/50 before:rounded-full before:absolute before:top-2 before:left-1/2 before:transform before:-translate-x-1/2"
        >
          <div
            grid gap-4 py-6 ps-4
            pe-4
            :style="{
              height: showDrawer ? '80dvh' : 'auto',

            }"
          >
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
