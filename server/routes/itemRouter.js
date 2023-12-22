const Router = require('express')
const router = new Router()
const itemController = require('../controllers/routerController')

router.post('/', itemController.create)
router.get('/', itemController.get)
router.post('/', itemController.refund)

module.exports = router