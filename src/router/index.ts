import { store } from '@/utils';
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import layout from './autoload'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...routes,
        ...layout,
    ]
});

router.beforeEach((to, from) => {
    const token = store.get<{ token: string }>('token')?.token;

    if (!(!to.meta.auth || (to.meta.auth && token))) return { name: 'auth.login' }
    if (!(!to.meta.guest || (to.meta.guest && !token))) return from
});

export function setupRouter(app: App) {
    app.use(router)
}

export default router