const ApiError = require("../error/ApiError")
const verifyToken = require('../utils/verifyToken')
require('dotenv').config()

module.exports = (role) => {
    return function(req, res, next) {
        if(req.method === 'OPTIONS')
            next()

        try {
            const user = verifyToken(req, res, next)
            console.log(user)
            if(user.role !== role) {
                return next(ApiError.badRequest('Немає доступа'))
            }

            req.user = user
            next()
        } catch(e) {
            next(ApiError.badRequest('Користувач не авторизован'))
        }
    }
}