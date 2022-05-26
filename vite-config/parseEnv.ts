export default function parseEnv(env: Record<string, string>): ViteEnv {
    const envs: any = {}
    Object.entries(env).forEach(([key, value]) => {
        if (['true', 'false'].includes(value)) {
            envs[key] = value === 'true' ? true : false
        } else if (/^\d+$/.test(value)) envs[key] = Number(value)
        else if (value === 'null') envs[key] = null
        else if (value === 'undefined') envs[key] = undefined
        else {
            envs[key] = value
        }
    })

    return envs
}