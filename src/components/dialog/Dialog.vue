<script setup lang="ts">
import { ref } from "vue"

const dialog = ref<HTMLDialogElement>()
const visible = ref(false)

//   const emit = defineEmits(['confirm', 'cancel']);

// function cancel () {
//   dialog.value?.close();
//   emit('cancel');
// };

// function confirm () {
//   dialog.value?.close();
//   emit('confirm');
// };

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
  <dialog
    :open="visible"
    ref="dialog"
    class="backdrop:bg-zinc-800/90 rounded h-[min(400px,50dvh)] w-[65ch] text-current overflow-hidden open:opacity-100 open:scale-100 opacity-0 scale-95 transition-all duration-500"
    bg="white @dark:zinc-800"
    shadow="md @dark: lg"
    p="y-3 s-4 e-4 @sm:y-4 @sm:s-6 @sm:e-6"
  >
    <slot />
  </dialog>
</template>
