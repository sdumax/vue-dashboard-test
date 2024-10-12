<script setup lang="ts">
import { ref } from 'vue'
import VSelect from '@/components/ui/VSelect.vue'
import WidgetCard from '@/components/WidgetCard.vue'

const filters = ref([
  {
    name: 'Timeframe',
    options: [
      { label: 'All', value: 'all' },
      { label: 'Today', value: 'today' },
      { label: 'Yesterday', value: 'yesterday' },
      { label: 'Last 7 days', value: 'last_7_days' },
      { label: 'Last 30 days', value: 'last_30_days' }
    ]
  },
  {
    name: 'People',
    options: [
      { label: 'All', value: 'all' },
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' }
    ]
  },
  {
    name: 'Topics',
    options: [
      { label: 'All', value: 'all' },
      { label: 'Design', value: 'design' },
      { label: 'Development', value: 'development' },
      { label: 'Marketing', value: 'marketing' },
      { label: 'Sales', value: 'sales' }
    ]
  }
])
</script>

<template>
  <div>
    <div class="filters">
      <v-select
        v-for="filter in filters"
        :key="filter.name"
        :options="filter.options"
        :placeholder="filter.name"
        :default-selected="filter.options[0].value"
      >
        <template #selected="{ selectedOption }"
          ><div>
            {{ filter.name }}: <span style="font-weight: 600">{{ selectedOption.label }}</span>
          </div>
        </template>
      </v-select>
    </div>
    <widget-card width="158px" height="140px"> de </widget-card>
  </div>
</template>

<style lang="scss">
.filters {
  --v-select-width: 100%;
  display: flex;
  gap: 20px;
  width: 100%;
}
</style>
