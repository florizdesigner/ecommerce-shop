class PaymentController {
    async create (req, res, next) {
        res.json({status: "okay"})
    }

    async get (req, res, next) {
        res.json({status: "okay1"})
    }

    async refund (req, res, next) {
        res.json({status: "okay2"})
    }

    async getWebhook (req, res, next) {
        res.json({status: "ok_webhook"})
        // запись в БД со статусом платежа
    }
}

module.exports = new PaymentController()