import { ref } from 'vue'

interface Option {
  label: string
  value: string | number
}

export function useKeyboardNavigation(options: Option[], selectedOption: any) {
  const navigateUp = () => {
    const currentIndex = options.findIndex((option) => option.value === selectedOption.value?.value)
    if (currentIndex > 0) {
      selectedOption.value = options[currentIndex - 1]
    }
  }

  const navigateDown = () => {
    const currentIndex = options.findIndex((option) => option.value === selectedOption.value?.value)
    if (currentIndex < options.length - 1) {
      selectedOption.value = options[currentIndex + 1]
    }
  }

  return {
    navigateUp,
    navigateDown
  }
}
