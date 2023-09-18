<script setup lang="ts">
useHead({
  title: 'Stats | WeSharp',
})
</script>

<template>
  <div m-page w-page p-page>
    <h1 mb-6 text-2xl font-black>
      Leaderboards
    </h1>

    <nav flex gap-2>
      <span rounded-full bg-red-500 p="s-2 e-2 y-1">Group</span>
      <span rounded-full hover:bg-red-500 p="s-2 e-2 y-1">Social</span>
      <span rounded-full hover:bg-red-500 p="s-2 e-2 y-1">Solo</span>
      <span rounded-full hover:bg-red-500 p="s-2 e-2 y-1">Most improved</span>
    </nav>
  </div>
</template>
