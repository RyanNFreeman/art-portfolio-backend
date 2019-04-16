const express = require('express')
const server = express()

server.get('/api', (req, res) => {
    res.status(200).send('this will be an endpoint')
})

module.exports = server