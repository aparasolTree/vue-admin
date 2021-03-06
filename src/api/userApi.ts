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
export function userLogin<T extends {}>(values?: T) {
    return http.request<UserLoginInterface>({
        url: '/login'
    })
}