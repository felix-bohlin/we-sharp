<script setup lang="ts">
import Avatar from '@/components/Avatar.vue'
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore()
</script>

<template>
  <Transition>
    <div v-if="!uiStore.modalModeActive" md:hidden sticky left-0 right-0 bottom-0 z-10 bg-main pb="[env(safe-area-inset-bottom)]" transition="padding 20">
      <nav
        h-14 border="t zinc-700" flex flex-row scrollbar-hide overscroll-none
        class="after-content-empty after:h-[calc(100%+0.5px)] after:w-0.1px after:pointer-events-none"
      >
        <div flex-1 grid grid-cols-5 gap-x-2 items-center text-xl>
          <router-link to="/" grid place-items-center text-xs gap-1>
            <span i-mdi-home text-3xl />
          </router-link>
          <router-link to="/stats" grid place-items-center text-xs gap-1>
            <span i-mdi-chart-line text-3xl />
          </router-link>

          <router-link to="add" grid place-items-center text-xs gap-1>
            <span i-mdi-plus-circle text-3xl text-amber-500 />
          </router-link>

          <router-link to="/group" grid place-items-center text-xs gap-1>
            <span i-mdi-account-group text-3xl />
          </router-link>

          <router-link to="/profile" grid place-items-center text-xs gap-1>
            <Avatar max-w-8 />
          </router-link>
        </div>
      </nav>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transition: opacity 0.15s ease-out;
  transition-delay: .3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
