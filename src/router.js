import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'open-day',
      component: () => import('./views/OpenDay/OpenDayView.vue'),
      meta: { title: 'Какое направление тебе больше подойдёт?' },
    },
  ],
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = String(to.meta.title)
})

export default router
