<script setup lang="ts">
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'

const props = defineProps<{
  showDrawer: boolean
  title?: string
}>()

defineEmits(['onClose'])

const drawer = ref<HTMLElement>()

const scrollLock = useScrollLock(document.body)

watch(() => props.showDrawer, () => scrollLock.value = props.showDrawer)
</script>

<template>
  <Teleport to="body">
    <Transition>
      <UseFocusTrap v-if="showDrawer">
        <div ref="drawer" fixed inset-0>
          <div
            scrollbar-hide absolute inset-0 z-0 cursor-pointer of-x-hidden of-y-scroll overscroll-none bg-transparent backdrop-blur-sm @click="$emit('onClose')"
          />
          <div
            class="drawer-panel" shadow="md @dark:xl"
            absolute bottom-4 left-2.5 right-2.5 z-10 rounded-lg pb-4 pt-2 bg-1
          >
            <div grid="~ cols-[30px_1fr_30px]" items-center pb-2 pe-2 ps-2>
              <span aria-hidden />
              <h3 v-if="title" font-bold text="base center">
                {{ title }}
              </h3>

              <ButtonIcon icon="i-mdi-window-close" :style="{ gridColumn: 3 }" size="sm" variant="filled" @click="$emit('onClose')" />
            </div>
            <div
              grid gap-4 pe-4 ps-4
              :style="{
                height: showDrawer ? '60dvh' : 'auto',
              }"
            >
              <slot />
            </div>
          </div>
        </div>
      </UseFocusTrap>
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
