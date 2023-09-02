<script setup lang="ts">
defineProps<{
  description?: string
  term: string
}>()
</script>

<template>
  <div>
    <dt text-xs opacity-70>
      {{ term || 'Label' }}
    </dt>
    <dd v-if="description" text-sm>
      {{ description }}
    </dd>
    <template v-else>
      <span inline-flex>
        <slot />
      </span>
    </template>
  </div>
</template>
