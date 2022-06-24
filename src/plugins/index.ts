import { App } from "vue";
import setupTailwindCSS from "./tailwind-css";

export default function setupPlugins(app: App) {
    autoRegisterComponents(app)
    setupTailwindCSS()
}

function autoRegisterComponents(app: App) {
    const components = import.meta.globEager('../components/Base/*.vue')
    Object.keys(components).forEach(key => {
        const componentName = key.split(/(\\|\/)/g).pop()?.split('.').shift();
        if (componentName) {
            app.component(componentName, components[key].default)
        }
    });
}