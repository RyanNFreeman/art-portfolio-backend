const express = require('express')
const server = express()

const userRouter = require("../routes/users_router");
const postRouter = require("../routes/posts_router.js");

server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);

server.get('/api', (req, res) => {
    res.status(200).send('this will be an endpoint')
})

module.exports = server