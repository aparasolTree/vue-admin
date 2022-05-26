import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

export default [
    {
        url: '/api/user',
        method: 'get',
        response: () => {
            return {
                code: 0,
                message: 'user info',
                type: 'success',
                result: {
                    name: 'xlws'
                }
            }
        }
    },
    {
        url: '/api/login',
        method: 'get',
        response: () => {
            return {
                code: 0,
                message: '登录成功',
                type: 'success',
                result: {
                    token: Random.string(10)
                }
            }
        }
    },
] as MockMethod[]