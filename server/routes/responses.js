const express = require('express')
const router = express.Router()

const db = require('../db')

function randomise (array) { return Math.floor(Math.random() * array.length) + 0 }

router.post('/', (req, res) => {
  db.findResponse(req.body.word)
    .then(allResponses => {
      const respArray = JSON.parse(allResponses[0].response)
      const resp = respArray[randomise(respArray)]
      res.status(200).send({resp})
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR : ' + err.message)
    })
})

module.exports = router
