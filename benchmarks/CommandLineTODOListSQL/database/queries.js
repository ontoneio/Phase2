const pg = require('./client.js')

const list = (callback) => {
  pg.query(
    'SELECT * FROM tasks', (error, result) => {
      result.rows.forEach(row => {
        console.log(`${row.id} ${row.description} ${row.is_complete}`)
      })
      callback(result.rows.length)
    }
  )

}

module.exports = list


// list(function() {
//   console.log(`Now printing list...`)
// })