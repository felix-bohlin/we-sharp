<script setup lang="ts">
import NavBottom from '@/components/nav/NavBottom.vue'
</script>

<template>
  <main>
    <div class="min-h-[calc(100dvh-3.50001rem)]">
      <slot />
    </div>

    <NavBottom />
  </main>
</template>
