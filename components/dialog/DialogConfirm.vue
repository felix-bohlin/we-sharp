<script setup lang="ts">
const {
  cancelText = 'Cancel',
  confirmText = 'Ok',
  hideConfirm = false,
  showCancel = false,
  title = '',
} = defineProps([
  'cancelText',
  'confirmText',
  'hideConfirm',
  'showCancel',
  'title',
])

const emit = defineEmits(['confirm', 'cancel'])

const dialog = ref<HTMLDialogElement>()

function cancel() {
  dialog.value?.close()
  emit('cancel')
}

function confirm() {
  dialog.value?.close()
  emit('confirm')
}

function close() {
  dialog.value?.close()
}

function show() {
  dialog.value?.show()
}

defineExpose({
  close,
  show,
})
</script>

<template>
  <Dialog ref="dialog" :title="title">
    <slot />

    <template #bottom>
      <form grid gap-4 method="dialog">
        <div flex flex-wrap justify-end gap-4>
          <Button v-if="showCancel" variant="text" @click="cancel">
            {{ cancelText }}
          </Button>

          <Button v-if="!hideConfirm" variant="filled" @click="confirm">
            {{ confirmText }}
          </Button>
        </div>
      </form>
    </template>
  </Dialog>
</template>
