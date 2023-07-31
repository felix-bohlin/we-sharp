import { defineStore } from "pinia"
import { ref } from "vue"

export const useUiStore = defineStore("ui", () => {
  const globalScroll = ref(true)

  function toggleGlobalScroll(toggleValue?: boolean) {
    const newValue =
      toggleValue === undefined ? !globalScroll.value : toggleValue
    globalScroll.value = newValue

    document.body.style.overflow = newValue ? "auto" : "hidden"
    document.body.style.height = newValue ? "auto" : "100vh"
  }

  return { globalScroll, toggleGlobalScroll }
})
