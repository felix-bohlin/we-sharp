<script setup lang="ts">
import CardActivity from "@/components/CardActivity.vue"
</script>

<template>
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
      imageUrl: '',
      name: 'Felix Bohlin',
      profileUrl: '#',
    }"
  />
</template>
