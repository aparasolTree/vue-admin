import axios, { AxiosRequestConfig } from 'axios'

export default class Axios {
    private instance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors()
    }

    public request<T = any, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.instance.request<D>(config)
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }

    private interceptors() {
        this.intercaptorsRequest()
        this.intercaptorsResponse()
    }

    private intercaptorsRequest() {
        this.instance.interceptors.request.use(
            config => {
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )
    }

    private intercaptorsResponse() {
        this.instance.interceptors.response.use(
            response => {
                return response
            },
            error => {
                return Promise.reject(error)
            }
        )
    }
}