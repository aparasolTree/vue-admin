interface ResponseResult<Data> {
    code: number
    message: string
    type: 'success' | 'error'
    result: Data
}