<template>
  <div class="dashboard-layout">
    <side-bar></side-bar>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'
</script>

<style scoped lang="scss">
.dashboard-layout {
  display: grid;
  height: 100vh;
  grid-auto-flow: column;
}
</style>
