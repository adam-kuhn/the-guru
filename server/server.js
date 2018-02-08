const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const responses = require('./routes/responses')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/responses', responses)

module.exports = server

