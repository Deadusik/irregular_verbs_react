const Router = require('express')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')
const verbController = require('../controllers/verbController')

router.post('/', checkRole('ADMIN'), verbController.create)
router.get('/')
router.put('/change_table_item_reference', verbController.updateTableItemReference)
router.get('/:id')
router.delete('/')

module.exports = router