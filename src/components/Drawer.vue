<script setup lang="ts">
import { useScrollLock } from '@vueuse/core'
import { watch } from 'vue'
import ButtonIcon from '@/components/button/ButtonIcon.vue'

const props = defineProps<{
  showDrawer: boolean
  title?: string
}>()

defineEmits(['onClose'])

const scrollLock = useScrollLock(document.body)

watch(() => props.showDrawer, () => scrollLock.value = props.showDrawer)
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="showDrawer" fixed inset-0>
        <div
          absolute inset-0 z-0 bg-transparent backdrop-blur-sm cursor-pointer of-y-scroll of-x-hidden scrollbar-hide
          overscroll-none @click="$emit('onClose')"
        />
        <div
          class="drawer-panel" absolute rounded-lg bg-surface-1 shadow="md @dark:xl" z-10 bottom-4
          left-2.5 right-2.5 pt-2 pb-4
        >
          <div grid="~ cols-[30px_1fr_30px]" items-center ps-2 pe-2 pb-2>
            <span aria-hidden />
            <h3 v-if="title" font-bold text="base center">
              {{ title }}
            </h3>

            <ButtonIcon :style="{ gridColumn: 3 }" size="sm" variant="filled" rounded-xl @click="$emit('onClose')">
              <span i-mdi-window-close />
            </ButtonIcon>
          </div>
          <div
            grid gap-4 ps-4 pe-4
            :style="{
              height: showDrawer ? '60dvh' : 'auto',
            }"
          >
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.drawer-panel {
  transition: all .2s ease-out;
}

:is(.v-enter-to,
  .v-leave-from) {
  opacity: 1;

}

:is(.v-enter-to,
  .v-leave-from) .drawer-panel {
  translate: 0 0;
}

:is(.v-enter-from,
  .v-leave-to) {
  transition: all .2s ease-out;
  opacity: 0;

}

:is(.v-enter-from,
  .v-leave-to) .drawer-panel {
  translate: 0 100%
}
</style>
