const pool = require('../../db')
const ApiError = require('../error/ApiError')
const tableVerbItemQueries = require('../queries/tableVerbItemQueries')

class TableVerbItemController {
    async create(req, res, next) {
        try {
            const {translate, colorRarity } = req.body

            await pool.query(tableVerbItemQueries.createTableVerbItem(translate, colorRarity))
            res.status(200).json({message: 'Строка була створена'})
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new TableVerbItemController()