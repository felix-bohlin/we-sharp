<script setup lang="ts">
import type { TUser } from "@/types/user"
import Avatar from "@/components/Avatar.vue"

defineProps<{
  user: Omit<TUser, "id">
}>()
</script>

<template>
  <div class="grid gap-3 grid-cols-[30px_1fr] items-center">
    <Avatar :image="user?.imageUrl" />

    <div class="flex flex-col gap-2">
      <a
        :href="user?.profileUrl ?? '#'"
        class="text-[.875rem] font-medium hover:text-amber-700"
        >{{ user?.firstName }}</a
      >
      <div class="grid gap-2 grid-cols-[1fr_40px]">
        <textarea
          class="min-h-12 p-2 text-sm"
          type="text"
          placeholder="Add a comment"
        ></textarea>
        <button type="button">Post</button>
      </div>
    </div>
  </div>
</template>
