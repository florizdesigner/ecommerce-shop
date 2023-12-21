const Router = require('express')
const router = new Router()
const paymentsRouter = require('./paymentsRouter')

router.use('/payments', paymentsRouter)

module.exports = router