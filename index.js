const app = require('./app.js')
const port = 5000

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}.`)
})