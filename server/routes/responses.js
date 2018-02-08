const express = require('express')
const router = express.Router()
const request = require('superagent')

router.get('/', function (req, res) {
  request
    .get('http://localhost:3000/api/v1/responses')
    .then(result => {
      res.json(result.body)
    })
})

module.exports = router
