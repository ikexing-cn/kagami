<script lang="ts" setup>
defineProps<{
  icon: string
  text: string
  active: boolean
  expand: boolean
}>()
</script>

<template>
  <li
    :class="[active && 'text-blue']"
    flex="~ center" cursor-pointer gap-2 font-bold
  >
    <span text-4 lg-text-3 :class="icon" />
    <span
      :class="[expand && 'block!']" hidden
      leading="3.5" text="3.5" lg="block!"
    >
      {{ text }}
    </span>
  </li>
</template>

<style scoped></style>
