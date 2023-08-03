<script setup lang="ts">
import { ref } from 'vue'

const { minHeight = 300, title = '' } = defineProps(['minHeight', 'title'])

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
        class="grid grid-rows-[auto_1fr_auto] gap-4 backdrop:bg-zinc-800/90 rounded w-[65ch] text-current overflow-hidden shadow-md @dark:shadow-lg"
        bg="white @dark:zinc-800" p="y-3 s-4 e-4 @sm:y-4 @sm:s-6 @sm:e-6"
      >
        <h3 v-if="title" text-lg font-bold>
          {{ title }}
        </h3>

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
  max-height: 60dvh;
  min-height: v-bind(dialogMinHeight);
}

.v-enter-active,
.v-leave-active {
  translate: 0 0;
  opacity: 1;
  transition: all .15s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  translate: 0 5%;
}
</style>
