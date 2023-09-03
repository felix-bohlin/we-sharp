<script setup lang="ts">
useHead({
  title: 'WeSharp',
})
</script>

<template>
  <div
    grid="~ md:cols-[repeat(auto-fit,minmax(38ch,1fr))] gap-4" m="s-auto e-auto" p="md:s-4 md:e-4" class="md:w-[clamp(38ch,100%,120ch)]"
  >
    <ActivityCard
      :activity="{
        id: '1',
        type: 'cycling',
        comments: 2,
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        data: {
          duration: 60,
          distance: 30,
          weather: 'thunderstorm',
          mood: 'bad',
        },
        location: 'Stockholm',
        likes: 4,
        date: '08:30',
        title: 'Morning cycling',
        userId: '1',
      }"
      :user="{
        id: '1',
        imageUrl: '',
        firstName: 'Felix',
        lastName: 'Bohlin',
        group: 'Devotion',
        profileUrl: '#',
      }"
    />

    <ActivityCard
      :activity="{
        id: '2',
        type: 'yoga',
        comments: 0,
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        data: {
          duration: 56,
          mood: 'terrible',
        },
        location: 'Stockholm',
        likes: 0,
        date: '08:30',
        title: 'Evening yoga',
        userId: '1',
      }"
      :user="{
        id: '1',
        imageUrl: 'https://picsum.photos/100',
        firstName: 'Felix',
        lastName: 'Bohlin',
        group: 'Quality',
        profileUrl: '#',
      }"
    />

    <ActivityCard
      :activity="{
        id: '1',
        type: 'golf',
        comments: 5,
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        data: {
          duration: 240,
          holes: 18,
          score: 72,
          weather: 'rainy',
          mood: 'great',
        },
        location: 'Upplands Väsby',
        likes: 1,
        date: '44:44',
        title: 'Nice golf with friends',
        userId: '1',
      }"
      :user="{
        id: '4',
        imageUrl: 'https://picsum.photos/200',
        firstName: 'Superstrong',
        lastName: 'Personname',
        group: 'Group with long name',
        profileUrl: '#',
      }"
    />
  </div>
</template>
