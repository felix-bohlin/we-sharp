<script setup lang="ts">
import { invoke, useEventListener } from '@vueuse/core'
import { ref } from 'vue'

const { showDrawer = true } = defineProps<{
  showDrawer: boolean
}>()

const emit = defineEmits(['onClose'])

</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="showDrawer" transition-opacity duration-250 fixed inset-0>
        <div absolute inset-0 z-0 bg-transparent backdrop-blur-sm cursor-pointer of-y-scroll of-x-hidden scrollbar-hide
          overscroll-none @click="$emit('onClose')" />
        <div class="drawer-panel" absolute rounded-lg bg="zinc-50 @dark:zinc-800" shadow="md @dark:xl" z-10 bottom-5
          left-2.5 right-2.5>
          <div grid gap-4 py-6 ps-4 pe-4 :style="{
            height: showDrawer ? '70dvh' : 'auto',

          }">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.drawer-panel {
  transition: all .3s ease-out;
}

:is(.v-enter-active,
  .v-leave-active) {
  opacity: 1;

}

:is(.v-enter-active,
  .v-leave-active) .drawer-panel {
  translate: 0 0;
}

:is(.v-enter-from,
  .v-leave-to) {
  opacity: 0;

}

:is(.v-enter-from,
  .v-leave-to) .drawer-panel {
  translate: 0 100%
}
</style>
