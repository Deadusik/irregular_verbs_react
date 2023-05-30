import { $authHost, $host } from "."

export const registration = async (login, email, password) => {
    const response = await $host.post('api/user/registration', { login, email, password })
    return response
}

export const login = async (login, password) => {
    let response
    try {
        response = await $host.post('api/user/login', { login, password })
        return response
    } catch (e) {
        return e.response
    }
}

export const check = async () => {
    const response = await $host.post('api/user/auth')
    return response
}
