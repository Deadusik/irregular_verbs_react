const pool = require('../../db')
const ApiError = require('../error/ApiError')
const commentQueries = require('../queries/commentQueries')

class CommentController {
    async getAll(req, res) {
        
    }

    async create(req, res, next) {
        try {
            const { text, userId, parentCommentId } = req.body

            console.log('comment data:', text, userId, parentCommentId)

            pool.query(commentQueries.createComment(text, userId, parentCommentId), (error, results) => {
                if(error) return next(ApiError.badRequest(error.message))
            })

            res.status(200).json({message: 'Коментар був створенний'})
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new CommentController()