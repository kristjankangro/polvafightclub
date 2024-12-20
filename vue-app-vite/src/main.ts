import { createApp } from 'vue'
import App from './App.vue'
import router from "./infra/router.ts";

createApp(App)
    .use(router)
    .mount('#app')
