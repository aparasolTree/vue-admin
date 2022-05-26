import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import layout from './autoload'
import routes from './routes'
console.log([
    ...routes,
    ...layout,
]);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...routes,
        ...layout,
    ]
})

export function setupRouter(app: App) {
    app.use(router)
}

export default router