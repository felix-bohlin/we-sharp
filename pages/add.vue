<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import Dialog from '@/components/dialog/Dialog.vue'
import type { TActivityType } from '~/types/activity'

useHead({
  title: 'Add | WeSharp',
})

const dialog = ref<InstanceType<typeof Dialog>>()
const showModal = ref(false)
const activeType = ref<null | TActivityType>(null)

const breakpoints = useBreakpoints(breakpointsTailwind)
const isDesktop = breakpoints.greaterOrEqual('sm')

const uiStore = useUiStore()

function modalShow(type: TActivityType) {
  showModal.value = true
  activeType.value = type

  if (breakpoints.isGreaterOrEqual('sm'))
    dialog.value?.show()

  else
    uiStore.toggleModalMode(true)
}

function modalCloseAll() {
  activeType.value = null
  showModal.value = false
  dialog.value?.close()
  uiStore.toggleModalMode(false)
}
</script>

<template>
  <div m-page w-page p-page>
    <h1 text-2xl font-black>
      New activity
    </h1>

    <div grid="~ cols-2 gap-2 md:cols-3 md:gap-4" mt-6>
      <CardNew title="Ballsport" type="ballsport" @on-click="modalShow('ballsport')" />
      <CardNew title="Cycling" type="cycling" @on-click="modalShow('cycling')" />
      <CardNew title="Golf" type="golf" @on-click="modalShow('golf')" />
      <CardNew title="Martial arts" type="martialarts" @on-click="modalShow('martialarts')" />
      <CardNew title="Running" type="run" @on-click="modalShow('run')" />
      <CardNew title="Strength" type="strength" @on-click="modalShow('strength')" />
      <CardNew title="Swimming" type="swim" @on-click="modalShow('swim')" />
      <CardNew title="Walking" type="walk" @on-click="modalShow('walk')" />
      <CardNew title="Workout" type="workout" @on-click="modalShow('workout')" />
      <CardNew title="Yoga" type="yoga" @on-click="modalShow('yoga')" />
    </div>
  </div>

  <Drawer :show-drawer="showModal && !isDesktop" title="New activity" @on-close="modalCloseAll()">
    <div grid content-start gap-4 overflow-y-auto>
      <ActivityCreate :active-type="activeType" />
    </div>

    <div grid content-end justify-end>
      <Button variant="filled" @click="modalCloseAll()">
        Save
      </Button>
    </div>
  </Drawer>

  <Dialog ref="dialog" title="New activity" :show-close="true">
    <div grid gap-4 overflow-y-auto>
      <ActivityCreate :active-type="activeType" />
    </div>

    <template #bottom>
      bottom
    </template>
  </Dialog>
</template>
