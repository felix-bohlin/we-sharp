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

<style>
.v-popper--theme-dropdown .v-popper__inner {
  background-color: var(--surface-4);
  border: 1px solid rgb(var(--text-2) / 0.5);
  box-shadow: var(--shadow-2);
  color: var(--text-1);
  padding: var(--size-2);
}

.v-popper--theme-dropdown :is(.v-popper__arrow-inner, .v-popper__arrow-outer) {
  border-color: var(--surface-4);
}
</style>
