class TypeController {
    async create (req, res, next) {
        
        res.json({status: "okay"})
    }

    async get (req, res, next) {
        res.json({status: "okay1"})
    }

    async refund (req, res, next) {
        res.json({status: "okay2"})
    }
}

module.exports = new TypeController()