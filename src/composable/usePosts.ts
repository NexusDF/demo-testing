import { useStorage } from '@vueuse/core'
import { POSTS_ID } from '@/utils/constants'
import type { Post } from '@/utils/interfaces'

export function usePosts() {
  return useStorage<Post[]>(POSTS_ID, [])
}
