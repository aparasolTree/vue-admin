import { RouteRecordRaw } from "vue-router"

const layout = import.meta.globEager('../layouts/*.vue')
const views = import.meta.globEager('../views/**/*.vue')

function getRoutes() {
    const layoutRoutes: RouteRecordRaw[] = []
    Object.entries(layout).forEach(([file, module]) => {
        const route = getRouteByModule(file, module)
        route.children = getChildrenRoutes(route)
        layoutRoutes.push(route)
    })

    return layoutRoutes
}

function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
    const routes: RouteRecordRaw[] = []
    Object.entries(views).forEach(([file, module]) => {
        if (file.includes(`../views/${layoutRoute.name as string}`)) {
            const route = getRouteByModule(file, module)
            routes.push(route)
        }
    })
    return routes
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/ig, '')
    const route: RouteRecordRaw = {
        name: name.replace('/', '.'),
        path: `/${name}`,
        component: module.default
    }

    return Object.assign(route, module.default?.route)
}

export default getRoutes()