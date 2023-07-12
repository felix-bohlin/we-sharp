<script setup lang="ts">
import { defineModel, watchEffect } from "vue"
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
      <div class="grid gap-2 grid-cols-[1fr_auto] items-center">
        <textarea
          class="min-h-12 p-2 text-sm"
          type="text"
          placeholder="Add a comment"
          v-model="commentValue"
        ></textarea>

        <Button size="small">Post</Button>
        <button v-show="commentValue" type="button">Post</button>
      </div>
    </div>
  </div>
</template>
