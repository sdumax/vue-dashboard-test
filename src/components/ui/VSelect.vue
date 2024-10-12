<template>
  <div
    class="v-select"
    @keydown.up="navigateUp"
    @keydown.down="navigateDown"
    @keydown.enter="handleKeydown"
    tabindex="0"
    role="combobox"
    :aria-expanded="isOpen"
    aria-haspopup="listbox"
    ref="select"
  >
    <div
      class="v-select__selected"
      @click="toggleDropdown"
      :aria-activedescendant="selectedOption ? `option-${selectedOption.value}` : ''"
    >
      <div class="v-select__selected-text">
        {{ selectedOption ? selectedOption.label : '' }}
        <template v-if="!selectedOption">
          <slot name="placeholder">{{ placeholder }}</slot>
        </template>
        <icon-caret-down />
      </div>
    </div>
    <ul v-if="isOpen" class="v-select__dropdown" role="listbox">
      <li
        v-if="options.length === 0"
        class="v-select__option v-select__option--no-data"
        role="option"
        aria-disabled="true"
      >
        No data
      </li>
      <li
        v-else
        v-for="option in options"
        :key="option.value"
        :id="`option-${option.value}`"
        :class="{ 'v-select__option--selected': option.value === selectedOption?.value }"
        class="v-select__option"
        @click="selectOption(option)"
        role="option"
        @keydown.up="navigateUp"
        @keydown.down="navigateDown"
        @keydown.enter="selectOption(option)"
        :aria-selected="option.value === selectedOption?.value"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconCaretDown from '@/components/icons/IconCaretDown.vue';
import { useDropdown } from '@/composables/useDropdown';
import { useKeyboardNavigation } from '@/composables/useKeyboardNavigation';

interface Option {
  label: string;
  value: string | number;
}

const props = defineProps({
  options: {
    type: Array as () => Option[],
    required: true,
    default: () => [],
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  placeholder: {
    type: String,
    default: 'Select an option',
  },
});

const selectedOption = ref<Option | null>(null);
const select = ref<HTMLElement | null>(null);

const { isOpen, toggleDropdown } = useDropdown(select);
const { navigateUp, navigateDown } = useKeyboardNavigation(props.options, selectedOption);

const selectOption = (option: Option) => {
  selectedOption.value = option;
  isOpen.value = false;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    toggleDropdown();
  }

  if (event.key === 'Escape') {
    isOpen.value = false;
  }
};
</script>

<style lang="scss" scoped>
.v-select {
  --v-select-bg: #fff;
  --v-select-border-color: #eff0f6;
  --v-select-border-width: 1px;
  --v-select-border-style: solid;
  --v-select-color: var(--black-color);
  --v-select-highlight-bg: var(--secondary-color);
  --v-select-highlight-color: var(--primary-color);
  --v-select-transition-duration: 0.3s;
  --v-select-transition-property: border-color;
  --v-select-transition: var(--v-select-transition-property) var(--v-select-transition-duration);
  --v-select-shadow: var(--box-shadow);
  --v-select-radius: 15px;
  --v-select-border: var(--v-select-border-width) var(--v-select-border-style)
    var(--v-select-border-color);

  --v-select-dropdown-border-radius: 4px;
  --v-select-dropdown-max-height: 200px;

  position: relative;
  display: inline-block;
  width: 200px;
  border: var(--v-select-border);
  border-radius: var(--v-select-radius);
  background-color: var(--v-select-bg);
  cursor: pointer;
  transition: border-color var(--v-select-transition);
  color: var(--v-select-color);

  &:focus {
    outline: none;
    border-color: var(--v-select-highlight);
  }

  &__selected {
    padding: 10px;

    &-text {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 24px;
    }
  }

  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: var(--v-select-border);
    border-radius: var(--v-select-dropdown-border-radius);
    background-color: var(--v-select-bg);
    color: var(--v-select-color);
    max-height: var(--v-select-dropdown-max-height);
    overflow-y: auto;
    z-index: 1000;
    transition: opacity var(--v-select-transition);
    box-shadow: var(--v-select-shadow);
    margin: 0;
    padding: 0;
    margin-top: 5px;
  }

  &__option {
    padding: 10px;
    cursor: pointer;
    transition: background-color var(--v-select-transition);
    margin: 0;
    max-width: max-content;

    &:hover,
    &--selected {
      background-color: var(--v-select-highlight-bg);
      color: var(--v-select-highlight-color);
    }

    &--no-data {
      padding: 10px;
      color: #999;
    }
  }
}
</style>