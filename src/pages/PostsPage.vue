<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { POSTS_ID } from '@/utils/constants'

const posts = ref<{ title: string; description: string }[]>([])

onMounted(() => {
  posts.value = JSON.parse(localStorage.getItem(POSTS_ID) || '[]')
})
</script>

<template>
  <div class="grid grid-cols-[300px_1fr] grow py-4">
    <div class="grow border-r border-gray-300 pr-4">
      <h1 class="text-xl mb-4">Posts page</h1>
      <ul class="space-y-3 mb-3">
        <h4 v-if="posts.length === 0" class="text-gray-500">Posts is empty</h4>
        <li v-for="post in posts" :key="post.title">
          {{ post.title }}
        </li>
      </ul>
      <RouterLink class="text-green-500 underline underline-offset-4" to="/posts/create-post">
        Create new post
      </RouterLink>
    </div>
    <div class="flex items-center justify-center h-full">
      <RouterView />
    </div>
  </div>
</template>
