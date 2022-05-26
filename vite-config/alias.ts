import { AliasOptions } from 'vite'
import { resolve } from 'path'

const alias: AliasOptions = {
    '@': resolve(__dirname, '../src')
}

export default alias