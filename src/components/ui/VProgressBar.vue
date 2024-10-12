<template>
  <div class="progress">
    <div class="progress-label">
      <slot name="label">{{ label }}</slot>
    </div>

    <div class="progress-row">
      <div class="progress-bar">
        <div class="progress-bar__fill"></div>
      </div>
      <div class="progress-suffix">
        <slot name="suffix">{{ suffix }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: '40%'
  },
  label: {
    type: String,
    default: 'Progress'
  },
  suffix: {
    type: String,
    default: 'correct'
  }
})
</script>

<style lang="scss" scoped>
.progress {
  --progress-fill-color: #3182ce;
  --progress-background-color: #e5e5e5;
  --progress-height: 10px;
  --progress-border-radius: 10px;
  --progress-transition: width 0.8s ease-in-out;
  --progress-suffix-color: var(--text-dark-color);

  .progress-label {
    margin-bottom: 10px;
    color: var(--black-color);
  }
  .progress-row {
    display: flex;
    align-items: center;
  }
  .progress-suffix {
    margin-left: 10px;
    color: var(--progress-suffix-color);
  }

  .progress-bar {
    width: 100%;
    height: var(--progress-height);
    border-radius: var(--progress-border-radius);
    background-color: var(--progress-background-color);

    .progress-bar__fill {
      height: 100%;
      border-radius: var(--progress-border-radius);
      background-color: var(--progress-fill-color);
      width: v-bind(width);
    }
  }
}
</style>
