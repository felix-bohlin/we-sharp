<script setup lang="ts">
import { ref } from "vue"
import type { TActivity } from "../types/activity"
import type { TUser } from "../types/user"

import Avatar from "@/components/Avatar.vue"
import ButtonIcon from "@/components/button/ButtonIcon.vue"
import Card from "@/components/Card.vue"
import Comment from "@/components/Comment.vue"
import Dropdown from "@/components/Dropdown.vue"
import IconActivity from "@/components/IconActivity.vue"
import Clap from "@/components/icons/Clap.vue"
import CommentIcon from "@/components/icons/Comment.vue"

defineProps<{
  activity: TActivity
  user: Omit<TUser, "id">
}>()

const showComments = ref(true)
</script>

<template>
  <section class="@container w-[clamp(30ch,100%,60ch)]">
    <Card>
      <header class="items-center grid grid-cols-[40px_1fr_40px] gap-4">
        <Avatar :image="user?.imageUrl" />

        <div>
          <a
            :href="user?.profileUrl ?? '#'"
            class="text-[.875rem] font-medium hover:text-amber-700"
          >
            {{ user?.firstName ?? "" }} {{ user?.lastName ?? "" }}</a
          >
          ·
          <a href="#" class="text-[.875rem] font-medium hover:text-amber-700">
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
                class="rounded p-1.5 hover:bg-zinc-200 @dark:hover:bg-zinc-400/10 bg-transparent border-0 text-current m-0 p-0 w-full text-left"
                type="button"
              >
                Edit
              </button>
            </li>
            <li class="">
              <button
                class="rounded p-1.5 hover:bg-red-700 text-red-700 hover:text-white bg-transparent border-0 text-current m-0 p-0 w-full text-left"
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
            class="grid gap-4 mt-4 mi-0 list-none mb-0 p-0 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
          >
            <li class="flex flex-col p-0">
              <span class="text-xs">Time</span> {{ activity?.duration }}
            </li>
          </ul>
        </div>

        <img
          src="https://picsum.photos/500"
          class="h-full w-full max-h-[218px] object-cover my-4 col-[1/-1] rounded bg-gradient-to-r from-emerald-700 to-emerald-300"
        />
      </div>

      <footer>
        <div class="flex items-center gap-2 justify-between">
          <button type="button">4 likes</button>

          <div class="grid gap-2 grid-cols-[repeat(2,40px)]">
            <ButtonIcon
              text="Cheer"
              :variant="!activity?.likes ? 'filled' : 'outlined'"
            >
              <Clap />
            </ButtonIcon>

            <ButtonIcon
              @click="showComments = !showComments"
              text="Comment"
              variant="outlined"
            >
              <CommentIcon />
            </ButtonIcon>
          </div>
        </div>

        <div v-if="showComments">
          <Comment :user="user" />
        </div>
      </footer>
    </Card>
  </section>
</template>
