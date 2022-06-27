import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue'),
        meta: {
            auth: true
        }
    },
]

export default routes