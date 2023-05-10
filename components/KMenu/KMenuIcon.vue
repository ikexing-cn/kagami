<script lang="ts" setup>
defineProps<{
  icon: string
  text: string
  active: boolean
  expand: boolean
  to?: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    :class="[active && 'text-blue']"
    flex="~ center" gap-2 font-bold base-hover
  >
    <span :class="icon" text-4 lg-text-3 />
    <span
      :class="[expand && 'block!']" hidden
      leading="3.5" text="3.5" lg="block!"
    >
      {{ text }}
    </span>
  </NuxtLink>
</template>
