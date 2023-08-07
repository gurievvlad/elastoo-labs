import { createRouter, createWebHistory } from 'vue-router'
import line from './pages/line/line'
import pie from './pages/pie/pie'
import home from './pages/home/home'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/line',
      component: line
    },
    {
      path: '/pie',
      component: pie
    }
  ]
})
