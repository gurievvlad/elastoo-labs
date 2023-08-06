import { createRouter, createWebHistory } from 'vue-router'
import App from './App'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: App,
    },
  ],
})
