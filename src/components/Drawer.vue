<script setup lang="ts">
import ButtonIcon from '@/components/button/ButtonIcon.vue'
import Close from '@/components/icons/Close.vue'

const { showDrawer = true, title = '' } = defineProps<{
  showDrawer: boolean
  title?: string
}>()

defineEmits(['onClose'])
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="showDrawer" transition-opacity duration-250 fixed inset-0>
        <div
          absolute inset-0 z-0 bg-transparent backdrop-blur-sm cursor-pointer of-y-scroll of-x-hidden scrollbar-hide
          overscroll-none @click="$emit('onClose')"
        />
        <div
          class="drawer-panel" absolute rounded-lg bg="zinc-50 @dark:zinc-800" shadow="md @dark:xl" z-10 bottom-5
          left-2.5 right-2.5 py-2
        >
          <div grid="~ cols-[30px_1fr_30px]" items-center ps-2 pe-2 pb-2>
            <span aria-hidden />
            <h3 v-if="title" text-base text-center font-bold>
              {{ title }}
            </h3>

            <ButtonIcon :style="{ gridColumn: 3 }" size="sm" variant="filled" rounded @click="$emit('onClose')">
              <Close />
            </ButtonIcon>
          </div>
          <div
            grid gap-4 ps-4 pe-4
            :style="{
              height: showDrawer ? '70dvh' : 'auto',
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
  transition: all 2.3s ease-out;
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
  transition: all 2.3s ease-out;
  opacity: 0;

}

:is(.v-enter-from,
  .v-leave-to) .drawer-panel {
  translate: 0 100%
}
</style>
