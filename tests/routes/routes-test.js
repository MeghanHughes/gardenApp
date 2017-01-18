const express = require('express')
const test = require('ava')
const request = require('supertest-as-promised')

// instaniate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)
//const catsApi = require('../../api/cats')(db)

function makeApp () {
  const app = express()
  // set route namespace under test
 // app.use('/api/v1/cats', catsApi)
  return app
}

test.beforeEach(() => {
  return testKnex.migrate.latest()
    .then(() => {
      return testKnex.seed.run()
    })
})

test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})
