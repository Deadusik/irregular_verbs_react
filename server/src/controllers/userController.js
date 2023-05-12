const pool = require('../../db')
const ApiError = require('../error/ApiError')
const userQueries = require('../queries/userQueries')

class UserController {
    async registration(req, res, next) {
        try {
            const { email, login, password } = req.body
            pool.query(userQueries.createUser(login, email, password), (error, results) => {
                if(error) return next(ApiError.badRequest(error.message))
                res.status(200).json(results.rows)
            })
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res) {
        
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