<script setup lang="ts">
import { usePosts } from '@/composable/usePosts'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = computed(() => usePosts().value.find((p) => p.id === route.params.id))
</script>

<template>
  <h1>{{ post?.title }}</h1>
</template>
