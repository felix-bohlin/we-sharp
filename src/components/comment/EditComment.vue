<script setup lang="ts">
import { ref } from "vue"
import type { TUser } from "@/types/user"
import Avatar from "@/components/Avatar.vue"
import Button from "@/components/button/Button.vue"

defineProps<{
  user: Omit<TUser, "id">
}>()

const commentValue = defineModel<string>()
</script>

<template>
  <div class="grid gap-3 grid-cols-[30px_1fr] items-center">
    <Avatar :image="user?.imageUrl" />

    <div class="flex flex-col gap-2">
      <div class="grid gap-2 grid-cols-[1fr_auto] items-start">
        <textarea
          class="min-h-12 p-2 text-sm border-zinc-200 @dark:border-zinc-400/10 rounded"
          type="text"
          placeholder="Add a comment"
          v-model="commentValue"
        ></textarea>

        <div
          :style="{
            display: 'grid',
            gridTemplateColumns: commentValue ? '1fr' : '0fr',
            transition: 'grid-template-columns 0.3s ease-out',
          }"
        >
          <Button
            overflow-hidden
            :tabindex="commentValue ? 0 : -1"
            size="small"
            :style="{
              paddingInline: commentValue ? '.75rem' : 'initial',
              pointerEvents: commentValue ? 'all' : 'none',
            }"
            variant="filled"
            >Post</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>
