import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Auth/Login.vue'
import Callback from '../views/Auth/Callback.vue'
import Home from '../views/Home.vue'
import Room from '@/views/Chat/Room.vue'
import MainLayout from '@/layouts/MainLayout.vue'

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
      name: 'Public',
      component: MainLayout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/:slug',
          name: 'Room',
          component: Room,
        }
      ]
    },
  ],
})

export default router
