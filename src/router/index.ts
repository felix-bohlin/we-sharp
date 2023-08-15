import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'feed',
      component: () => import('../views/Feed.vue'),
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('../views/Stats.vue'),
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddPost.vue'),
    },
    {
      path: '/group',
      name: 'group',
      component: () => import('../views/Group.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
    },
  ],
})

export default router
