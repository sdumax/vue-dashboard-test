<template>
  <div class="sidebar">
    <router-link to="/">
      <div class="logo">
        <img src="/logo.svg" alt="tesla logo" />
      </div>
    </router-link>
    <section class="menu">
      <ul class="menu-list">
        <li v-for="item in menu" :key="item.name" class="menu-item">
          <router-link v-if="item.link" :to="item.link">
            <component :is="item.icon" />
            <span>{{ item.name }}</span>
          </router-link>
          <span v-else class="menu-section-header">{{ item.name }}</span>
          <ul v-if="item.children" class="menu-list">
            <li
              v-for="child in item.children"
              :key="child.name"
              class="menu-item menu-section-item"
            >
              <router-link v-if="child.link" :to="child.link">
                <component :is="child.icon" />
                <span>{{ child.name }}</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import IconReport from '@/components/icons/IconReport.vue'
import IconLibrary from '@/components/icons/IconLibrary.vue'
import IconPeople from '@/components/icons/IconPeople.vue'
import IconActivities from '@/components/icons/IconActivity.vue'
import IconGetStarted from '@/components/icons/IconGetStarted.vue'
import IconSettings from '@/components/icons/IconSetting.vue'

import type { MenuItem } from '@/shared/types'

const menu: MenuItem[] = [
  {
    name: 'Reports',
    link: '/',
    icon: IconReport
  },
  {
    name: 'Library',
    link: '/library',
    icon: IconLibrary
  },
  {
    name: 'People',
    link: '/people',
    icon: IconPeople
  },
  {
    name: 'Activities',
    link: '/activities',
    icon: IconActivities
  },
  {
    children: [
      {
        name: 'Get Started',
        link: '/get-started',
        icon: IconGetStarted
      },
      {
        name: 'Settings',
        link: '/settings',
        icon: IconSettings
      }
    ],
    name: 'Support'
  }
]
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: var(--white-color);
  border-right: 1px solid var(--color-border);
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;

  .logo {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    padding-left: 20px;

    img {
      width: auto;
      height: 100%;
    }
  }

  .menu-list {
    list-style: none;
    padding: 0;
    margin: 0;

    .menu-section-header {
      color: var(--text-gray-color);
      font-weight: var(--font-weight-bold);
      padding: 15px 20px;
      display: block;
    }

    .menu-item {
      a {
        color: var(--text-dark-color);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-base);
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 15px 20px;
        gap: 10px;
        margin-bottom: 2px;
        border-radius: 10px;
        transition: var(--transition-base);

        &.router-link-active,
        &.router-link-active:hover {
          background-color: var(--secondary-color);
          color: var(--primary-color);
        }

        &:hover {
          background-color: var(--gray-color);
        }
      }
    }
  }
}
</style>
