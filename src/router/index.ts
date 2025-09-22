import HomePage from '@/pages/HomePage.vue'
import PostsPage from '@/pages/PostsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/posts',
    component: PostsPage,
    children: [
      { path: '', component: () => import('@/pages/PostsListPage.vue') },
      { path: 'create-post', component: () => import('@/pages/CreatePostPage.vue') },
      { path: ':id/post/', component: () => import('@/pages/PostItemPage.vue') },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
