import { createApp } from 'vue'
import router, { setupRouter } from './router'
import App from './App.vue'
import setupPlugins from './plugins'
import '@/style/global.scss'

function bootstrap() {
    const app = createApp(App)
    setupRouter(app)
    setupPlugins(app)
    router.isReady().then(() => {
        app.mount('#app')
    })
}

bootstrap()