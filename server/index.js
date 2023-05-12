require('dotenv').config()
const express = require('express')
const router = require('./src/routes/index')
const errorHandler = require('./src/middleware/ErrorHandlingMiddleware')
const cors = require('cors')
const PORT = process.env.PORT || 4000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server was started on ${PORT}`)
})