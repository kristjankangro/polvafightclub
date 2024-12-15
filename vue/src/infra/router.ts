import {createMemoryHistory, createRouter} from 'vue-router'

import HomeView from '../Home.vue'
import BJJView from '../BJJView.vue'
import MMA from '../MMA.vue'
import Info from "../Info.vue";

const routes = [
    {path: '/', component: HomeView},
    {path: '/bjj', component: BJJView},
    {path: '/mma', component: MMA},
    {path: '/info', component: Info},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    
    console.log(from.path);
    console.log(to.path);
    setTimeout(() => {
        next();
    }, 400);
    
})

export default router