<script setup lang="ts">
import VSelect from '@/components/ui/VSelect.vue'
import WidgetCard from '@/components/WidgetCard.vue'

const options = [
  { label: 'Option 1 somthing longer', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' }
]
</script>

<template>
  <div>
    <v-select :options="options" />
    <widget-card width="158px" height="140px"> de </widget-card>
  </div>
</template>
