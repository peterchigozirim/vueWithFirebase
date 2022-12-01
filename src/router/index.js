import { createRouter, createWebHistory } from 'vue-router'
// import {pinia} from '@/stores/pinia'
import { AuthStore } from '../stores/AuthStore'
import HomeView from '../views/HomeView.vue'
import AuthPage from '@/views/AuthPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage
    }
  ]
})
router.beforeEach((to) => {
  const store = AuthStore()
  if (store.user == null && to.name !== 'auth') {
    return { name: 'auth'}
  }
})

export default router
