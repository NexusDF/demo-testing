<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavPanel from './components/NavPanel.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavPanel />
    <main class="flex grow px-6">
      <RouterView />
    </main>
  </div>
</template>
