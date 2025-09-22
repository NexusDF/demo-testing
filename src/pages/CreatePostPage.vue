<script setup lang="ts">
import { usePosts } from '@/composable/usePosts'
import type { Post } from '@/utils/interfaces'
import { useRouter } from 'vue-router'

const router = useRouter()
const posts = usePosts()

function onSave(e: SubmitEvent) {
  const formData = new FormData(e.currentTarget as HTMLFormElement)
  const newPost = Object.fromEntries(formData) as Omit<Post, 'id'>

  const id = posts.value.length + '_id'

  posts.value.push({
    id,
    ...newPost,
  })
  router.push(`/posts/${id}/post`)
}
</script>

<template>
  <form @submit.prevent="onSave" class="w-md grid gap-y-2 text-gray-800">
    <h3 class="text-2xl font-bold mb-3">Create new post</h3>
    <div class="grid">
      <label for="title">Title</label>
      <input class="border border-gray-300 rounded p-2" type="text" name="title" id="title" />
    </div>
    <div class="grid">
      <label for="description">Description</label>
      <textarea
        class="border border-gray-300 rounded p-2"
        type="text"
        name="description"
        id="description"
      />
    </div>
    <button
      type="submit"
      class="justify-self-end px-3 py-2 rounded min-w-[120px] text-white bg-green-500"
    >
      Save
    </button>
  </form>
</template>
