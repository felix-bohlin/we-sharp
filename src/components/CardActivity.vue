<script setup lang="ts">
import { ref } from "vue"
import type { TActivity } from "../types/activity"
import type { TUser } from "../types/user"

import Avatar from "./Avatar.vue"
import ButtonIcon from "./button/ButtonIcon.vue"
import Card from "./Card.vue"
import IconActivity from "./IconActivity.vue"
import Clap from "./icons/Clap.vue"
import Comment from "./icons/Comment.vue"
import MoreDots from "./icons/MoreDots.vue"

const props = defineProps<{
  activity: TActivity
  user: Omit<TUser, "id">
}>()

const showComments = ref(true)
const showMenu = ref(true)
</script>

<template>
  <section class="@container w-[clamp(30ch,100%,60ch)]">
    <Card>
      <header class="items-center grid grid-cols-[40px_1fr_40px] gap-4">
        <Avatar :image="user?.imageUrl" />

        <div>
          <a :href="user?.url ?? '#'" class="text-[.875rem] font-medium">
            {{ user?.name ?? "" }}
          </a>
          <p class="m-0 text-xs">
            {{ activity?.date }} · {{ activity?.location }}
          </p>
        </div>

        <div class="relative">
          <ButtonIcon @click="showMenu = !showMenu" text="Menu">
            <MoreDots />
          </ButtonIcon>

          <div
            class="bg-zinc-50 ring-1 ring-slate700/10 @dark:bg-zinc-800 rounded-md shadow-md p-2 absolute right-0 top-[40px] w-[25cqw]"
            v-if="showMenu"
          >
            <ul class="list-none m-0 p-0">
              <li class="rounded-md p-1.5 hover:bg-zinc-200">
                <button
                  class="bg-transparent border-0 text-current m-0 p-0 w-full text-left"
                  type="button"
                >
                  Edit
                </button>
              </li>
              <li
                class="rounded-md p-1.5 hover:bg-red-700 text-red-700 hover:text-white"
              >
                <button
                  class="bg-transparent border-0 text-current m-0 p-0 w-full text-left"
                  type="button"
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div class="grid gap-4 items-center grid-cols-[40px_1fr]">
        <span class="text-3xl">
          <IconActivity :icon="activity?.activityType ?? 'run'" />
        </span>

        <div>
          <h2 class="text-xl font-black text-amber-700">
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
          class="h-full w-full max-h-[218px] object-cover my-4 col-[1/-1] rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-300"
        />
      </div>

      <footer>
        <div class="flex items-center gap-2 justify-between">
          <button type="button">4 likes</button>

          <div class="grid gap-2 grid-cols-[repeat(2,40px)]">
            <ButtonIcon
              text="Cheer"
              :variant="!activity?.likes ? 'contained' : 'outlined'"
            >
              <Clap />
            </ButtonIcon>

            <ButtonIcon
              @click="showComments = !showComments"
              text="Comment"
              variant="outlined"
            >
              <Comment />
            </ButtonIcon>
          </div>
        </div>

        <div v-if="showComments">
          <ul>
            <li>
              <p>Comment 1</p>
            </li>
            <li>
              <p>Comment 2</p>
            </li>
            <li>
              <p>Comment 3</p>
            </li>
          </ul>

          <div>
            <input type="text" placeholder="Add a comment" />
            <button type="button">Post</button>
          </div>
        </div>
      </footer>
    </Card>
  </section>
</template>
