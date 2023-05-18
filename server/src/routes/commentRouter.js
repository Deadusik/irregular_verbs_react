const Router = require('express')
const checkRole = require('../middleware/checkRoleMiddleware')
const commentController = require('../controllers/commentController')
const router = new Router()

router.post('/', checkRole('USER'), commentController.create)
router.get('/')
router.get('/:id')
router.delete('/')

module.exports = router