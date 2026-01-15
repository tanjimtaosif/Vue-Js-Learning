import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/HomeView.vue'
import Features from '@/pages/FeaturesView.vue'
import Pricing from '@/pages/PricingView.vue'
import About from '@/pages/AboutView.vue'
import Contact from '@/pages/ContactView.vue'

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
      component: Features,
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],

  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
