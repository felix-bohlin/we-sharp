<script setup lang="ts">
import type { TActivityType } from '~/types/activity'

defineProps<{
  title: string
  type: TActivityType
}>()

defineEmits(['onClick'])
</script>

<template>
  <Card p="y-6 " grid place-items-center rounded-xl hover:text-primary>
    <button grid h-full w-full place-items-center @click="$emit('onClick')">
      <div grid place-items-center gap-2>
        <span inline-flex text-4xl>
          <IconsActivity :icon="type" />
        </span>
        <span text-lg md:text-xl>{{ title }}</span>
      </div>
    </button>
  </Card>
</template>
