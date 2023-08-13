<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { ref, watchEffect } from 'vue'
import type { TActivity } from '@/types/activity'
import type { TUser } from '@/types/user'

import Avatar from '@/components/Avatar.vue'
import Card from '@/components/Card.vue'
import Dropdown from '@/components/Dropdown.vue'
import IconActivity from '@/components/IconActivity.vue'
import ButtonIcon from '@/components/button/ButtonIcon.vue'
import Comment from '@/components/comment/Comment.vue'
import EditComment from '@/components/comment/EditComment.vue'
import Dialog from '@/components/dialog/Dialog.vue'
import Drawer from '@/components/Drawer.vue'
import { useUiStore } from '@/stores/ui'

defineProps<{
  activity: TActivity
  user: Omit<TUser, 'id'>
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isDesktop = breakpoints.greaterOrEqual('sm')

const dialog = ref<InstanceType<typeof Dialog>>()
const showEditComment = ref(false)
const commentValue = ref('')

const uiStore = useUiStore()

function commentsShow() {
  showEditComment.value = true

  if (breakpoints.isGreaterOrEqual('sm'))
    dialog.value?.show()

  else
    uiStore.toggleModalMode(true)
}

function commentsCloseAll() {
  showEditComment.value = false
  dialog.value?.close()
  uiStore.toggleModalMode(false)
}

function onPost(value: string) {
  console.log(value)
  commentsCloseAll()
  commentValue.value = ''
}

watchEffect(() => {
  if (breakpoints.greaterOrEqual('sm').value) {
    if (uiStore.modalModeActive)
      uiStore.toggleModalMode(false)
  }
  else {
    dialog.value?.close()
  }
})
</script>

<template>
  <section class="@container">
    <Card class="grid gap-y-2 items-start gap-x-4">
      <div grid gap-2>
        <div class="items-center grid grid-cols-[40px_1fr_auto] gap-4">
          <Avatar :image="user?.imageUrl" />

          <div>
            <a :href="user?.profileUrl ?? '#'" un-text="hover:amber-700 [.875rem]" font-medium>
              {{ user?.firstName ?? "" }} {{ user?.lastName ?? "" }}</a>
            ·
            <a href="#" un-text="hover:amber-700 [.875rem]" font-medium>
              {{ user?.group ?? "Group" }}</a>

            <p class="m-0 text-xs">
              {{ activity?.date }} · {{ activity?.location }}
            </p>
          </div>

          <Dropdown>
            <ul class="list-none m-0 p-0">
              <li class="">
                <button
                  bg="transparent hover:zinc-200 @dark:hover:zinc-400/10" text="current left" border="rounded 0" m-0
                  p-1.5 w-full type="button"
                >
                  Edit
                </button>
              </li>
              <li class="">
                <button
                  bg="transparent hover:red-700" text="current left hover:white" border="rounded 0" m-0 p-1.5 w-full
                  type="button"
                >
                  Delete
                </button>
              </li>
            </ul>
          </Dropdown>
        </div>

        <div class="grid gap-4 items-center grid-cols-[40px_1fr]">
          <span text-3xl flex justify-center>
            <IconActivity :icon="activity?.activityType ?? 'run'" />
          </span>

          <div>
            <h2 class="text-xl font-black inline-flex">
              <a href="#">{{ activity?.title }}</a>
            </h2>
            <p class="my-0 text-sm">
              {{ activity?.description }}
            </p>
          </div>

          <ul grid="~ cols-[repeat(auto-fit,minmax(6ch,1fr))] col-[1/-1] gap-4" m="t-4 i-0 b-0" list-none p-0>
            <li flex flex-col p-0>
              <span class="text-xs">Time</span> {{ activity?.duration }}
            </li>
          </ul>

          <img
            src="https://picsum.photos/500"
            class="h-full w-full max-h-[218px] object-cover col-[1/-1] rounded bg-gradient-to-r from-emerald-700 to-emerald-300"
          >
        </div>
      </div>

      <div grid gap-4>
        <div flex="~ items-center gap-2 justify-between">
          <button type="button">
            4 likes
          </button>

          <div class="grid gap-2 grid-cols-[auto_auto]">
            <ButtonIcon text="Cheer" :variant="!activity?.likes ? 'filled' : 'outlined'">
              <span i-mdi-hand-clap />
            </ButtonIcon>

            <ButtonIcon text="Comment" variant="outlined" @click="commentsShow">
              <span i-mdi-comment-text-outline />
            </ButtonIcon>
          </div>
        </div>
      </div>
    </Card>
  </section>

  <Drawer :show-drawer="showEditComment && !isDesktop" title="Comments" @on-close="commentsCloseAll()">
    <!-- pt-1 ps-2 pe-2 -->
    <div grid gap-4 content-start overflow-y-auto>
      <Comment :user="user" />
      <Comment :user="user" />
      <Comment :user="user" />
      <Comment :user="user" />
      <Comment :user="user" />
      <Comment :user="user" />
      <Comment :user="user" />
    </div>
    <div grid content-end>
      <EditComment v-model="commentValue" :user="user" />
    </div>
  </Drawer>

  <Dialog ref="dialog" title="Comments">
    <div grid gap-4 content-start pt-1 ps-2 pe-2>
      <Comment :user="user" />
      <Comment :user="user" />
      <Comment :user="user" />
      <Comment :user="user" />
      <Comment :user="user" />
      <Comment :user="user" />
      <Comment :user="user" />
    </div>

    <template #bottom>
      <EditComment
        v-model="commentValue" :user="user" @submit="onPost"
      />
    </template>
  </Dialog>
</template>
