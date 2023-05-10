<script lang="ts" setup>
import type { MenuItem } from '../types/menu/MenuItem'

const items: MenuItem[] = [
  { index: 0, icon: 'i-carbon-home', text: '管理面板', to: '/' },
  { index: 1, icon: 'i-carbon-settings', text: '配置', to: '/setting' },
]

const { currentMenu, expandMenu } = useMenu()
</script>

<template>
  <aside b="r" w-17 lg-w-40 :class="[expandMenu && 'w-40']" transition="width">
    <ul flex="~ col center" gap-8 pt text-4 lg-text-5>
      <template v-for="item in items" :key="item.index">
        <KMenuIcon
          :to="item.to"
          :text="item.text"
          :icon="item.icon"
          :active="currentMenu === item.index"
          :expand="expandMenu"
          @click="currentMenu = item.index"
        />
      </template>
    </ul>
  </aside>
</template>
