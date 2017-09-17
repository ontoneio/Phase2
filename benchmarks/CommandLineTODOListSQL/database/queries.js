const pg = require('./client.js')

const paddedNum = num => num < 10 ? ` ${num}` : `${num}`

const list = (args, callback) => {
  pg.query(
    `
    SELECT id, description
    FROM tasks
    WHERE is_complete='false'
     `, (error, result) => {
      if (error)
        return callback(error)

      console.log(`\n| ID | Tasks`)
      result.rows.forEach(row => {
        console.log(`| ${paddedNum(row.id)} |  ${row.description}`)
      })
      console.log(`You Have ${result.rows.length} Tasks\n`)
      pg.end()
      callback(null)
    }
  )

}

module.exports = list