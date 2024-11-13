import { createRouter, createWebHistory } from "vue-router"
import Main from "../Main.vue"

const routes = [
    { path: '/', component: Main },
    { path: '/node/:id', component: () => import('../components/NodeDrawer.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router