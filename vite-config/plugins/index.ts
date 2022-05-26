import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import setupMockPlugin from './mock'

export default function setupVitePlugins(isBuild: boolean, env: Record<string, any>) {
    return [
        vue(),
        setupMockPlugin(isBuild)
    ] as Plugin[]
}