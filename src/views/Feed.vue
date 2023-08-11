<script setup lang="ts">
import CardActivity from '@/components/CardActivity.vue'
import NavBottom from '@/components/nav/NavBottom.vue'
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] gap-4 w-[clamp(30ch,100%,120ch)] ms-auto me-auto ps-4 pe-4"
  >
    <CardActivity
      :activity="{
        id: '1',
        activityType: 'bike',
        comments: 2,
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        duration: 30,
        location: 'Stockholm',
        likes: 4,
        date: '08:30',
        title: 'Morning cycling',
        userId: '1',
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
        id: '2',
        activityType: 'yoga',
        comments: 0,
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        duration: 30,
        location: 'Stockholm',
        likes: 0,
        date: '08:30',
        title: 'Evening yoga',
        userId: '1',
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

  <NavBottom />
</template>
