<script lang="ts" setup>
const items = [
  { index: 0, icon: 'i-carbon-home', text: '管理' },
  { index: 1, icon: 'i-carbon-settings', text: '配置' },
]

const { currentMenu, expandMenu } = useMenu()
</script>

<template>
  <aside b="r" w-17 lg-w-30 :class="[expandMenu && 'w-40']" transition="width">
    <ul flex="~ col center" gap-8 pt text-4 lg-text-5>
      <template v-for="item in items" :key="item.index">
        <KMenuIcon
          :icon="item.icon"
          :text="item.text"
          :active="currentMenu === item.index"
          :expand="expandMenu"
          @click="currentMenu = item.index"
        />
      </template>
    </ul>
  </aside>
</template>
