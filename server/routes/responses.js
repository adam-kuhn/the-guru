const express = require('express')
const router = express.Router()
const request = require('superagent')

router.post('/', function (req, res) {
  // db.findAnswer
  // request
  //   .get('http://localhost:3000/api/v1/responses')
  //   .then(result => {
  //     res.json(result.body)
  //   })
  console.log('route')
  // res.json(body)
})

module.exports = router
