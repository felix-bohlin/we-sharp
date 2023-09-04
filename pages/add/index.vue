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

    <div grid="~ cols-2  gap-2 md:cols-3 md:gap-4">
      <CardNew title="Ballsport" type="ballsport" />
      <CardNew title="Cycling" type="cycling" />
      <CardNew title="Golf" type="golf" />
      <CardNew title="Gym" type="gym" />
      <CardNew title="Martial arts" type="martialarts" />
      <CardNew title="Running" type="run" />
      <CardNew title="Swimming" type="swim" />
      <CardNew title="Walking" type="walk" />
      <CardNew title="Yoga" type="yoga" />
    </div>
  </div>
</template>
