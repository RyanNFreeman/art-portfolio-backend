const server = require('./api/server')
require('dotenv').config();

const port = 4000 || process.env.PORT;

server.get('/', (req, res) => {
    res.status(200).send('hello')
})

server.listen(port, () => {
    console.log(`server listening on port: ${port}`)
})