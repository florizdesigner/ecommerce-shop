const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/', userController.create)
router.get('/', userController.get)
router.post('/', userController.refund)

module.exports = router