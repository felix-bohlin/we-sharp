<script setup lang="ts">
import type { TActivity } from "@/types/activity"
import type { TUser } from "@/types/user"
import { ref, watchEffect } from "vue"

import Avatar from "@/components/Avatar.vue"
import Card from "@/components/Card.vue"
import Dialog from "@/components/Dialog/Dialog.vue"
import Dropdown from "@/components/Dropdown.vue"
import IconActivity from "@/components/IconActivity.vue"
import ButtonIcon from "@/components/button/ButtonIcon.vue"
import EditComment from "@/components/comment/EditComment.vue"
import ReadComment from "@/components/comment/ReadComment.vue"
import Clap from "@/components/icons/Clap.vue"
import Close from "@/components/icons/Close.vue"
import CommentIcon from "@/components/icons/Comment.vue"

import { useUiStore } from "@/stores/ui"
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"

const dialog = ref<InstanceType<typeof Dialog>>()

defineProps<{
  activity: TActivity
  user: Omit<TUser, "id">
}>()

const uiStore = useUiStore()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isDesktop = breakpoints.greaterOrEqual("sm")

const showEditComment = ref(false)
const commentValue = ref("")

function handleEditCommentClick() {
  if (breakpoints.smaller("sm").value) {
    showEditComment.value = !showEditComment.value
    uiStore.toggleGlobalScroll()
  } else {
    dialog.value?.show()
    uiStore.toggleGlobalScroll()
  }
}

function handleDialogClose() {
  showEditComment.value = false
  dialog.value?.close()
  uiStore.toggleGlobalScroll(true)
}

watchEffect(() => {
  if (!breakpoints.greaterOrEqual("sm").value) {
    dialog.value?.close()
    showEditComment.value = false
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
            <a
              :href="user?.profileUrl ?? '#'"
              un-text="hover:amber-700 [.875rem]"
              font-medium
            >
              {{ user?.firstName ?? "" }} {{ user?.lastName ?? "" }}</a
            >
            ·
            <a href="#" un-text="hover:amber-700 [.875rem]" font-medium>
              {{ user?.group ?? "Group" }}</a
            >

            <p class="m-0 text-xs">
              {{ activity?.date }} · {{ activity?.location }}
            </p>
          </div>

          <Dropdown>
            <ul class="list-none m-0 p-0">
              <li class="">
                <button
                  bg="transparent hover:zinc-200 @dark:hover:zinc-400/10"
                  text="current left"
                  border="rounded 0"
                  m-0
                  p-1.5
                  w-full
                  type="button"
                >
                  Edit
                </button>
              </li>
              <li class="">
                <button
                  bg="transparent hover:red-700"
                  text="current left hover:white"
                  border="rounded 0"
                  m-0
                  p-1.5
                  w-full
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
            <p class="my-0 text-sm">{{ activity?.description }}</p>
          </div>

          <ul
            grid="~ cols-[repeat(auto-fit,minmax(6ch,1fr))] col-[1/-1] gap-4"
            m="t-4 i-0 b-0"
            list-none
            p-0
          >
            <li flex flex-col p-0>
              <span class="text-xs">Time</span> {{ activity?.duration }}
            </li>
          </ul>

          <img
            src="https://picsum.photos/500"
            class="h-full w-full max-h-[218px] object-cover col-[1/-1] rounded bg-gradient-to-r from-emerald-700 to-emerald-300"
          />
        </div>
      </div>

      <div grid gap-4>
        <div flex="~ items-center gap-2 justify-between">
          <button type="button">4 likes</button>

          <div class="grid gap-2 grid-cols-[auto_auto]">
            <ButtonIcon
              text="Cheer"
              :variant="!activity?.likes ? 'filled' : 'outlined'"
            >
              <Clap />
            </ButtonIcon>

            <ButtonIcon
              @click="handleEditCommentClick"
              text="Comment"
              variant="outlined"
            >
              <CommentIcon />
            </ButtonIcon>
          </div>
        </div>
      </div>

      <!-- <div v-if="isDesktop" grid gap-4>
        <EditComment v-model="commentValue" :user="user" />
        <ReadComment v-for="comment in activity?.comments" :user="user" />
      </div> -->
    </Card>
  </section>

  <Teleport to="body" :disabled="isDesktop">
    <Transition name="slide-up">
      <div v-if="showEditComment && !isDesktop" fixed inset-0>
        <div
          @click="handleEditCommentClick"
          absolute
          inset-0
          z-0
          bg-transparent
          backdrop-blur-sm
          cursor-pointer
          overscroll-none
        ></div>
        <div
          absolute
          rounded-t-xl
          bg="zinc-50 @dark:zinc-800"
          shadow="md @dark:xl"
          z-10
          transition-top
          :style="{
            bottom: 0,
            left: 0,
            right: 0,
            top: showEditComment ? '20dvh' : '100%',
          }"
          class="before:content-[''] before:w-[min(20cqw,100px)] before:h-1.5 before:bg-zinc-100 before:@dark:bg-zinc-400/50 before:rounded-full before:absolute before:top-2 before:left-1/2 before:transform before:-translate-x-1/2"
        >
          <div
            grid
            gap-4
            py-6
            ps-4
            pe-4
            :style="{
              height: showEditComment ? '80dvh' : 'auto',
            }"
          >
            <div grid gap-4 content-start overflow-y-auto pt-1 ps-2 pe-2>
              <ReadComment :user="user" />
              <ReadComment :user="user" />
              <ReadComment :user="user" />
              <ReadComment :user="user" />
              <ReadComment :user="user" />
              <ReadComment :user="user" />
              <ReadComment :user="user" />
            </div>
            <div grid content-end>
              <EditComment v-model="commentValue" :user="user" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

  <Dialog ref="dialog">
    <div grid gap-4 class="grid-rows-[auto_1fr_auto] !h-full">
      <div flex items-center justify-between>
        <h3 text-lg font-bold>Comments</h3>
        <ButtonIcon @click="handleDialogClose">
          <Close />
        </ButtonIcon>
      </div>
      <div grid gap-4 content-start overflow-y-auto pt-1 ps-2 pe-2>
        <ReadComment :user="user" />
        <ReadComment :user="user" />
        <ReadComment :user="user" />
        <ReadComment :user="user" />
        <ReadComment :user="user" />
        <ReadComment :user="user" />
        <ReadComment :user="user" />
      </div>
      <div grid content-end>
        <EditComment v-model="commentValue" :user="user" />
      </div>
    </div>
  </Dialog>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  translate: 0 100%;
}
</style>
