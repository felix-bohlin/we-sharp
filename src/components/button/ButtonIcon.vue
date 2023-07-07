<script setup lang="ts">
import { TButtonVariant } from "../../types/button"

defineProps<{
  text?: string
  variant?: TButtonVariant
}>()

defineEmits(["click"])
</script>

<template>
  <button @click="$emit('click')" type="button" :class="variant ?? 'text'">
    <slot />
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<style scoped>
button {
  --contained-opacity: 10%;
  @media (prefers-color-scheme: light) {
    --contained-opacity: 0.05%;
  }

  display: grid;
  place-items: center;
  transition: all 0.15s ease-out;

  & span {
    display: none;
  }

  &.contained {
    background-color: color-mix(
      in srgb,
      var(--surface-4),
      var(--text-1) var(--contained-opacity)
    );
    border: 1px solid var(--text-1);
    border-radius: var(--radius-2);
    font-size: var(--font-size-3);
    padding: var(--size-2);

    &:hover {
      background-color: transparent;
    }
  }

  &.outlined {
    background-color: transparent;
    border: 1px solid var(--text-1);
    border-radius: var(--radius-2);
    font-size: var(--font-size-3);
    padding: var(--size-2);

    &:hover {
      --contained-opacity: 10%;
      @media (prefers-color-scheme: light) {
        --contained-opacity: 0.05%;
      }

      background-color: color-mix(
        in srgb,
        var(--surface-4),
        var(--text-1) var(--contained-opacity)
      );
    }
  }

  &.text {
    background-color: transparent;
    border: none;
    border-radius: var(--radius-2);
    font-size: var(--font-size-3);
    padding: var(--size-2);

    &:hover {
      --contained-opacity: 10%;
      @media (prefers-color-scheme: light) {
        --contained-opacity: 0.05%;
      }

      background-color: color-mix(
        in srgb,
        var(--surface-4),
        var(--text-1) var(--contained-opacity)
      );
    }
  }
}
</style>
