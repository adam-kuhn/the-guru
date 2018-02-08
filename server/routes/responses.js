const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', function (req, res) {
  db.findResponse()
    .then(allResponses => {
      const randomIndex = Math.floor(Math.random() * allResponses.length) + 1 
      return allResponses[randomIndex]
    })
})

module.exports = router
