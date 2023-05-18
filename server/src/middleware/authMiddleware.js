const ApiError = require("../error/ApiError")
const jwt = require('jsonwebtoken')
const verifyToken = require('../utils/verifyToken')
require('dotenv').config()

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS')
        next()
    try {
        const user = verifyToken(req, res, next)
        req.user = user
        next()
    } catch(e) {
        next(ApiError.badRequest('Користувач не авторизован'))
    }
}