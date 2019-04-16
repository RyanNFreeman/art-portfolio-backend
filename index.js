const express = require('express')
const port = 4000


const server = express()

server.get('/', (req, res) => {
    res.status(200).send('hello')
})

server.listen(port, () => {
    console.log(`server listening on port: ${port}`)
})