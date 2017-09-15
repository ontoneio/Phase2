const pg = require('./client')


const getUserByEmail = (email, callback) => {
  pg.query('SELECT * FROM users WHERE email=$1 LIMIT 1', [email], (error, result) => {
    if(error) {
      callback(error)
    } else {
      callback(null, result.rows[0])
    }
  })
}

module.exports = {
  getUserByEmail
}