const express = require('express')
const findServer = require('../model/findServer')
const servers = require('../files/server.json')
const router = new express.Router()


// find server
router.get('/findServer', async(req, res) => {
    try {
        let serverPriority = []

        servers.sort((a, b) => b.priority - a.priority);

        servers.forEach((e) => {
            serverPriority.push([e.url, e.priority])
        });

        // find server
        serverRes = await findServer(serverPriority)
        res.status(200).send(serverRes)
    } catch (e) {
        res.status(e.code).send(e)
    }
})

module.exports = router