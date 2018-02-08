exports.up = function (knex, Promise) {
  return knex.schema.createTable('responses', function (table) {
    table.increments('id').primary()
    table.string('word')
    table.string('response')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('responses')
}
