<script setup lang="ts">
import type { TActivityId } from '~/types/activity'

defineProps<{
  id: TActivityId
  title: string
}>()

defineEmits(['onClick'])
</script>

<template>
  <Card p="y-3 e-4 s-4 md:e-0 md:s-0 md:y-6" grid place-items-center rounded-xl hover:text-primary>
    <button type="button" grid h-full w-full md:place-items-center @click="$emit('onClick')">
      <div flex items-center gap-2 md:grid md:place-items-center>
        <span inline-flex text-3xl md:text-4xl>
          <IconsActivity :icon="id" />
        </span>
        <span text-lg md:text-xl>{{ title }}</span>
      </div>
    </button>
  </Card>
</template>
