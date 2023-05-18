const pool = require('../../db')
const ApiError = require('../error/ApiError')
const userQueries = require('../queries/userQueries')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateJWT = (login, role) => {
    console.log('secret key:', process.env.SECRET_KEY)

    return jwt.sign(
        { login, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

        try {
            const { login, email, password } = req.body
            let results
            // check is data empty
            if(!login || !email || !password) {
                return next(ApiError.badRequest('Некорректні значення'))
            }

            // email regex check
            if(!EMAIL_REGEX.test(email.toString())) {
                return next(ApiError.badRequest('Потрібно написати емайл'))
            }

            // password regex check
            if(!PASSWORD_REGEX.test(password.toString())) {
                return next(ApiError.badRequest('У паролі має бути мінімум 8 символів, як мінімум одна буква і одна цифра'))
            }
            // check is login exist
            results = await pool.query(userQueries.getUserByColVal('login', login))

            if(results.rows.length > 0)
                return next(ApiError.badRequest('Користувач з таким логіном вже існує'))
            
            // check is email exist
            results = await pool.query(userQueries.getUserByColVal('email', email))

            if(results.rows.length > 0)
                return next(ApiError.badRequest('Даний емайл вже зайнятий'))

            // password to hesh
            const hashPassword = await bcrypt.hash(password, 5)
            // create user 
            pool.query(userQueries.createUser(login, email, hashPassword), (error, results) => {
                if(error) return next(ApiError.badRequest(error.message))
            })

            //get jwt token
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

            if(results.rows.length == 0)
                return next(ApiError.badRequest('Юзера з таким логіном не існує'))

            const user = results.rows[0]    
            // check is password equal user password
            const comparedPassword = await bcrypt.compare(password, user.password)

            if(!comparedPassword) 
                return next(ApiError.badRequest('Паролі не співпадають'))
            
            // get jwt token
            const token = generateJWT(user.login, user.role)
            res.status(200).json({token})
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async check(req, res, next) {
        const { login } = req.body

        const token = generateJWT(login, 'USER')
        res.status(200).json({token})
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