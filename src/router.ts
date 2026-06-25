import { createMemoryHistory, createRouter } from 'vue-router'
import Main from './views/Main.vue'
import About from './views/About.vue'


const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})