<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { TActivity } from '@/types/activity'
import type { TUser } from '@/types/user'
import Dialog from '@/components/dialog/Dialog.vue'

defineProps<{
  activity: TActivity
  user: TUser
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isDesktop = breakpoints.greaterOrEqual('sm')

const dialog = ref<InstanceType<typeof Dialog>>()
const showEditComment = ref(false)
const commentValue = ref('')
const isCheered = ref(false)

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

function onPost() {
  commentsCloseAll()
  commentValue.value = ''
}
</script>

<template>
  <section class="@container">
    <Card class="grid items-start gap-x-4 gap-y-3">
      <div grid gap-2>
        <div p="s-4 e-4 md:s-0 md:e-0" grid="~ items-center cols-[40px_1fr_auto] gap-4">
          <Avatar :image="user?.imageUrl" />

          <div leading-none>
            <a :href="user?.profileUrl ?? '#'" un-text="primary hover:primary-active xs" font-medium>
              {{ user?.firstName ?? user?.lastName ?? "User" }}</a>
            ·
            <a href="#" un-text="primary hover:primary-active xs" font-medium>
              {{ user?.group ?? "Ungrouped" }}</a>

            <p m-0 text-xs opacity-70>
              {{ activity?.date }} {{ `· ${activity?.location}` }}
            </p>
          </div>

          <Dropdown>
            <ul class="m-0 list-none p-0">
              <li class="">
                <button
                  bg="transparent hover:zinc-200 @dark:hover:zinc-400/10" text="current left" border="rounded 0"
                  m-0 w-full p-1.5 type="button"
                >
                  Edit
                </button>
              </li>
              <li class="">
                <button
                  bg="transparent hover:red-700" text="current left hover:white" border="rounded 0" m-0 w-full p-1.5
                  type="button"
                >
                  Delete
                </button>
              </li>
            </ul>
          </Dropdown>
        </div>

        <div grid items-center gap-4 p="s-4 e-4 md:s-0 md:e-0" class="grid-cols-[40px_1fr]">
          <span flex justify-center text-3xl>
            <IconsActivity :icon="activity?.type ?? 'run'" />
          </span>

          <div>
            <h2 inline-flex font-black class="@md:text-xl">
              <a href="#">{{ activity?.title }}</a>
            </h2>
            <p my-0 text-sm>
              {{ activity?.description }}
            </p>
          </div>

          <InfoList :activity="activity" />
        </div>
        <nuxt-img
          src="https://picsum.photos/500"
          :alt="activity?.title"
          loading="lazy"
          format="webp"
          w-full object-cover md:rounded-xl
          class="skeleton-loading-bg col-[1/-1] h-[clamp(200px,50cqw,300px)]"
        />
      </div>

      <div grid gap-4 p="s-4 e-4 md:s-0 md:e-0">
        <div flex="~ items-center gap-2 justify-between">
          <button type="button">
            4 medals
          </button>

          <div class="grid grid-cols-[auto_auto] gap-2">
            <ButtonIcon modifier="warning" :icon="isCheered ? 'i-mdi-medal' : 'i-mdi-medal-outline'" :variant="isCheered ? 'filled' : 'text'" :class="isCheered ? '!bg-yellow/10' : '!text-secondary !hover:bg-yellow/10'" text="Cheer" @click="isCheered = !isCheered" />

            <ButtonIcon icon="i-mdi-comment-text-outline" text="Comment" @click="commentsShow" />
          </div>
        </div>
      </div>
    </Card>
  </section>

  <ClientOnly>
    <Drawer :show-drawer="showEditComment && !isDesktop" title="Comments" @on-close="commentsCloseAll()">
      <div v-if="activity?.comments" grid gap-4>
        <Comment v-for="(comment, index) in activity?.comments" :key="index" :user="user" />
      </div>
      <p v-else class="text-sm leading-normal text-zinc-600 @dark:text-zinc-500">
        Let {{ user?.firstName ?? 'people' }} know what you think!
      </p>

      <template #bottom>
        <CommentEdit v-model="commentValue" :image="user?.imageUrl" />
      </template>
    </Drawer>

    <Dialog ref="dialog" title="Comments" :show-close="true">
      <div v-if="activity?.comments" grid content-start gap-4 pt-1>
        <Comment v-for="(comment, index) in activity?.comments" :key="index" :user="user" />
      </div>
      <p v-else class="text-sm leading-normal text-zinc-600 @dark:text-zinc-500">
        Let {{ user?.firstName ?? 'people' }} know what you think!
      </p>

      <template #bottom>
        <CommentEdit
          v-model="commentValue" :image="user?.imageUrl" @submit="onPost"
        />
      </template>
    </Dialog>
  </ClientOnly>
</template>
