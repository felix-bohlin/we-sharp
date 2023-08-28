<script setup lang="ts">
const showDropdown = ref(false)
const dropdownRef = ref(null)
const dropdownToggle = ref(null)

onClickOutside(
  dropdownRef,
  () => {
    showDropdown.value = false
  },
  {
    ignore: [dropdownToggle],
  },
)
</script>

<template>
  <div class="relative grid h-full w-full items-center">
    <ButtonIcon
      ref="dropdownToggle"
      text="Menu"
      variant="text"
      rounded
      @click="showDropdown = !showDropdown"
    >
      <span i-mdi-dots-horizontal />
    </ButtonIcon>

    <Transition>
      <div
        v-if="showDropdown"
        ref="dropdownRef"
        bg="zinc-50 @dark:zinc-800"
        ring=" 1 slate-500/10 @dark:slate-300/10"
        shadow="md @dark:xl"
        absolute right-0 rounded p-2 class="top-[42px] w-[max(25cqw,150px)]"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.15s ease-out;
}

.v-enter-from,
.v-leave-to {
  translate: 0 -20px;
  opacity: 0;
  scale: 0.9;
}
</style>
