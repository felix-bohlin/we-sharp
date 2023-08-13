<script setup lang="ts">
import { ref } from 'vue'
import ButtonIcon from '@/components/button/ButtonIcon.vue'

const { minHeight = 300, showClose = true, title = '' } = defineProps(['minHeight', 'showClose', 'title'])

const dialogMinHeight = `${minHeight}px}`

const dialog = ref<HTMLDialogElement>()
const visible = ref(false)

function close(value?: string) {
  dialog.value?.close(value)
  visible.value = false
}

function show() {
  dialog.value?.showModal()
  visible.value = true
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
        class="grid grid-rows-[auto_1fr_auto] gap-4 backdrop:transition-all backdrop:bg-zinc-800/90 rounded text-current overflow-hidden shadow-md @dark:shadow-lg"
        bg="white @dark:zinc-800" p="y-3 s-4 e-4 @sm:y-4 @sm:s-6 @sm:e-6"
      >
        <div flex justify-between items-center pb-2>
          <h3 v-if="title" text-lg font-bold>
            {{ title }}
          </h3>

          <ButtonIcon v-if="showClose" rounded variant="filled" size="sm" @click="close">
            <span i-mdi-window-close />
          </ButtonIcon>
        </div>

        <div class="overflow-y-auto">
          <slot />
        </div>

        <slot name="bottom" />
      </dialog>
    </Transition>
  </Teleport>
</template>

<style scoped>
dialog {
  animation: var(--animation-scale-down) forwards;
  animation-timing-function: var(--ease-squish-3);
  max-height: 60dvh;
  min-height: v-bind(dialogMinHeight);
  max-inline-size: min(90vw, 65ch);
}

.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: all .15s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
