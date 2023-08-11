<script setup lang="ts">
import Comment from '@/components/icons/Comment.vue'
</script>

<template>
  <div md:hidden sticky left-0 right-0 bottom-0 z-10 bg-main pb="[env(safe-area-inset-bottom)]" transition="padding 20">
    <nav
      h-14 border="t zinc-700" grid grid-cols-5 gap-x-2 items-center text-xl of-y-scroll scrollbar-hide overscroll-none
      class="after-content-empty after:h-[calc(100%+0.5px)] after:w-0.1px after:pointer-events-none"
    >
      <!-- These weird styles above are used for scroll locking, don't change it unless you know exactly what you're doing. -->
      <button grid place-items-center text-xs gap-1>
        <Comment text-2xl />
        Home
      </button>
      <button grid place-items-center text-xs gap-1>
        <Comment text-2xl />
        Stats
      </button>

      <button grid place-items-center text-xs gap-1>
        <Comment text-2xl />
        Add
      </button>

      <button grid place-items-center text-xs gap-1>
        <Comment text-2xl />
        Group
      </button>

      <button grid place-items-center text-xs gap-1>
        <Comment text-2xl />
        You
      </button>
      <!-- <Button variant="outlined">
        Home
      </Button>
      <Button variant="">
        Stats
      </Button>
      <Button variant="">
        Add
      </Button>
      <Button variant="">
        Group
      </Button>
      <Button variant="">
        You
      </Button> -->
    </nav>
  </div>
</template>
