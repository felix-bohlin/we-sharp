<script setup lang="ts">
useHead({
  title: 'WeSharp',
})
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fit,minmax(35ch,1fr))] gap-4 w-[clamp(35ch,100%,120ch)] ms-auto me-auto ps-4 pe-4"
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
        imageUrl: 'https://picsum.photos/100',
        firstName: 'Felix',
        lastName: 'Bohlin',
        group: 'Quality',
        profileUrl: '#',
      }"
    />

    <CardActivity
      :activity="{
        id: '1',
        activityType: 'gym',
        comments: 5,
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        duration: 120,
        location: 'Stockholm',
        likes: 1,
        date: '08:30',
        title: 'Gym session',
        userId: '1',
      }"
      :user="{
        imageUrl: 'https://picsum.photos/200',
        firstName: 'Superstrong',
        lastName: 'Personname',
        group: 'Group with long name',
        profileUrl: '#',
      }"
    />
  </div>
</template>
