<script setup lang="ts">
import { POSTS_ID } from '@/utils/constants'
import { useRouter } from 'vue-router'

const router = useRouter()

function onSave(e: SubmitEvent) {
  const formData = new FormData(e.currentTarget as HTMLFormElement)
  const { title, description } = Object.fromEntries(formData) as {
    title: string
    description: string
  }
  const posts = JSON.parse(localStorage.getItem(POSTS_ID) || '[]')
  localStorage.setItem(POSTS_ID, JSON.stringify([{ title, description }, ...posts]))
  router.push('/posts')
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
