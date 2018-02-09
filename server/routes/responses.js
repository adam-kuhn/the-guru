const express = require('express')
const router = express.Router()

const db = require('../db')

// let word = ''
// let question = ''

function randomise (array) { return Math.floor(Math.random() * array.length) + 0 }

router.post('/', (req, res) => {
  let question = req.body.question
  let words = question.split(' ')
  let word = words[0]

  db.findResponse(word)
    .then(allResponses => {
      const respArray = JSON.parse(allResponses[0].response)
      return respArray[randomise(respArray)]
    })
    .catch((err) => {
      err = 'Computer says nooooo'
      return err
    })
})

// router.get('/data', (req, res) => {
//
// })

module.exports = router
