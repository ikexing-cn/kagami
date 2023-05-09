<script lang="ts" setup>
useHead({
  title: 'KAgami',
})
</script>

<template>
  <div class="k-main">
    <KHeader />
    <div flex="~ 1">
      <KMenu />
      <div flex-1 p="x-6 y-4">
        <slot />
      </div>
    </div>
  </div>
</template>
