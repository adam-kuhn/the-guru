const knex = require('knex')
const config = require('./knexfile').development
const devDb = knex(config)

module.exports = {
  findResponse
}

function findResponse (word, testDb) {
  const db = testDb || devDb
  return db('responses')
    .where('responses.word', word)
    .select('responses.response')
}
