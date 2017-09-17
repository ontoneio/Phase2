const { Client } = require('pg')

const connectionString = process.env.DATABASE_URL ||
  'postgresql://localhost:5432/todolist'

const pg = new Client({
  connectionString: connectionString
})

pg.connect()
module.exports = pg
