<script setup lang="ts">
import type { TActivityType } from '~/types/activity'

defineProps<{
  title: string
  type: TActivityType
}>()
</script>

<template>
  <Card rounded-xl p-4>
    <div grid place-items-center>
      <span flex text-3xl>
        <IconsActivity :icon="type" />
      </span>
      <span font-bold>{{ title }}</span>
    </div>
  </Card>
</template>
