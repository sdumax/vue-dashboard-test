<template>
  <div class="widget">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface WidgetCardProps {
  height?: string
  width?: string
}

defineProps<WidgetCardProps>()
</script>

<style scoped lang="scss">
.widget {
  background: var(--white-color);
  color: var(--black-color);
  border-radius: 18px;
  box-shadow: var(--box-shadow);
  padding: 20px;
  @if v-bind(height) {
    height: v-bind(height);
  }
  @if v-bind(width) {
    width: v-bind(width);
  }
}
</style>
