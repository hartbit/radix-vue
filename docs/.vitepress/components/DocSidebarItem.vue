<script setup lang="ts">
import { computed } from 'vue'
import { type SidebarItem, useSidebarControl } from '../composables/sidebar'

const props = defineProps<{
  item: SidebarItem
}>()
const { isActiveLink } = useSidebarControl(computed(() => props.item))
</script>

<template>
  <div
    class="flex items-center text-sm text-muted-foreground hover:bg-card text-foreground rounded-lg"
    :class="{ 'is-active !bg-primary/10 !text-primary font-semibold': isActiveLink }"
  >
    <a
      :href="item.link"
      class="h-[2.15rem] px-4 inline-flex items-center w-full"
      v-html="item.text"
    />
  </div>
</template>
