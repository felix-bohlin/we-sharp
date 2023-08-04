<script setup lang="ts">
import { breakpointsTailwind, invoke, useBreakpoints, useEventListener } from '@vueuse/core'
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
import Clap from '@/components/icons/Clap.vue'
import CommentIcon from '@/components/icons/Comment.vue'
import { useUiStore } from '@/stores/ui'

defineProps<{
  activity: TActivity
  user: Omit<TUser, 'id'>
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isDesktop = breakpoints.greaterOrEqual('sm')

const dialog = ref<InstanceType<typeof Dialog>>()
const drawerElement = ref<HTMLDivElement>()
const showEditComment = ref(false)
const commentValue = ref('')

const uiStore = useUiStore()

function commentsShow() {
  showEditComment.value = true

  if (breakpoints.isGreaterOrEqual('sm'))
    dialog.value?.show()

  else
    uiStore.toggleGlobalScroll(false)
}

function commentsCloseAll() {
  showEditComment.value = false
  dialog.value?.close()
  uiStore.toggleGlobalScroll(true)
}

function onPost(value: string) {
  console.log(value)
  commentsCloseAll()
  commentValue.value = ''
}

watchEffect(() => {
  if (!breakpoints.greaterOrEqual('sm').value)
    dialog.value?.close()
})

// Pull down to close
// https://github.com/elk-zone/elk/pull/2290/files
const { dragging, dragDistance } = invoke(() => {
  const triggerDistance = 120
  let scrollTop = 0
  let beforeTouchPointY = 0
  const dragDistance = ref(0)
  const dragging = ref(false)

  useEventListener(drawerElement, 'scroll', (e: Event) => {
    scrollTop = (e.target as HTMLDivElement).scrollTop
    // Prevent the page from scrolling when the drawer is being dragged.
    if (dragDistance.value > 0)
      (e.target as HTMLDivElement).scrollTop = 0
  }, { passive: true })

  useEventListener(drawerElement, 'touchstart', (e: TouchEvent) => {
    if (!showEditComment.value)
      return
    beforeTouchPointY = e.touches[0].pageY
    dragDistance.value = 0
  }, { passive: true })

  useEventListener(drawerElement, 'touchmove', (e: TouchEvent) => {
    if (!showEditComment.value)
      return
    // Do not move the entire drawer when its contents are not scrolled to the top.
    if (scrollTop > 0 && dragDistance.value <= 0) {
      dragging.value = false
      beforeTouchPointY = e.touches[0].pageY
      return
    }
    const { pageY } = e.touches[0]
    // Calculate the drag distance.
    dragDistance.value += pageY - beforeTouchPointY
    if (dragDistance.value < 0)
      dragDistance.value = 0
    beforeTouchPointY = pageY
    // Marked as dragging.
    if (dragDistance.value > 1)
      dragging.value = true
    // Prevent the page from scrolling when the drawer is being dragged.
    if (dragDistance.value > 0) {
      if (e?.cancelable && e?.preventDefault)
        e.preventDefault()
      e?.stopPropagation()
    }
  }, { passive: true })

  useEventListener(drawerElement, 'touchend', () => {
    if (!showEditComment.value)
      return

    // Close the drawer when the drag distance exceeds the trigger distance.
    if (dragDistance.value >= triggerDistance) {
      showEditComment.value = false
      uiStore.toggleGlobalScroll(true)
    }

    dragging.value = false
  }, { passive: true })

  return {
    dragDistance,
    dragging,
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
              <Clap />
            </ButtonIcon>

            <ButtonIcon text="Comment" variant="outlined" @click="commentsShow">
              <CommentIcon />
            </ButtonIcon>
          </div>
        </div>
      </div>
    </Card>
  </section>

  <Teleport to="body" :disabled="isDesktop">
    <Transition
      enter-active-class="transition duration-250 ease-out"
      enter-from-class="opacity-0 children:(translate-y-full)"
      enter-to-class="opacity-100 children:(translate-y-0)"
      leave-active-class="transition duration-250 ease-in"
      leave-from-class="opacity-100 children:(translate-y-0)"
      leave-to-class="opacity-0 children:(translate-y-full)"
    >
      <div v-if="showEditComment && !isDesktop" fixed inset-0>
        <div
          absolute inset-0 z-0 bg-transparent backdrop-blur-sm cursor-pointer overscroll-none
          @click="commentsCloseAll"
        />
        <div
          ref="drawerElement"
          absolute rounded-t-xl bg="zinc-50 @dark:zinc-800" shadow="md @dark:xl" z-10 transition-top
          :style="{
            bottom: 0,
            left: 0,
            right: 0,
            top: showEditComment ? '20dvh' : '100%',
            transform: dragging ? `translateY(${dragDistance}px)` : '',
          }"
          :class="{
            'duration-0': dragging,
            'duration-250': !dragging,
          }"
          transition="transform ease-in"
          class="before:content-[''] before:w-[min(20cqw,100px)] before:h-1.5 before:bg-zinc-100 before:@dark:bg-zinc-400/50 before:rounded-full before:absolute before:top-2 before:left-1/2 before:transform before:-translate-x-1/2"
        >
          <div
            grid gap-4 py-6 ps-4
            pe-4
            :style="{
              height: showEditComment ? '80dvh' : 'auto',

            }"
          >
            <div grid gap-4 content-start overflow-y-auto pt-1 ps-2 pe-2>
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
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

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
