<script setup lang="ts">
import type { Post } from '@/utils/interfaces'

defineProps<{
  posts: Post[]
}>()
</script>

<template>
  <ul class="space-y-3">
    <h4 v-if="posts.length === 0" class="text-gray-500">Posts is empty</h4>
    <li v-for="post in posts" :key="post.id">
      <RouterLink
        :to="`/posts/${post.id}/post`"
        class="hover:underline"
        active-class="text-green-500"
      >
        {{ post.title }}
      </RouterLink>
    </li>
  </ul>
</template>
