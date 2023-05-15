const pool = require('../../db')
const ApiError = require('../error/ApiError')
const userQueries = require('../queries/userQueries')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateJWT = (id, login, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

        try {
            const { login, email, password } = req.body
            let queryResult
            // check is data empty
            if(!login || !email || !password) {
                return next(ApiError.badRequest('Некорректні значення'))
            }
            // password regex check
            if(!PASSWORD_REGEX.test(password.toString())) {
                return next(ApiError.badRequest('У паролі має бути мінімум 8 символів, як мінімум одна буква і одна цифра'))
            }
            // check is login or email exist
            queryResult = pool.query(userQueries.getUserByColVal('login', login), (error, results) => {
                if(results.rows.length > 0) return next(ApiError.badRequest('Користувач з таким логіном вже існує'))
            })
            
            pool.query(userQueries.getUserByColVal('email', email), (error, results) => {
                if(results.rows.length > 0) return next(ApiError.badRequest('Даний емайл вже зайнятий'))
            })
            // password to hesh
            const hashPassword = await bcrypt.hash(password, 5)
            // create user 
            pool.query(userQueries.createUser(login, email, hashPassword), (error, results) => {
                if(error) return next(ApiError.badRequest(error.message))
                console.log("new user:", results.rows)
            })



            //const token = generateJWT




        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        const { login, password } = req.body
        pool.query(userQueries.getUserByLogin(login), (error, results) => {
            if(error) return next(ApiError.badRequest(error.message))
            


            res.status(200).json(results.rows)
        })
    }

    async check(req, res, next) {
        pool.query(userQueries.testUser, (error, results) => {
            if(error) return next(ApiError.badRequest(error.message))
            res.status(200).json(results.rows)
        })
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id
            pool.query(userQueries.deleteUser(id), (error, results) => {
                if(error) return next(ApiError.badRequest(error.message))
                res.status(200)
            })
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new UserController()