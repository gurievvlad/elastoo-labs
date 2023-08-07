import { createRouter, createWebHistory } from 'vue-router'
import App from './App'
import line from './pages/line'
import pie from './pages/pie'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/line',
          component: line,
        },
        {
          path: '/pie',
          component: pie,
        },
      ]
    },
  ],
})
