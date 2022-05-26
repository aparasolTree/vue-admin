interface ViteEnv {
    VITE_API: string
    VITE_AUTOLOAD_ROUTE: boolean
}

interface ImportMetaEnv extends ViteEnv { }
interface ImportMeta {
    readonly env: ImportMetaEnv
}