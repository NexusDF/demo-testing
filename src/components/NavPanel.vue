<script setup lang="ts">
import NavLink from './NavLink.vue'
</script>

<template>
  <nav class="flex items-center gap-x-4 h-14 px-6">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/posts">Posts</NavLink>
  </nav>
</template>
