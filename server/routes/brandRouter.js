const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandRouter')

router.post('/', brandController.create)
router.get('/', brandController.get)
router.post('/', brandController.refund)

module.exports = router