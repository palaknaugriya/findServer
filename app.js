const express = require('express')
const app = express()
const port = 5000
const findServer = require('./src/router/findServer')


app.use(findServer)


app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}.`)
})