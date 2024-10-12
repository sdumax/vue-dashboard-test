<template>
  <div class="dashboard-layout">
    <side-bar></side-bar>
    <main>
      <dash-header />
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import DashHeader from '@/components/DashHeader.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<style scoped lang="scss">
.dashboard-layout {
  display: grid;
  height: 100vh;
  grid-auto-flow: column;
  grid-template-columns: 280px 1fr;

  main {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
