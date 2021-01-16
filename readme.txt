about:
This module determines the availability of a given list of servers and then returns the deatils regarding the
availability of servers.

prerequisites:
-> node
-> JSON file to placed strictly on this path ('<project root folder>/src/files/server.json')
-> JSON format:
   [{"url": "value", "priority": "value"}]

steps to run it locally:
-> git clone https://github.com/palaknaugriya/findServer.git
-> cd findServer  
-> npm install
-> nodemon start

unit testing:
npm test

curl request:
curl --location --request GET 'localhost:5000/findServer'

output:
Explanation: Since the http requests are done simulatenously as per the proiority, lowest 
first, the response has the lowest one in the end, since the response detail of each server
is pushed inside the array, lowest being pushed first if they are resolved.

JSON reponse which contains the following details:
[
    {
        "serverName": "http://kratikal.com",
        "isOnline": true,
        "priority": 7
    },
    {
        "serverName": "http://google.com",
        "isOnline": true,
        "priority": 4
    },
    {
        "serverName": "http://offline.kratikal.com",
        "isOnline": false,
        "priority": 2
    },
    {
        "serverName": "http://doesNotExist.kratikal.com",
        "isOnline": false,
        "priority": 1
    }
]