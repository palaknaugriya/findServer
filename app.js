const express = require('express')
const app = express()
const findServer = require('./src/router/findServer')


app.use(findServer)

module.exports = app