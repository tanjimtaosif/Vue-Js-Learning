import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('@/pages/FeaturesView.vue'), // Lazy load
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/pages/PricingView.vue'), // Lazy load
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutView.vue'), // Lazy load
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/ContactView.vue'), // Lazy load
    },
  ],

  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
