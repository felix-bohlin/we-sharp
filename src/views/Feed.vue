<script setup lang="ts">
import CardActivity from "@/components/CardActivity.vue"
</script>

<template>
  <div class="card-list">
    <CardActivity
      :activity="{
        activityType: 'bike',
        comments: 4,
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        duration: 30,
        location: 'Stockholm',
        likes: 4,
        date: '08:30',
        title: 'Morning run',
      }"
      :user="{
        imageUrl: '',
        name: 'Felix Bohlin',
        profileUrl: '#',
      }"
    />

    <CardActivity
      :activity="{
        activityType: 'yoga',
        comments: 4,
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        duration: 30,
        location: 'Stockholm',
        likes: 0,
        date: '08:30',
        title: 'Morning run',
      }"
      :user="{
        imageUrl: 'https://picsum.photos/500',
        name: 'Felix Bohlin',
        profileUrl: '#',
      }"
    />
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: column;
  gap: var(--size-3);
}
</style>
