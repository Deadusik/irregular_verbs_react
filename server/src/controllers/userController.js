const pool = require('../../db')
const ApiError = require('../error/ApiError')
const userQueries = require('../queries/userQueries')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateJWT = (login, email) => {
    console.log('secret key:', process.env.SECRET_KEY)

    return jwt.sign(
        { login, email },
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
                
            })

            const token = generateJWT(login, email)
            res.status(200).json({token})
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        try {
            const { login, password } = req.body
            
            // check is login exist
            const results = await pool.query(userQueries.getUserByColVal('login', login))

            if(results.rows == 0)
                return next(ApiError.badRequest('Юзера з таким логіном не існує'))

            const user = results.rows[0]    
            // check is password equal user password
            const comparedPassword = await bcrypt.compare(password, user.password)

            if(!comparedPassword) 
                return next(ApiError.badRequest('Паролі не співпадають'))
                
            const token = generateJWT(user.login, user.email)
            res.status(200).json({token})
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
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