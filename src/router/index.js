import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        name: 'info',
        component: () => import('../views/InfoView.vue')
      },
      {
        path: 'project',
        name: 'project',
        component: () => import('../views/ProjectView.vue')
      },
      {
        path: 'skill',
        name: 'skill',
        component: () => import('../views/SkillView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
