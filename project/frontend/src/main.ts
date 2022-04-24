import './registerServiceWorker'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
const x=1
const y = { a:1 }

console.log(x, y)
createApp(App).use(store).use(router).mount('#app')
