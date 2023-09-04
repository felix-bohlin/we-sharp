<script setup lang="ts">
useHead({
  title: 'Add | WeSharp',
})
</script>

<template>
  <div w-page m-page p-page>
    <h1 text-2xl font-black>
      New activity
    </h1>

    <div grid="~ cols-2  gap-2 md:gap-4">
      <NewCard title="Ballsport" type="ballsport" />
      <NewCard title="Cycling" type="cycling" />
      <NewCard title="Golf" type="golf" />
      <NewCard title="Gym" type="gym" />
      <NewCard title="Martial arts" type="martialarts" />
      <NewCard title="" />
      <NewCard />
      <NewCard />
      <NewCard />
    </div>
  </div>
</template>
