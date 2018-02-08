const express = require('express')
const router = express.Router()

const db = require('../db')

// let word = ''
// let question = ''

function randomise (array) { return Math.floor(Math.random() * array.length) + 0 }

router.post('/', (req, res) => {
  db.findResponse(req.body.question)
    .then(allResponses => {
      const respArray = JSON.parse(allResponses[0].response)
      return console.log(respArray[randomise(respArray)])
    })
})

// router.get('/data', (req, res) => {
//
// })

module.exports = router
