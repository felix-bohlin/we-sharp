<script setup lang="ts">
defineProps<{
  description?: string
  term: string
}>()
</script>

<template>
  <div grid gap-.5>
    <dt text-xs opacity-70>
      {{ term || 'Label' }}
    </dt>
    <dd v-if="description" text-sm>
      {{ description }}
    </dd>
    <template v-else>
      <span inline-flex text-xl>
        <slot />
      </span>
    </template>
  </div>
</template>
