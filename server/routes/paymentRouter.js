const Router = require('express')
const router = new Router()
const paymentController = require('../controllers/paymentController')

router.post('/', paymentController.create)
router.get('/', paymentController.get)
router.post('/', paymentController.refund)

module.exports = router