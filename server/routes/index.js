const Router = require('express')
const router = new Router()

const paymentRouter = require('./paymentRouter')
const brandRouter = require('./brandRouter')
const itemRouter = require('./itemRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/payment', paymentRouter)
router.use('/brand', brandRouter)
router.use('/item', itemRouter)
router.use('/type', typeRouter)
router.use('/user', userRouter)

module.exports = router