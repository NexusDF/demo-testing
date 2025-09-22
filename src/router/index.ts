import CreatePostPage from '@/pages/CreatePostPage.vue'
import HomePage from '@/pages/HomePage.vue'
import PostsListPage from '@/pages/PostsListPage.vue'
import PostsPage from '@/pages/PostsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/posts',
    component: PostsPage,
    children: [
      { path: '', component: PostsListPage },
      { path: 'create-post', component: CreatePostPage },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
