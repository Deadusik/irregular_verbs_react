const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const commentRouter = require('./commentRouter')
const parentCommentRouter = require('./parentCommentRouter')

const exerciseRouter = require('./exerciseRouter')
const verbRouter = require('./verbRouter')
const tableVerbItemRouter = require('./tableVerbItemRouter')

router.use('/user', userRouter)
router.use('/comment', commentRouter)
router.use('/parent_comment', parentCommentRouter)

router.use('/exercise', exerciseRouter)
router.use('/verb', verbRouter)
router.use('/table_verb_item', tableVerbItemRouter)

module.exports = router