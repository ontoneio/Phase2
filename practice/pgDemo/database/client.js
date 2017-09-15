const { Client } = require('pg')

const connectionString = process.env.DATABASE_URL ||
  'postgresql://localhost:5433/STUDENTSDB'

const client = new Client( {
  connectionString: connectionString
})

client.connect()

module.exports = client
