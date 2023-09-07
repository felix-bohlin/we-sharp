<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import Dialog from '@/components/dialog/Dialog.vue'
import type { TActivityId } from '~/types/activity'

useHead({
  title: 'New activity | WeSharp',
})

const dialog = ref<InstanceType<typeof Dialog>>()
const showModal = ref(false)

const selectedActivity = ref<TActivityId | null>(null)

const breakpoints = useBreakpoints(breakpointsTailwind)
const isDesktop = breakpoints.greaterOrEqual('sm')

const uiStore = useUiStore()

function modalShow(id: TActivityId) {
  showModal.value = true
  selectedActivity.value = id

  if (breakpoints.isGreaterOrEqual('sm'))
    dialog.value?.show()

  else
    uiStore.toggleModalMode(true)
}

function modalCloseAll() {
  selectedActivity.value = null
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
      <CardNew id="ballsport" title="Ballsport" @on-click="modalShow('ballsport')" />
      <CardNew id="cycling" title="Cycling" @on-click="modalShow('cycling')" />
      <CardNew id="golf" title="Golf" @on-click="modalShow('golf')" />
      <CardNew id="martialArts" title="Martial arts" @on-click="modalShow('martialArts')" />
      <CardNew id="run" title="Running" @on-click="modalShow('run')" />
      <CardNew id="strength" title="Strength" @on-click="modalShow('strength')" />
      <CardNew id="swim" title="Swimming" @on-click="modalShow('swim')" />
      <CardNew id="walk" title="Walking" @on-click="modalShow('walk')" />
      <CardNew id="workout" title="Workout" @on-click="modalShow('workout')" />
      <CardNew id="yoga" title="Yoga" @on-click="modalShow('yoga')" />
    </div>
  </div>

  <ClientOnly>
    <Drawer :show-drawer="showModal && !isDesktop" title="New activity" @on-close="modalCloseAll()">
      <div grid gap-4>
        <ActivityCreate :active-type="selectedActivity" />
      </div>
      <template #bottom>
        <Button self-end variant="filled" @click="modalCloseAll()">
          Save
        </Button>
      </template>
    </Drawer>

    <Dialog ref="dialog" title="New activity" :show-close="true" size="sm">
      <div grid gap-4>
        <ActivityCreate :active-type="selectedActivity" />
      </div>
      <template #bottom>
        <div grid content-end justify-end>
          <Button variant="filled" @click="modalCloseAll()">
            Save
          </Button>
        </div>
      </template>
    </Dialog>
  </ClientOnly>
</template>
