const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')

router.post('/', itemController.create)
router.get('/', itemController.get)
router.post('/', itemController.refund)

module.exports = router