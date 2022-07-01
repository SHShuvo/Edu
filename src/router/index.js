import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/student-profile',
    name: 'student-profile',
    component: () => import('../components/Student.vue')
  },
  {
    path: '/teacher-profile/',
    name: 'teacher-profile',
    component: () => import('../components/Teacher.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
