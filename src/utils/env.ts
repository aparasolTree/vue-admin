const env: any = {}

Object.entries(import.meta.env).forEach(([key, value]) => {
    if (['true', 'false'].includes(value)) {
        env[key] = value === 'true' ? true : false
    } else if (/^\d+$/.test(value)) env[key] = Number(value)
    else if (value === 'null') env[key] = null
    else if (value === 'undefined') env[key] = undefined
    else {
        env[key] = value
    }
})

export default env as ViteEnv;