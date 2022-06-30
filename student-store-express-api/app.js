const { NotFoundError } = require("./utils/errors.js");
const cors = require("cors")
const express = require('express')
const app = express()
const Store = require('./routes/store.js')
const Orders = require('./routes/orders.js')



const logger = require('morgan')
app.use(cors())
app.use(logger('tiny'))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({"ping": "pong"})
})

app.use('/store', Store)
app.use('/orders', Orders)

app.use((req, rest, next) => {
    return next(new NotFoundError());
}) 


app.use((error, req, res, next) => {
    if (!error.status) {
        currStatus = 500
    } else {
        currStatus = error.status
    }

    if (!error.message) {
        currMessage = "Something went wrong in the application"
    } else {
        currMessage = error.message
    }

    return res.status(currStatus).json({
        error: {message: currMessage, status: currStatus}
    })

})

module.exports = app
