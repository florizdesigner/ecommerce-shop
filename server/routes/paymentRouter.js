const Router = require('express')
const router = new Router()
const paymentController = require('../controllers/paymentController')

router.post('/', paymentController.create)
router.get('/:id', paymentController.get)
router.post('/refund', paymentController.refund)
router.post('/webhook', paymentController.getWebhook)

module.exports = router