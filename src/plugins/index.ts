import { App } from "vue";
import setupTailwindCSS from "./tailwind-css";

export default function setupPlugins(app: App) {
    setupTailwindCSS()
}