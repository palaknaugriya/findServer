const { TestScheduler } = require('jest')
const validateServerObj = require('../src/validateServerObj')

test('JSON schema testing', () =>{
    expect(validateServerObj().eq)
})