import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Auth/Login.vue'
import Callback from '../views/Auth/Callback.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/login/callback',
      name: 'callback',
      component: Callback,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/:slug',
      name: 'roomDetail',
      component: Home,
    },
  ],
})

export default router
