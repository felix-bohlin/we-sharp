<script setup lang="ts">
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const { minHeight = 300, showClose = true, title = '' } = defineProps<{
  minHeight?: number
  showClose?: boolean
  title?: string
}>()

const dialogMinHeight = `${minHeight}px`

const dialog = ref<HTMLDialogElement>()
const visible = ref(false)

const scrollLock = useScrollLock(document.body)

const { activate, deactivate } = useFocusTrap(dialog)

watch(() => visible, () => scrollLock.value = visible.value)

function close(value?: string) {
  deactivate()
  dialog.value?.close(value)
  visible.value = false
}

async function show() {
  dialog.value?.showModal()
  visible.value = true

  // https://vueuse.org/integrations/useFocusTrap/#usefocustrap
  await nextTick()
  activate()
}

defineExpose({
  close,
  show,
  visible,
})
</script>

<template>
  <Teleport to="body">
    <Transition>
      <dialog
        v-show="visible" ref="dialog" :open="visible"
        class="grid grid-rows-[auto_1fr_auto] mt-[15vh] max-h-[50dvh] gap-4 overflow-hidden rounded-xl text-current shadow-md backdrop:bg-zinc-800/90 @dark:shadow-lg backdrop:transition-all"
        bg-main p="y-3 s-4 e-4 @sm:y-4 @sm:s-6 @sm:e-6"
      >
        <div flex items-center justify-between pb-2>
          <h3 v-if="title" text-lg font-bold>
            {{ title }}
          </h3>

          <ButtonIcon v-if="showClose" rounded variant="filled" size="sm" @click="close">
            <span i-mdi-window-close />
          </ButtonIcon>
        </div>

        <div overflow-y-auto p-1 m="-1">
          <slot />
        </div>

        <slot name="bottom" />
      </dialog>
    </Transition>
  </Teleport>
</template>

<style scoped>
dialog {
  min-height: v-bind(dialogMinHeight);
  max-inline-size: min(90vw, 65ch);
  width: 100%;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  translate: 0 0;
  transition: all .3s ease-out;
}

.v-enter-from,
.v-leave-to {
  translate: 0 20px;
  opacity: 0;
}
</style>
