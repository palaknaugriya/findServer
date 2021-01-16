const request = require('supertest')
const index = require('../index')

beforeAll(done => {
    done()
})

afterAll(done => {
    done()
})

test('find server', async() => {
    const response = await request(index).get('/findServer')
    expect(response.status).toBe(200)
}, 10000)