<script setup lang="ts">
import type { TUser } from '@/types/user'
import Avatar from '@/components/Avatar.vue'

defineProps<{
  user: Omit<TUser, 'id'>
}>()
</script>

<template>
  <div class="grid gap-3 grid-cols-[30px_1fr] items-start">
    <Avatar :image="user?.imageUrl" />

    <div class="flex flex-col gap-2">
      <span class="text-xs">
        <a
          :href="user?.profileUrl ?? '#'"
          un-text="primary hover:primary-active [.875rem]]"
          class="self-start font-medium "
        >{{ user?.firstName }}</a>
        · <span class="opacity-90 @dark:opacity-60">12h</span>
      </span>
      <div class="grid gap-2 text-xs leading-normal">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sit
          exercitationem unde a aut laboriosam nam tempore cum dolore ducimus
          optio at molestiae, sint modi deleniti magnam quas, quisquam quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam optio
          odio mollitia doloremque, necessitatibus officia numquam facere fugit
          nemo distinctio voluptates aliquam. Libero, perspiciatis. Suscipit
          ipsa exercitationem consectetur dicta fuga.
        </p>
      </div>
    </div>
  </div>
</template>
