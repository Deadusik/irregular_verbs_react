const pool = require('../../db')
const ApiError = require('../error/ApiError')
const verbQueries = require('../queries/verbQueries')

class VerbController {
    async create(req, res, next) {
        try {
            const { name, transcription, form, soundPath = '' } = req.body

            if(!name || !transcription || !form) 
                return next(ApiError.badRequest('Назва, транскрипція, форма глагола не можуть бути пустими!'))

            await pool.query(verbQueries.createVerb(name, transcription, form, soundPath))

            res.status(200).json({message: 'Глагол був створенний'})
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateTableItemReference(req, res, next) {
        const { id } = req.body

        try {
            if(!id) return next(ApiError.badRequest('Некоректі дані'))
            await pool.query(verbQueries.changeTableItemReference(id))

            res.json({message: 'Зовнішний ключ було змінено'})
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new VerbController()