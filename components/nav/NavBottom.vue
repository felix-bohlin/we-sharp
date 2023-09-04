<script setup lang="ts">
const uiStore = useUiStore()
</script>

<template>
  <Transition>
    <footer v-if="!uiStore.modalModeActive" pb="[env(safe-area-inset-bottom)]" transition="padding 20" p="s-2 e-2" sticky bottom-2 left-0 right-0 z-10 class="md:w-[clamp(38ch,100%,80ch)]" m="s-auto e-auto">
      <nav
        scrollbar-hide h-14 flex flex-row items-center overscroll-none rounded-xl shadow-xl md:h-auto md:py-2 class="bg-slate-50 @dark:bg-zinc-900/95"
      >
        <div grid grid-cols-5 flex-1 items-center gap-x-2 text-xl>
          <NuxtLink to="/" active-class="text-primary" grid place-items-center gap-1 text-xs>
            <span i-mdi-home text-3xl />
            <span hidden md:block>Home</span>
          </NuxtLink>
          <NuxtLink to="/stats" active-class="text-primary" grid place-items-center gap-1 text-xs>
            <span i-mdi-chart-line text-3xl />
            <span hidden md:block>Stats</span>
          </NuxtLink>

          <NuxtLink to="/add" active-class="text-primary" grid place-items-center gap-1 text-xs>
            <span i-mdi-plus-circle text-3xl />
            <span hidden md:block>Add</span>
          </NuxtLink>

          <NuxtLink to="/group" active-class="text-primary" grid place-items-center gap-1 text-xs>
            <span i-mdi-account-group text-3xl />
            <span hidden md:block>Groups</span>
          </NuxtLink>

          <NuxtLink to="/profile" active-class="text-primary" grid place-items-center gap-1 text-xs>
            <Avatar class="max-w-[30px]" />
            <span hidden md:block>You</span>
          </NuxtLink>
        </div>
      </nav>
    </footer>
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
