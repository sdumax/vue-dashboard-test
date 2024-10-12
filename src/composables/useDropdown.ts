import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useDropdown(selectRef: any) {
  const isOpen = ref(false)

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
      isOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })

  return {
    isOpen,
    toggleDropdown
  }
}
