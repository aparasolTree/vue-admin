import { ConfigEnv, loadEnv } from 'vite'
import alias from './vite-config/alias'
import parseEnv from './vite-config/parseEnv'
import setupVitePlugins from './vite-config/plugins'

export default ({ command, mode }: ConfigEnv) => {
	const isBuild = command === 'build'
	const env = parseEnv(loadEnv(mode, process.cwd()))
	return {
		plugins: setupVitePlugins(isBuild, env),
		resolve: {
			alias
		}
	}
}