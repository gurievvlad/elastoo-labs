import { createApp } from 'vue'
import './style.css'
import App from './App'
import { createPinia } from 'pinia'
import router from './router'
const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')
