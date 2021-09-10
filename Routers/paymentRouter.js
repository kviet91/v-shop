const router = require('express').Router()
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const paymentCtrl = require('../controllers/paymentController')

router.route('/payment')
    .get(auth, authAdmin, paymentCtrl.getPayments)
    .post(auth, paymentCtrl.createPayment)

module.exports = router
