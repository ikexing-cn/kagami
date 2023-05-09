<script lang="ts" setup>
const { expandMenu, toggleExpandMenu } = useMenu()
</script>

<template>
  <header flex="~ center">
    <h1 text-8 font="bold sans italic">
      KAgemi
    </h1>

    <span
      class="i-carbon:menu"
      absolute left-6 cursor-pointer lg-hidden
      :class="expandMenu && 'bg-blue'"
      @click="toggleExpandMenu"
    />

    <div flex="~ center" absolute right-6 gap-1 text-2>
      <span>运行状态</span>
      <div h-2 w-2 rounded-full bg-green />
    </div>
  </header>
  <div w-full b="b" />
</template>

<style lang="less" scoped></style>
