<script setup lang="ts">
import type { TActivityId } from '@/types/activity'

defineProps<{
  id: TActivityId
}>()
</script>

<template>
  <span :class="activityData[id].icon" text-secondary />
</template>
