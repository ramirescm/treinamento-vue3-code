import { createApp } from 'vue'
import App from './App.vue'
import Playground from './views/Playground/index.vue'
import { setup } from './utils/bootstrap'

import '@/assets/css/tailwind.css'
import '@/assets/css/fonts.css'
import 'animate.css'

setup({
  onDevelopment: () => {
    createApp(Playground).mount('#app')
  },
  onProduction: () => {
    createApp(App).mount('#app')
  }
})
