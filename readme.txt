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

curl request:
curl --location --request GET 'localhost:5000/findServer'

output:
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