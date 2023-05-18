const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]

    if(!token) 
        return next(ApiError.badRequest('Користувач не авторизован'))

    return jwt.verify(token, process.env.SECRET_KEY)
}