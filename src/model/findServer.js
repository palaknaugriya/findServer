const request = require('request')
const pLimit = require('p-limit')

const fetchData = server => {
    return new Promise((resolve, reject) => {
        let options = {
            url: server,
            method: 'GET',
        }

        request.get(options, (err, res, body) => {
            if (err) {
                return reject({ code: 500, error: 'Something went wrong.' })
            }
            // setTimeout of 5 secs
            return setTimeout(() => resolve(server), 5000);
            // return resolve(server)
        })
    })
}

const findServer = serverPriority => {
    const limit = pLimit(serverPriority.length)

    // Create an array of our promises using map (fetchData() returns a promise)
    let promises = serverPriority.map(server => {
        // wrap the function we are calling in the limit function we defined above
        return limit(() => fetchData(server[0]).then(function() {
            return ({ 'serverName': server[0], 'isOnline': true, 'priority': server[1] })
        }).catch(function() {
            return ({ 'serverName': server[0], 'isOnline': false, 'priority': server[1] })
        }))
    });
    // The number of promises running simulataneously is equal to number of servers defined
    return result = Promise.all(promises)
}

module.exports = findServer