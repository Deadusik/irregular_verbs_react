const Router = require('express')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')
const tableVerbItemController = require('../controllers/tableVerbItemController')

router.post('/', checkRole('ADMIN'), tableVerbItemController.create)
router.get('/')
router.get('/:id')
router.delete('/')

module.exports = router