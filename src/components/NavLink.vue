<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  to: string
}>()
</script>

<template>
  <RouterLink :to="to" active-class="text-green-600">
    <slot />
  </RouterLink>
</template>
