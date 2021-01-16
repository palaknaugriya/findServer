const index = require('./index')
const port = 5000

index.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}.`)
})