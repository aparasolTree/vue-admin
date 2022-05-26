class Helper {
    public readonly env = {} as ImportMetaEnv

    constructor() {
        this.env = this.getEnvs()
    }

    getEnvs(): ImportMetaEnv {
        const envs: any = {}
        Object.entries(import.meta.env).forEach(([key, value]) => {
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
}

const helper = new Helper()
const env = helper.env

export default helper
export { env }