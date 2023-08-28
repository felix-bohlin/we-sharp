<script setup lang="ts">
const uiStore = useUiStore()
</script>

<template>
  <Transition>
    <div v-if="!uiStore.modalModeActive" sticky bottom-0 left-0 right-0 z-10 md:hidden bg-main pb="[env(safe-area-inset-bottom)]" transition="padding 20">
      <nav
        border="t zinc-700" scrollbar-hide h-14 flex flex-row overscroll-none
        class="after:pointer-events-none after:h-[calc(100%+0.5px)] after:w-0.1px after-content-empty"
      >
        <div grid grid-cols-5 flex-1 items-center gap-x-2 text-xl>
          <NuxtLink to="/" active-class="text-primary" grid place-items-center gap-1 text-xs>
            <span i-mdi-home text-3xl />
          </NuxtLink>
          <NuxtLink to="/stats" active-class="text-primary" grid place-items-center gap-1 text-xs>
            <span i-mdi-chart-line text-3xl />
          </NuxtLink>

          <NuxtLink to="/add" active-class="text-primary" grid place-items-center gap-1 text-xs>
            <span i-mdi-plus-circle text-3xl />
          </NuxtLink>

          <NuxtLink to="/group" active-class="text-primary" grid place-items-center gap-1 text-xs>
            <span i-mdi-account-group text-3xl />
          </NuxtLink>

          <NuxtLink to="/profile" active-class="text-primary" grid place-items-center gap-1 text-xs>
            <Avatar max-w-8 />
          </NuxtLink>
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
