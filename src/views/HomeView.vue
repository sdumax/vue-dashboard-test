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

const metrics = ref([
  {
    title: 'Active Users',
    value: '27/80'
  },
  {
    title: 'Questions Answered',
    value: '3,298'
  },
  {
    title: 'Avg. Session Length',
    value: '2m 34s'
  },
  {
    title: 'Starting Knowledge',
    value: '64%',
    hasChart: true
  },
  {
    title: 'Current Knowledge',
    value: '86%',
    hasChart: true
  },
  {
    title: 'Knowledge Gain',
    value: '+34%',
    hasChart: true
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
    <section class="widget-section">
      <div class="metrics-widget">
        <widget-card
          v-for="metric in metrics"
          :key="metric.title"
          :width="metric.hasChart ? '100%' : '158px'"
          :height="metric.hasChart ? '140px' : '100px'"
        >
          <div>
            <h6>{{ metric.title }}</h6>
            <p>{{ metric.value }}</p>
          </div>
        </widget-card>
      </div>
    </section>
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
