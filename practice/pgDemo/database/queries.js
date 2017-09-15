const pg = require('./client')

const getAllStudents = (fName, callback) => {
  pg.query('SELECT * FROM students', (error, result) => {
    if(error) {
      callback(error)
    } else {
      callback(null, result.rows[0])
    }
  })
}

getAllStudents('Charles', function(error, name) {
  if(error) console.log(`Error Happened: ${error}`)
  console.log(`Data retrieved from database. ${JSON.stringify(name)}`)
})














