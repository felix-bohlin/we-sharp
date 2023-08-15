import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'feed',
      component: () => import('../views/feed.vue'),
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('../views/stats.vue'),
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/addPost.vue'),
    },
    {
      path: '/group',
      name: 'group',
      component: () => import('../views/group.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile.vue'),
    },
  ],
})

export default router
