import { createMemoryHistory, createRouter } from 'vue-router'

import MainView from '../views/Main.vue'
import About from '../views/About.vue'
import Privacy from '../views/Privacy.vue'
import Contact from '../views/Contact.vue'
import HowToUse from '../views/HowToUse.vue'
import Terms from '../views/Terms.vue'

const routes = [
    { path: '/', component: MainView },
    { path: '/about', component: About },
    { path: '/privacy', component: Privacy },
    { path: '/contact', component: Contact },
    { path: '/how-to-use', component: HowToUse },
    { path: '/terms-of-service', component: Terms },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})