<script setup lang="ts">
import { ref } from "vue"
import { onClickOutside } from "@vueuse/core"
import ButtonIcon from "@/components/button/ButtonIcon.vue"
import MoreDots from "@/components/icons/MoreDots.vue"

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
  <div class="relative w-full h-full grid items-center">
    <ButtonIcon
      ref="dropdownToggle"
      @click="showDropdown = !showDropdown"
      text="Menu"
      variant="text"
    >
      <MoreDots />
    </ButtonIcon>

    <Transition>
      <div
        ref="dropdownRef"
        class="bg-zinc-50 ring-1 ring-slate-500/10 @dark:ring-slate-300/10 @dark:bg-zinc-800 rounded shadow-md @dark:shadow-xl p-2 absolute right-0 top-[42px] w-[25cqw]"
        v-if="showDropdown"
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
