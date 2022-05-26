import { http } from "@/plugins/axios";

export interface UserInterface {
    name: string
}
export function userInfo() {
    return http.request<UserInterface>({
        url: '/user'
    })
}

export interface UserLoginInterface {
    token: string
}
export function userLogin() {
    return http.request<UserLoginInterface>({
        url: '/login'
    })
}