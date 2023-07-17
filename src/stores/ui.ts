import { defineStore } from "pinia"
import { ref } from "vue"

export const useUiStore = defineStore("ui", () => {
  const globalScroll = ref(true)

  function toggleGlobalScroll() {
    globalScroll.value = !globalScroll.value

    document.body.style.overflowY = globalScroll.value ? "auto" : "hidden"
    document.body.style.height = globalScroll.value ? "auto" : "100vh"
  }

  return { globalScroll, toggleGlobalScroll }
})
