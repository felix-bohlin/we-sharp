import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const modalModeActive = ref(false)

  // Is toggled if a modal like component is active. Other components can use this to disable their own functionality etc.
  function toggleModalMode(toggleValue?: boolean) {
    modalModeActive.value = toggleValue === undefined ? !modalModeActive.value : toggleValue
  }

  return { modalModeActive, toggleModalMode }
})
