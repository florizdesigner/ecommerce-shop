const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const router = require('./routes')
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js')

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorHandler)

const PORT = process.env.SERVER_PORT || 3000

app.listen(PORT, () => {
    console.log('its ok')
})