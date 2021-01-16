const express = require('express')
const index = express()
const findServer = require('./src/router/findServer')


index.use(findServer)

module.exports = index