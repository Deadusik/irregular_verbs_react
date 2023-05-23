const pool = require('../../db')
const ApiError = require('../error/ApiError')
const commentQueries = require('../queries/commentQueries')

class CommentController {
    async create(req, res, next) {
        try {
            const { text, userId, parentCommentId } = req.body

            if(!text || !userId || !parentCommentId) 
                return next(ApiError.badRequest('Некоректні данні'))

            await pool.query(commentQueries.createComment(text, userId, parentCommentId))

            res.status(200).json({message: 'Коментар був створенний'})
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    
}

module.exports = new CommentController()