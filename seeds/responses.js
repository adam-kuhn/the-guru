const responsesAll = require('../responses_all')

exports.seed = function(knex, Promise) {
  return knex('responses').del()
    .then(function () {
      return knex('responses').insert([
        {id: 1, word:'who', response: JSON.stringify(responsesAll.who)},
        {id: 2, word:'what', response: JSON.stringify(responsesAll.what)},
        {id: 3, word:'where', response: JSON.stringify(responsesAll.where)},
        {id: 4, word:'why', response: JSON.stringify(responsesAll.why)},
        {id: 5, word:'how', response: JSON.stringify(responsesAll.how)},
        {id: 6, word:'will', response: JSON.stringify(responsesAll.will)},
        {id: 7, word:'when', response: JSON.stringify(responsesAll.when)}
      ])
    })
}
