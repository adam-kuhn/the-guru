const express = require('express')
const router = express.Router()

const db = require('../db')

function randomise (array) { return Math.floor(Math.random() * array.length) + 0 }

router.post('/', (req, res) => {
  let question = req.body.question
  let words = question.split(' ')
  let word = words[0]

  db.findResponse(word)
    .then(allResponses => {
      const respArray = JSON.parse(allResponses[0].response)
      const resp = respArray[randomise(respArray)]
      res.status(200).send({resp})
    })
    .catch((err) => {
      // err = 'Computer says nooooo'
      res.status(500).send('DATABASE ERROR : ' + err.message)
    })
})

module.exports = router
