import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../Home.vue'
import BJJView from '../BJJView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/bjj', component: BJJView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router