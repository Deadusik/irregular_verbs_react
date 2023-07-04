import { $authHost, $host } from "."
import jwt_decode from 'jwt-decode'

export const registration = async (login, email, password) => {
    const response = await $host.post('api/user/registration', { login, email, password })
    return response
}

export const login = async (login, password) => {
    let response
    try {
        response = await $host.post('api/user/login', { login, password })
        localStorage.setItem('token', response.data.token)
        return response
    } catch (e) {
        return e.response
    }
}

export const check = async () => {
    const response = await $authHost.post('api/user/auth')
    console.log('response', response)
    const token = response.data.token
    localStorage.setItem('token', token)
    return jwt_decode(token)
}
