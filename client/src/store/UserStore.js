import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._login = null
        this._email = null
        this._role = null
        this._isAuth = false

        makeAutoObservable(this)
    }

    get login() {
        return this._login
    }

    get email() {
        return this._email
    }

    get role() {
        return this._role
    }

    get isAuth() {
        return this._isAuth
    }

    setLogin(login) {
        this._login = login
    }

    setEmail(email) {
        this._email = email
    }

    setRole(role) {
        this._role = role
    }

    setIsAuth(isAuth) {
        this._isAuth = isAuth
    }
}