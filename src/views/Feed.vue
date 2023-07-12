<script setup lang="ts">
import CardActivity from "@/components/CardActivity.vue"
</script>

<template>
  <div class="flex flex-col gap-4">
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
        firstName: 'Felix',
        lastName: 'Bohlin',
        group: 'Devotion',
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
        firstName: 'Felix',
        lastName: 'Bohlin',
        group: 'Quality',
        profileUrl: '#',
      }"
    />
  </div>
</template>
