<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PostsList from '@/components/PostsList.vue'
import { usePosts } from '@/composable/usePosts'

const posts = usePosts()
</script>

<template>
  <div class="grid grid-cols-[300px_1fr] grow py-4">
    <div class="grow border-r border-gray-300 pr-4">
      <h1 class="text-xl mb-4">Posts page</h1>
      <PostsList :posts="posts" class="mb-3" />
      <RouterLink class="text-green-600 underline underline-offset-4" to="/posts/create-post">
        Create new post
      </RouterLink>
    </div>
    <div class="flex items-center justify-center h-full">
      <RouterView />
    </div>
  </div>
</template>
