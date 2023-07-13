<script setup lang="ts">
import { ref, watchEffect } from "vue"
import type { TActivity } from "@/types/activity"
import type { TUser } from "@/types/user"

import Avatar from "@/components/Avatar.vue"
import ButtonIcon from "@/components/button/ButtonIcon.vue"
import Card from "@/components/Card.vue"
import Clap from "@/components/icons/Clap.vue"
import CommentIcon from "@/components/icons/Comment.vue"
import Dropdown from "@/components/Dropdown.vue"
import EditComment from "@/components/comment/EditComment.vue"
import IconActivity from "@/components/IconActivity.vue"
import ReadComment from "@/components/comment/ReadComment.vue"

defineProps<{
  activity: TActivity
  user: Omit<TUser, "id">
}>()

const showEditComment = ref(false)
const commentValue = ref("")
</script>

<template>
  <section class="@container w-[clamp(30ch,100%,60ch)]">
    <Card>
      <header class="items-center grid grid-cols-[40px_1fr_40px] gap-4">
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
      </header>

      <div class="grid gap-4 items-center grid-cols-[40px_1fr]">
        <span class="text-3xl">
          <IconActivity :icon="activity?.activityType ?? 'run'" />
        </span>

        <div>
          <h2 class="text-xl font-black inline-flex">
            <a href="#">{{ activity?.title }}</a>
          </h2>
          <p class="my-0 text-sm">{{ activity?.description }}</p>

          <ul
            grid="~ cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4"
            m="t-4 i-0 b-0"
            list-none
            p-0
          >
            <li flex flex-col p-0>
              <span class="text-xs">Time</span> {{ activity?.duration }}
            </li>
          </ul>
        </div>

        <img
          src="https://picsum.photos/500"
          class="h-full w-full max-h-[218px] object-cover my-4 col-[1/-1] rounded bg-gradient-to-r from-emerald-700 to-emerald-300"
        />
      </div>

      <footer grid gap-4>
        <div flex="~ items-center gap-2 justify-between">
          <button type="button">4 likes</button>

          <div grid="~ cols-[repeat(2,40px)] gap-2">
            <ButtonIcon
              text="Cheer"
              :variant="!activity?.likes ? 'filled' : 'outlined'"
            >
              <Clap />
            </ButtonIcon>

            <ButtonIcon
              @click="showEditComment = !showEditComment"
              text="Comment"
              variant="outlined"
            >
              <CommentIcon />
            </ButtonIcon>
          </div>
        </div>

        <div flex flex-col gap-4>
          <div
            :style="{
              display: 'grid',
              gridTemplateRows: showEditComment ? '1fr' : '0fr',
              transition: 'grid-template-rows 0.3s ease-out',
            }"
          >
            <div
              :style="{
                overflow: 'hidden',
                padding: showEditComment ? '.5rem' : 0,
                transition: 'padding .3s ease-out',
              }"
            >
              <EditComment v-model="commentValue" :user="user" />
            </div>
          </div>
          <div grid gap-4>
            <ReadComment :user="user" />
            <ReadComment :user="user" />
          </div>
        </div>
      </footer>
    </Card>
  </section>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  translate: 0 -10px;
}
</style>
